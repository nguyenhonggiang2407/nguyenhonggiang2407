<p align="center">
  <img src="assets/banner.svg" width="100%" alt="Nguyễn Hồng Giang — Java Backend / Full-stack Intern · Hanoi, Vietnam" />
</p>

# Hi, I'm Nguyễn Hồng Giang

I'm an IT student in **Hanoi, Vietnam**, seeking a **part-time Java Backend / Full-stack internship**. I work with **Java 17, Spring Boot, REST APIs, and SQL**.

My portfolio focuses on checkout transactions, reservation capacity, and access control. Each walkthrough pairs a user flow with the code and tests behind it.

[Email](mailto:nguyenhonggiang.profile@gmail.com) · [Java projects](#java-backend-projects) · [More projects](docs/PROJECTS.md)

| Walkthrough | Start here |
| --- | --- |
| Checkout and inventory | Explore RunwayStudio's storefront, then read the sequence diagram for a checkout and its stock updates. [Live storefront](https://runwaystudio-portfolio-demo.onrender.com) · [Checkout diagram](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ARCHITECTURE.md#checkout-đường-đọc-mã-và-bằng-chứng) |
| Booking and capacity | Run YangSlots locally with its sample workspace. Compare a hold with the concurrent reservation tests. [Local setup](https://github.com/nguyenhonggiang2407/YangSlots) · [Reservation tests](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/test/java/vn/yang/slots/ReservationsTest.java) |
| Roles and ownership | Compare the rental request workflow in YangRent with student and staff permissions in CampusDesk. [YangRent architecture](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/architecture.md) · [CampusDesk API tests](https://github.com/nguyenhonggiang2407/CampusDesk/blob/main/tests/api.test.ts) |

## Java backend projects

### 1. RunwayStudio

Fashion storefront with a private wardrobe and cash-on-delivery checkout. The backend locks inventory rows before writing the order, inventory changes, and order history in one transaction. MySQL acceptance tests cover buyers competing for the last item, checkout retries, and stock restoration after cancellation.

Java 17 · Spring Boot · Spring Data JPA · Flyway · MySQL / H2

[Repository](https://github.com/nguyenhonggiang2407/RunwayStudio) · [Checkout walkthrough](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ARCHITECTURE.md#checkout-đường-đọc-mã-và-bằng-chứng) · [MySQL tests](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/src/test/java/vn/runway/store/MySqlAcceptanceIT.java) · [CI](https://github.com/nguyenhonggiang2407/RunwayStudio/actions/workflows/ci.yml) · [Demo](https://runwaystudio-portfolio-demo.onrender.com)

The project builds on an inherited storefront. Its attribution records the baseline and unresolved rights for some inherited catalog images. [Attribution](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ATTRIBUTION.md)

### 2. YangSlots

Resource booking with five-minute holds. When time windows overlap, the backend checks peak concurrent usage before accepting a hold. Tests cover competing requests, expired holds, and retries with the same request key.

Java 17 · Spring Boot · Spring JDBC · H2 · Docker

[Repository and local setup](https://github.com/nguyenhonggiang2407/YangSlots) · [Booking service](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/main/java/vn/yang/slots/BookingService.java) · [Reservation tests](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/test/java/vn/yang/slots/ReservationsTest.java) · [CI](https://github.com/nguyenhonggiang2407/YangSlots/actions/workflows/ci.yml)

Run this project locally. The repository preserves the original DTDD branch history and credits its MIT reference. [Source credits](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/NOTICE.md)

## Full-stack and integration projects

| Project | Stack and review focus | Evidence and demo |
| --- | --- | --- |
| **3. [YangRent](https://github.com/nguyenhonggiang2407/YangRent)** | React, FastAPI, SQLAlchemy, PostgreSQL / SQLite. Rental requests, backend role checks, and a concurrency test for competing requests on one room. | [CI](https://github.com/nguyenhonggiang2407/YangRent/actions/workflows/ci.yml) · [Demo](https://yangrent-portfolio-demo.onrender.com/) |
| **4. [CampusDesk](https://github.com/nguyenhonggiang2407/CampusDesk)** | React, TypeScript, Express, SQLite. Student/staff ticket workflows, private notes and version-based edit conflict checks. | [CI](https://github.com/nguyenhonggiang2407/CampusDesk/actions/workflows/ci.yml) · [Demo](https://giang-campusdesk.onrender.com) |
| **5. [YangHomestay](https://github.com/nguyenhonggiang2407/YangHomestay)** | PHP, JavaScript, Supabase PostgreSQL. Availability, server-side pricing and booking ownership. | [Architecture](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/architecture.md) · [CI](https://github.com/nguyenhonggiang2407/YangHomestay/actions/workflows/ci.yml) · [Demo](https://yanghomestay.helioho.st/) |
| **6. [YangHooks](https://github.com/nguyenhonggiang2407/YangHooks)** | Node.js, SQLite. Local webhook lab with HMAC verification, replay checks, and signing key rotation. | [CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml) · [Source credits](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/NOTICE.md) |

Render demos can take time to start. Use fictional details because temporary H2 and SQLite data can reset. YangRent uses mock payments. The repositories document test coverage and the scope of the demos. [YangRent source and image credits](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/source-notice.md) · [YangHomestay image credits](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/image-sources.md)

<details>
<summary>RunwayStudio storefront screenshot</summary>

[![RunwayStudio storefront showing demo products](https://raw.githubusercontent.com/nguyenhonggiang2407/RunwayStudio/main/docs/screenshots/home-desktop-1440.png)](https://github.com/nguyenhonggiang2407/RunwayStudio)

</details>

[See other projects, coursework, and source history](docs/PROJECTS.md)
