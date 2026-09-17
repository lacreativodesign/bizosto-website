# P0-06 — main branch protection certification (Bizosto marketing website)

**Status: NOT YET PROTECTED — OWNER ACTION REQUIRED**

This repository's `main` branch currently has **no branch protection**. This change does not
add the protection — it cannot — but it adds the machinery that verifies it, fails closed
while it is missing, and starts certifying it the moment the owner creates it.

The ERP half of P0-06 lives in `lacreativodesign/nextjs-boilerplate`.

## Why the protection is missing

This repository is **private**, and it must stay that way — it holds proprietary Bizosto
marketing source. GitHub serves repository rulesets on public repositories under Free, and on
public *and private* repositories under Pro, Team and Enterprise. So while the account is on
Free, the API refuses outright:

```
GET /repos/lacreativodesign/bizosto-website/rulesets
→ 403 "Upgrade to GitHub Pro or make this repository public to enable this feature."
```

That error names two ways out and **only one of them is acceptable.**

On 2026-09-17 this repository was briefly made public to get past exactly this restriction.
That was a policy violation and it has been reverted. Publishing proprietary source to obtain
a security control is a larger exposure than the control it buys, and P0-06 rejects it.
Repository visibility is now a *certified control* here: a public reading fails as
`repository.visibility`, so a repeat reads as drift rather than as progress.

> ### OWNER ACTION
>
> **1. Upgrade the `lacreativodesign` account to GitHub Pro or higher.** Account-level
> billing; only the owner can do it.
>
> **2. Confirm this repository is private, then create the ruleset:**
>
> ```bash
> curl -X POST \
>   -H "Authorization: Bearer $GITHUB_TOKEN" \
>   -H "Accept: application/vnd.github+json" \
>   -H "Content-Type: application/json" \
>   -H "X-GitHub-Api-Version: 2022-11-28" \
>   https://api.github.com/repos/lacreativodesign/bizosto-website/rulesets \
>   -d '{
>     "name": "Production Main Protection",
>     "target": "branch",
>     "enforcement": "active",
>     "conditions": { "ref_name": { "include": ["~DEFAULT_BRANCH"], "exclude": [] } },
>     "bypass_actors": [],
>     "rules": [
>       { "type": "deletion" },
>       { "type": "non_fast_forward" },
>       { "type": "pull_request", "parameters": {
>           "required_approving_review_count": 0,
>           "dismiss_stale_reviews_on_push": false,
>           "require_code_owner_review": false,
>           "require_last_push_approval": false,
>           "required_review_thread_resolution": true,
>           "allowed_merge_methods": ["merge"] } },
>       { "type": "required_status_checks", "parameters": {
>           "strict_required_status_checks_policy": true,
>           "do_not_enforce_on_create": false,
>           "required_status_checks": [{ "context": "Vercel", "integration_id": 8329 }] } }
>     ]
>   }'
> ```
>
> **3. Record it:** put the returned `id` into `rulesetId` and set `applied: true` in
> [`p0-06-main-protection.certified.json`](./p0-06-main-protection.certified.json). The
> verifier finds the ruleset by name until then, so protection takes effect immediately and
> recording it merely pins it.

### Two details that matter in that payload

**`Vercel` is the only check that may be required, and only while it is still the live one.**
This repository has no GitHub Actions workflows other than the certification job added here,
so it produces no check runs; `Vercel` arrives as a commit *status* and was `success` on `main`
at `83ae0648`. Requiring anything this repository does not emit would block every merge
forever. Re-confirm before pinning.

**Approving reviews stay at `0`.** This repository has exactly one collaborator —
`lacreativodesign`, admin — and that account authors every pull request. GitHub does not let an
author approve their own, so setting the count to `1` would not add a review; it would stop
anything merging. Grant a second human write access **first**, then raise it. The ERP
repository has the same gap and needs its own separate collaborator — they do not share one.

## What this change adds

| File | Role |
| --- | --- |
| `docs/security/p0-06-main-protection.certified.json` | The contract: what must be true of this repository's `main`. Holds no credential. |
| `scripts/verify-github-main-protection.mjs` | Fail-closed verifier. Dependency-free. |
| `.github/workflows/main-protection-certification.yml` | Runs the verifier daily and on demand. **Not** a required check. |

Nothing under `app/`, `components/`, `lib/` or `public/` is touched. No product behaviour, UI
or copy changes.

### Why this repository verifies itself

A job token issued to the ERP repository cannot read a private `bizosto-website` — GitHub
answers 404 — and a cross-repository read that fails must never be reported as a successful
certification. So rather than hand one repository a credential for the other, each verifies
itself under its own automatic job token. Neither vouches for the other.

### Why the token matters beyond rate limits

`bypass_actors` decides whether the protection is real: one bypass actor makes every other rule
advisory. GitHub returns that field **only to callers with sufficient access to the ruleset**,
so an unprivileged read can come back without it — and absent is not empty. The verifier fails
such a read as `ruleset.bypass_actors_unobservable` rather than defaulting the control to
"none". An earlier version of the ERP verifier did default it, and independent review correctly
rejected that as a false green.

## Running it

```bash
node scripts/verify-github-main-protection.mjs --repo=website
```

It exits non-zero today, and will until the plan is upgraded and the ruleset created. That is
the intended reading of an open P0-06 gap — and it gates nothing, because the workflow is
deliberately not a required check: a control that reports a broken ruleset must never be able
to block the fix for it.
