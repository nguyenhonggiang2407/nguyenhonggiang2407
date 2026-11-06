# Repeatable public demo checks

Use Node 24 or newer. From this profile repository:

```sh
npm ci --ignore-scripts
npx playwright install chromium
npm test
npm run smoke
```

Default output is ignored `smoke-results/report.json`, `report.md` and `screenshots/`. To preserve a dated record or check one site:

```sh
npm run smoke -- --output docs/evidence/demo-smoke-YYYY-MM-DD
npm run smoke -- --only RunwayStudio --output smoke-results/runway
npm run smoke:http
```

`scripts/demo-sites.json` contains the 11 URLs, expected titles, exact public navigation selectors/routes, known health response fields and inspected source SHAs. A source SHA does not establish the deployed revision. Update configuration after inspecting actual source; do not loosen checks just to get a pass. Credentials/query-bearing URLs and cross-origin HTTP redirects are rejected. No `.env`, auth state, request body, credentials or raw error messages are saved. Use only trusted public demo URLs; this is not a hostile-site security scanner.

HTTP verifies certificates (minimum TLS 1.2), uses a 35-second absolute request timeout, up to 4 attempts with 20-second spacing, and a 120-second total endpoint deadline. Responses are capped at 1 MiB, redirects at 4. 503/Render loading is never success. Health has at most 2 attempts. At most 3 sites run concurrently. No periodic ping bypasses idle policies.

Chromium opens fresh contexts at 1440×1000 and 390×844, waits for app content and a bounded load event, checks title, desktop navigation, JavaScript errors and horizontal overflow, and saves real captures. Requests other than GET/HEAD/OPTIONS are blocked. No forms, registration, booking, checkout, uploads or admin mutations are submitted. Normal read-only bootstrap requests may create an anonymous app session.

Exit codes: **0** all selected public smoke checks VERIFIED; **1** a required check FAILED; **2** HTTP-only/browser unavailable, leaving functionality UNVERIFIED. HTTP 200 alone is never VERIFIED. Authenticated, concurrency and persistence checks belong in isolated local tests.

The Portfolio verification tools workflow runs offline tests and dependency audit for PRs. One-off live checks require explicit workflow dispatch with `check_live_demos=true` and upload artifacts. No schedule or deployment is configured.
