# Dependency Security Remediation — 2026-09-17

Scope: remediate all Critical and High dependency vulnerabilities in
`lacreativodesign/bizosto-website` and add a permanent, blocking-capable
dependency audit check.

No product, design, content, pricing, routing or business-logic changes are
included in this work.

---

## BEFORE

| Item | Value |
| --- | --- |
| Base `main` SHA | `83ae064871d1b0b48ab5c2c696a023f1c377af72` |
| Node.js (local + CI) | 22.x |
| npm | 10.9.7 |
| `package-lock.json` | lockfileVersion 3 |
| Next.js | 16.1.1 |
| React / React DOM | 19.2.3 |
| TypeScript | 5.9.3 |
| Direct dependencies | `firebase-admin ^13.6.0`, `lucide-react ^0.542.0`, `next 16.1.1`, `react 19.2.3`, `react-dom 19.2.3` |
| Dev dependencies | `@tailwindcss/postcss ^4`, `@types/node ^20`, `@types/react ^19`, `@types/react-dom ^19`, `eslint ^9`, `eslint-config-next 16.1.1`, `tailwindcss ^4`, `typescript ^5` |

### `npm audit` totals at base

| Severity | Count |
| --- | --- |
| Critical | 4 |
| High | 12 |
| Moderate | 12 |
| Low | 2 |
| **Total** | **30** |

`npm audit --audit-level=high` → **exit 1 (FAIL)**.

Those 30 rows are npm's *per-package* grouping. Counted the way GitHub
Dependabot counts (one row per advisory), the same base tree carries
**92 unique GHSA advisories / 102 advisory instances**
(5 critical, 55 high, 36 moderate, 6 low instances), which reconciles with
the owner-reported 87 open Dependabot alerts.

### GitHub Dependabot live baseline

**REST API available: NO. Live totals obtained: YES.**

`GET /repos/lacreativodesign/bizosto-website/dependabot/alerts` returns
`403 Resource not accessible by integration` for this session's credential —
the GitHub App installation does not carry the `security_events` /
`vulnerability_alerts` read scope. Ordinary repository endpoints authenticate
normally, so this is a scope limitation, not an outage. Per-alert IDs and
states could therefore not be enumerated.

GitHub did, however, report the authoritative totals for the **default
branch** on push:

> GitHub found 87 vulnerabilities on lacreativodesign/bizosto-website's
> default branch (5 critical, 43 high, 33 moderate, 6 low).

| Source | Total | Critical | High | Moderate | Low |
| --- | --- | --- | --- | --- | --- |
| GitHub Dependabot (live, `main`) | **87** | **5** | 43 | 33 | **6** |
| `npm audit` advisory instances at base | 102 | **5** | 55 | 36 | **6** |
| `npm audit` unique GHSA advisories | 92 | — | — | — | — |
| `npm audit` package rows at base | 30 | 4 | 12 | 12 | 2 |

Critical (5) and Low (6) match Dependabot exactly. The High and Moderate
instance counts run higher in `npm audit` because it reports an advisory once
per affected copy in the tree — `minimatch` 3.x and 9.x, `brace-expansion`
1.x and 2.x, and `postcss` 8.4.31 and 8.5.6 each appear twice — whereas
Dependabot de-duplicates per manifest and package. The two sources describe
the same underlying set.

The 5 live Critical alerts map to exactly the 5 Critical advisory instances
remediated below: GHSA-m7jm-9gc2-mpf2 (`fast-xml-parser`),
GHSA-p293-qw3h-jr36 and GHSA-2xp9-vwfh-vxw4 (`next`),
GHSA-xq3m-2v4x-88gg (`protobufjs`) and GHSA-xv26-6w52-cph6
(`websocket-driver`).

---

## REMEDIATION

Strategy: smallest safe change. Every patched version below already satisfied
its parents' existing semver ranges, so the fixes were reached by bumping the
one direct dependency that was pinned (`next`) and refreshing the lockfile
within the declared ranges.

**No `overrides` entries were required. No `npm audit fix --force`.
No `--legacy-peer-deps`. No severity threshold was lowered. No Dependabot
alert was dismissed.**

### Direct dependency changes

| Package | Old | New | Why | Semver major? |
| --- | --- | --- | --- | --- |
| `next` | 16.1.1 | 16.3.5 | 2 Critical + 13 High advisories, incl. GHSA-p293-qw3h-jr36 and GHSA-2xp9-vwfh-vxw4 (unauthenticated RCE, patched in 16.3.3). Also carries patched `postcss` 8.5.23 and `sharp` ^0.35.4. | No (16.x → 16.x) |
| `eslint-config-next` | 16.1.1 | 16.3.5 | Kept in lockstep with `next`, as the package requires. | No |

### Critical remediation matrix

| Advisory (crit/high closed) | Package | Old | Patched threshold | Final | Scope | Result |
| --- | --- | --- | --- | --- | --- | --- |
| GHSA-m7jm-9gc2-mpf2, GHSA-jmr7-xgp7-cmfj, GHSA-8gc5-j5rx-235r | `fast-xml-parser` | 4.5.3 | ≥ 4.5.5 | **5.11.1** | transitive (runtime, `firebase-admin` → `@google-cloud/storage`) | Fixed |
| GHSA-p293-qw3h-jr36, GHSA-2xp9-vwfh-vxw4 + 13 High | `next` | 16.1.1 | ≥ 16.3.3 | **16.3.5** | **direct** (runtime) | Fixed |
| GHSA-xq3m-2v4x-88gg + 5 High | `protobufjs` | 7.5.4 | > 7.6.4 | **7.6.6** | transitive (runtime, `firebase-admin` → `@google-cloud/firestore` → `google-gax`) | Fixed |
| GHSA-xv26-6w52-cph6 | `websocket-driver` | 0.7.4 | ≥ 0.7.5 | **0.7.5** | transitive (runtime, `firebase-admin` → `@firebase/database` → `faye-websocket`) | Fixed |

### High remediation matrix

| Advisory (crit/high closed) | Package | Old | Patched threshold | Final | Scope | Result |
| --- | --- | --- | --- | --- | --- | --- |
| GHSA-5375-pq7m-f5r2, GHSA-99f4-grh7-6pcq | `@grpc/grpc-js` | 1.14.3 | ≥ 1.14.4 | **1.14.4** | transitive (runtime) | Fixed |
| GHSA-3jxr-9vmj-r5cp, GHSA-mh99-v99m-4gvg, GHSA-rgw5-rvv9-x895 | `brace-expansion` | 1.1.12, 2.0.2 | ≥ 1.1.18 / ≥ 2.1.4 | **1.1.21, 5.0.12** | transitive (dev) | Fixed |
| GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g | `browserslist` | 4.28.1 | > 4.28.6 | **4.29.0** | transitive (dev) | Fixed |
| GHSA-25h7-pfq9-p65f, GHSA-rf6f-7fwh-wjgh | `flatted` | 3.3.3 | > 3.4.1 | **3.4.4** | transitive (dev) | Fixed |
| GHSA-hmw2-7cc7-3qxx | `form-data` | 2.5.5 | ≥ 2.5.6 | **2.5.6** | transitive (runtime) | Fixed |
| GHSA-52cp-r559-cp3m, GHSA-5p4m-2wfm-xmqj, GHSA-2883-xcg3-v3hh | `js-yaml` | 4.1.1 | ≥ 4.3.2 | **4.3.2** | transitive (dev) | Fixed |
| GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj, GHSA-23c5-xmqv-rm74 | `minimatch` | 3.1.2, 9.0.5 | ≥ 3.1.4 / ≥ 9.0.7 | **3.1.5, 10.2.6** | transitive (dev) | Fixed |
| GHSA-28wg-ghj8-5hjv, GHSA-2v37-7h3g-55p8, GHSA-xwg4-73v4-xw9w | `nanoid` | 3.3.11 | ≥ 3.3.18 | **3.3.19** | transitive (runtime, via `postcss`) | Fixed |
| GHSA-2328-f5f3-gj25, GHSA-q67f-28xg-22rw, GHSA-5m6q-g25r-mvwx, GHSA-ppp5-5v6c-4jwp | `node-forge` | 1.3.3 | ≥ 1.4.0 | **removed from tree** | transitive (runtime) | Fixed — `firebase-admin` dropped this dependency between 13.6.0 and 13.10.0. Not removed by hand. |
| GHSA-c2c7-rcm5-vvqj | `picomatch` | 2.3.1, 4.0.3 | ≥ 2.3.2 / ≥ 4.0.4 | **2.3.2, 4.0.7** | transitive (dev) | Fixed |
| GHSA-6g55-p6wh-862q, GHSA-r28c-9q8g-f849 | `postcss` | 8.4.31, 8.5.6 | > 8.5.22 | **8.5.23, 8.5.28** | transitive (8.4.31 was pinned by `next` 16.1.1) | Fixed |
| GHSA-f88m-g3jw-g9cj, GHSA-rgj7-g3m4-5g8c | `sharp` | 0.34.5 | ≥ 0.35.4 | **0.35.4** | transitive (optional dep of `next`) | Fixed |

`firebase-admin` moved 13.6.0 → 13.10.0 inside its existing `^13.6.0` range,
which is what carried several of the transitive fixes above.

### Compatibility notes

- **React 19.2.3 unchanged.** `next@16.3.5` declares `react`/`react-dom`
  peer `^19.0.0`; no React change was needed or made.
- **No code migration was required.** Next.js 16.1 → 16.3 is a minor bump;
  `next.config.ts`, App Router usage, `app/api/leads/route.ts` (nodejs
  runtime), `app/og/route.tsx` (edge runtime), `sitemap.ts`, `robots.ts`,
  metadata and image `remotePatterns` all build and run unmodified.
- **All direct dependencies still resolve inside their declared semver
  ranges** (verified programmatically).
- Next.js 16.3.x emits a new build-time deprecation warning for the Edge
  Runtime on `app/og/route.tsx`. It is a warning, not an error; the route
  builds and returns a valid PNG. Migrating that route is deliberately out of
  scope for this security change.

---

## AFTER / PR HEAD

The exact final head SHA is recorded in the pull request description.

### `npm audit` totals at PR head

| Severity | Count |
| --- | --- |
| Critical | **0** |
| High | **0** |
| Moderate | 8 |
| Low | 0 |
| **Total** | **8** |

`npm audit --audit-level=high` → **exit 0 (PASS)**.

Verified from a clean `rm -rf node_modules && npm ci`, so the committed
lockfile alone reproduces the remediated tree — the same thing CI does.

### Dependency tree

`npm ls --all` → exit 0, **0 invalid, 0 unmet, 0 peer conflicts**.

The 6 `extraneous` entries npm reports (`@img/sharp-wasm32`, `@emnapi/*`,
`@napi-rs/wasm-runtime`, `@tybys/wasm-util`) are sharp's WASM fallback chain.
They are present in `main`'s lockfile too and are not introduced by this
change.

### Validation at PR head

| Gate | Result |
| --- | --- |
| `npm ci` (clean) | Pass |
| `npm run security:audit` | **Pass (exit 0)** |
| `npm run lint` | Pass (exit 0) |
| `npx tsc --noEmit` | Pass (exit 0) |
| `npm run build` | Pass — 37 routes generated |
| Automated test suites | **None exist in this repository** (no test script, no test files). Nothing was skipped, disabled or deleted. |

### Behavioural regression evidence

The production build of `main` (Next 16.1.1) and of this branch (Next 16.3.5)
were both served and every public route fetched from each:

- **21 routes compared. 0 differences in visible text. 0 differences in the
  CSS class stream.** Design, copy, pricing figures and layout are identical.
- The only text delta is `sitemap.xml`'s `lastModified` value, which is
  `new Date()` and therefore changes on every request by design.
- The raw-HTML deltas are limited to Next's own build artifacts (the RSC
  build-id comment and font asset hash naming), not application output.

Lead intake (`POST /api/leads`) was exercised on the upgraded build along the
paths that return *before* any Firestore write, so no lead documents were
created:

| Case | Expected | Actual |
| --- | --- | --- |
| Wrong content-type | 400 | 400 `BAD_REQUEST` |
| Honeypot field filled | 400 | 400 `BAD_REQUEST` |
| Missing name | 400 | 400 `BAD_REQUEST` |
| Invalid email | 400 | 400 `BAD_REQUEST` |
| Missing company | 400 | 400 `BAD_REQUEST` |
| `GET` on POST-only route | 405 | 405 |
| Rate limit (>10 per window) | 429 | 429 |

Forms, JSON-LD structured data, `og:image` metadata, canonical tags, the
analytics snippet, the theme toggle and `/og` image generation (a valid
280 KB PNG) all render on the upgraded build.

---

## THE BLOCKING AUDIT GATE

`.github/workflows/dependency-security.yml`

- Stable check-run context: **`dependency-security`** (job id and job `name`
  are both exactly that, and there is no matrix to suffix it).
- Triggers: `pull_request` → `main`, `push` → `main`, `workflow_dispatch`.
- **No path filters**, so the check cannot become a required check that never
  runs.
- `permissions: contents: read` only. No PAT, no secrets context, no `env:`
  block.
- No `continue-on-error`, no `|| true`, no `if:` skip conditions.
- Runs `npm ci` then `npm run security:audit`
  (`npm audit --audit-level=high`) against the **complete** lockfile.
  `--omit=dev` is deliberately not used: a compromised build-time package is
  a supply-chain risk too.

The gate was verified in both directions, not just read:

- **Negative control** — run against a tree containing a known High advisory
  (`minimatch@3.0.4`): **exit 1**, blocks.
- **Positive control** — run against this branch: **exit 0**, passes.

Note: `npm audit` queries the live GitHub Advisory Database, so this gate is
intentionally time-sensitive. A newly published Critical/High advisory will
turn it red without any code change. That is the intended behaviour of a
blocking dependency gate.

---

## REMAINING FINDINGS

**8 Moderate. 0 Low. 0 High. 0 Critical.**

All 8 rows trace to a **single** root advisory:

| Advisory | Package | Installed | First patched | Path |
| --- | --- | --- | --- | --- |
| GHSA-w5hq-g745-h8pq — missing buffer bounds check in uuid v3/v5/v6 when `buf` is supplied | `uuid` | 9.0.1 | 11.1.1 | `firebase-admin` → `@google-cloud/{firestore,storage}` → `google-gax` / `gaxios` / `teeny-request` / `retry-request` → `uuid` |

The other 7 rows (`gaxios`, `google-gax`, `retry-request`, `teeny-request`,
`@google-cloud/firestore`, `@google-cloud/storage`, `firebase-admin`) are
"depends on a vulnerable version of uuid" propagation of that one advisory.

### Why these remain

- Every consumer declares `uuid@^9.x`. Forcing `uuid@11` through an
  `overrides` entry is a **two-major** jump across a declared `^9` constraint
  into an ESM-first release that dropped deep CJS entrypoints. That would be
  an unproven override, not a fix.
- npm's only offered remedy is `firebase-admin@14.4.0`, a **semver-major**
  upgrade that also raises the engine floor to Node >= 22. It rewrites the
  dependency stack directly underneath `POST /api/leads`, the revenue-
  carrying lead-intake path, and belongs in its own change with its own
  Firestore verification — not in a Critical/High remediation.
- Severity is Moderate, and the advisory concerns callers that pass an
  explicit `buf` argument to `uuid` v3/v5/v6. This application does not call
  `uuid` directly at all.

### Recommended follow-up

Track `firebase-admin` 14.x as a separate, scoped upgrade: confirm the Vercel
Node runtime is >= 22, upgrade, and re-verify a real lead write end-to-end
against Firestore. That change closes all 8 remaining Moderate findings.

---

## DEPENDABOT CLOSURE PROOF

Dependabot evaluates the **default branch**. This pull request is manual-merge
only, so the 87 alerts on `main` remain OPEN until it is merged. No claim of
"0 open alerts" is made here, and **no alert was dismissed, suppressed or
manually closed.**

What is proven instead is *prospective* remediation: every Critical and High
advisory present on `main` maps to a patched version in this branch's
`package-lock.json`.

| Severity | Advisory instances on `main` | Mapped to a patched version at this head |
| --- | --- | --- |
| Critical | 5 | 5 (100%) |
| High | 55 npm instances / 43 Dependabot alerts | all (100%) |

The per-package mapping is the Critical and High matrices above: each row
gives the vulnerable version on `main`, the first patched version, and the
version this lockfile actually resolves. A clean `npm ci` from this lockfile
yields 0 Critical and 0 High, and `npm audit --audit-level=high` exits 0.

After a manual merge, Dependabot should re-evaluate `main` and settle to
Critical 0 / High 0, with the 8 Moderate `uuid` alerts documented below
remaining until the separate `firebase-admin` 14.x follow-up lands.

---

## OWNER ACTION REQUIRED — RULESET

This PR **creates and proves** the check. It does **not** and cannot make it
branch-blocking; that is a live ruleset mutation only the owner can perform.

| Field | Value |
| --- | --- |
| Repository | `lacreativodesign/bizosto-website` |
| Ruleset | Production Main Protection |
| Ruleset ID | 23581080 |
| Change | **Add** `dependency-security` (GitHub Actions) as an additional required status check |
| Preserve | Vercel / integration id 8329 — do not replace it |
| Required checks afterwards | Vercel **and** `dependency-security` |
| Required approving reviews | Unchanged by this PR |

Until the owner makes that change, the audit gate is **advisory on the PR,
not enforced at the branch-protection layer.**

No repository security setting was modified by this work. Dependabot alerts,
secret scanning, push protection and the dependency graph are untouched, and
no alert was dismissed.
