import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { checkHttp, classify, publicUrl, jsonMatches, requestOnce } from './lib/smoke-http.mjs';

async function fixture(t, handler) {
  const server = createServer(handler);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve) => { server.closeAllConnections(); server.close(resolve); }));
  return `http://127.0.0.1:${server.address().port}/`;
}
const options = { allowLoopback: true, attempts: 2, retryDelayMs: 1, timeoutMs: 200, deadlineMs: 1000, title: 'Demo' };
const html = (res, title) => { res.setHeader('Content-Type', 'text/html'); res.end(`<title>${title}</title><h1>App</h1>`); };

test('200 HTML cannot establish verified functionality without browser evidence', async (t) => {
  const base = await fixture(t, (_, res) => html(res, 'Demo'));
  const http = await checkHttp(base, options);
  assert.equal(http.ok, true);
  assert.equal(classify(http, null, { status: 'UNVERIFIED' }), 'UNVERIFIED');
  assert.equal(classify(http, null, { status: 'VERIFIED' }), 'VERIFIED');
});
test('wrong title and JSON health values fail even on HTTP 200', async (t) => {
  const base = await fixture(t, (_, res) => html(res, 'Unrelated parking page'));
  assert.equal((await checkHttp(base, options)).ok, false);
  assert.equal(jsonMatches('{"data":{"status":"bad"}}', { path: 'data.status', equals: 'ok' }), false);
  assert.equal(classify({ ok: true }, { ok: false }, { status: 'VERIFIED' }), 'FAILED');
});
test('Render loading placeholder retries within bounds instead of passing', async (t) => {
  let calls = 0;
  const base = await fixture(t, (_, res) => html(res, ++calls === 1 ? 'Render service starting' : 'Demo'));
  const r = await checkHttp(base, options);
  assert.equal(r.ok, true);
  assert.equal(r.attempts.length, 2);
  assert.equal(r.attempts[0].failure, 'COLD_START_PLACEHOLDER');
});
test('persistent 503 fails after configured retry count', async (t) => {
  let calls = 0;
  const base = await fixture(t, (_, res) => { calls++; res.writeHead(503); res.end('unavailable'); });
  assert.equal((await checkHttp(base, options)).ok, false);
  assert.equal(calls, 2);
});
test('same-origin redirects are recorded and cross-origin redirect is never followed', async (t) => {
  let hits = 0;
  const target = await fixture(t, (_, res) => { hits++; html(res, 'Demo'); });
  const base = await fixture(t, (req, res) => {
    if (req.url === '/') { res.writeHead(302, { Location: '/landing' }); res.end(); }
    else if (req.url === '/landing') html(res, 'Demo');
    else { res.writeHead(302, { Location: target }); res.end(); }
  });
  const r = await checkHttp(base, options);
  assert.equal(r.ok, true);
  assert.equal(r.attempts[0].redirects.length, 1);
  const denied = await checkHttp(base + 'outside', options);
  assert.equal(denied.ok, false);
  assert.equal(denied.attempts[0].failure, 'CROSS_ORIGIN_REDIRECT');
  assert.equal(hits, 0);
});
test('absolute timeout terminates stalled response bodies', async (t) => {
  const base = await fixture(t, (_, res) => { res.writeHead(200); res.write('waiting'); });
  const r = await checkHttp(base, { ...options, attempts: 1, timeoutMs: 30 });
  assert.equal(r.ok, false);
  assert.equal(r.attempts[0].failure, 'REQUEST_TIMEOUT');
});
test('oversized HTML is rejected without storing a body in evidence', async (t) => {
  const base = await fixture(t, (_, res) => { res.setHeader('Content-Type', 'text/html'); res.end('x'.repeat(1048577)); });
  const r = await checkHttp(base, options);
  assert.equal(r.ok, false);
  assert.equal(r.attempts[0].failure, 'RESPONSE_TOO_LARGE');
  assert.ok(!JSON.stringify(r).includes('xxxx'));
});
test('HTTPS and credential/query restrictions apply before network requests', () => {
  for (const value of ['http://public.test/', 'https://user:password@public.test/', 'https://public.test/?token=private']) assert.throws(() => publicUrl(value));
  assert.equal(publicUrl('https://public.test/').protocol, 'https:');
});
test('failed desktop/mobile result cannot become VERIFIED', () => {
  assert.equal(classify({ ok: true }, { ok: true }, { status: 'FAILED' }), 'FAILED');
});
test('validated TLS is retained when Node detaches response.socket before end', async (t) => {
  t.mock.method(https, 'get', (_url, _options, callback) => {
    const req = new EventEmitter();
    req.destroy = (err) => req.emit('error', err);
    setImmediate(() => {
      const res = new EventEmitter();
      Object.assign(res, { statusCode: 200, headers: { 'content-type': 'text/html' }, socket: {
        authorized: true, getProtocol: () => 'TLSv1.3', getPeerCertificate: () => ({ valid_to: 'fixture-validity' }),
      } });
      callback(res);
      res.emit('data', Buffer.from('<title>Demo</title>'));
      res.socket = null;
      res.emit('end');
    });
    return req;
  });
  const result = await requestOnce(new URL('https://fixture.example.test/'));
  assert.deepEqual(result.tls, { authorized: true, protocol: 'TLSv1.3', valid_to: 'fixture-validity' });
});
