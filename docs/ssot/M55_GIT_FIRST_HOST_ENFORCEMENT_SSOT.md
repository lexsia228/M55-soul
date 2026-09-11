# M55 Git-First Host Enforcement SSOT

Status: **ACTIVE CONFIGURATION RECORD / HUMAN-APPROVED (2026-09-11)**

Purpose: preserve the exact GitHub host-side configuration that makes the M55 Git-first repository guard enforceable outside repo-contained CI. Future AI agents must read this record instead of reconstructing host settings from chat history.

This SSOT records the intended and observed configuration. Fresh GitHub observation remains required before consequential merge/acceptance decisions because host settings are mutable outside Git.

`HOST_ENFORCEMENT_FRESH_OBSERVATION_REQUIRED = TRUE`

## A. Repository

- repository: `lexsia228/m55-web`
- protected branch target: `refs/heads/main`
- protection mechanism: GitHub Repository Ruleset
- ruleset name: `M55 Git-first main protection`
- observed ruleset id: `22868284` (diagnostic identity only; name + resolved rules are authority)
- enforcement: `active`
- bypass actors: none
- observed `current_user_can_bypass`: `never`

The classic branch-protection endpoint may report its own legacy settings as disabled. That is not a contradiction when the Repository Ruleset is active. The branch must resolve as protected through the ruleset.

## B. Active ruleset contract

Required rules for `main`:

- deletion protection: ON
- non-fast-forward / force-push protection: ON
- pull request required before merging: ON
- required approving reviews: `0`
- dismiss stale approvals on push: OFF
- Code Owners review required: OFF
- approval of most recent push required: OFF
- review-thread resolution required: OFF
- extra approval for unattributed Copilot changes: OFF
- allowed merge methods: merge, squash, rebase
- required status checks: ON
- required check context: `verify-git-first-preflight`
- required check integration: GitHub Actions
- strict/up-to-date-before-merge policy: OFF
- do-not-enforce-on-create: OFF

`HOST_REQUIRED_CHECK_CONTEXT = verify-git-first-preflight`

`HOST_BYPASS_LIST_MUST_BE_EMPTY = TRUE`

`HOST_MAIN_FORCE_PUSH_MUST_BE_BLOCKED = TRUE`

`HOST_MAIN_DELETION_MUST_BE_BLOCKED = TRUE`

## C. GitHub Actions repository permissions

Repository Settings -> Actions -> General -> Workflow permissions:

- default `GITHUB_TOKEN` permission: **Read repository contents and packages permissions**
- repository-wide default Read/Write: OFF
- `Allow GitHub Actions to create and approve pull requests`: ON

The checkbox permits the capability, but M55 automation must not use it to auto-approve governance or product PRs. A workflow needs its own explicit scoped permissions before it can write.

`DEFAULT_GITHUB_TOKEN_REMAINS_READ_ONLY = TRUE`

`AUTOMATED_PR_APPROVAL_PROHIBITED = TRUE`

`AUTOMATED_GOVERNANCE_MERGE_PROHIBITED = TRUE`

## D. Asset-index automation migration

Historical state on main before PR #194 merge:

- `.github/workflows/m55-asset-index.yml` scheduled workflow writes the generated asset index and directly pushes to `main`.

Target state carried by PR #194:

- direct push to `main` removed;
- workflow uses a dedicated `automation/m55-asset-index-*` branch;
- workflow declares only the scoped write permissions it needs: `contents: write` and `pull-requests: write`;
- workflow creates/updates an asset-index PR instead of bypassing `main`;
- no auto-approval;
- no auto-merge;
- no `|| true` suppression around push/PR failure;
- Git-first policy tests/structure verifier reject reintroduction of direct-main push, swallowed push failure, auto-approval, or auto-merge.

Transition rule: because the host ruleset became active before PR #194 is merged, the old main-resident direct-push asset-index job may fail safely if it runs during the transition. Do not weaken the ruleset to make that legacy path succeed. After PR #194 merges, the PR-based asset-index workflow becomes the canonical path.

`LEGACY_ASSET_INDEX_DIRECT_MAIN_PUSH_MAY_FAIL_CLOSED_DURING_TRANSITION = TRUE`

`DO_NOT_ADD_ACTIONS_BYPASS_FOR_ASSET_INDEX = TRUE`

## E. Verification evidence required before external acceptance

Before claiming host enforcement GREEN, freshly verify through GitHub that:

1. ruleset `M55 Git-first main protection` exists;
2. enforcement is `active`;
3. target includes only `refs/heads/main` for this ruleset;
4. bypass actors are empty;
5. deletion and non-fast-forward protections are present;
6. pull-request rule is present;
7. required status check context is exactly `verify-git-first-preflight`;
8. main resolves as protected;
9. PR #194 exact head has same-SHA Git-first CI success;
10. external reviewer pins the same exact PR head.

If any item is unobservable, contradictory, or missing, report `HOST_ENFORCEMENT = UNPROVEN` and do not claim broad `USABLE`.

## F. Change control

Any change to this ruleset, workflow-permission policy, required check context, bypass actors, or asset-index write path is consequential governance work and requires:

- `FULL_REPO_PREFLIGHT`;
- fresh host observation;
- exact Git diff review when repo files change;
- same-head CI;
- external re-review when the accepted Git-first candidate changes materially.

Do not silently create a second ruleset that overlaps or weakens this one.

This SSOT does not authorize merge by itself. Final merge/adoption remains Human-controlled under `M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`.
