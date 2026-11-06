import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { checkHttp, classify, publicUrl } from './lib/smoke-http.mjs';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const configPath = path.resolve(option('--config', 'scripts/demo-sites.json'));
const out = path.resolve(option('--output', 'smoke-results'));
const only = option('--only', null);
const httpOnly = args.includes('--http-only');
const config = JSON.parse(await readFile(configPath, 'utf8'));
const sites = config.sites.filter((s) => !only || s.repository === only);
if (!sites.length) throw new Error('No configured sites match --only');
for (const s of sites) {
  if (!/^[A-Za-z0-9_-]+$/.test(s.repository)) throw new Error('Invalid repository slug');
  const url = publicUrl(s.url);
  if (!s.title || !s.navigation?.length) throw new Error('Each site needs title and public navigation checks');
  if (s.health) publicUrl(new URL(s.health.path, url).href);
  for (const step of s.navigation) if (step.path && new URL(step.path, url).origin !== url.origin) throw new Error('Navigation must stay on configured origin');
}
await mkdir(path.join(out, 'screenshots'), { recursive: true });
const results = [];
let writeQueue = Promise.resolve();
let browser;
let browserUnavailable = false;
if (!httpOnly) {
  try { const { chromium } = await import('playwright'); browser = await chromium.launch({ headless: true }); }
  catch { browserUnavailable = true; }
}
const esc = (s) => String(s ?? '').replaceAll('|', '\\|').replace(/[\r\n]/g, ' ');

async function inspectBrowser(site) {
  if (!browser) return { status: 'UNVERIFIED', reason: httpOnly ? 'HTTP_ONLY_REQUESTED' : 'BROWSER_UNAVAILABLE', viewports: [] };
  const evidence = { status: 'VERIFIED', viewports: [] };
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport, locale: 'vi-VN', timezoneId: 'Asia/Ho_Chi_Minh', serviceWorkers: 'block' });
    const page = await context.newPage();
    page.setDefaultTimeout(12000);
    const item = { viewport, checked_at: new Date().toISOString(), stage: 'landing', ok: false, page_errors: 0, blocked_mutations: 0, navigation: [] };
    // The public checker never submits data, purchases, registers users or uploads.
    await context.route('**/*', (route) => {
      if (!['GET', 'HEAD', 'OPTIONS'].includes(route.request().method())) { item.blocked_mutations++; return route.abort(); }
      return route.continue();
    });
    page.on('pageerror', () => item.page_errors++);
    try {
      const response = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      if (!response?.ok()) throw new Error('BROWSER_HTTP_STATUS');
      await page.locator(site.ready || 'h1').first().waitFor({ state: 'visible' });
      await page.waitForLoadState('load', { timeout: 10000 }).catch(() => {});
      await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 1500))]));
      item.title = await page.title();
      if (!item.title.toLowerCase().includes(site.title.toLowerCase())) throw new Error('BROWSER_TITLE_MISMATCH');
      if ((await page.locator('body').innerText()).trim().length < 100) throw new Error('EMPTY_APP_SHELL');
      item.horizontal_overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2);
      const screenshot = `screenshots/${site.repository}-${viewport.width}.jpg`;
      await page.screenshot({ path: path.join(out, screenshot), type: 'jpeg', quality: 76, fullPage: false });
      item.screenshot = screenshot;
      if (viewport.width === 1440) {
        for (const step of site.navigation) {
          item.stage = step.name;
          if (step.click) await page.locator(step.click).first().click();
          else {
            const nav = await page.goto(new URL(step.path, site.url).href, { waitUntil: 'domcontentloaded', timeout: 30000 });
            if (!nav?.ok()) throw new Error('NAVIGATION_HTTP_STATUS');
          }
          let target = page.locator(step.expect);
          if (step.text) target = target.filter({ hasText: step.text });
          target = target.first();
          await target.waitFor({ state: 'visible' });
          if (step.hash && new URL(page.url()).hash !== step.hash) throw new Error('NAVIGATION_HASH_MISMATCH');
          if (new URL(page.url()).origin !== new URL(site.url).origin) throw new Error('NAVIGATION_LEFT_SITE');
          item.navigation.push({ name: step.name, ok: true });
        }
      }
      item.ok = !item.horizontal_overflow && item.page_errors === 0;
      if (!item.ok) item.failure = item.horizontal_overflow ? 'HORIZONTAL_OVERFLOW' : 'JAVASCRIPT_ERROR';
    } catch (error) {
      item.failure = /^[A-Z_]+$/.test(error.message) ? error.message : 'BROWSER_CHECK_FAILED';
      item.error_type = error.name;
      if (!item.screenshot) {
        try { item.screenshot = `screenshots/${site.repository}-${viewport.width}-failure.jpg`; await page.screenshot({ path: path.join(out, item.screenshot), type: 'jpeg', quality: 76 }); } catch {}
      }
    } finally { await context.close(); }
    if (!item.ok) evidence.status = 'FAILED';
    evidence.viewports.push(item);
  }
  return evidence;
}

async function writeResults() {
  let base = null;
  try { base = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); } catch {}
  const checksum = createHash('sha256').update(await readFile(new URL('./check-demos.mjs', import.meta.url))).update(await readFile(new URL('./lib/smoke-http.mjs', import.meta.url))).digest('hex');
  const report = { checked_at: new Date().toISOString(), completed_sites: results.length, configured_sites: sites.length, checker_base_commit: base, checker_source_sha256: checksum, browser_unavailable: browserUnavailable,
    scope: 'Public TLS/HTTP, known health, desktop public navigation and mobile landing layout only. No authenticated workflow, booking, payment, persistence, deployed commit or licensing verification.', results };
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  let md = '# Public demo smoke report — T02\n\nChecked at **' + report.checked_at + ' UTC**. ' + report.scope + '\n\n';
  md += '| Repository | URL | Status | HTTP attempts | Health | Browser desktop/mobile | Evidence |\n| --- | --- | --- | --- | --- | --- | --- |\n';
  for (const row of results) {
    const shots = row.browser.viewports.filter((v) => v.screenshot).map((v) => `[${v.viewport.width}px](${v.screenshot})`).join(' · ');
    md += `| ${row.repository} | [Public URL](${row.url}) | ${row.status} | ${row.http.attempts.map((a) => a.status || a.failure).join(', ')} | ${row.health ? row.health.ok ? 'passed (scope below)' : 'FAILED' : 'not configured'} | ${row.browser.viewports.map((v) => `${v.viewport.width}: ${v.ok ? 'passed' : v.failure}`).join('; ') || row.browser.reason} | ${shots || 'none'} |\n`;
  }
  for (const row of results) {
    md += `\n## ${row.repository}\n\nUTC: ${row.checked_at}. Declared source: \`${row.declared_source_commit}\`; deployed commit remains UNVERIFIED. HTTP title: ${esc(row.http.attempts.at(-1)?.title)}. Health scope: ${esc(row.health_scope || 'no documented endpoint')}.\n\n`;
    for (const v of row.browser.viewports) md += `- ${v.viewport.width}px: ${v.ok ? 'passed' : v.failure}; overflow=${v.horizontal_overflow ?? 'unknown'}, JavaScript errors=${v.page_errors}, blocked mutation requests=${v.blocked_mutations}; navigation: ${v.navigation.map((n) => n.name).join(', ') || 'not completed'}.\n`;
  }
  md += '\nMachine evidence includes attempt timestamps, TLS validation, redirects and failure codes in [report.json](report.json). Failed/HTTP-only/browser-unavailable checks never become VERIFIED. No uptime-ping schedule exists.\n';
  await writeFile(path.join(out, 'report.md'), md);
}

try {
  const queue = [...sites];
  await Promise.all(Array.from({ length: Math.min(3, sites.length) }, async () => {
    while (queue.length) {
      const site = queue.shift();
      const http = await checkHttp(site.url, { title: site.title });
      const health = site.health ? await checkHttp(new URL(site.health.path, site.url).href, { json: site.health.json, attempts: 2, timeoutMs: 20000 }) : null;
      const browserResult = await inspectBrowser(site);
      const row = { repository: site.repository, url: site.url, declared_source_commit: site.source_commit, checked_at: new Date().toISOString(), status: classify(http, health, browserResult), http, health, health_scope: site.health?.scope, browser: browserResult };
      results.push(row);
      results.sort((a, b) => sites.findIndex((s) => s.repository === a.repository) - sites.findIndex((s) => s.repository === b.repository));
      // Synchronous result updates avoid clobbering reports from parallel workers.
      console.log(`${site.repository}: ${row.status}; HTTP=${http.ok}; browser=${browserResult.status}`);
      writeQueue = writeQueue.then(writeResults);
      await writeQueue;
    }
  }));
  await writeResults();
} finally { await browser?.close(); }
if (results.some((r) => r.status === 'FAILED')) process.exitCode = 1;
else if (results.some((r) => r.status === 'UNVERIFIED')) process.exitCode = 2;
