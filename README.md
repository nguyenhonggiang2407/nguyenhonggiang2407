# Nguyễn Hồng Giang

**Java Backend / Full-stack internship** · Hanoi, Vietnam

I’m an IT student looking for a part-time internship. I work with Java 17, Spring Boot, REST APIs, and SQL, with a focus on transactions, concurrent requests, and access control.

[Email](mailto:nguyenhonggiang.profile@gmail.com) · [5-minute review](docs/REVIEW.md) · [Selected engineering changes](docs/REVIEW.md#selected-engineering-changes) · [Project catalog](docs/PROJECTS.md)

## Java backend projects

### [RunwayStudio](https://github.com/nguyenhonggiang2407/RunwayStudio) · Store checkout

**Stack** · Java 17 · Spring Boot · JPA · Flyway · MySQL

Checkout locks inventory rows and commits the order, stock changes, and order history in one transaction. MySQL tests cover ten buyers competing for the last item, retries, and stock restoration after cancellation.

[Screenshot](https://raw.githubusercontent.com/nguyenhonggiang2407/RunwayStudio/main/docs/screenshots/home-desktop-1440.png) · [Local setup and demo](docs/REVIEW.md#runwaystudio-checkout) · [Checkout walkthrough](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ARCHITECTURE.md#checkout-đường-đọc-mã-và-bằng-chứng) · [MySQL tests](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/src/test/java/vn/runway/store/MySqlAcceptanceIT.java) · [CI](https://github.com/nguyenhonggiang2407/RunwayStudio/actions/workflows/ci.yml)

### [YangSlots](https://github.com/nguyenhonggiang2407/YangSlots) · Resource booking

**Stack** · Java 17 · Spring Boot · JDBC · H2 · Docker

A five-minute hold reserves capacity before confirmation. The backend checks peak usage across overlapping reservations. Tests cover competing requests, expired holds, and retries.

[Sample booking and local setup](docs/REVIEW.md#yangslots-booking) · [Booking service](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/main/java/vn/yang/slots/BookingService.java) · [Reservation tests](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/test/java/vn/yang/slots/ReservationsTest.java) · [CI](https://github.com/nguyenhonggiang2407/YangSlots/actions/workflows/ci.yml)

[![YangSlots reservation dialog with hold expiry and confirmation controls](https://raw.githubusercontent.com/nguyenhonggiang2407/YangSlots/main/docs/screenshots/hold.png)](https://github.com/nguyenhonggiang2407/YangSlots#readme)

## Full-stack and integration projects

- **[YangRent](https://github.com/nguyenhonggiang2407/YangRent)** · Rental requests, ownership checks, and competing requests for the same room. React, FastAPI, PostgreSQL. [Architecture](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/architecture.md) · [CI](https://github.com/nguyenhonggiang2407/YangRent/actions/workflows/ci.yml) · [Demo](https://yangrent-portfolio-demo.onrender.com/)
- **[CampusDesk](https://github.com/nguyenhonggiang2407/CampusDesk)** · Student and staff ticket permissions, private notes, and version checks for concurrent edits. React, TypeScript, Express, SQLite. [API tests](https://github.com/nguyenhonggiang2407/CampusDesk/blob/main/tests/api.test.ts) · [CI](https://github.com/nguyenhonggiang2407/CampusDesk/actions/workflows/ci.yml) · [Demo](https://giang-campusdesk.onrender.com/)
- **[YangHomestay](https://github.com/nguyenhonggiang2407/YangHomestay)** · Availability, server-side pricing, and booking ownership. PHP, JavaScript, Supabase PostgreSQL. [Architecture](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/architecture.md) · [CI](https://github.com/nguyenhonggiang2407/YangHomestay/actions/workflows/ci.yml) · [Demo](https://yanghomestay.helioho.st/)
- **[YangHooks](https://github.com/nguyenhonggiang2407/YangHooks)** · Local webhook lab for HMAC verification, replay checks, and signing key rotation. Node.js, SQLite. [Screenshot](https://raw.githubusercontent.com/nguyenhonggiang2407/YangHooks/main/docs/screenshots/receipt.png) · [CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml)

Hosted demos on Render can take time to start. Use fictional details when trying them. YangRent uses mock payments.

## Project sources

RunwayStudio builds on an inherited storefront. YangSlots and YangHooks retain the history of their original DTDD branches. The project notices document the original sources and image rights where applicable. [RunwayStudio](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ATTRIBUTION.md) · [YangSlots](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/NOTICE.md) · [YangHooks](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/NOTICE.md) · [YangRent](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/source-notice.md) · [YangHomestay](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/image-sources.md)

[Explore more projects and coursework](docs/PROJECTS.md)
