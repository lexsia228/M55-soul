# GrokBOT — M55 Git-First Governance Adversarial Red-Team

READ-ONLY ONLY. DO NOT PATCH. DO NOT MERGE. DO NOT MUTATE REPO.

Repository: `lexsia228/m55-web`
Target PR: `#194`

Fetch the PR fresh and pin the exact current base/head SHA. Ignore stale SHA text if the PR moved. Do not use prior chat memory as authority.

Primary acceptance authority:
- `docs/ssot/M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`

Read the Git-first system files and the exact PR diff. Your role is adversarial governance review, not implementation assistance.

Focus on failure modes another AI would actually exhibit:
- misunderstanding the entrypoint;
- misclassifying its own task;
- using FAST_PATH as an excuse not to inspect relevant authority;
- being pulled by stale conversation context;
- over-reading unrelated SSOT and stalling UIUX;
- under-reading open PR/stacked authority;
- inventing local Git facts when remote-only;
- ignoring lane ownership;
- silently widening mutable scope;
- treating CI as authority;
- confusing target contract with runtime truth;
- treating a new chat as an invalidator;
- rereunning CLOSED GREEN evidence unnecessarily;
- failing to escalate when money/tax/provider/DB/security semantics enter a nominally UIUX task.

Try to find contradictions across:
- `AGENTS.md`
- `M55_GIT_FIRST_ENTRYPOINT.md`
- `M55_GIT_PREFLIGHT_MANIFEST.json`
- `M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`
- `M55_GIT_FIRST_HARDENING_SSOT.md`
- `M55_GIT_FIRST_MINDMAP.md`
- Cursor alwaysApply rules
- static verifiers
- CI workflow
- SSOT index
- existing multi-agent/worktree/Control-Tower rules relevant to this system.

Perform all D1-D10 scenarios in the external acceptance SSOT.

Additionally answer:
1. Could a fresh AI understand the system in under a few minutes without this chat?
2. Is the mind map faithful to the actual machine rules?
3. Which rule names or hierarchy points are likely to confuse ChatGPT, Cursor, Codex or Grok?
4. Which instructions are unenforceable prose versus mechanically checked?
5. What is the smallest credible bypass path?
6. What is the biggest false-positive/ceremony risk?
7. Could an agent accidentally treat `.m55_lane_state.json` as authority?
8. Does a long-running FAST_PATH agent have a clear enough trigger to refresh/reclassify?
9. Are hidden cross-lane dependencies discoverable?
10. Is `USABLE` too strong under the current enforcement model?

Do not reward complexity. Recommend simplification when it increases actual compliance.

Required output: exactly the structure defined by `M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`, including PINNED_AUTHORITY, RECONSTRUCTION_TEST, D1-D10, P0/P1/P2/P3, contradictions, bypasses, false-positive risk, other-AI comprehension, improvements, final classification and reason.

Be hostile to false confidence. Any credible P0/P1 blocks `USABLE`.

End with:
`END_M55_GIT_FIRST_GROKBOT_RED_TEAM`
