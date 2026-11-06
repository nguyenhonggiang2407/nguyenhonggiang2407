# T02 validation — 2026-11-06 UTC

Baseline: 11 declared demo URLs lacked current independent evidence. This change depends on T01 and preserves the existing profile.

| Executed command (Windows, Node 24.19.0, Playwright 1.64.1) | Result |
| --- | --- |
| `npm install --ignore-scripts --no-fund` | exit 0; lockfile created, 0 vulnerabilities |
| `npm test` | exit 0; 14 passed, 0 failed |
| `node --check scripts/check-demos.mjs` | exit 0 |
| `npm run smoke -- --output docs/evidence/demo-smoke-2026-11-06` | exit 1: 10 VERIFIED public smoke; CampusDesk FAILED mobile layout |
| `git diff --check` | exit 0 |

The final report contains all 11 URLs, UTC attempts, HTTP/content/TLS evidence, navigation, 22 real captures and failure codes. Every final homepage returned 200 with valid TLS. CampusDesk visibly overflows at 390px and remains FAILED. No live service changed. Authenticated flows, transaction correctness, persistence and deployed SHA are not verified by this check.

Development defects corrected before final evidence: Node detaches response.socket at end (TLS is now captured before body consumption with a regression test); cold starts need a real bounded allowance; SPA navigation must wait for destination content; ApplyFlow's mobile heading differs; YangAtlas uses a native dialog. Development reports affected by harness defects are superseded by the final dated evidence.

Regression coverage includes no 200-only VERIFIED result, wrong title/health, loading retries, persistent 503, redirect boundaries, stalled/oversized bodies, HTTPS/credential policy, mobile failures and TLS capture. Remote CI must be checked after publication.

Changed files: ignore rules, package/lockfile, smoke script/helper/config/tests, portfolio-checks workflow, demo registry, instructions, this validation record and dated reports/captures. No application UI changed. Risk: external availability can change after the timestamp. Rollback: revert T02; no database/infrastructure rollback needed.
