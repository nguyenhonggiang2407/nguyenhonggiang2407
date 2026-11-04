# More projects and independent backend applications

These projects complement the [featured projects](../README.md). YangSlots, YangDocs, YangQueue, YangData, YangHooks and YangLab are now independent public repositories on `main`, extracted on 4 November 2026 with their reachable source history and credits preserved. The original DTDD branches remain available. Current CI links point to each new repository; each initial run was checked as successful on 4 November. Historical CI links retain the original DTDD runs and do not describe later commits.

[YangCareer](https://github.com/nguyenhonggiang2407/DTDD) is a CV workspace and job matching app derived from [TalentBridge](https://github.com/Trinhvhao/TalentBridge) (MIT), with a new interface, private sessions and API/browser regression tests. [Deployment URL ↗](https://giang-yangcareer.onrender.com/app/)

The ApplyFlow, CampusDesk, PocketLedger and YangCareer demos run on Render Free. They may take time to wake and their temporary SQLite data can reset; use fictional details only.

[YangDocs](https://github.com/nguyenhonggiang2407/YangDocs) is a document library with Vietnamese keyword search, page citations, favorites and Markdown export. Its FastAPI/SQLite runtime is inspired by a credited [MIT RAG example](https://github.com/nguyenhonggiang2407/YangDocs/blob/main/NOTICE.md). [Source & setup](https://github.com/nguyenhonggiang2407/YangDocs) · [Current CI](https://github.com/nguyenhonggiang2407/YangDocs/actions/workflows/ci.yml) · [Migration record](https://github.com/nguyenhonggiang2407/YangDocs/blob/main/docs/repository-migration.md).

### YangLab

Three apps in a shared Node.js/SQLite workspace, with private browser sessions, version history and conflict checks. The independent YangLab monorepo keeps all three apps and their shared runtime together.

| App | Workflow |
|---|---|
| [YangMinutes](https://github.com/nguyenhonggiang2407/YangLab/tree/main/apps/yang-minutes) | Meeting notes, assigned actions, deadlines and Markdown/ICS exports. |
| [YangLaunch](https://github.com/nguyenhonggiang2407/YangLab/tree/main/apps/yang-launch) | Content planning, review stages, calendar filters and CSV export. |
| [YangSpec](https://github.com/nguyenhonggiang2407/YangLab/tree/main/apps/yang-spec) | Endpoint design, JSON examples and OpenAPI 3.1 export. |

[Setup and screenshots](https://github.com/nguyenhonggiang2407/YangLab) · [Current CI](https://github.com/nguyenhonggiang2407/YangLab/actions/workflows/ci.yml) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41475399134) · [MIT sources and adaptations](https://github.com/nguyenhonggiang2407/YangLab/blob/main/NOTICE.md)

### Java / Spring Boot

[**Runway Studio**](https://github.com/nguyenhonggiang2407/RunwayStudio) is a fashion storefront with Outfit Studio, Shop The Scene, a private wardrobe and COD checkout.

**Java 17 · Spring Boot · JPA · H2/MySQL · Docker**

[Source and setup](https://github.com/nguyenhonggiang2407/RunwayStudio) · [Deployment URL](https://runwaystudio-portfolio-demo.onrender.com)

The Render Free demo may take time to wake. H2 demo data resets on restart; register a fresh customer account and use fictional details only.

[**YangSlots**](https://github.com/nguyenhonggiang2407/YangSlots) is a resource reservation app with five-minute holds, atomic capacity checks, request idempotency, confirmation/cancellation and CSV/ICS export.

**Java 17 · Spring Boot 4.1.2 · Spring JDBC · H2 · Docker**

[Setup and screenshots](https://github.com/nguyenhonggiang2407/YangSlots) · [Current CI](https://github.com/nguyenhonggiang2407/YangSlots/actions/workflows/ci.yml) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41565934350) · [MIT reference and implementation](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/NOTICE.md)

<details>
<summary>YangSlots interface preview</summary>

<a href="https://github.com/nguyenhonggiang2407/YangSlots"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/YangSlots/main/docs/screenshots/desktop.png" width="100%" alt="YangSlots resource calendar and confirmed reservations" /></a>

</details>

### Data & automation

Three independent Node.js 24 / SQLite repositories, each with its own setup, tests and preserved source credits.

<table>
<tr>
<td width="50%" valign="top">
<a href="https://github.com/nguyenhonggiang2407/YangQueue"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/YangQueue/main/docs/screenshots/desktop.png" width="100%" alt="YangQueue — real job queue interface" /></a>
<h4><a href="https://github.com/nguyenhonggiang2407/YangQueue">YangQueue</a></h4>
Process CSV, JSON and text through a durable job queue, with idempotency, bounded retries, cancellation and result downloads.
<br /><br />
<sub><b>Node.js · SQLite · Worker Threads · Docker</b></sub>
<br /><br />
<a href="https://github.com/nguyenhonggiang2407/YangQueue">Source & setup ↗</a> · <a href="https://github.com/nguyenhonggiang2407/YangQueue/actions/workflows/ci.yml">Current CI ↗</a> · <a href="https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41486140255">Historical CI run ↗</a>
</td>
<td width="50%" valign="top">
<a href="https://github.com/nguyenhonggiang2407/YangData"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/YangData/main/docs/screenshots/desktop.png" width="100%" alt="YangData — real CSV query and report interface" /></a>
<h4><a href="https://github.com/nguyenhonggiang2407/YangData">YangData</a></h4>
Explore private CSV datasets with typed imports, parameterized SQLite queries, grouped summaries and saved reports.
<br /><br />
<sub><b>Node.js · SQLite · JavaScript · Docker</b></sub>
<br /><br />
<a href="https://github.com/nguyenhonggiang2407/YangData">Source & setup ↗</a> · <a href="https://github.com/nguyenhonggiang2407/YangData/actions/workflows/ci.yml">Current CI ↗</a> · <a href="https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41555977273">Historical CI run ↗</a>
</td>
</tr>
</table>

[YangHooks](https://github.com/nguyenhonggiang2407/YangHooks) is a private webhook lab with HMAC signatures, delivery replay checks, one-time signing keys, key rotation and a real local HTTP sender/CLI. [Setup and interface captures](https://github.com/nguyenhonggiang2407/YangHooks) · [Current CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41558541022) · [MIT reference and new implementation](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/NOTICE.md).

New runtimes and interfaces with credited MIT reference examples. Original authors and licenses are preserved: [YangQueue provenance](https://github.com/nguyenhonggiang2407/YangQueue/blob/main/NOTICE.md) · [YangData provenance](https://github.com/nguyenhonggiang2407/YangData/blob/main/NOTICE.md).

Also building [YangLocal](https://github.com/nguyenhonggiang2407/YangLocal), a WordPress theme and plugin for discovering places in Hanoi. [Deployment URL ↗](https://nguyenhonggiangcute.helioho.st/)

The six newly extracted repositories have verified public source and CI, but no verified public application demo yet. Their [original branch/SHA mapping and migration evidence](https://github.com/nguyenhonggiang2407/DTDD/blob/main/docs/branch-catalog.md) record preserved history, attribution and actual tests. Container smoke checks passed in Linux CI, including separate [YangDocs](https://github.com/nguyenhonggiang2407/YangDocs/actions/runs/41749380523) and [YangLab](https://github.com/nguyenhonggiang2407/YangLab/actions/runs/41749383242) runs; Docker was not run on the local Windows host.




