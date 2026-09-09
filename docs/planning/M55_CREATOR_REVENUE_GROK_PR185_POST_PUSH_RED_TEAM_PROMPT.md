# M55 Revenue Auditor (Grok) — PR #185 Post-Push Read-Only Red-Team Prompt

Status: **READY FOR GROK EXECUTION / READ-ONLY ONLY**

Target repository: `lexsia228/m55-web`

Target PR: **#185**

Pinned target branch:
`docs/m55-creator-affiliate-stripe-tax-legal-ssot-v1`

Pinned target HEAD at prompt creation:
`2fb86179ad5a3f703ca2e3bda02e82b58cc2825b`

Control-Tower authority: ChatGPT / Creator Revenue lane owner.

Your role: **M55 Revenue Auditor (Grok) = long-running read-only auditor / red-team / repository mapper.**

You are NOT an implementation agent.

---

## 0. STOP / authority rules

Before any audit:

1. Verify remote repository is exactly `lexsia228/m55-web`.
2. Fetch/read the remote PR #185 branch and exact HEAD.
3. If HEAD is not `2fb86179ad5a3f703ca2e3bda02e82b58cc2825b`, STOP and return:
   `STOP_HEAD_DRIFT`
4. Read root `AGENTS.md`.
5. Read:
   - `docs/ssot/M55_EXECUTION_STATE.json`
   - `docs/ssot/M55_MULTI_AGENT_PARALLEL_OPERATING_MODEL_SSOT.md`
   - `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`
   - `docs/ssot/M55_CREATOR_COMPLIANCE_AND_PAYOUT_AUTOMATION_SSOT.md`
   - `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`
   - `docs/ssot/M55_CREATOR_AFFILIATE_BENCHMARK_TARGET_ARCHITECTURE_SSOT.md`
   - `docs/evidence/M55_CREATOR_AFFILIATE_BENCHMARK_COMPOSITION_EVIDENCE_2026-09-09.md`
   - `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`
6. Verify no mutation is authorized.
7. Confirm the working tree is clean before and after the audit.

Do NOT:

- edit files;
- install packages merely to make tests run;
- commit;
- push;
- open/update PRs;
- mutate Stripe, Vercel, Supabase, Clerk, env, DB, or Production;
- create connected accounts;
- send money;
- select a payout provider;
- invent legal/tax rules;
- implement R3–R8;
- treat benchmark vendor practice as M55 legal/tax authority.

If setup is clean, first return:
`READY_PR185_REVENUE_RED_TEAM`

Then continue the bounded audit.

---

## 1. Audit objective

Independently determine whether PR #185 creates a coherent, evidence-traceable, non-overclaiming Creator Affiliate architecture suitable to guide later implementation.

This is NOT a broad market research replay.

You must audit the exact remote diff and the exact claims currently frozen in PR #185.

---

## 2. Core questions

### A. Benchmark shortlist quality

Audit the frozen Core Six:

- FirstPromoter
- Rewardful
- Shopify Collabs
- A8.net
- ValueCommerce
- 開運メーカー

Determine whether:

1. each has a distinct architecture-owner role;
2. roles materially overlap in a way that creates confusion;
3. any critical M55 surface has no useful benchmark owner;
4. any selected source is too weak or not actually analogous;
5. any secondary comparator should replace a Core Six member because it uniquely covers a missing critical money surface.

Do NOT expand the list just to increase benchmark count.

### B. Source-to-M55 traceability

For every money/affiliate surface in:
`M55_CREATOR_AFFILIATE_BENCHMARK_TARGET_ARCHITECTURE_SSOT.md`

verify that:

1. the claimed benchmark behavior is actually supported by the cited source/evidence;
2. the M55 adoption is clearly marked REUSE / ADAPT / BUILD / DEFER / REJECT;
3. M55-specific decisions are not falsely attributed to a benchmark;
4. Stripe account/configuration claims defer to M55-specific Stripe evidence;
5. law/tax claims defer to the tax/legal SSOT and official-source evidence;
6. dated thresholds/fees/cadence are not treated as timeless constants.

Flag any unsupported or over-broad claim.

### C. Money-flow correctness

Red-team this intended chain:

```
Customer payment
-> attribution evidence
-> purchase observation
-> commission PENDING
-> objective review / refund / fraud
-> COMMISSION_PAYABLE
-> payable balance aggregation
-> payout batch
-> Stripe Connect transfer
-> connected-account payout
-> provider reconciliation
```

Look for:

- accidental purchase-time Creator transfer;
- ledger vs Stripe balance responsibility confusion;
- commission state vs payout state conflation;
- missing reversal/adjustment path;
- missing payout failure/return path;
- reconciliation gaps;
- hidden mutable balance;
- possibility of double-pay;
- possibility that valid commission silently disappears;
- payment-provider event ordering assumptions.

### D. Adversarial scenarios

At minimum reason through these scenarios:

1. same Stripe webhook delivered 10 times;
2. purchase succeeds, then refund arrives before PAYABLE;
3. purchase succeeds, PAYABLE becomes true, refund arrives before payout;
4. payout succeeds, then later customer chargeback occurs;
5. Creator clicks payout/request button repeatedly;
6. two Creators claim the same purchase;
7. same Creator self-refers using another identity/payment method;
8. Creator changes payout destination then immediately requests full payout;
9. Creator is PAYABLE but KYC is incomplete;
10. provider sends events out of order;
11. one Creator grows from 10 to 1,000 to 10,000 conversions/month;
12. Creator becomes tax/invoice-status materially different mid-year;
13. Creator exits program while refunds are still possible;
14. payout fails/returns after M55 marked it processing;
15. threshold/carry-over rule conflicts with a later legally required deadline;
16. fee policy changes after commission was earned;
17. Stripe pricing/configuration changes before activation;
18. attribution evidence is corrected manually;
19. customer clears cookies but later logs in and buys;
20. one user reaches checkout through multiple Creator links.

For each, state whether the current PR:
- already defines the invariant;
- correctly defers it to an owning gate;
- incorrectly leaves an unowned gap;
- incorrectly claims it is solved.

### E. State drift

Cross-check all Creator Revenue SSOTs for contradictions in:

- commission state names;
- payout state names;
- provider selection status;
- Stripe C support status;
- Affiliate-first vs Sponsored Creator separation;
- payout fee status;
- legal/tax OPEN vs CLOSED;
- threshold/cadence ownership;
- attribution window ownership;
- rounding ownership;
- current execution gate;
- cash activation authority.

The sole executable CURRENT/NEXT must remain:
`docs/ssot/M55_EXECUTION_STATE.json`

PR #185 must not silently advance it.

### F. False reuse / false equivalence

Search for dangerous conceptual reuse, especially:

- share token used as affiliate attribution without contract;
- entitlement/refund logic treated as commission ledger;
- generic funnel source treated as Creator attribution;
- trait label "Creator" treated as revenue Creator identity;
- Stripe balance treated as commission ledger;
- benchmark vendor state names treated as M55 persisted states;
- competitor fee treatment treated as legal safe harbor.

### G. Legal/tax overclaim detection

Do NOT decide Japanese law yourself.

Only identify whether the docs:

- falsely claim Freelance Act exclusion;
- falsely claim affiliate commission never requires withholding;
- falsely claim fee deduction is legal;
- falsely claim competitor operation proves legality;
- falsely claim 30 days is always legally safe;
- falsely claim Stripe approval is final/permanent.

Classify these as documentation-governance defects, not legal opinions.

### H. High-volume Creator integrity

Check whether the architecture still works conceptually for:

- 1 conversion/month;
- 100 conversions/month;
- 1,000 conversions/month;
- 10,000 conversions/month.

Specifically inspect:

- commission-row cardinality;
- balance aggregation;
- batch payout model;
- fraud-review scaling;
- tax/profile refresh;
- reporting;
- reconciliation;
- provider dependence;
- no retroactive rate reduction solely due to success.

---

## 3. Required output format

Return exactly these sections:

### 1. PINNED AUTHORITY
- repo
- branch
- HEAD
- PR
- files read
- commands executed
- commands not executed
- clean-state proof

### 2. FINAL CLASSIFICATION
Choose exactly one:
- `GREEN_NO_MATERIAL_FINDINGS`
- `GREEN_WITH_NONBLOCKING_FINDINGS`
- `YELLOW_HOLD_REQUIRES_DOC_FIX`
- `RED_REAL_INVALIDATOR`

### 3. MATERIAL FINDINGS
For every finding provide:

- ID
- severity: BLOCKER / HIGH / MEDIUM / LOW
- exact file/path/section
- claim or invariant at issue
- evidence
- failure mode
- narrowest correction
- owning future gate if deferred

### 4. BENCHMARK COMPOSITION VERDICT
For each Core Six:
- KEEP_CORE
- MOVE_SECONDARY
- REPLACE
with one-sentence reason.

### 5. MONEY-FLOW INVARIANTS
List:
- preserved invariants
- missing invariants
- improperly solved-too-early invariants

### 6. ADVERSARIAL MATRIX
For all 20 scenarios:
- COVERED
- DEFERRED_TO_CORRECT_GATE
- GAP
- CONTRADICTION

### 7. STATE-DRIFT MATRIX
Report every checked state/token pair and whether aligned.

### 8. SOURCE-TRACEABILITY VERDICT
Identify unsupported source claims, stale claims, or attribution mistakes.

### 9. FALSE-POSITIVE WARNINGS
List any tempting findings that should NOT cause implementation churn.

### 10. FINAL CLEAN-STATE PROOF
Prove no files changed and no mutation occurred.

---

## 4. Control-Tower adjudication boundary

Do not tell the implementer to patch anything directly.

The controlling ChatGPT will classify every material finding as exactly one:

- `ACCEPT_FOR_IMPLEMENTATION`
- `REJECT_FALSE_POSITIVE`
- `DEFER_TO_OWNING_GATE`
- `NEEDS_FRESH_EVIDENCE`
- `REAL_INVALIDATOR`

Your report is supporting evidence only.

End with:
`END_PR185_REVENUE_RED_TEAM`
