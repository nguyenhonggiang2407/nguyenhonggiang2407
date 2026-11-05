<p align="center">
  <img src="assets/banner.svg" width="100%" alt="Nguyễn Hồng Giang — Java Backend / Full-stack Intern · Hanoi, Vietnam" />
</p>

# Hi, I'm Nguyễn Hồng Giang

I'm an IT student in **Hanoi, Vietnam**, looking for a **part-time Java Backend / Full-stack internship** with mentorship and opportunities to contribute to a team.

My focus is **Java, Spring Boot, REST APIs and SQL**. Start with **RunwayStudio** for a Java commerce application and **YangSlots** for reservation transactions, capacity checks and idempotency. The projects below include source, setup instructions, tests and documented limitations.

[Email](mailto:nguyenhonggiang.profile@gmail.com) · [Featured projects](#featured-projects) · [More projects](docs/PROJECTS.md)

## Technologies in these repositories

| Focus | Technologies |
| --- | --- |
| Java backend | Java 17, Spring Boot, Spring Data JPA, Spring JDBC, Maven |
| Data and delivery | MySQL, PostgreSQL, SQLite, H2, Docker, GitHub Actions |
| Full-stack experience | React, TypeScript, JavaScript, Express, FastAPI, PHP |

## Featured projects

### 1. [RunwayStudio](https://github.com/nguyenhonggiang2407/RunwayStudio) — Java commerce application

[![RunwayStudio storefront with demonstration products](https://raw.githubusercontent.com/nguyenhonggiang2407/RunwayStudio/main/docs/screenshots/home-desktop-1440.png)](https://github.com/nguyenhonggiang2407/RunwayStudio)

**Stack:** Java 17 · Spring Boot · JPA · MySQL / H2 · Docker

A fashion storefront with outfit boards, scene discovery, a private wardrobe and COD checkout. Backend review points include transactional stock handling, pessimistic locking and per-account checkout idempotency. MySQL acceptance tests cover competing buyers, repeated checkout requests and cancellation/restocking.

[Source, architecture & setup](https://github.com/nguyenhonggiang2407/RunwayStudio) · [CI](https://github.com/nguyenhonggiang2407/RunwayStudio/actions/workflows/ci.yml) · [Demo](https://runwaystudio-portfolio-demo.onrender.com)

The repository retains an inherited storefront baseline. [Attribution and media limitations](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ATTRIBUTION.md) distinguish that baseline from later changes; inherited catalog image rights remain unresolved. COD is a demonstration flow, not an online payment integration.

### 2. [YangSlots](https://github.com/nguyenhonggiang2407/YangSlots) — Java reservation backend

**Stack:** Java 17 · Spring Boot · Spring JDBC · H2 · Docker

A resource reservation application with expiring holds, transactional capacity checks, idempotent requests, confirmation/cancellation and CSV/ICS export. Start here to review how simultaneous requests are handled and how the tests exercise capacity limits.

[Source, tests & local setup](https://github.com/nguyenhonggiang2407/YangSlots) · [CI](https://github.com/nguyenhonggiang2407/YangSlots/actions/workflows/ci.yml) · [Source credits](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/NOTICE.md)

No public application demo is currently verified. Source history was extracted from the original DTDD branch; the credited MIT reference and implementation notes are preserved.

### 3–6. Full-stack and integration examples

| Project | Stack and review focus | Evidence and demo |
| --- | --- | --- |
| **3. [YangRent](https://github.com/nguyenhonggiang2407/YangRent)** | React, FastAPI, SQLAlchemy, PostgreSQL / SQLite. Rental requests, backend role checks and record ownership. | [CI](https://github.com/nguyenhonggiang2407/YangRent/actions/workflows/ci.yml) · [Demo](https://yangrent-portfolio-demo.onrender.com/) |
| **4. [CampusDesk](https://github.com/nguyenhonggiang2407/CampusDesk)** | React, TypeScript, Express, SQLite. Student/staff ticket workflows, private notes and version-based edit conflict checks. | [CI](https://github.com/nguyenhonggiang2407/CampusDesk/actions/workflows/ci.yml) · [Demo](https://giang-campusdesk.onrender.com) |
| **5. [YangHomestay](https://github.com/nguyenhonggiang2407/YangHomestay)** | PHP, JavaScript, Supabase PostgreSQL. Availability, server-side pricing and booking ownership. | [Architecture](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/architecture.md) · [Verification limits](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/verification.md) · [Demo](https://yanghomestay.helioho.st/) |
| **6. [YangHooks](https://github.com/nguyenhonggiang2407/YangHooks)** | Node.js, SQLite. Raw-byte HMAC verification, replay checks, signing-key rotation and a local HTTP sender. | [CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml) · [Local setup](https://github.com/nguyenhonggiang2407/YangHooks) · [Source credits](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/NOTICE.md) |

**Demo and test boundaries:** Render demos can wake slowly and temporary H2/SQLite data can reset; use fictional details. YangRent's public deployment uses temporary SQLite and mock payment flows. YangHooks is a local lab with no verified public demo. YangHomestay currently has no GitHub Actions workflow; its local verification record does not establish concurrent booking correctness on the deployed database. Public landing pages for the four linked demos responded on 5 November 2026; this check did not repeat sign-in, booking or checkout flows. See each repository for the exact test commands and remaining work.

**Source transparency:** These repositories include learning work, inherited baselines and credited references. Repository ownership alone does not establish sole authorship. RunwayStudio, YangSlots and YangHooks retain explicit source notices; YangRent documents [source and image provenance](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/source-notice.md), and YangHomestay records [image sources](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/image-sources.md). Review those records alongside commit history when assessing contributions. The screenshot above shows demo content, not customer activity.

## Currently improving

- Deepening Java and Spring Boot fundamentals through the two Java projects above.
- Designing database constraints, transaction boundaries and predictable API errors.
- Testing important workflows and documenting what each check proves.

## Contact

**Open to Java Backend / Full-stack internships in Hanoi.**

[nguyenhonggiang.profile@gmail.com](mailto:nguyenhonggiang.profile@gmail.com) · [GitHub](https://github.com/nguyenhonggiang2407)
