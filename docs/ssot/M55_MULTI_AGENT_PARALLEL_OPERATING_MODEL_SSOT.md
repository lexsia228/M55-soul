# M55 Multi-Agent Parallel Operating Model SSOT

Status: **ACTIVE / HUMAN-APPROVED OPERATING MODEL**  
Version: **1.0.0**  
Human approval date: **2026-09-08**

This file is the durable operating contract for running multiple AI agents, ChatGPT conversations, Cursor/Codex sessions, and Grok Bots in parallel without losing lane ownership, evidence provenance, or M55 Control Tower authority.

It is an **operating-model SSOT**, not a new product roadmap stage and not an executable gate owner.

The sole executable authority for `CURRENT EXECUTION GATE` and `NEXT SINGLE ACTION` remains:

`docs/ssot/M55_EXECUTION_STATE.json`

This operating model is subordinate to `AGENTS.md`, the Product Authority Pack, `M55_EXECUTION_STATE.json`, and lane-specific normative SSOTs.

---

## A. Frozen operating principles

`M55_MULTI_AGENT_METHOD_VERSION = 1.0.0`

`ONE_LANE_ONE_MUTATION_OWNER = TRUE`

`ONE_BOT_ONE_CONTROLLER = TRUE`

`READ_ONLY_AUDITOR_DOES_NOT_IMPLEMENT = TRUE`

`PARALLELISM_DOES_NOT_REORDER_ROADMAP = TRUE`

`SEPARATE_WORKSPACE_REQUIRED_FOR_PARALLEL_MUTATION = TRUE`

`DYNAMIC_GIT_FACTS_REQUIRE_FRESH_OBSERVATION = TRUE`

`LOCAL_ONLY_BRANCH_NOT_VISIBLE_TO_CLOUD = TRUE`

`AUDIT_OUTPUT_IS_SUPPORTING_EVIDENCE_ONLY = TRUE`

`HUMAN_FINAL_ACCEPTANCE_REMAINS_REQUIRED_WHERE_CONTRACT_REQUIRES = TRUE`

A new chat, new model, new Bot, or missing prior conversation is **not** an invalidator and does **not** authorize replaying CLOSED GREEN work.

---

## B. Authority and role topology

### B1. Human

Human owns:

- final product/commercial acceptance where required
- explicit approval for consequential mutation when the active gate requires it
- architecture/economics changes
- real provider / Production / payment activation decisions
- adjudication when independent agents materially disagree and evidence alone does not resolve the dispute

No AI role may silently replace Human approval requirements.

### B2. Control-Tower ChatGPT

The Control-Tower ChatGPT owns:

- cross-lane coordination
- executable-state reconstruction
- dynamic Git/PR/main reconciliation
- conflict detection between lanes
- Creator Revenue / provider / legal-tax control when that lane is assigned to it
- acceptance/rejection/defer disposition of external audit findings
- deciding when a finding is a true invalidator versus supporting evidence
- ensuring one lane cannot silently reorder another

The Control-Tower ChatGPT is the **integration coordinator**, not automatically the implementer.

### B3. Lane-owner ChatGPT

A specialized ChatGPT conversation may own one bounded lane such as UIUX.

A lane-owner ChatGPT:

- controls only its assigned lane
- may coordinate Cursor/Codex/Grok for that lane
- must not advance global `CURRENT` / `NEXT`
- must not mutate another lane's financial/provider/SSOT semantics
- must hand cross-lane conflicts back to the Control-Tower ChatGPT

A lane-owner ChatGPT is **not** a peer global execution-state authority.

### B4. Cursor

Cursor is the default mutation/implementation agent when implementation is authorized.

Cursor must use the exact registered/dedicated worktree or branch for its lane.

Cursor must not self-promote implementation to merged/Production state.

### B5. Codex Sol / independent high-cost reviewer

Codex Sol is used for:

- high-cost product/layout/design reasoning
- exact-diff review
- actual-browser or evidence-heavy independent judgment when applicable
- adversarial review that should remain independent from the implementer

An implementer must not self-certify an independent review when the lane contract requires independent evidence.

### B6. Grok Bot

Grok Bot is primarily a **long-running read-only auditor / red-team / repository mapper**.

Preferred uses:

- repo-wide static audits
- adversarial test-matrix generation
- missing-contract / reuse mapping
- state-drift detection
- independent UIUX screenshot critique
- post-push exact-diff / PR red-team
- long-running evidence collection that does not require mutation

Grok must **not** become a second implementation writer for the same lane merely because unused usage is available.

---

## C. One lane, one mutation owner

At any moment, a lane may have many readers/reviewers but only one mutation owner.

Examples:

- UIUX lane: Cursor may implement; Codex and Grok may review read-only.
- Creator Revenue lane: a future authorized implementation agent may mutate; Revenue Grok remains read-only.

If two agents would edit the same source family concurrently:

**STOP / MUTATION_OWNERSHIP_CONFLICT**

Resolve ownership before either continues.

Parallel work is allowed only when:

- lanes are scope-separated, or
- workspaces are isolated, and
- file ownership does not conflict, and
- merge order is explicitly reconciled against fresh `origin/main`.

---

## D. One Bot, one controller

Each Grok Bot has exactly one controlling ChatGPT/lane owner for the duration of a task.

Do not send competing instructions from multiple ChatGPT conversations to the same Bot.

Example topology:

- `M55 Revenue Auditor` → controlled by Control-Tower / Creator Revenue lane.
- `M55 UIUX Auditor` → controlled by UIUX lane-owner ChatGPT.

If responsibility changes, explicitly hand the Bot over before issuing new instructions.

**STOP / BOT_CONTROLLER_CONFLICT** if two controllers issue materially different instructions.

---

## E. Workspace isolation

### E1. Local mutation worktrees

Concurrent implementation agents must use separate Git worktrees/branches.

Never solve concurrency by sharing one dirty worktree.

Before mutation, establish:

- `pwd`
- branch
- HEAD
- `git status --porcelain`
- registered ownership
- fresh `origin/main`

### E2. Grok cloud workspaces

Grok Bots may share the same underlying cloud computer. Therefore each Bot must use a distinct clone/directory.

Example only:

```text
/workspace/m55-revenue-audit
/workspace/m55-uiux-audit
```

Do not rely on folder names as authority; verify remote, branch/ref, HEAD, and clean state.

### E3. Local-only branch visibility

A cloud Bot cannot inspect an unpushed local-only branch.

When a candidate is local-only:

- cloud repo/main = repository authority/context
- screenshots/patches/artifacts = current local-candidate evidence
- do not claim main contains the local candidate
- do not infer local CSS/source from remote main
- after push, re-pin the exact remote branch SHA for exact-diff review

---

## F. Evidence classes must stay separate

Every multi-agent report must distinguish:

1. **Durable authority** — SSOT, machine contracts, frozen policies.
2. **Fresh remote facts** — GitHub main, PR, branch, CI, deployment identity.
3. **Fresh local facts** — local worktree branch/HEAD/dirty state when actually observable.
4. **Candidate artifacts** — screenshots, patches, reports, exported evidence.
5. **External-provider evidence** — Stripe/support/legal/tax/provider communications.
6. **Agent inference/opinion** — not authority until accepted and recorded.

Never promote an agent statement into runtime truth merely because another agent repeats it.

---

## G. Standard Grok workflow

Use this sequence for a Grok task:

### G1. SAFE SETUP

Verify:

- Grok cloud computer, not local machine
- correct repository remote
- dedicated workspace
- exact pinned branch/ref/HEAD where available
- clean `git status --porcelain`
- applicable `AGENTS.md` / SSOT read
- mutation prohibition

Stop after setup and return a READY token.

### G2. READ-ONLY AUDIT

Run the bounded audit only.

Do not:

- edit
- install merely to make tests run
- commit/push/PR
- mutate provider/DB/env
- spawn a second implementation agent

### G3. REPORT

The report must identify:

- pinned authority
- evidence boundary
- commands executed
- commands not executed
- exact findings
- confidence/limitations
- final classification
- final clean-state proof

### G4. PRIMARY ADJUDICATION

The controlling ChatGPT classifies every material finding as exactly one:

- `ACCEPT_FOR_IMPLEMENTATION`
- `REJECT_FALSE_POSITIVE`
- `DEFER_TO_OWNING_GATE`
- `NEEDS_FRESH_EVIDENCE`
- `REAL_INVALIDATOR`

Audit output alone does not authorize mutation.

### G5. IMPLEMENTATION

Only accepted findings enter the authorized implementation agent's contract.

### G6. POST-PUSH RED-TEAM

After a candidate branch is pushed, Grok may independently inspect the exact remote branch/diff and verify whether accepted findings were actually closed.

---

## H. UIUX parallel pattern

Preferred UIUX topology:

```text
Human
  ↓
UIUX lane-owner ChatGPT
  ├─ Cursor = implementation
  ├─ Codex Sol = high-cost product/layout review
  └─ Grok UIUX Auditor = independent read-only red-team
```

The UIUX lane may proceed in parallel with Creator Revenue when:

- it uses a separate worktree/branch
- it does not alter Creator Revenue financial/provider semantics
- Creator Revenue does not alter the active UIUX candidate files
- both refresh `origin/main` before PR/merge
- any overlapping file is escalated before mutation

For a local-only UIUX branch, Grok should review current visual appearance from screenshots/artifacts and use remote main only for stable authority/benchmark context.

After push, Grok may switch to exact branch/diff red-team.

---

## I. Creator Revenue parallel pattern

Preferred Creator Revenue topology:

```text
Human
  ↓
Control-Tower ChatGPT / Creator Revenue lane owner
  ├─ authorized implementation agent = future bounded mutation
  └─ M55 Revenue Auditor (Grok) = long-running read-only audit/red-team
```

Revenue Grok findings are supporting evidence.

They must not:

- select a payout provider
- activate Connect
- invent legal/tax rules
- implement R3–R8 early
- reorder the Creator Revenue roadmap
- reopen frozen economics absent a real invalidator

Provider-independent work may continue when external follow-up is non-blocking, but cash activation remains fail-closed to the owning gates.

---

## J. Cross-lane sync block

When two ChatGPT lanes run concurrently, exchange a compact sync block rather than copying whole chat histories.

Template:

```text
M55 CROSS-LANE SYNC BLOCK

REMOTE MAIN:
<FRESH_SHA>

SOLE EXECUTABLE AUTHORITY:
docs/ssot/M55_EXECUTION_STATE.json

CURRENT:
<FRESH_CURRENT>

NEXT:
<FRESH_NEXT>

LANE A:
owner=<controller>
mutation_owner=<agent or NONE>
branch/worktree=<fresh fact or UNKNOWN>
scope=<bounded scope>

LANE B:
owner=<controller>
mutation_owner=<agent or NONE>
branch/worktree=<fresh fact or UNKNOWN>
scope=<bounded scope>

SHARED RULES:
- separate workspaces
- one lane one mutation owner
- one Bot one controller
- no roadmap reorder
- no CLOSED GREEN replay absent invalidator
- no cross-lane semantic mutation
- refresh origin/main before push/PR/merge
- STOP on overlapping mutation ownership
```

Do not freeze a SHA from this template into timeless authority. Dynamic facts must be freshly observed.

---

## K. Fresh-chat recovery protocol

When the current ChatGPT conversation becomes unavailable, a completely new conversation must not require the Human to re-explain this operating method.

Recovery sequence:

1. Read `AGENTS.md`.
2. Read `docs/ssot/M55_EXECUTION_STATE.json`.
3. Read `docs/ssot/README.md`.
4. From the SSOT index, read this file:
   `docs/ssot/M55_MULTI_AGENT_PARALLEL_OPERATING_MODEL_SSOT.md`.
5. Read the active lane SSOT(s), including Creator Revenue SSOT while active.
6. Reobserve fresh GitHub/main/PR/branch facts.
7. If local runtime is unavailable, explicitly report `LOCAL_RUNTIME_UNAVAILABLE`; do not invent worktree state.
8. Reconstruct current parallel topology from fresh evidence and dated decision records.
9. Return a compact recovery report before proposing mutation.

Required recovery report:

```text
M55_MULTI_AGENT_RECOVERY_REPORT

EXECUTABLE_AUTHORITY=
CURRENT=
NEXT=
REMOTE_MAIN=

ACTIVE_LANES=
LANE_OWNERS=
MUTATION_OWNERS=
READ_ONLY_AUDITORS=
KNOWN_WORKSPACES=
LOCAL_ONLY_CANDIDATES=
PENDING_HANDOFFS=
AUTHORITY_CONFLICTS=
SAFE_NEXT_ACTIONS=
```

If any required role/ownership fact cannot be established, report `UNKNOWN` rather than guessing.

A new chat must **not** rerun completed audits merely to reconstruct the topology.

---

## L. Dated first-adoption snapshot — 2026-09-08

This is historical context, not timeless dynamic Git authority.

The first Human-approved M55 use of this operating model used:

- Control-Tower ChatGPT for cross-lane coordination and Creator Revenue
- separate UIUX ChatGPT for the UIUX lane
- Cursor as UIUX implementer
- Codex Sol for high-cost UIUX judgment/review
- `M55 Revenue Auditor` Grok Bot as Creator Revenue read-only auditor
- planned `M55 UIUX Auditor` Grok Bot as UIUX read-only red-team
- Human as final commercial/architecture approval authority

The key lesson frozen from first adoption:

**Do not add more agents as more writers. Add them as independent readers/reviewers unless a lane explicitly assigns mutation ownership.**

---

## M. Conflict and stop conditions

STOP and escalate when any of these occur:

- `MUTATION_OWNERSHIP_CONFLICT`
- `BOT_CONTROLLER_CONFLICT`
- execution-state contradiction
- unexpected dirty workspace
- wrong repository/remote
- local-only evidence represented as remote fact
- stale branch represented as current candidate
- two lanes need the same file family concurrently
- audit agent attempts mutation
- provider/Production/DB/Stripe action without explicit owning-gate authority
- a review tries to reopen CLOSED GREEN work without an invalidating dependency

No reset, clean, stash, rebase, force push, history rewrite, or destructive conflict resolution merely to make parallel work fit.

---

## N. Persistence rule

This operating model must be changed only by explicit Human decision.

Ordinary lane progress, branch changes, merged PRs, or new Bot instances do **not** require rewriting this SSOT.

Only update this SSOT when the operating topology/rules themselves change.

Dynamic branch/HEAD/worktree/PR facts belong in fresh observations, lane state, or decision records — not in timeless operating rules.
