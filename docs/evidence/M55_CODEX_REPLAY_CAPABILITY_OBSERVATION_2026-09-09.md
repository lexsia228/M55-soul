# M55 Codex Replay Capability Observation — 2026-09-09

Status: **HUMAN-OBSERVED TOOL CAPABILITY EVIDENCE**

Purpose: prevent future M55 agents from confusing Codex Replay with the ordinary Codex PR/exact-diff reviewer.

## Windows observation

Repeated Windows Codex Replay attempts showed the plugin as installed/enabled, but tasks reported missing execution components including:
- required Python runtime;
- controller MCP/controller tool.

Reinstall/restart/new-task attempts did not establish a working Replay controller during this observation window.

Classification:
`WINDOWS_CODEX_REPLAY_OBSERVED_UNAVAILABLE_2026_09_09 = TRUE`

This is a dated observation, not a permanent claim that Windows can never support Replay.

## Mac observation

On Mac:
- the Codex Replay controller opened successfully on localhost;
- controller version shown: `v1.0.128`;
- UI flow: `Choose thread -> Configure -> Run -> Results`;
- source heading: `Choose imported Claude threads`;
- `Imported threads (0)`;
- sample historical threads were shown separately.

With zero imported threads, the controller did not expose a way to submit the M55 PR #187 review prompt directly.

The ordinary Codex task explicitly reported:
- Replay available;
- zero imported threads;
- no direct route to submit the requested PR-review prompt through the controller;
- no local mutation;
- no review findings produced.

## M55 operational conclusion

`ORDINARY_CODEX_IS_PRIMARY_DIRECT_PR_REVIEWER = TRUE`

`CODEX_REPLAY_DIRECT_PR_REVIEW = NOT_SUPPORTED_BY_OBSERVED_WORKFLOW`

`CODEX_REPLAY_IS_OPTIONAL_COMPARATIVE_AUDIT_TOOL = TRUE`

`CODEX_REPLAY_UNAVAILABLE_MUST_NOT_BLOCK_OWNING_GATE = TRUE`

Use ordinary Codex for:
- direct PR review;
- exact-diff review;
- state/money/idempotency review;
- local candidate review when genuinely available.

Use Codex Replay only when:
- a supported historical thread has been imported;
- replay comparison is the actual goal;
- the controller/runtime is available.

Do not classify an attempted Replay with no findings as independent-review GREEN.

No product/runtime/Stripe/DB/env/Production mutation was performed.
