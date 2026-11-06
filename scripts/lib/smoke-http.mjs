import http from 'node:http';
import https from 'node:https';
import { setTimeout as delay } from 'node:timers/promises';

export function publicUrl(value, { allowLoopback = false } = {}) {
  const url = new URL(value);
  if (url.username || url.password || url.search) throw new Error('Credential/query URLs are not allowed');
  if (url.protocol !== 'https:' && !(allowLoopback && url.protocol === 'http:' && ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname))) throw new Error('HTTPS is required');
  return url;
}
export const plainTitle = (html) => (html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 180);
export function jsonMatches(body, expectation) {
  try {
    let value = JSON.parse(body);
    for (const key of expectation.path.split('.')) value = value?.[key];
    return value === expectation.equals;
  } catch { return false; }
}

// Absolute per-request deadline covers DNS/TLS as well as a slow response body.
export function requestOnce(url, { timeoutMs = 35000, maxBytes = 1048576 } = {}) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const transport = url.protocol === 'https:' ? https : http;
    let timer;
    const request = transport.get(url, { headers: { 'User-Agent': 'portfolio-review-smoke/1.0', Accept: 'text/html,application/json' }, minVersion: 'TLSv1.2' }, (response) => {
      // Node can detach response.socket at 'end'; capture validated TLS first.
      const socket = response.socket;
      const cert = socket?.getPeerCertificate?.();
      const tls = url.protocol === 'https:' ? { authorized: socket?.authorized === true, protocol: socket?.getProtocol?.(), valid_to: cert?.valid_to } : null;
      const chunks = [];
      let bytes = 0;
      response.on('data', (chunk) => {
        bytes += chunk.length;
        if (bytes > maxBytes) request.destroy(new Error('RESPONSE_TOO_LARGE'));
        else chunks.push(chunk);
      });
      response.on('error', reject);
      response.on('end', () => {
        clearTimeout(timer);
        resolve({ status: response.statusCode, location: response.headers.location, content_type: response.headers['content-type'] || '', body: Buffer.concat(chunks).toString('utf8'), duration_ms: Date.now() - started,
          tls });
      });
    });
    request.on('error', (error) => { clearTimeout(timer); reject(error); });
    timer = setTimeout(() => request.destroy(new Error('REQUEST_TIMEOUT')), timeoutMs);
  });
}

export async function checkHttp(value, { attempts = 4, retryDelayMs = 20000, timeoutMs = 35000, deadlineMs = 120000, title, json, allowLoopback = false } = {}) {
  const initial = publicUrl(value, { allowLoopback });
  const evidence = { url: initial.href, checked_at: new Date().toISOString(), attempts: [], ok: false };
  const deadline = Date.now() + deadlineMs;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    let url = initial;
    const redirects = [];
    try {
      let response;
      for (let count = 0; ; count++) {
        const remaining = deadline - Date.now();
        if (remaining <= 0) throw new Error('DEADLINE_EXCEEDED');
        response = await requestOnce(url, { timeoutMs: Math.min(timeoutMs, remaining) });
        if (![301, 302, 303, 307, 308].includes(response.status)) break;
        if (count >= 4) throw new Error('REDIRECT_LIMIT');
        const next = publicUrl(new URL(response.location, url).href, { allowLoopback });
        if (next.origin !== initial.origin) throw new Error('CROSS_ORIGIN_REDIRECT');
        redirects.push({ status: response.status, to: next.href });
        url = next;
      }
      const foundTitle = plainTitle(response.body);
      const warming = /render.*(loading|starting|waking)|service.*starting/i.test(foundTitle) || /Your service is waking up/i.test(response.body);
      const html = /^text\/html\b/i.test(response.content_type);
      const ok = response.status >= 200 && response.status < 300 && (!response.tls || response.tls.authorized) && !warming && (!title || (html && foundTitle.toLowerCase().includes(title.toLowerCase()))) && (!json || jsonMatches(response.body, json));
      evidence.attempts.push({ number: attempt, checked_at: new Date().toISOString(), status: response.status, final_url: url.href, redirects, title: foundTitle, content_type: response.content_type, duration_ms: response.duration_ms, tls: response.tls, ok, failure: ok ? null : warming ? 'COLD_START_PLACEHOLDER' : 'STATUS_OR_CONTENT_MISMATCH' });
      if (ok) { evidence.ok = true; break; }
      // Retry only transient responses, cold starts, or an expected app not yet ready.
      if (![200, 202, 408, 425, 429, 500, 502, 503, 504].includes(response.status)) break;
    } catch (error) {
      // Only codes are recorded: exception messages can contain request URLs/secrets.
      const code = /^[A-Z0-9_]+$/.test(error.code || error.message) ? (error.code || error.message) : 'NETWORK_OR_TLS_ERROR';
      evidence.attempts.push({ number: attempt, checked_at: new Date().toISOString(), ok: false, failure: code });
      if (['CROSS_ORIGIN_REDIRECT', 'REDIRECT_LIMIT', 'RESPONSE_TOO_LARGE', 'DEADLINE_EXCEEDED'].includes(code)) break;
    }
    if (Date.now() >= deadline) break;
    if (attempt < attempts) await delay(Math.min(retryDelayMs, deadline - Date.now()));
  }
  return evidence;
}

export function classify(httpResult, healthResult, browserResult) {
  if (!httpResult.ok || (healthResult && !healthResult.ok) || browserResult?.status === 'FAILED') return 'FAILED';
  return browserResult?.status === 'VERIFIED' ? 'VERIFIED' : 'UNVERIFIED';
}
