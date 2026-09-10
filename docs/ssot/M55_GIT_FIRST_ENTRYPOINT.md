# M55 Git-First AI Entrypoint

Status: **ACTIVE / HUMAN-APPROVED GOVERNANCE TARGET (2026-09-10)**

This is the short mandatory entrypoint for every AI before it starts an M55 work unit.

The purpose is simple: **identify the work, inspect the relevant Git authority, then reason.**

Do not start from chat memory alone.

## 0. Non-negotiable order

`IDENTIFY_TASK -> GIT_IDENTITY -> RELEVANT_AUTHORITY -> EXISTING_DECISION_CHECK -> WORK`

`NO_M55_WORK_BEFORE_GIT_FIRST_BASELINE = TRUE`

A "work unit" means a new implementation task, review task, design decision, debugging task, audit, legal/tax/provider analysis, SSOT change, merge/integration task, or a resumed task after an uncertain handoff. It does **not** mean every conversational sentence.

## 1. Stage 0 — identify your task before reading broadly

State internally:

- role: Control Tower / lane-owner / implementer / reviewer;
- lane or task family;
- mutation owner, if any;
- target worktree / branch / PR / commit, if known;
- intended touched paths or semantic area;
- whether this is continuation, new consequential work, or pinned review.

If you cannot identify the task scope, use `FULL_REPO_PREFLIGHT` until scope is known.

## 2. Stage 1 — Git-first baseline, mandatory for every profile

Before substantive work, obtain Git evidence for **your task**.

When local runtime is available:

- confirm repository root / `pwd`;
- confirm current branch;
- confirm `HEAD`;
- inspect `git status --porcelain` before mutation;
- inspect the registered/dedicated worktree identity when the task mutates local files;
- inspect `origin/main` when required by the selected profile or before integration.

When local runtime is unavailable:

- declare `LOCAL_RUNTIME_UNAVAILABLE`;
- use fresh connected GitHub evidence;
- pin the exact relevant branch / PR / commit SHA;
- never invent local dirty/staged/worktree facts.

`GIT_IDENTITY_REQUIRED_BEFORE_M55_WORK = TRUE`

## 3. Stage 2 — route to relevant authority only

Read `docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json` and select the closest task class.

Then read:

1. universal critical files for that profile;
2. the task-class required authority;
3. the exact files or contracts governing the paths/semantics you will touch;
4. relevant open PR / stacked branch authority when newer Human decisions may exist there.

Do not read unrelated lanes merely because they exist.

`TASK_RELEVANT_GIT_REVIEW_REQUIRED = TRUE`

`UNRELATED_SSOT_FULL_SCAN_PROHIBITED_BY_DEFAULT = TRUE`

## 4. Stage 3 — existing-decision / duplicate check

Before creating a new architecture, token, policy, component owner, or SSOT:

- search existing SSOT/source for the concept;
- check whether a CLOSED GREEN decision already owns it;
- check relevant unmerged PR/stacked branches for newer authority;
- identify only the real delta.

`EXISTING_AUTHORITY_SEARCH_REQUIRED_BEFORE_NEW_M55_DESIGN = TRUE`

If the concept already exists, reuse or amend the existing owner. Do not recreate it from memory.

## 5. Stage 4 — choose depth

Use exactly one profile defined in `M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`:

- `CONTINUATION_FAST_PATH` — same approved bounded task/lane;
- `PINNED_REVIEW_PREFLIGHT` — exact read-only review target;
- `FULL_REPO_PREFLIGHT` — new/consequential/cross-lane/financial/legal/provider/SSOT work.

All three profiles include Stage 1 Git identity. The profile changes **depth**, not whether Git is checked.

## 6. Stage 5 — pre-mutation recheck

Immediately before mutation, confirm again only the volatile facts that can invalidate the write:

- correct branch/worktree;
- current HEAD;
- dirty/staged paths;
- exact mutable-path allowlist;
- no mutation-owner collision;
- no relevant authority drift discovered since Stage 1.

`PRE_MUTATION_GIT_RECHECK_REQUIRED = TRUE`

Do not use reset/stash/clean/rebase/force-push/history rewrite merely to satisfy preflight.

## 7. Stage 6 — integration / GREEN recheck

Before commit/push/PR/merge/integration or consequential `PLAN_GREEN` / `DESIGN_GREEN` / `AUTHORIZED` / `FROZEN`:

- re-observe the relevant Git identity;
- reconcile fresh `origin/main` when integration depends on it;
- compare exact candidate diff against the approved scope;
- confirm no newer relevant authority supersedes the decision.

`PRE_GREEN_RELEVANT_GIT_RECHECK_REQUIRED = TRUE`

A UIUX lane does not need Creator Revenue Git archaeology to finish CSS. A Creator Revenue decision does not need unrelated UIUX history. The required evidence follows the task.

## 8. Fail-closed outcomes

Stop or downgrade the claim when:

- relevant Git identity is unavailable and cannot be remotely observed;
- branch/worktree ownership is ambiguous;
- relevant SSOT/source ownership is unknown;
- a newer relevant open PR/stacked branch may supersede current understanding but has not been inspected;
- intended mutation overlaps another mutation owner;
- exact diff exceeds the authorized scope.

Use:

`GIT_PREFLIGHT_INCOMPLETE`

rather than guessing.

## 9. Relationship to other authority

Normative routing detail:

`docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`

Machine-readable routing manifest:

`docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json`

Global AI rules:

`AGENTS.md`

Executable CURRENT/NEXT authority remains:

`docs/ssot/M55_EXECUTION_STATE.json`

This entrypoint does not authorize implementation, provider mutation, DB mutation, deployment, commit, push, PR, or merge by itself.
