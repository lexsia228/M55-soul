# GrokBOT — M55 Git-First Governance v2 Adversarial Red-Team

READ-ONLY ONLY. DO NOT PATCH. DO NOT MERGE. DO NOT MUTATE REPO.

Repository: `lexsia228/m55-web`
Target PR: `#194`

Fetch PR #194 fresh and pin exact current base/head SHA. If it moves during review, STOP and mark the result stale. Do not use prior chat, Codex report, or earlier Grok report as authority.

Primary acceptance authority:
- `docs/ssot/M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`

Mandatory reading:
- `AGENTS.md`
- `docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md`
- `docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json`
- `docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`
- `docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md`
- `docs/ssot/M55_GIT_FIRST_OPERATIONAL_FIXTURES.md`
- `docs/ssot/M55_GIT_FIRST_MINDMAP.md`
- `docs/ssot/README.md`
- relevant multi-agent/worktree authority
- Cursor alwaysApply rules
- policy/negative/diff/structural verifiers
- GitHub Actions workflow
- exact PR diff

Role: adversarial operational governance reviewer. Determine how another AI will actually misread, evade, over-apply or under-apply the system.

Important v2 boundary:
- known protected paths have bounded machine changed-path enforcement;
- unknown semantic meaning is not claimed to be completely statically detectable;
- Lane Lock is explicitly procedural, not an atomic distributed mutex;
- repo CI is explicitly not tamper-proof without host required-check enforcement.

Do not score an explicitly bounded limitation as a contradiction merely because a stronger system is imaginable. Find places where actual wording/behavior still exceeds or conflicts with that boundary.

Attack these operational failure modes:
1. fresh AI misses Hardening despite following the mandatory entry;
2. new chat incorrectly defaults FAST without durable continuation handoff;
3. valid paused UIUX lane incorrectly gets chronic FULL or unrelated Creator/legal/provider reading;
4. hard-trigger path is renamed/varied enough to escape machine matching;
5. semantic risk outside patterns is mistaken for machine-proven safe;
6. open/unmerged authority search is declared without a real fresh query;
7. `requiredUnmergedAuthority` is confused with a missing local file;
8. lane-state cache is treated as authority over Worktree Registry/fresh Git;
9. procedural Lane Lock is misunderstood as atomic safety;
10. two mutation owners overlap after separate valid-looking preflights;
11. long-running context crosses a task boundary without refresh;
12. external audit statement is accepted without exact acceptance reproduction;
13. CLOSED GREEN is reopened because a new session lacks history;
14. local facts are invented from folder names or remote-only evidence;
15. workflow/verifier strings survive while effective enforcement is gutted;
16. negative tests test only themselves and fail to cover actual manifest/workflow behavior;
17. routine UIUX CSS becomes impractically ceremonial;
18. Product Authority/global execution-state requirements conflict with scope-aware FAST;
19. another ChatGPT/Codex/Grok cannot reconstruct hierarchy without this chat;
20. host-side required-check is missing but the system still claims broad USABLE.

Perform all D1-D10 and F1-F8 from the external acceptance SSOT.

For F1, inspect the governance behavior, not the product itself. The known real incident is: exact accepted month sequence was `1 -> 12`; an auditor used `2 -> 1 -> 21`. Determine whether v2 prevents such mismatched reproduction from becoming a blocker without throwing away unrelated real findings.

Inspect same-head CI separately from GitHub host enforcement. If branch protection/ruleset/required check cannot be observed, report UNOBSERVABLE rather than assume.

Required output: exactly the acceptance SSOT structure, including PINNED_AUTHORITY, RECONSTRUCTION_TEST, D1-D10, F1-F8, P0/P1/P2/P3, contradictions, bypasses, false-positive risk, other-AI comprehension, HOST_ENFORCEMENT, improvements, final classification and reason.

Be hostile to false confidence and unnecessary complexity. Any credible unresolved P0/P1 blocks `USABLE`.

End with:
`END_M55_GIT_FIRST_GROKBOT_RED_TEAM`
