# T01 validation

Baseline: profile commit `3d02566d35ab4d55cb8e719e0e0f5d79c4e7a3aa` had a project catalog but no cross-repository audit or demo registry. No application repository was initially checked out in the workspace.

Executed on 2026-11-06 UTC using Node 24.19.0 and Git on Windows:

| Command | Result |
| --- | --- |
| `node --test scripts/audit-repositories.test.mjs` | exit 0; 4 tests passed, 0 failed |
| `node --check scripts/audit-repositories.mjs` | exit 0 |
| `node --check scripts/lib/readme-evidence.mjs` | exit 0 |
| `node scripts/audit-repositories.mjs --repos-root .. --output docs/evidence/inventory.json` | exit 0; all 21 checkouts inspected |
| Inventory assertions: 21 unique names, 11 unique application demo URLs | exit 0 |
| `git diff --check` | exit 0 |
| `node scripts/update-stats.mjs --snapshot` | exit 0; generated SVG differed from existing file; restored only that generated change to preserve scope |

Regression tests prevent README prose after a diagram fence being mistaken for executable commands, retain Windows commands, avoid credential-bearing URL discovery, and require missing checkouts to fail. No application builds are claimed by these tests. Historical CI is stored with its actual SHA and timestamp; screenshot-only HEADs are visibly distinguished.

Changed files: `scripts/audit-repositories.mjs`, `scripts/audit-repositories.test.mjs`, `scripts/lib/readme-evidence.mjs`, `docs/PORTFOLIO_AUDIT.md`, `docs/DEMO_REGISTRY.md`, `docs/PROJECTS.md`, `docs/evidence/inventory.json`, `docs/evidence/ci-baseline.json`, this validation record.

Limitations: source inspection is not a clean security/dependency certificate or proof of runtime correctness. Demo checks start UNVERIFIED and are updated separately in T02. Rollback: revert the T01 commit; no database or deployment was changed.
