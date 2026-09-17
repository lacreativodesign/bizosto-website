# P0-06 — main branch protection certification (Bizosto marketing website)

**Status: RULESET LIVE AND CORRECT — TWO CONTROLS STILL OPEN**

The `main` branch of this repository **is now protected**. The ruleset exists, is active, and was
verified field by field against the live GitHub API. Two other controls are not closed, and this
document keeps them apart rather than averaging them into a single verdict.

| Control                | State                                                                      |
| ---------------------- | -------------------------------------------------------------------------- |
| **Ruleset**            | ✅ **GREEN — live and applied**, id `23581080`, **two** required checks    |
| **Dependency gate**    | ✅ **GREEN and branch-required** — `dependency-security` (PR #61 merged)   |
| **Visibility**         | ⚠️ **OPEN** — repository is temporarily **public**; target is private      |
| **Independent review** | ⚠️ **OPEN** — required approvals `0`; no second collaborator exists        |
| **Plan**               | ⚠️ GitHub **Free**; **Pro or higher** still required for the final posture |

The ERP half of P0-06 lives in `lacreativodesign/nextjs-boilerplate` (PR #1011).

---

## 1. The ruleset — applied, live, verified

Read directly from `GET /repos/lacreativodesign/bizosto-website/rulesets/23581080` with an
authenticated request on 2026-09-17. It is the **only** ruleset on the repository.

| Field                                             | Live value                                                               | Verdict               |
| ------------------------------------------------- | ------------------------------------------------------------------------ | --------------------- |
| `id`                                              | `23581080`                                                               | **PASS**              |
| `name`                                            | `Production Main Protection`                                             | **PASS**              |
| `source` / `source_type`                          | `lacreativodesign/bizosto-website` / `Repository`                        | **PASS**              |
| `target`                                          | `branch`                                                                 | **PASS**              |
| `enforcement`                                     | `active`                                                                 | **PASS**              |
| `conditions.ref_name.include`                     | `["~DEFAULT_BRANCH"]`                                                    | **PASS**              |
| `conditions.ref_name.exclude`                     | `[]`                                                                     | **PASS**              |
| `bypass_actors`                                   | **present and `[]`**                                                     | **PASS**              |
| `current_user_can_bypass`                         | `never`                                                                  | **PASS**              |
| rules                                             | `deletion`, `non_fast_forward`, `pull_request`, `required_status_checks` | **PASS**              |
| `required_review_thread_resolution`               | `true`                                                                   | **PASS**              |
| `allowed_merge_methods`                           | `["merge"]`                                                              | **PASS**              |
| `require_code_owner_review`                       | `false`                                                                  | as certified          |
| `require_last_push_approval`                      | `false`                                                                  | as certified          |
| `dismiss_stale_reviews_on_push`                   | `false`                                                                  | as certified          |
| `require_extra_approval_for_unattributed_changes` | `false`                                                                  | as certified          |
| `strict_required_status_checks_policy`            | `true`                                                                   | **PASS**              |
| `do_not_enforce_on_create`                        | `false`                                                                  | **PASS**              |
| required check 1                                  | `Vercel`, integration `8329`                                             | **PASS**              |
| required check 2                                  | `dependency-security`, integration `15368`                               | **PASS**              |
| `required_approving_review_count`                 | **`0`**                                                                  | **OPEN GAP — see §3** |

`GET /branches/main` now reports `"protected": true`.

**`bypass_actors` being present matters as much as it being empty.** GitHub serves that field
only to callers with sufficient access to the ruleset, so an absent field means "not allowed to
look", never "there are none". The verifier fails an unobservable bypass list as
`ruleset.bypass_actors_unobservable` rather than defaulting it to empty — an earlier version of
the ERP verifier did default it, and independent review correctly rejected that as a false green.
The read above was authenticated, the field was present, and it was `[]`.

Because the id is now recorded, the verifier **pins its read to `23581080`** instead of
discovering the ruleset by name. Name discovery survives only as the fallback for a repository
whose id has not been recorded yet.

### The dependency-security gate

`dependency-security` arrived with **PR #61**, merged to main on 2026-09-17 at
`632f5daf6e5981dd610b59199c7230f38b8cd2c0`. The owner then added it to ruleset 23581080, so it
is **branch-required, not advisory**.

|                       |                                                                     |
| --------------------- | ------------------------------------------------------------------- |
| Workflow              | `.github/workflows/dependency-security.yml`                         |
| Emitted by            | **GitHub Actions**, integration `15368`                             |
| Runs                  | `npm ci` then `npm run security:audit`                              |
| `security:audit`      | `npm audit --audit-level=high`                                      |
| Scope                 | the **whole** lockfile, dev dependencies included — no `--omit=dev` |
| Live on main          | ✅ success — run `35264726041`, job `105348912555`                  |
| Baseline after PR #61 | **0 critical, 0 high** (8 moderate, 0 low)                          |

It fails on **any** high or critical advisory. `next` is on `16.3.5`.

The workflow is deliberately **not** path-filtered, and that matters: a required check which is
skipped for pull requests touching unrelated files leaves GitHub waiting on it forever, which
would block every such merge. That is the same dead-required-check failure mode this
certification guards against for `Vercel`.

Both integration ids are pinned. A check merely _named_ `dependency-security`, posted by
anything other than GitHub Actions, does not satisfy the requirement — and neither does
`dependency-security-report`, `Dependency Security`, or any other near-miss. Losing either
context, or re-pointing either, is P0-06 drift. The contract is directional, so the owner may
add further required checks without failing the record; these two may never disappear.

---

## 2. Visibility — OPEN, and the verifier says so

**This repository is currently PUBLIC. That is not the target state.**

It was published so the ruleset could be created at all: GitHub Free serves rulesets on public
repositories only, and refuses them on private ones with

```
403 "Upgrade to GitHub Pro or make this repository public to enable this feature."
```

That is a temporary expedient, not a remedy. This repository holds proprietary Bizosto marketing
source and must end up private.

So `expectedVisibility` stays `"private"` in the contract, and a live verifier run today
**reports a `repository.visibility` failure**:

```
FAIL  repository.visibility: lacreativodesign/bizosto-website is PUBLIC but is certified
      private. Publishing proprietary source is not an acceptable substitute for branch
      protection — the correct owner action is a GitHub Pro (or higher) plan, which serves
      rulesets on private repositories. Restore this repository to private.
```

**That failure is correct and intended.** It must not be silenced by changing the expectation to
`public`; doing so would convert an open owner gap into a false green. The certification suite
asserts the expectation is `private` and that a public reading fails, so the escape hatch is
closed by test rather than by convention.

> ### ⚠️ OWNER ACTION A — plan, then privacy, then re-verify
>
> 1. **Upgrade the `lacreativodesign` account to GitHub Pro or higher.** Account-level billing;
>    only the owner can do it.
> 2. **Make this repository private again.**
> 3. **Re-verify that ruleset `23581080` survived the visibility change** — run
>    `node scripts/verify-github-main-protection.mjs --repo=website`, or re-run the certification
>    workflow. Do not assume the ruleset persisted; read it.
>
> Do **not** do step 2 before step 1 while on Free: making the repository private while the plan
> still refuses private-repository rulesets risks losing the protection you just gained. The plan
> comes first.

---

## 3. Independent review — OPEN

`required_approving_review_count` is `0`, and the live ruleset existing does not change that.

This repository has exactly one collaborator — `lacreativodesign`, admin — and that account
authors every pull request. GitHub does not permit an author to approve their own pull request,
so raising the count to `1` today would not add a review; it would stop anything merging.

Explicitly **not** done: no bot approval, no second account controlled by the author presented as
independent review, no automated self-approval path.

> ### ⚠️ OWNER ACTION B — closing the review gap
>
> Two steps, **in this order**. The second alone stops merges.
>
> 1. **Grant a second human write access to this repository.** The ERP repository needs its
>    **own separate** collaborator — they do not share one.
> 2. **Then** set `required_approving_review_count: 1` on ruleset `23581080`, **and** set
>    `certifiedFloor: 1` / `gapOpen: false` in
>    [`p0-06-main-protection.certified.json`](./p0-06-main-protection.certified.json).
>
> The suite fails if `gapOpen` goes `false` while `certifiedFloor` is still `0`, so the gap cannot
> be closed on paper.
>
> Worth doing at the same time, and only then: `dismiss_stale_reviews_on_push: true` and
> `require_last_push_approval: true`.

---

## 4. What this change contains

| File                                                  | Role                                                             |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| `docs/security/p0-06-main-protection.certified.json`  | The contract: what must be true of `main`. Holds no credential.  |
| `scripts/verify-github-main-protection.mjs`           | Fail-closed verifier. Dependency-free.                           |
| `.github/workflows/main-protection-certification.yml` | Runs the verifier and the prose guard daily and on demand. **Not** a required check. |
| `docs/security/p0-06-main-protection.md`              | This document.                                                   |

Nothing under `app/`, `components/`, `lib/` or `public/` is touched. No product behaviour, UI or
copy changes.

### Why this repository verifies itself

A job token issued to the ERP repository cannot read this one once it is private — GitHub answers
404 — and a cross-repository read that fails must never be reported as a successful certification.
So rather than hand one repository a credential for the other, each verifies itself under its own
automatic job token. Neither vouches for the other, and no personal access token is stored or
required.

### Why the workflow also guards its own prose

The workflow has a second step that scans the contract and the verifier for claims that have gone
stale. It exists because four sentences in this certification did exactly that, and prose does not
fail a build on its own.

Two were caught by independent review. Two were not:

- one survived a rewrite whose entire purpose was to remove it — it asserted that both
  repositories were public and justified the credential model on unauthenticated reads, which is
  the same false-green as defaulting an unobservable bypass list;
- one lived in the **other** repository's copy of this contract, claiming this repository was
  already private. It was found by diffing the two copies against each other, not by review. The
  guard written for the first miss did not catch it, because none of its patterns covered that
  phrasing.

The step asserts eight phrases **absent** and four **present** — because deleting a sentence is as
much drift as keeping a false one, and is how an open gap quietly stops being reported. It runs
dependency-free: this repository has no test runner, and the ERP repository's Jest suite cannot
reach across repositories, least of all once the private posture is restored. The workflow file
itself is deliberately excluded from the scan; it is the scanner, and it contains every phrase as
its own pattern.

Four mutants confirm it has teeth, each producing the right diagnosis rather than a generic
failure: reinstating the "already private" claim, deleting the `CURRENTLY PUBLIC` admission,
lowering the recorded audit gate from `high` to `critical`, and removing `dependency-security`
from the record. The contract was restored and re-verified by SHA-256 after each.

### Why the certification workflow is not a required check

It reads the live ruleset. Requiring it would mean that the day the ruleset is wrong is the day
you cannot merge the pull request that fixes it — the control would block its own repair. It
reports; it does not gate. The two checks that **are** required are `Vercel` and
`dependency-security` — see §1.

---

## 5. Running it

```bash
node scripts/verify-github-main-protection.mjs --repo=website
```

**Expected output today:** every ruleset invariant passes, and the run exits non-zero on the
visibility failure in §2, with the approval gap in §3 reported as a notice. A clean exit is not
expected until both owner actions are done.

---

## 6. Dependency vulnerabilities — resolved by PR #61

An earlier revision of this document recorded 4 critical and 12 high npm advisories as a
pre-existing finding, out of scope for a branch-protection certification and not fixed here.

**That finding is now closed.** PR #61 remediated it and was merged to main on 2026-09-17:

|            | Before PR #61 | After PR #61                               |
| ---------- | ------------- | ------------------------------------------ |
| Critical   | 4             | **0**                                      |
| High       | 12            | **0**                                      |
| Moderate   | 12            | 8                                          |
| Audit gate | none          | **`dependency-security`, branch-required** |

The remediation also added the gate that stops it recurring, and the owner made that gate a
required status check — so the audit is now enforced on `main` rather than merely available.
`next` moved to `16.3.5`.

This certification neither performed nor takes credit for that remediation; it records it
because the required-check list it certifies now depends on it.

---

## 7. Secret-exposure audit

This repository has had public windows, so its **entire git history** was scanned — not just
`HEAD`. Re-run on 2026-09-17 after the most recent publication.

**Scope.** All 61 local branches (every remote branch materialised locally), 0 tags, **132
reachable commits**, 76 of them non-merge. History begins 2026-01-07.

**Tools.** `gitleaks 8.21.2` (`--log-opts=--all`), `trufflehog 3.82.13` (git mode, full history,
verification enabled), and a targeted sweep over every non-merge commit for Stripe
secret/restricted/webhook keys, Google API keys, Firebase API keys, GCP service-account material,
private-key blocks, GitHub PATs, Slack tokens, AWS access and secret keys, Vercel tokens, SendGrid
keys, FCM legacy keys, database and SMTP URLs carrying passwords, `SMTP_PASS` assignments, and
OAuth client secrets.

| Scanner                              | Result                                       |
| ------------------------------------ | -------------------------------------------- |
| trufflehog, verification enabled     | **0 detections, 0 verified**                 |
| targeted high-risk sweep, 76 commits | **0 hits**                                   |
| gitleaks                             | 5 findings, all one test fixture — see below |

**The five gitleaks findings are false positives.** All five are the same literal on five lines of
a single test file, `tests/lead-intake.test.ts` at commit `10c9b902`: a placeholder assigned to
`BIZOSTO_INGEST_API_KEY` whose only job is to be long enough to satisfy a length check. It is
self-describing, grants nothing, and was never a credential.

**No `.env` file was ever committed on any branch.** Only `.env.example` exists, and every
credential-bearing key in it is empty. No `.pem`, `.key`, `.p12`, `.pfx`, `id_rsa`, service account
JSON, or other credential-shaped filename appears anywhere in the reachable history.

**Result: no genuine credential was exposed. No rotation or revocation is required.**

> The owner should still check this repository's **Security tab** directly. GitHub enables secret
> scanning automatically on public repositories, and that API is not reachable from the environment
> this audit ran in. Anything it reports must be **rotated**, not merely deleted — removing a
> secret in a later commit does not remove it from history.
