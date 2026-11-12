# Review the portfolio in five minutes

Start with the two Java projects. Each starts with a screenshot and a local walkthrough. The code and tests in these first sections are on the default branches.

## RunwayStudio checkout

1. Open the [storefront screenshot](https://raw.githubusercontent.com/nguyenhonggiang2407/RunwayStudio/main/docs/screenshots/home-desktop-1440.png) and the [short demo walkthrough](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/demo-script.md). The [hosted demo](https://runwaystudio-portfolio-demo.onrender.com/) can take time to start.
2. To try checkout locally, use JDK 17. On Windows PowerShell, run `.\mvnw.cmd clean verify`, then `java -jar target/runway-store-2.0.0.jar`. Open [localhost:8080](http://localhost:8080). Use fictional details for the cash-on-delivery simulation. [Setup](https://github.com/nguyenhonggiang2407/RunwayStudio#readme)
3. Follow the account lock and transaction boundary in the [checkout sequence](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/docs/ARCHITECTURE.md#checkout-đường-đọc-mã-và-bằng-chứng). The [MySQL tests](https://github.com/nguyenhonggiang2407/RunwayStudio/blob/main/src/test/java/vn/runway/store/MySqlAcceptanceIT.java) cover ten buyers competing for one item and stock restoration after cancellation.

## YangSlots booking

1. Preview the [hold dialog](https://raw.githubusercontent.com/nguyenhonggiang2407/YangSlots/main/docs/screenshots/hold.png).
2. To try a booking with JDK 17, run `.\mvnw.cmd spring-boot:run` in Windows PowerShell. Open [localhost:3150](http://127.0.0.1:3150), select **Thử lịch mẫu**, open **Phòng họp Lotus** and choose **10:00** to hold and confirm a slot. [Setup](https://github.com/nguyenhonggiang2407/YangSlots#readme)
3. Follow the workspace lock and capacity check in [BookingService](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/main/java/vn/yang/slots/BookingService.java). The [reservation tests](https://github.com/nguyenhonggiang2407/YangSlots/blob/main/src/test/java/vn/yang/slots/ReservationsTest.java) cover competing holds, expiry and reuse of a request key.

## Selected engineering changes

### RunwayStudio

- **Checkout retry · Open PR.** Reusing the same key with changed submitted checkout details now returns HTTP 409 in the proposed change. See the fingerprint, migration and regression test together. [RunwayStudio #14 diff](https://github.com/nguyenhonggiang2407/RunwayStudio/pull/14/files)
- **Mobile storefront · Open PR.** The narrow-screen layout keeps the navigation and shopping action visible, with credited photographs and responsive browser checks. [RunwayStudio #16 diff](https://github.com/nguyenhonggiang2407/RunwayStudio/pull/16/files)

### YangSlots

- **Recover a saved reservation · Merged.** The client reuses the same request key if a successful response cannot be read. The browser regression simulates an interrupted response and checks that there is one hold. [YangSlots #3 diff](https://github.com/nguyenhonggiang2407/YangSlots/pull/3/files)
- **Keyboard booking · Open PR.** The flow restores focus after a slot is rerendered and exposes the dialog title to assistive technology. [YangSlots #4 diff](https://github.com/nguyenhonggiang2407/YangSlots/pull/4/files)

### YangRent

- **Concurrent rental requests · Merged.** The backend serializes requests to hold one room. The test uses two independent SQLite connections and confirms that only one pending request is created. [YangRent #3 diff](https://github.com/nguyenhonggiang2407/YangRent/pull/3/files)

## Four complementary examples

- **YangRent** · Follow a rental request and ownership checks in the [architecture notes](https://github.com/nguyenhonggiang2407/YangRent/blob/main/docs/architecture.md). [Demo](https://yangrent-portfolio-demo.onrender.com/) · [CI](https://github.com/nguyenhonggiang2407/YangRent/actions/workflows/ci.yml)
- **CampusDesk** · Read the [API tests](https://github.com/nguyenhonggiang2407/CampusDesk/blob/main/tests/api.test.ts) for ticket visibility, private notes and stale version handling. [Demo](https://giang-campusdesk.onrender.com/) · [CI](https://github.com/nguyenhonggiang2407/CampusDesk/actions/workflows/ci.yml)
- **YangHomestay** · Trace booking and server-side pricing in the [architecture](https://github.com/nguyenhonggiang2407/YangHomestay/blob/main/docs/architecture.md). [Demo](https://yanghomestay.helioho.st/) · [Offline CI](https://github.com/nguyenhonggiang2407/YangHomestay/actions/workflows/ci.yml)
- **YangHooks** · Compare raw-body signing in [signature.mjs](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/lib/signature.mjs) with the [API tests](https://github.com/nguyenhonggiang2407/YangHooks/blob/main/test/api.test.mjs). [Local setup](https://github.com/nguyenhonggiang2407/YangHooks#readme) · [CI](https://github.com/nguyenhonggiang2407/YangHooks/actions/workflows/ci.yml)

[Profile and project sources](../README.md#project-sources) · [Full project catalog](PROJECTS.md)
