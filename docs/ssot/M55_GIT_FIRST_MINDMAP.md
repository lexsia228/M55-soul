# M55 Git-First Governance Mind Map

Status: **HUMAN-READABLE MAP / 2026-09-10**

```text
M55 AI WORK
|
+-- 0. WHAT AM I DOING?
|   +-- Control Tower
|   +-- UIUX lane owner / implementer
|   +-- Creator Revenue / legal / tax / Stripe / DB
|   +-- Reviewer (Codex / Grok / ChatGPT)
|   +-- Merge / sync / integration
|
+-- 1. GIT FIRST -- ALWAYS
|   +-- Local available?
|   |   +-- YES -> pwd / branch / HEAD / status / worktree ownership
|   |   `-- NO  -> LOCAL_RUNTIME_UNAVAILABLE + fresh GitHub branch/PR/SHA
|   `-- Never reason from chat memory alone
|
+-- 2. WHAT PART OF GIT/SSOT OWNS MY TASK?
|   +-- read task-class routing manifest
|   +-- read only relevant SSOT/source/shared owner
|   +-- check relevant open PR / stacked branch if newer Human authority may be there
|   `-- search existing contract before inventing a new one
|
+-- 3. HARD TRIGGER?
|   +-- docs/ssot/** ------------------------------+
|   +-- lib/m55/contracts/**                       |
|   +-- app/api/stripe/**                          |
|   +-- checkout / webhook                         |
|   +-- supabase / migration / RPC / RLS           |
|   +-- money / rate / reward / tax / legal        |--> FORCE FULL_REPO_PREFLIGHT
|   +-- identity / KYC / security                  |
|   +-- ledger / attribution authority             |
|   +-- AGENTS / Cursor rules / CI control         |
|   `-- cross-lane ownership / EXECUTION_STATE ----+
|
+-- 4. PROFILE
|   +-- CONTINUATION_FAST_PATH
|   |   +-- same lane
|   |   +-- same mutation owner
|   |   +-- same worktree/ref
|   |   +-- same approved task family
|   |   +-- own Git + own lane authority only
|   |   `-- Example: approved UIUX CSS/polish continuation
|   |
|   +-- PINNED_REVIEW_PREFLIGHT
|   |   +-- exact PR / branch / SHA
|   |   +-- exact diff/artifact
|   |   +-- relevant lane authority
|   |   `-- read-only
|   |
|   `-- FULL_REPO_PREFLIGHT
|       +-- fresh main
|       +-- EXECUTION_STATE
|       +-- relevant SSOT
|       +-- relevant unmerged authority
|       +-- CLOSED GREEN / no-replay
|       +-- duplicate/supersession check
|       `-- Example: Creator economics / legal / Stripe / DB / new SSOT
|
+-- 5. LANE LOCK BEFORE MUTATION
|   +-- Worktree Registry is authority
|   +-- fresh branch/worktree/HEAD/status
|   +-- mutation owner matches
|   +-- mutable path allowlist matches
|   +-- optional .m55_lane_state.json = cache only
|   `-- collision/unknown -> STOP
|
+-- 6. WORK
|   `-- execute only inside authorized semantic/path boundary
|
+-- 7. BEFORE WRITING
|   +-- branch/worktree still correct?
|   +-- HEAD changed?
|   +-- dirty/staged paths expected?
|   +-- hard trigger appeared?
|   +-- another lane now owns a touched path?
|   `-- if changed -> reclassify / FULL if needed
|
+-- 8. SUBTASK ENDS
|   +-- CONTEXT REFRESH
|   |   +-- identify next task again
|   |   +-- recheck relevant Git
|   |   `-- reselect FAST / REVIEW / FULL
|   `-- New chat optional; never authority by itself
|
+-- 9. BEFORE GREEN / COMMIT / PUSH / PR / MERGE
|   +-- exact diff vs allowlist
|   +-- relevant Git identity again
|   +-- fresh main if integration depends on it
|   +-- newer relevant authority?
|   `-- fail closed if unresolved
|
`-- 10. MACHINE ENFORCEMENT
    +-- AGENTS.md entry
    +-- Cursor alwaysApply
    +-- machine-readable manifest
    +-- static verifier
    +-- GitHub Actions CI
    `-- local hook = optional convenience, not sole protection
```

## One-line operating rule

**Every AI checks Git before M55 work; what changes is not whether Git is checked, but how deeply the AI must inspect the parts of Git/SSOT that own its task.**

## UIUX example

```text
UIUX AI continues approved polish
 -> Git-first: own worktree/branch/HEAD/status
 -> lane authority: Commercial Quality + UX/Visual + touched funnel contract
 -> no hard trigger
 -> FAST_PATH
 -> edit only allowlist
 -> exact-diff check
 -> continue
```

## Creator/Revenue example

```text
AI proposes affiliate commission/payout rule
 -> Git-first + fresh main
 -> money/reward hard trigger
 -> FULL
 -> Creator SSOT + legal/tax + Stripe + relevant open PR/stacked branch
 -> existing-rule search
 -> real delta only
 -> design/freeze only after pre-GREEN recheck
```

## Safety principle

`FAST_PATH = FAST, NOT BLIND`

`FULL_PATH = DEEP, NOT BROAD`

`GIT_FIRST = ALWAYS`
