# Codex — M55 Git-First System Exact-Diff Red-Team

READ-ONLY ONLY. DO NOT PATCH. DO NOT MERGE. DO NOT MUTATE REPO.

Repository: `lexsia228/m55-web`
Target PR: `#194`

Before review, fetch the PR fresh and pin the exact current base SHA and head SHA. If the head differs from any SHA written in this prompt, use the fresh PR head and report the mismatch. Do not rely on chat memory.

Primary acceptance authority:
- `docs/ssot/M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`

Mandatory system files:
- `AGENTS.md`
- `docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md`
- `docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json`
- `docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md`
- `docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md`
- `docs/ssot/M55_GIT_FIRST_MINDMAP.md`
- `.cursor/rules/m55-control-tower.mdc`
- `.cursor/rules/m55-scope-aware-repo-preflight.mdc`
- `scripts/verify-m55-git-first-preflight.mjs`
- `scripts/verify-m55-git-first-hardening.mjs`
- `.github/workflows/m55-git-first-preflight.yml`
- `package.json`
- `docs/ssot/README.md`

Mission:
Determine whether the actual PR implementation is safe and practical enough to classify `USABLE`, not merely whether the architecture sounds sensible.

You must inspect the exact PR diff and current CI/check state on the pinned head.

Attack these areas:
1. Git-first can be bypassed before substantive work.
2. `CONTINUATION_FAST_PATH` can be abused to smuggle consequential changes.
3. Hard Trigger coverage is incomplete, contradictory, or purely cosmetic.
4. Hard Triggers create pathological false positives that make UIUX unusable.
5. Lane Lock is ambiguous or can create shadow authority.
6. local-vs-remote behavior lets an agent fabricate worktree/dirty facts.
7. open PR/stacked authority is not actually discoverable when relevant.
8. Context Refresh fails to protect long-running sessions.
9. pre-mutation/pre-GREEN rechecks leave TOCTOU gaps.
10. CLOSED GREEN/no-replay semantics were accidentally weakened.
11. AGENTS/Cursor/manifest/SSOT/mindmap disagree.
12. static verifier can false-pass when critical wiring is missing.
13. CI workflow path filters fail to run on files that can break the system.
14. package command/documentation wiring is incomplete.
15. Product Authority mandatory rule was weakened or made contradictory.
16. relevant operator/multi-agent/worktree authority became unreachable.
17. branch/path/semantic trigger rules are technically impossible or underspecified.
18. exact PR contains unrelated changes.
19. another fresh Codex agent could reconstruct behavior without chat history.
20. any lower-cost stronger enforcement is missing.

Perform the D1-D10 scenarios from the acceptance SSOT. Where safe, reason from actual source/verifier behavior rather than prose alone.

Specifically inspect CI path coverage: identify every file whose modification could materially disable Git-first/hardening enforcement and verify whether the workflow is guaranteed to run when that file changes.

Specifically inspect verifier negative coverage: report concrete mutations that would incorrectly PASS today.

Do not treat GitHub mergeability or CI GREEN as proof of governance correctness.

Required output: exactly the structure defined in `M55_GIT_FIRST_EXTERNAL_RED_TEAM_ACCEPTANCE_SSOT.md`, including:
- PINNED_AUTHORITY
- RECONSTRUCTION_TEST
- ADVERSARIAL_RESULTS D1-D10
- FINDINGS P0/P1/P2/P3
- CONTRADICTIONS
- BYPASS_PATHS
- FALSE_POSITIVE_RISK
- OTHER_AI_COMPREHENSION
- IMPROVEMENTS
- FINAL_CLASSIFICATION (`USABLE | USABLE_WITH_CONDITIONS | NOT_USABLE`)
- FINAL_REASON

Be strict. Any credible P0/P1 must block `USABLE`.

End with:
`END_M55_GIT_FIRST_CODEX_RED_TEAM`
