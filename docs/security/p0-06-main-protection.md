# P0-06 — main branch protection certification (Bizosto marketing website)

**Status: RULESET LIVE AND CORRECT — TWO CONTROLS STILL OPEN**

The `main` branch of this repository **is now protected**. The ruleset exists, is active, and was
verified field by field against the live GitHub API. Two other controls are not closed, and this
document keeps them apart rather than averaging them into a single verdict.

| Control                | State                                                                      |
| ---------------------- | -------------------------------------------------------------------------- |
| **Ruleset**            | ✅ **GREEN — live and applied**, id `23581080`                             |
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
| required check                                    | `Vercel`, integration `8329`                                             | **PASS**              |
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
| `.github/workflows/main-protection-certification.yml` | Runs the verifier daily and on demand. **Not** a required check. |
| `docs/security/p0-06-main-protection.md`              | This document.                                                   |

Nothing under `app/`, `components/`, `lib/` or `public/` is touched. No product behaviour, UI or
copy changes.

### Why this repository verifies itself

A job token issued to the ERP repository cannot read this one once it is private — GitHub answers
404 — and a cross-repository read that fails must never be reported as a successful certification.
So rather than hand one repository a credential for the other, each verifies itself under its own
automatic job token. Neither vouches for the other, and no personal access token is stored or
required.

### Why the certification workflow is not a required check

It reads the live ruleset. Requiring it would mean that the day the ruleset is wrong is the day
you cannot merge the pull request that fixes it — the control would block its own repair. It
reports; it does not gate. `Vercel` remains the only required check on this repository.

---

## 5. Running it

```bash
node scripts/verify-github-main-protection.mjs --repo=website
```

**Expected output today:** every ruleset invariant passes, and the run exits non-zero on the
visibility failure in §2, with the approval gap in §3 reported as a notice. A clean exit is not
expected until both owner actions are done.

---

## 6. A separate finding: pre-existing dependency vulnerabilities

Found while validating this change, reported because it is real — **not** introduced by it, and
**not** fixed by it.

`npm audit` on this repository reports **4 critical** and 12 high advisories, in
`fast-xml-parser`, `next`, `protobufjs` and `websocket-driver`. They are present on `main`
today: this pull request changes no dependency file, and the same audit fails identically on
`main` without it.

|                                  |                                                                          |
| -------------------------------- | ------------------------------------------------------------------------ |
| Scope                            | pre-existing on `main`; unrelated to P0-06                               |
| Introduced by this PR            | **no** — it touches 4 files, none of them `package.json` or the lockfile |
| Fixed by this PR                 | **no** — dependency upgrades are product changes and out of scope here   |
| `npm audit` in normal validation | **no** — this repository's scripts are `dev`, `build`, `start`, `lint`   |

It is recorded rather than fixed because bumping production dependencies is a product change,
and this change is deliberately confined to P0-06 branch-protection certification. The ERP
repository has a blocking `npm audit --audit-level=critical` gate; **this repository has no
audit gate at all**, which is why these went unnoticed.

> **Suggested follow-up, separate from P0-06:** triage the four criticals and add a blocking
> `npm audit --audit-level=critical` step to this repository's CI, as the ERP repository has.
> `next` is on `16.1.1` here; the advisories against it should be checked against the current
> patch line.

---

## 6. Secret-exposure audit

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
