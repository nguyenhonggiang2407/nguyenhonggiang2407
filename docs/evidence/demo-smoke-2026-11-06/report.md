# Public demo smoke report — T02

Checked at **2026-11-06T14:44:14.020Z UTC**. Public TLS/HTTP, known health, desktop public navigation and mobile landing layout only. No authenticated workflow, booking, payment, persistence, deployed commit or licensing verification.

| Repository | URL | Status | HTTP attempts | Health | Browser desktop/mobile | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| RunwayStudio | [Public URL](https://runwaystudio-portfolio-demo.onrender.com) | VERIFIED | 200 | passed (scope below) | 1440: passed; 390: passed | [1440px](screenshots/RunwayStudio-1440.jpg) · [390px](screenshots/RunwayStudio-390.jpg) |
| YangRent | [Public URL](https://yangrent-portfolio-demo.onrender.com/) | VERIFIED | 200 | passed (scope below) | 1440: passed; 390: passed | [1440px](screenshots/YangRent-1440.jpg) · [390px](screenshots/YangRent-390.jpg) |
| CampusDesk | [Public URL](https://giang-campusdesk.onrender.com) | FAILED | 200 | passed (scope below) | 1440: passed; 390: HORIZONTAL_OVERFLOW | [1440px](screenshots/CampusDesk-1440.jpg) · [390px](screenshots/CampusDesk-390.jpg) |
| ApplyFlow | [Public URL](https://giang-applyflow.onrender.com) | VERIFIED | 200 | passed (scope below) | 1440: passed; 390: passed | [1440px](screenshots/ApplyFlow-1440.jpg) · [390px](screenshots/ApplyFlow-390.jpg) |
| PocketLedger | [Public URL](https://giang-pocketledger.onrender.com) | VERIFIED | 200 | passed (scope below) | 1440: passed; 390: passed | [1440px](screenshots/PocketLedger-1440.jpg) · [390px](screenshots/PocketLedger-390.jpg) |
| DTDD | [Public URL](https://giang-yangcareer.onrender.com/app/) | VERIFIED | 200 | passed (scope below) | 1440: passed; 390: passed | [1440px](screenshots/DTDD-1440.jpg) · [390px](screenshots/DTDD-390.jpg) |
| YangHomestay | [Public URL](https://yanghomestay.helioho.st/) | VERIFIED | 200 | not configured | 1440: passed; 390: passed | [1440px](screenshots/YangHomestay-1440.jpg) · [390px](screenshots/YangHomestay-390.jpg) |
| YangLingo | [Public URL](https://yangcute.helioho.st/) | VERIFIED | 200 | not configured | 1440: passed; 390: passed | [1440px](screenshots/YangLingo-1440.jpg) · [390px](screenshots/YangLingo-390.jpg) |
| YangLocal | [Public URL](https://nguyenhonggiangcute.helioho.st/) | VERIFIED | 200 | not configured | 1440: passed; 390: passed | [1440px](screenshots/YangLocal-1440.jpg) · [390px](screenshots/YangLocal-390.jpg) |
| FORME | [Public URL](https://nguyenhonggiang2407.github.io/FORME/) | VERIFIED | 200 | not configured | 1440: passed; 390: passed | [1440px](screenshots/FORME-1440.jpg) · [390px](screenshots/FORME-390.jpg) |
| YangAtlas | [Public URL](https://nguyenhonggiang2407.github.io/YangAtlas/) | VERIFIED | 200 | not configured | 1440: passed; 390: passed | [1440px](screenshots/YangAtlas-1440.jpg) · [390px](screenshots/YangAtlas-390.jpg) |

## RunwayStudio

UTC: 2026-11-06T14:43:53.967Z. Declared source: `2a4d31bd566d77e16f1edde3c043182ed3816997`; deployed commit remains UNVERIFIED. HTTP title: Runway Studio · Discover, Style, Save & Shop. Health scope: Spring readiness endpoint; not proof of checkout correctness.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Storefront catalog.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## YangRent

UTC: 2026-11-06T14:43:50.137Z. Declared source: `dea86a322f7d2ab27d35e1e4c7f502fdf5230fc7`; deployed commit remains UNVERIFIED. HTTP title: YangRent \| Thuê nhà, thuê phòng và căn hộ. Health scope: Process; demo mode also executes SELECT 1. No concurrency proof.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Room search, Photo credits.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## CampusDesk

UTC: 2026-11-06T14:43:49.460Z. Declared source: `289c9cd1083f1e380675d6834bc7b9be38ab9044`; deployed commit remains UNVERIFIED. HTTP title: CampusDesk · A better campus, together. Health scope: Process + SELECT 1.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Registration form (no submission).
- 390px: HORIZONTAL_OVERFLOW; overflow=true, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## ApplyFlow

UTC: 2026-11-06T14:43:52.300Z. Declared source: `e9c02b1575fa7f3574c93dce116628abd0319531`; deployed commit remains UNVERIFIED. HTTP title: ApplyFlow · Theo dõi hành trình thực tập. Health scope: Process + SELECT 1.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Registration form (no submission).
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## PocketLedger

UTC: 2026-11-06T14:43:52.809Z. Declared source: `d51f4ae06c75832c8edbb549b02b67d34ec8c7b1`; deployed commit remains UNVERIFIED. HTTP title: PocketLedger · A little clarity for your money. Health scope: Process + SELECT 1.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Registration form (no submission).
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## DTDD

UTC: 2026-11-06T14:43:54.331Z. Declared source: `fd23028a2088100a7695af2ab5f40b8d22dafb3b`; deployed commit remains UNVERIFIED. HTTP title: YangCareer · Cơ hội tiếp theo của bạn. Health scope: Process + SQLite SELECT 1; no paid AI request.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: About and source credits.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## YangHomestay

UTC: 2026-11-06T14:44:04.072Z. Declared source: `bf649b5dc0e9f8076148e7967994aa2172655015`; deployed commit remains UNVERIFIED. HTTP title: YangHomestay \| Homestay Hà Nội đúng gu của bạn. Health scope: no documented endpoint.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Public accommodation search.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## YangLingo

UTC: 2026-11-06T14:44:03.022Z. Declared source: `4e9777e892e9fc2b7bc564a51a2b4637f5c24f53`; deployed commit remains UNVERIFIED. HTTP title: YangLingo \| Một chút mỗi ngày, tiếng Anh tiến xa. Health scope: no documented endpoint.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Registration form (no submission).
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## YangLocal

UTC: 2026-11-06T14:44:09.860Z. Declared source: `5e38ff88bc12fd3b8e5d378a9293d178039cbf1d`; deployed commit remains UNVERIFIED. HTTP title: YangLocal &#8211; Đi đâu, ăn gì, học ở đâu — có YangLocal.. Health scope: no documented endpoint.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Public places directory.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## FORME

UTC: 2026-11-06T14:44:11.018Z. Declared source: `c7a456d4cbfa5b203f787a1adb196cca373b22b1`; deployed commit remains UNVERIFIED. HTTP title: FORME — Mặc đẹp từ những gì bạn có.. Health scope: no documented endpoint.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Wardrobe navigation.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

## YangAtlas

UTC: 2026-11-06T14:44:13.915Z. Declared source: `1631c1dca54ed7cd2319886ce1d119f435059c62`; deployed commit remains UNVERIFIED. HTTP title: YangAtlas — Mỗi chuyến đi, một câu chuyện. Health scope: no documented endpoint.

- 1440px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: Media and source information.
- 390px: passed; overflow=false, JavaScript errors=0, blocked mutation requests=0; navigation: not completed.

Machine evidence includes attempt timestamps, TLS validation, redirects and failure codes in [report.json](report.json). Failed/HTTP-only/browser-unavailable checks never become VERIFIED. No uptime-ping schedule exists.
