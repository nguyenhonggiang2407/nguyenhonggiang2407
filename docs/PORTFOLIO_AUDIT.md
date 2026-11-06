# Portfolio source audit — T01

Checked at **2026-11-06T14:19:24.978Z (UTC)**. Authenticated GitHub listing matched **21 repositories (20 applications + 1 profile)**; each was freshly cloned and inspected at the SHA below. No repository was already open in the initial workspace. No application or live infrastructure is changed by T01.

This inventory records observed files and historical GitHub Actions results. `VERIFIED` applies only to the scope named: source inventory is verified; local build, security, database and UX are **UNVERIFIED until executed**. A successful historical workflow is not a fresh run or proof of deployment. See [demo registry](DEMO_REGISTRY.md) for HTTP/browser evidence.

| Repository / source SHA | Build and test commands | Existing CI evidence | Tests / screenshots found | Credits | Source inventory / local execution |
| --- | --- | --- | --- | --- | --- |
| [RunwayStudio](https://github.com/nguyenhonggiang2407/RunwayStudio/tree/2a4d31bd566d77e16f1edde3c043182ed3816997) @ `2a4d31bd` | ./mvnw clean verify; npm ci; npm run check; npm run test:e2e; ./mvnw -Pmysql-verify verify (two disposable MySQL schemas) | [success](https://github.com/nguyenhonggiang2407/RunwayStudio/actions/runs/42038940707) @ 2a4d31bd (same SHA); 1 workflow(s) | 10 test files / 16 capture candidates | `THIRD_PARTY_NOTICES.md`, `docs/ATTRIBUTION.md`, `docs/MEDIA_LICENSES.md` | VERIFIED source / UNVERIFIED runtime |
| [YangSlots](https://github.com/nguyenhonggiang2407/YangSlots/tree/f8a1cb3350d3979bf9f297edcc8849c231df3709) @ `f8a1cb33` | ./mvnw verify; npm ci; npm run format:check; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/YangSlots/actions/runs/42038949298) @ 900ae219 (different SHA); 1 workflow(s) | 4 test files / 3 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangRent](https://github.com/nguyenhonggiang2407/YangRent/tree/dea86a322f7d2ab27d35e1e4c7f502fdf5230fc7) @ `dea86a32` | frontend: npm ci; npm test; npm run build; npm run test:browser. backend: python -m pip install -r requirements-dev.txt; python -B -m unittest discover -s tests -v | [success](https://github.com/nguyenhonggiang2407/YangRent/actions/runs/42038745336) @ dea86a32 (same SHA); 1 workflow(s) | 7 test files / 2 capture candidates | `docs/photo-sources.md`, `docs/source-notice.md` | VERIFIED source / UNVERIFIED runtime |
| [CampusDesk](https://github.com/nguyenhonggiang2407/CampusDesk/tree/289c9cd1083f1e380675d6834bc7b9be38ab9044) @ `289c9cd1` | npm ci; npm run check; npm run format:check; npm run test:browser | [success](https://github.com/nguyenhonggiang2407/CampusDesk/actions/runs/42038755424) @ 289c9cd1 (same SHA); 1 workflow(s) | 8 test files / 6 capture candidates | `LICENSE` | VERIFIED source / UNVERIFIED runtime |
| [ApplyFlow](https://github.com/nguyenhonggiang2407/ApplyFlow/tree/e9c02b1575fa7f3574c93dce116628abd0319531) @ `e9c02b15` | npm ci; npm run check; npm run format:check; npm run test:browser | [success](https://github.com/nguyenhonggiang2407/ApplyFlow/actions/runs/41666698230) @ e9c02b15 (same SHA); 1 workflow(s) | 5 test files / 4 capture candidates | `LICENSE` | VERIFIED source / UNVERIFIED runtime |
| [PocketLedger](https://github.com/nguyenhonggiang2407/PocketLedger/tree/d51f4ae06c75832c8edbb549b02b67d34ec8c7b1) @ `d51f4ae0` | npm ci; npm test; npm run build; npm run test:browser | [success](https://github.com/nguyenhonggiang2407/PocketLedger/actions/runs/41666708368) @ d51f4ae0 (same SHA); 1 workflow(s) | 5 test files / 4 capture candidates | `LICENSE` | VERIFIED source / UNVERIFIED runtime |
| [YangHooks](https://github.com/nguyenhonggiang2407/YangHooks/tree/036161c2d2d81fb7389accc1fe6220d3600787c4) @ `036161c2` | npm ci; npm test; npm run format:check; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/YangHooks/actions/runs/42038971261) @ 17823909 (different SHA); 1 workflow(s) | 4 test files / 3 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangQueue](https://github.com/nguyenhonggiang2407/YangQueue/tree/60407218de9ee8e92210623eada86d177d1bf877) @ `60407218` | npm ci; npm test; npm run format:check; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/YangQueue/actions/runs/41748608982) @ 9d4cdce6 (different SHA); 1 workflow(s) | 3 test files / 3 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangData](https://github.com/nguyenhonggiang2407/YangData/tree/a56497d7622a52f767d97b0ba0e40b246517cf27) @ `a56497d7` | npm ci; npm test; npm run format:check; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/YangData/actions/runs/41748737709) @ 904f6321 (different SHA); 1 workflow(s) | 4 test files / 4 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangDocs](https://github.com/nguyenhonggiang2407/YangDocs/tree/a667c023477b44d6bf72479103325bfa8683e1d0) @ `a667c023` | python -m pip install -r requirements-dev.txt; ruff check app tests; ruff format --check app tests; python -m pytest tests/test_documents.py -q; python -m pytest tests/test_ui.py -q | [success](https://github.com/nguyenhonggiang2407/YangDocs/actions/runs/41749380523) @ a667c023 (same SHA); 2 workflow(s) | 3 test files / 3 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangLab](https://github.com/nguyenhonggiang2407/YangLab/tree/ce3197b5e6e3508a6531d8dcd180fcee337d55ae) @ `ce3197b5` | npm ci; npm test; npm run format:check; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/YangLab/actions/runs/41749383242) @ ce3197b5 (same SHA); 2 workflow(s) | 2 test files / 6 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [DTDD](https://github.com/nguyenhonggiang2407/DTDD/tree/fd23028a2088100a7695af2ab5f40b8d22dafb3b) @ `fd23028a` | python -m pip install -r requirements.txt; python -m unittest discover -s tests -v; python -m compileall -q api main.py tests; node --check frontend/app.js; npm ci; npm run test:ui | [success](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41720369997) @ 09a76a68 (different SHA); 1 workflow(s) | 2 test files / 2 capture candidates | `LICENSE`, `NOTICE.md` | VERIFIED source / UNVERIFIED runtime |
| [YangHomestay](https://github.com/nguyenhonggiang2407/YangHomestay/tree/bf649b5dc0e9f8076148e7967994aa2172655015) @ `bf649b5d` | php backend/tests/test-pricing.php; php backend/tests/test-availability.php; php backend/tests/test-rbac.php; php -l on tracked PHP | No runs returned; 0 workflow(s) | 6 test files / 6 capture candidates | `docs/image-sources.md` | VERIFIED source / UNVERIFIED runtime |
| [YangLingo](https://github.com/nguyenhonggiang2407/YangLingo/tree/4e9777e892e9fc2b7bc564a51a2b4637f5c24f53) @ `4e9777e8` | php tests/srs_test.php; php tests/adaptive_test.php; php tests/importer_test.php; php tests/migration_integrity_test.php; node tests/learning_ux_test.cjs; php -l on tracked PHP | No runs returned; 0 workflow(s) | 51 test files / 2 capture candidates | `LICENSE`, `assets/flashbooks/english-for-web-a2-b1/LICENSE.original.txt` | VERIFIED source / UNVERIFIED runtime |
| [YangLocal](https://github.com/nguyenhonggiang2407/YangLocal/tree/5e38ff88bc12fd3b8e5d378a9293d178039cbf1d) @ `5e38ff88` | php -l wp-content/plugins/yanglocal-core/*.php and wp-content/themes/yanglocal-theme/*.php (recursively); node --check custom JavaScript | No runs returned; 0 workflow(s) | 0 test files / 5 capture candidates | `docs/source-notice.md`, `license.txt`, `wp-content/plugins/akismet/LICENSE.txt` | VERIFIED source / UNVERIFIED runtime |
| [FORME](https://github.com/nguyenhonggiang2407/FORME/tree/c7a456d4cbfa5b203f787a1adb196cca373b22b1) @ `c7a456d4` | npm ci; npm run check; npm test; npm run dev | [success](https://github.com/nguyenhonggiang2407/FORME/actions/runs/41666869880) @ c7a456d4 (same SHA); 1 workflow(s) | 1 test files / 0 capture candidates | `docs/ATTRIBUTION.md` | VERIFIED source / UNVERIFIED runtime |
| [YangAtlas](https://github.com/nguyenhonggiang2407/YangAtlas/tree/1631c1dca54ed7cd2319886ce1d119f435059c62) @ `1631c1dc` | npm ci; npm run check; npm test; npm run assets:check; npm run build; npm run test:browser | [success](https://github.com/nguyenhonggiang2407/YangAtlas/actions/runs/42034869630) @ 5ff0d98f (different SHA); 1 workflow(s) | 5 test files / 13 capture candidates | `LICENSE`, `THIRD_PARTY_NOTICES.md`, `docs/MEDIA.md` | VERIFIED source / UNVERIFIED runtime |
| [St4](https://github.com/nguyenhonggiang2407/St4/tree/bfa1a2e23806f1500edb623e20bc93568de30157) @ `bfa1a2e2` | Single index.html with inline scripts; no build or automated test harness; local static HTTP server | No runs returned; 0 workflow(s) | 0 test files / 2 capture candidates | No license/notice candidate | VERIFIED source / UNVERIFIED runtime |
| [Yang](https://github.com/nguyenhonggiang2407/Yang/tree/3078d5d6c31fa48eb1b9217f422d88a9d19176d1) @ `3078d5d6` | javac -encoding UTF-8 -d out src/mychatapplication/MyChatApplication.java src/Chat/ServerSocket.java src/Chat/Chat_Server.java src/Chat/Chat_Client.java; Ant uses configured Java 23 | No runs returned; 0 workflow(s) | 0 test files / 0 capture candidates | No license/notice candidate | VERIFIED source / UNVERIFIED runtime |
| [Doanwebbangiayphp](https://github.com/nguyenhonggiang2407/Doanwebbangiayphp/tree/15382128f9abc0aaef2d1e289f8a0a0c077a401e) @ `15382128` | php -l on 80 tracked PHP files; node --check javascript.js; node --check Shop/javascript.js | No runs returned; 0 workflow(s) | 0 test files / 0 capture candidates | No license/notice candidate | VERIFIED source / UNVERIFIED runtime |
| [nguyenhonggiang2407](https://github.com/nguyenhonggiang2407/nguyenhonggiang2407/tree/3d02566d35ab4d55cb8e719e0e0f5d79c4e7a3aa) @ `3d02566d` | node scripts/update-stats.mjs --snapshot; node --check scripts/audit-repositories.mjs; node scripts/audit-repositories.mjs --repos-root .. | [success](https://github.com/nguyenhonggiang2407/nguyenhonggiang2407/actions/runs/42184360647) @ da262098 (different SHA); 1 workflow(s) | 0 test files / 2 capture candidates | No license/notice candidate | VERIFIED source / UNVERIFIED runtime |

Test-file counts are discovery counts, not test-case totals. Capture discovery searches filenames containing screenshot/capture and can miss docs/images. Workflow listings include maintenance and publishing jobs; their presence does not guarantee build/test/security coverage. Machine evidence and exact paths: [inventory.json](evidence/inventory.json), [ci-baseline.json](evidence/ci-baseline.json).

## Per-repository review and remaining checks

### RunwayStudio

- **Stack / database:** Java 17 / Spring Boot 3.5.16 / JPA / Flyway. H2 demo; MySQL migrations and acceptance profile.
- **Build/test:** `./mvnw clean verify; npm ci; npm run check; npm run test:e2e; ./mvnw -Pmysql-verify verify (two disposable MySQL schemas)`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Stock locking/idempotency tests exist. Re-run them; H2 success cannot prove MySQL isolation. Spring advisories have documented exceptions; reassess expiry. Inherited catalog photo rights remain unresolved.
- **README / license / source:** No blanket LICENSE; ATTRIBUTION, MEDIA_LICENSES and THIRD_PARTY_NOTICES retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker + Render Free manifest exists; memory H2 resets. Do not deploy restored catalog photos as licensed without evidence.

### YangSlots

- **Stack / database:** Java 17 / Spring Boot 4.1.2 / Spring JDBC. H2 file, READ_COMMITTED + workspace row lock; injected-clock, HTTP and persistence tests present.
- **Build/test:** `./mvnw verify; npm ci; npm run format:check; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Concurrency, same-key replay, expiration, CSRF and owner isolation tests exist. Current HEAD is a screenshot commit after the latest CI SHA, so do not claim HEAD CI verified. No public URL.
- **README / license / source:** MIT LICENSE + NOTICE, original reference and repository migration notes retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose exists. Prepare Render config with exact host/origin, Secure cookies and ephemeral-data warning; no service created.

### YangRent

- **Stack / database:** React 18 / Vite / FastAPI / SQLAlchemy. PostgreSQL Alembic migrations; isolated public/local SQLite demo; do not apply PostgreSQL migrations to SQLite.
- **Build/test:** `frontend: npm ci; npm test; npm run build; npm run test:browser. backend: python -m pip install -r requirements-dev.txt; python -B -m unittest discover -s tests -v`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** JWT/role/ownership tests present. Room holds use check-then-write without transaction lock; money uses float; health is process-only. Browser fixtures do not prove live API behavior.
- **README / license / source:** No general reuse license; source-notice and photo-sources document inherited assets and unresolved rights. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Dockerfile.demo is for an isolated disposable demo. render.yaml describes a different PostgreSQL/API deployment; do not apply it to the running demo.

### CampusDesk

- **Stack / database:** Node 24 / TypeScript / React / Express. SQLite with schema/version fixtures.
- **Build/test:** `npm ci; npm run check; npm run format:check; npm run test:browser`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Review student/staff isolation, private notes and 409 conflicts in server tests. Presence is not a security pass.
- **README / license / source:** LICENSE present; confirm individual screenshot/media sources in T03. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose/render.yaml present; free ephemeral SQLite requires honest reset policy.

### ApplyFlow

- **Stack / database:** Node 24 / TypeScript / React / Express. SQLite; versioned application records.
- **Build/test:** `npm ci; npm run check; npm run format:check; npm run test:browser`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Review account isolation, optimistic version handling and CSV/ICS safety tests; live landing page cannot prove those flows.
- **README / license / source:** LICENSE present; source/media review remains T03. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose/render.yaml present; ephemeral demo only until persistence verified.

### PocketLedger

- **Stack / database:** Node 24 / TypeScript / React / Express. SQLite; integer-cent ledger behavior needs re-run.
- **Build/test:** `npm ci; npm test; npm run build; npm run test:browser`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Check cross-account access, month boundaries, budget arithmetic and import/export. Financial correctness is not inferred from UI.
- **README / license / source:** LICENSE present; media/source review remains T03. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose/render.yaml present; free filesystem is temporary.

### YangHooks

- **Stack / database:** Node 24 / SQLite / raw-byte HMAC webhook lab. node:sqlite; per-workspace records.
- **Build/test:** `npm ci; npm test; npm run format:check; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** HMAC/replay/key-rotation tests present. Public exposure needs request/rate/CPU limits and local sender abuse review.
- **README / license / source:** MIT LICENSE + NOTICE; DTDD extraction and credited reference retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose local lab; no public demo. Deploy only after BE01 abuse review.

### YangQueue

- **Stack / database:** Node 24 / SQLite / worker_threads queue. node:sqlite; lease/retry state.
- **Build/test:** `npm ci; npm test; npm run format:check; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Verify concurrency/job size/retry/CPU bounds and restart semantics; do not equate file persistence with free-host durability.
- **README / license / source:** MIT LICENSE + NOTICE; extracted DTDD history retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose local lab; no public demo. Ephemeral free-host queue only with quotas.

### YangData

- **Stack / database:** Node 24 / SQLite / CSV query builder. node:sqlite; imported tabular workspaces.
- **Build/test:** `npm ci; npm test; npm run format:check; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Re-run whitelist/bound-value SQL tests, formula-safe CSV exports and upload/workspace caps before public use.
- **README / license / source:** MIT LICENSE + NOTICE; source reference retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose local lab; no public demo; bounded sandbox required.

### YangDocs

- **Stack / database:** Python 3.12 / FastAPI / SQLite FTS5. SQLite FTS5 and uploaded documents.
- **Build/test:** `python -m pip install -r requirements-dev.txt; ruff check app tests; ruff format --check app tests; python -m pytest tests/test_documents.py -q; python -m pytest tests/test_ui.py -q`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Upload limits, MIME validation, document ownership/deletion and citation checks must be re-run; use fictional files only.
- **README / license / source:** MIT LICENSE + NOTICE; inherited references retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose present; no URL. Prefer local demo unless private-document risk is bounded.

### YangLab

- **Stack / database:** Node 24 / SQLite; Minutes, Launch, Spec hub. SQLite shared workspace; module isolation needs re-run.
- **Build/test:** `npm ci; npm test; npm run format:check; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Review workspace separation, exports and bounded content for each module.
- **README / license / source:** MIT LICENSE + NOTICE; original sources retained. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Docker/Compose present; no public URL. A single bounded hub is preferable to three services.

### DTDD

- **Stack / database:** Python / FastAPI / SQLite; YangCareer. SQLite session-scoped profiles/jobs.
- **Build/test:** `python -m pip install -r requirements.txt; python -m unittest discover -s tests -v; python -m compileall -q api main.py tests; node --check frontend/app.js; npm ci; npm run test:ui`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** PDF upload limits/ownership and optional model API path need re-run. Do not call optional paid APIs.
- **README / license / source:** MIT + NOTICE retains TalentBridge/Trinhvhao attribution; DTDD branch catalog documents extracted projects. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** render.yaml present; public Render link declared. No paid model or persistent-storage assumption.

### YangHomestay

- **Stack / database:** PHP / JavaScript / Supabase PostgreSQL. SQL schema present; Supabase connection required for live/concurrency tests.
- **Build/test:** `php backend/tests/test-pricing.php; php backend/tests/test-availability.php; php backend/tests/test-rbac.php; php -l on tracked PHP`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Local pricing/RBAC tests exist. Do not execute live-test.php or concurrency-test.php against the running database. No CI workflow.
- **README / license / source:** No blanket license; image-sources exists. Check individual photo rights. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Existing HelioHost URL; preserve host and database; no Docker manifest found.

### YangLingo

- **Stack / database:** PHP / MySQL / browser JavaScript. MySQL; database/migrations present.
- **Build/test:** `php tests/srs_test.php; php tests/adaptive_test.php; php tests/importer_test.php; php tests/migration_integrity_test.php; node tests/learning_ux_test.cjs; php -l on tracked PHP`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Review installer access, login throttling, CSRF, learning persistence and migration safety. No CI workflow.
- **README / license / source:** LICENSE and original book license present; audit content/photos individually. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Existing HelioHost URL; do not run installer/migrations on live host.

### YangLocal

- **Stack / database:** WordPress / custom PHP theme + plugin. WordPress MySQL/MariaDB; no live wp-config.php in tracked source.
- **Build/test:** `php -l wp-content/plugins/yanglocal-core/*.php and wp-content/themes/yanglocal-theme/*.php (recursively); node --check custom JavaScript`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Only custom theme/plugin should be changed. No custom automated tests/CI. Upstream twentytwentyfive package.json is not the application build.
- **README / license / source:** WordPress license.txt and docs/source-notice retained; custom theme/plugin has no general reuse license. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Keep current HelioHost host; full WordPress/db boot and source sync are unverified.

### FORME

- **Stack / database:** Static HTML/CSS/JavaScript; browser-local wardrobe. Browser local storage; no backend.
- **Build/test:** `npm ci; npm run check; npm test; npm run dev`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Check keyboard/accessibility/storage import/export and actual static behavior. Screenshot files are under docs/images rather than detected screenshots directories.
- **README / license / source:** ATTRIBUTION present; no blanket root LICENSE found. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** GitHub Pages workflow serves the existing static app. Label it browser-local.

### YangAtlas

- **Stack / database:** Static/offline JavaScript travel planner. Browser local storage + service worker; no server account.
- **Build/test:** `npm ci; npm run check; npm test; npm run assets:check; npm run build; npm run test:browser`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Re-run backup/export/offline tests. Latest CI SHA differs from current screenshot HEAD; static live revision is not assumed.
- **README / license / source:** LICENSE + THIRD_PARTY_NOTICES + docs/MEDIA present. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** GitHub Pages workflow exists; preserve repository subpath and offline scope.

### St4

- **Stack / database:** Single-page static movie UI study. No database or streaming backend.
- **Build/test:** Single `index.html` with inline scripts; no build or automated test harness. Serve locally with a static HTTP server and inspect real navigation. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** No automated test/CI; external poster/media rights unresolved. Do not advertise as a streaming service.
- **README / license / source:** No LICENSE/NOTICE found; attribution/media investigation required. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Static-host candidate only after rights review; no public URL found.

### Yang

- **Stack / database:** Java Swing / TCP / NetBeans Ant. No database; TCP port 1201.
- **Build/test:** `javac -encoding UTF-8 -d out src/mychatapplication/MyChatApplication.java src/Chat/ServerSocket.java src/Chat/Chat_Server.java src/Chat/Chat_Client.java; Ant uses configured Java 23`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Configured main is empty; exceptions swallowed and Swing EDT updates need review. No tests/CI. Compile is not a successful GUI exchange.
- **README / license / source:** No LICENSE/NOTICE found; original GUI Builder/author comments must remain. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Desktop JAR/capture only; web-demo status NOT_APPLICABLE.

### Doanwebbangiayphp

- **Stack / database:** Legacy PHP / mysqli / MySQL shoe shop. Required schema/SQL absent; duplicated root and Shop subtrees.
- **Build/test:** `php -l on 80 tracked PHP files; node --check javascript.js; node --check Shop/javascript.js`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Source concatenates login/register input into SQL and stores plaintext passwords. Runtime/checkout blocked by missing schema. No tests/CI; keep local.
- **README / license / source:** No LICENSE/NOTICE; asset/CDN attribution and photo rights unresolved. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Do not launch publicly until schema recovery and WEB03 security fixes.

### nguyenhonggiang2407

- **Stack / database:** GitHub profile Markdown / Node .mjs scripts. NOT_APPLICABLE.
- **Build/test:** `node scripts/update-stats.mjs --snapshot; node --check scripts/audit-repositories.mjs; node scripts/audit-repositories.mjs --repos-root ..`. Execution result at T01 snapshot: UNVERIFIED; subsequent runs must be logged separately.
- **Security / data / UI:** Existing profile-stats CI updates presentation, not application quality. README claims are dated historical evidence; current live status belongs in DEMO_REGISTRY.
- **README / license / source:** Profile source-credit sections retained; no root license found. README and manifests were read; dated README pass counts are not repeated as fresh results.
- **Deployment:** Profile README; Pages publication is NOT_APPLICABLE until separately configured.

## Reproduce and next priorities

From this profile checkout, place the other repositories as sibling folders and run:

```sh
node --check scripts/audit-repositories.mjs
node scripts/audit-repositories.mjs --repos-root .. --output docs/evidence/inventory.json
```

The reader uses git-tracked manifests/README/workflow/test/notice filenames and never executes application scripts or reads `.env` contents. It fails if a checkout is missing instead of silently inventing a row. Review nested AGENTS.md if any are discovered (none in these 21 checkouts).

T02 adds bounded HTTP/browser verification for all 11 unique URLs. Continue RS01/RS02, YS01/YS02 and YR01 before lower-priority changes. T03 must verify secrets/dependencies/media independently; this inventory is not a clean security certificate. T04 should fill genuine CI gaps without replacing existing working workflows. Hosting terms and demo scope belong in T05. Rollback for T01: revert its commit; no application/database state is involved.
