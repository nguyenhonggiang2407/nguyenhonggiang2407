# More projects and branch workspaces

These projects complement the [featured projects](../README.md). Branch workspaces remain in DTDD until their build, provenance and migration requirements have been reviewed. Historical CI links below identify specific runs, not a guarantee about a later commit.

[YangCareer](https://github.com/nguyenhonggiang2407/DTDD) is a CV workspace and job matching app derived from [TalentBridge](https://github.com/Trinhvhao/TalentBridge) (MIT), with a new interface, private sessions and API/browser regression tests. [Deployment URL ↗](https://giang-yangcareer.onrender.com/app/)

The ApplyFlow, CampusDesk, PocketLedger and YangCareer demos run on Render Free. They may take time to wake and their temporary SQLite data can reset; use fictional details only.

[YangDocs](https://github.com/nguyenhonggiang2407/DTDD/tree/yangdocs-preview) is a document library with Vietnamese keyword search, page citations, favorites and Markdown export. This independent project currently lives on the `yangdocs-preview` branch; its new FastAPI/SQLite runtime is inspired by a credited [MIT RAG example](https://github.com/nguyenhonggiang2407/DTDD/blob/yangdocs-preview/NOTICE.md).

### YangLab

Three apps in a shared Node.js/SQLite workspace, with private browser sessions, version history and conflict checks. The source currently lives on the `yanglab` branch of DTDD.

| App | Workflow |
|---|---|
| [YangMinutes](https://github.com/nguyenhonggiang2407/DTDD/tree/yanglab/apps/yang-minutes) | Meeting notes, assigned actions, deadlines and Markdown/ICS exports. |
| [YangLaunch](https://github.com/nguyenhonggiang2407/DTDD/tree/yanglab/apps/yang-launch) | Content planning, review stages, calendar filters and CSV export. |
| [YangSpec](https://github.com/nguyenhonggiang2407/DTDD/tree/yanglab/apps/yang-spec) | Endpoint design, JSON examples and OpenAPI 3.1 export. |

[Setup and screenshots](https://github.com/nguyenhonggiang2407/DTDD/tree/yanglab) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41475399134) · [MIT sources and adaptations](https://github.com/nguyenhonggiang2407/DTDD/blob/yanglab/NOTICE.md)

### Java / Spring Boot

[**Runway Studio**](https://github.com/nguyenhonggiang2407/RunwayStudio) is a fashion storefront with Outfit Studio, Shop The Scene, a private wardrobe and COD checkout.

**Java 17 · Spring Boot · JPA · H2/MySQL · Docker**

[Source and setup](https://github.com/nguyenhonggiang2407/RunwayStudio) · [Deployment URL](https://runwaystudio-portfolio-demo.onrender.com)

The Render Free demo may take time to wake. H2 demo data resets on restart; register a fresh customer account and use fictional details only.

[**YangSlots**](https://github.com/nguyenhonggiang2407/DTDD/tree/yangslots) is a resource reservation app with five-minute holds, atomic capacity checks, request idempotency, confirmation/cancellation and CSV/ICS export.

**Java 17 · Spring Boot 4.1.2 · Spring JDBC · H2 · Docker**

[Setup and screenshots](https://github.com/nguyenhonggiang2407/DTDD/tree/yangslots) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41565934350) · [MIT reference and implementation](https://github.com/nguyenhonggiang2407/DTDD/blob/yangslots/NOTICE.md)

<details>
<summary>YangSlots interface preview</summary>

<a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangslots"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/DTDD/yangslots/docs/screenshots/desktop.png" width="100%" alt="YangSlots resource calendar and confirmed reservations" /></a>

</details>

### Data & automation

Three independent Node.js 24 / SQLite apps, currently on separate branches of DTDD.

<table>
<tr>
<td width="50%" valign="top">
<a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangqueue"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/DTDD/yangqueue/docs/screenshots/desktop.png" width="100%" alt="YangQueue — real job queue interface" /></a>
<h4><a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangqueue">YangQueue</a></h4>
Process CSV, JSON and text through a durable job queue, with idempotency, bounded retries, cancellation and result downloads.
<br /><br />
<sub><b>Node.js · SQLite · Worker Threads · Docker</b></sub>
<br /><br />
<a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangqueue">Source & setup ↗</a> · <a href="https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41486140255">Historical CI run ↗</a>
</td>
<td width="50%" valign="top">
<a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangdata"><img src="https://raw.githubusercontent.com/nguyenhonggiang2407/DTDD/yangdata/docs/screenshots/desktop.png" width="100%" alt="YangData — real CSV query and report interface" /></a>
<h4><a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangdata">YangData</a></h4>
Explore private CSV datasets with typed imports, parameterized SQLite queries, grouped summaries and saved reports.
<br /><br />
<sub><b>Node.js · SQLite · JavaScript · Docker</b></sub>
<br /><br />
<a href="https://github.com/nguyenhonggiang2407/DTDD/tree/yangdata">Source & setup ↗</a> · <a href="https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41555977273">Historical CI run ↗</a>
</td>
</tr>
</table>

[YangHooks](https://github.com/nguyenhonggiang2407/DTDD/tree/yanghooks) is a private webhook lab with HMAC signatures, delivery replay checks, one-time signing keys, key rotation and a real local HTTP sender/CLI. [Setup and interface captures](https://github.com/nguyenhonggiang2407/DTDD/tree/yanghooks) · [Historical CI run](https://github.com/nguyenhonggiang2407/DTDD/actions/runs/41558541022) · [MIT reference and new implementation](https://github.com/nguyenhonggiang2407/DTDD/blob/yanghooks/NOTICE.md).

New runtimes and interfaces with credited MIT reference examples. Original authors and licenses are preserved: [YangQueue provenance](https://github.com/nguyenhonggiang2407/DTDD/blob/yangqueue/NOTICE.md) · [YangData provenance](https://github.com/nguyenhonggiang2407/DTDD/blob/yangdata/NOTICE.md).

Also building [YangLocal](https://github.com/nguyenhonggiang2407/YangLocal), a WordPress theme and plugin for discovering places in Hanoi. [Deployment URL ↗](https://nguyenhonggiangcute.helioho.st/)




