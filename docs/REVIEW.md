# Review the portfolio in five minutes

Start with the two Java projects. The paths below point to the default branches so you can follow the evidence without checking out a pull request.

## RunwayStudio · checkout consistency

1. Read the [checkout sequence](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ARCHITECTURE.md#checkout-đường-đọc-mã-và-bằng-chứng). Follow the account lock, stock check and transaction boundary.
2. Open the [MySQL acceptance tests](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/src/test/java/vn/runway/store/MySqlAcceptanceIT.java). Look for ten buyers competing for one unit and stock restoration after cancellation.
3. For the product flow, use the [storefront screenshot](https://raw.githubusercontent.com/nguyenhonggiang2407/RunwayStudio/main/docs/screenshots/home-desktop-1440.png), [local setup](https://github.com/nguyenhonggiang2407/RunwayStudio#readme) or [hosted demo](https://runwaystudio-portfolio-demo.onrender.com/) if available. The hosted demo timed out during the previous portfolio check. Checkout is cash-on-delivery simulation.

## YangSlots · capacity over time

1. Follow hold and confirmation in [BookingService](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/main/java/vn/yang/slots/BookingService.java). Note the workspace lock and how capacity checks handle overlapping intervals.
2. Open the [reservation tests](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/test/java/vn/yang/slots/ReservationsTest.java). Look for concurrent holds, expiry and reuse of a request key.
3. Preview the [hold dialog](https://raw.githubusercontent.com/nguyenhonggiang2407/YangSlots/main/docs/screenshots/hold.png) or [run it locally](https://github.com/nguyenhonggiang2407/YangSlots#readme) and select **Thử lịch mẫu**.

## Four complementary examples

- **YangRent** · Follow a rental request and ownership checks in the [architecture notes](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/architecture.md). [Demo](https://yangrent-portfolio-demo.onrender.com/) · [CI](https://github.com/nguyenhonggiang2407/YangRent/actions/workflows/ci.yml)
- **CampusDesk** · Read the [API tests](https://github.com/nguyenhonggiang2407/CampusDesk/blob/main/tests/api.test.ts) for ticket visibility, private notes and stale version handling. [Demo](https://giang-campusdesk.onrender.com/) · [CI](https://github.com/nguyenhonggiang2407/CampusDesk/actions/workflows/ci.yml)
- **YangHomestay** · Trace booking and server-side pricing in the [architecture](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/architecture.md). [Demo](https://yanghomestay.helioho.st/) · [Offline CI](https://github.com/nguyenhonggiang2407/YangHomestay/actions/workflows/ci.yml)
- **YangHooks** · Compare raw-body signing in [signature.mjs](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/lib/signature.mjs) with the [API tests](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/test/api.test.mjs). [Local setup](https://github.com/nguyenhonggiang2407/YangHooks#readme) · [CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml)

## Changes under review

Review the PR diff and its Checks tab for these changes. The PR status is independent of the hosted demo.

- Reject changed checkout details when a RunwayStudio request key is reused. [RunwayStudio #14](https://github.com/nguyenhonggiang2407/RunwayStudio/pull/14)
- Keep keyboard focus through the YangSlots reservation flow. [YangSlots #4](https://github.com/nguyenhonggiang2407/YangSlots/pull/4)
- Wait for session restoration when opening saved rooms directly. [YangRent #4](https://github.com/nguyenhonggiang2407/YangRent/pull/4)
- Reserve a login attempt before asynchronous password verification. [CampusDesk #2](https://github.com/nguyenhonggiang2407/CampusDesk/pull/2)
- Show the new signing key immediately after successful rotation. [YangHooks #2](https://github.com/nguyenhonggiang2407/YangHooks/pull/2)

[Profile and project sources](../README.md#project-sources) · [Full project catalog](PROJECTS.md)
