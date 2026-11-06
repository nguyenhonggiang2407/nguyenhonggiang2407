# Demo registry — T01 + T02

Checked at **2026-11-06T14:44:14.020Z UTC**. **21 repositories; 11 declared application URLs checked; 10 VERIFIED public smoke / 1 FAILED mobile layout**. All 11 homepages returned HTTP 200 over validated TLS in the final run. [Full report and 22 captures](evidence/demo-smoke-2026-11-06/report.md) · [Machine evidence](evidence/demo-smoke-2026-11-06/report.json) · [Re-run instructions](SMOKE_CHECKS.md).

`VERIFIED` means **public smoke only**: TLS/HTTP, expected title, configured health, desktop public navigation and 390px landing layout. It does not verify authenticated flows, transaction safety, persistence, licensing or deployed source revision. `FAILED` records a required check failure; `UNVERIFIED` lacks evidence; `LOCAL_ONLY` has no declared public URL (not a successful local-run claim); `NOT_APPLICABLE` covers profile/desktop distribution.

| Repository | Demo URL | Status | UTC check | HTTP + browser evidence |
| --- | --- | --- | --- | --- |
| RunwayStudio | [Open](https://runwaystudio-portfolio-demo.onrender.com) | VERIFIED | 2026-11-06T14:43:53.967Z | HTTP 200; health passed; Storefront catalog; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#runwaystudio) |
| YangSlots | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| YangRent | [Open](https://yangrent-portfolio-demo.onrender.com/) | VERIFIED | 2026-11-06T14:43:50.137Z | HTTP 200; health passed; Room search, Photo credits; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#yangrent) |
| CampusDesk | [Open](https://giang-campusdesk.onrender.com) | FAILED | 2026-11-06T14:43:49.460Z | HTTP 200; health passed; 390px HORIZONTAL_OVERFLOW; desktop registration navigation passed; [captures](evidence/demo-smoke-2026-11-06/report.md#campusdesk) |
| ApplyFlow | [Open](https://giang-applyflow.onrender.com) | VERIFIED | 2026-11-06T14:43:52.300Z | HTTP 200; health passed; Registration form (no submission); 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#applyflow) |
| PocketLedger | [Open](https://giang-pocketledger.onrender.com) | VERIFIED | 2026-11-06T14:43:52.809Z | HTTP 200; health passed; Registration form (no submission); 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#pocketledger) |
| YangHooks | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| YangQueue | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| YangData | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| YangDocs | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| YangLab | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| DTDD | [Open](https://giang-yangcareer.onrender.com/app/) | VERIFIED | 2026-11-06T14:43:54.331Z | HTTP 200; health passed; About and source credits; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#dtdd) |
| YangHomestay | [Open](https://yanghomestay.helioho.st/) | VERIFIED | 2026-11-06T14:44:04.072Z | HTTP 200; no documented health endpoint; Public accommodation search; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#yanghomestay) |
| YangLingo | [Open](https://yangcute.helioho.st/) | VERIFIED | 2026-11-06T14:44:03.022Z | HTTP 200; no documented health endpoint; Registration form (no submission); 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#yanglingo) |
| YangLocal | [Open](https://nguyenhonggiangcute.helioho.st/) | VERIFIED | 2026-11-06T14:44:09.860Z | HTTP 200; no documented health endpoint; Public places directory; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#yanglocal) |
| FORME | [Open](https://nguyenhonggiang2407.github.io/FORME/) | VERIFIED | 2026-11-06T14:44:11.018Z | HTTP 200; no documented health endpoint; Wardrobe navigation; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#forme) |
| YangAtlas | [Open](https://nguyenhonggiang2407.github.io/YangAtlas/) | VERIFIED | 2026-11-06T14:44:13.915Z | HTTP 200; no documented health endpoint; Media and source information; 1440/390px passed; [captures](evidence/demo-smoke-2026-11-06/report.md#yangatlas) |
| St4 | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| Yang | — | NOT_APPLICABLE | 2026-11-06T14:19:24.978Z | Desktop Swing/TCP; no web backend |
| Doanwebbangiayphp | — | LOCAL_ONLY | 2026-11-06T14:19:24.978Z | No public URL in README; local/runtime verification tracked separately |
| nguyenhonggiang2407 | — | NOT_APPLICABLE | 2026-11-06T14:19:24.978Z | Profile README; duplicate application links are not extra deployments |

CampusDesk remains FAILED until a separately reviewed layout fix is deployed and the public URL is rechecked. A local fix or green CI must not silently change this live status. Render returned 503/loading pages during initial cold starts; the checker allows bounded retries and then reports failure. No keep-alive schedule is configured. PHP/WordPress applications have no documented health endpoint configured here; their verified scope is landing/navigation only.
