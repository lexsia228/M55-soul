# M55 Git-First Hardening SSOT

Status: **ACTIVE / HUMAN-APPROVED GOVERNANCE TARGET (2026-09-10)**

Purpose: harden the Git-first preflight so correctness does not depend only on an AI correctly self-classifying its task.

This annex is subordinate to `AGENTS.md` and `M55_EXECUTION_STATE.json` for executable authority and complements `M55_GIT_FIRST_ENTRYPOINT.md` and `M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`.

## A. Machine hard triggers — FAST cannot override

`HARD_TRIGGER_FORCES_FULL_PREFLIGHT = TRUE`

If an intended or observed mutation touches any protected semantic family below, the task is forced to `FULL_REPO_PREFLIGHT` even if the AI initially classified itself as FAST:

- `docs/ssot/**`
- `.product-authority/**`
- `lib/m55/contracts/**`
- `app/api/stripe/**`
- `app/api/**/checkout/**`
- `app/api/**/webhook/**`
- `supabase/**`
- DB migration/schema/RPC/privilege/RLS artifacts
- Creator commission/ledger/payout/tax/provider policy artifacts
- `.github/workflows/**` when changing M55 control/security/release behavior
- `AGENTS.md` or `.cursor/rules/**`
- `M55_EXECUTION_STATE.json`

Semantic hard triggers also force FULL regardless of path: money movement, price/rate/reward definition, legal/tax meaning, identity/KYC, authorization/security, attribution authority, ledger authority, provider behavior, executable gate/NEXT, cross-lane ownership, or a new normative SSOT.

A path trigger is conservative. It may escalate a simple edit, but a false escalation is safer than silently changing money/legal/global authority under FAST.

## B. Lane lock — physical ownership boundary

`LANE_LOCK_REQUIRED_BEFORE_MUTATION = TRUE`

The canonical ownership authority remains `M55_WORKTREE_REGISTRY.md` plus fresh Git/worktree facts. Do not create a competing global authority.

For new dedicated mutation workspaces, a machine-readable workspace-local lane marker MAY be generated from the registry, e.g. `.m55_lane_state.json`, containing only:

- lane id;
- mutation owner;
- branch/worktree identity;
- allowed path families;
- prohibited path families;
- authority source/version;
- generated/observed timestamp.

The marker is a cache/guard, never authority over the registry. If it disagrees with registry/fresh Git, STOP.

Existing protected UIUX worktrees are grandfathered: do not inject or mutate local lane-marker files merely to adopt this policy. Their existing registered ownership remains valid. Introduce lane markers only through a separately authorized workspace setup or when that lane is next legitimately reconciled.

`LANE_STATE_CACHE_NEVER_OVERRIDES_REGISTRY = TRUE`

`LANE_ALLOWLIST_VIOLATION = STOP`

## C. Context refresh — not mandatory chat reset

External audit correctly identifies long-context drift risk, but mandatory new-chat resets are not adopted as a correctness primitive.

`SUBTASK_BOUNDARY_CONTEXT_REFRESH_REQUIRED = TRUE`

At a material subtask boundary, before starting the next work unit, re-run the compact Git-first entry:

1. identify task/lane;
2. re-observe relevant Git identity;
3. re-read changed/uncertain relevant authority;
4. confirm existing-decision/duplicate status;
5. select FAST/PINNED/FULL again.

Starting a new chat is optional. A new chat does not invalidate CLOSED GREEN and does not replace Git evidence.

Use FULL again when the new subtask changes semantic class or crosses a hard trigger.

## D. Non-human enforcement

`CI_FAIL_CLOSED_FOR_GIT_FIRST_GOVERNANCE = TRUE`

Required enforcement layers:

1. static verifier checks required entrypoints, manifest, hard-trigger tokens, and Cursor wiring;
2. GitHub Actions runs verifier on relevant PR/push changes;
3. pre-commit/local hook is recommended but not the sole authority because developer environments can omit hooks;
4. PR exact-diff review catches path-scope violations;
5. protected runtime/provider/DB operations retain their own existing gates.

A local Git hook may improve ergonomics, but CI is the portable mandatory enforcement surface.

## E. Escalation algorithm

```text
TASK ARRIVES
  -> GIT_FIRST_BASELINE
  -> identify intended/read/touched paths + semantics
  -> HARD TRIGGER?
       YES -> FULL_REPO_PREFLIGHT
       NO  -> evaluate profile
               same bounded lane -> CONTINUATION_FAST_PATH
               exact read-only candidate -> PINNED_REVIEW_PREFLIGHT
               otherwise -> FULL_REPO_PREFLIGHT
  -> lane ownership/allowlist check
  -> relevant authority check
  -> existing decision check
  -> work
  -> pre-mutation recheck
  -> exact-diff scope check
  -> pre-GREEN/integration recheck
```

## F. Failure tokens

- `GIT_PREFLIGHT_INCOMPLETE`
- `HARD_TRIGGER_FULL_PREFLIGHT_REQUIRED`
- `LANE_LOCK_UNPROVEN`
- `LANE_ALLOWLIST_VIOLATION`
- `CONTEXT_REFRESH_REQUIRED`
- `MUTATION_OWNERSHIP_CONFLICT`

No failure token authorizes reset/stash/clean/rebase/force push or unrelated mutation.

## G. External audit disposition

Accepted/adapted:

- path/keyword machine hard triggers: **ACCEPT / ADAPT**;
- physical lane lock: **ACCEPT / ADAPT to existing Worktree Registry, grandfather existing protected lanes**;
- context flush: **ADAPT to mandatory task-boundary context refresh; new chat optional**;
- CI/Git-hook fail closed: **ACCEPT, with CI mandatory and local hook advisory**.

This annex creates governance only. It does not authorize runtime UI, Stripe, DB, provider, deploy, merge, or Production mutation.
