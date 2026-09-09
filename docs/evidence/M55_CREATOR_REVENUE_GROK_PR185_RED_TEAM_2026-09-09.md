# M55 Creator Revenue — Grok PR #185 Red-Team Evidence — 2026-09-09

Status: **READ-ONLY AUDIT RECEIVED / CONTROL-TOWER ADJUDICATED**

Auditor: `M55 Revenue Auditor (Grok)`

Target PR: `#185`

Architecture pin:
`2fb86179ad5a3f703ca2e3bda02e82b58cc2825b`

Wrapper HEAD:
`fba280df3bca1a93c229a62ac6376e1146c70e26`

Audit classification:
`GREEN_WITH_NONBLOCKING_FINDINGS`

Clean-state result:
- repo `lexsia228/m55-web`
- branch `docs/m55-creator-affiliate-stripe-tax-legal-ssot-v1`
- no edits/install/commit/push/provider mutation
- `git status --porcelain` empty

## Material result

Core Six benchmark verdict:
- FirstPromoter — KEEP_CORE
- Rewardful — KEEP_CORE
- Shopify Collabs — KEEP_CORE
- A8.net — KEEP_CORE
- ValueCommerce — KEEP_CORE
- 開運メーカー — KEEP_CORE

No replacement or broad benchmark expansion recommended.

Adversarial matrix:
- COVERED: 16
- DEFERRED_TO_CORRECT_GATE: 3
- GAP: 1
- CONTRADICTION: 0

The sole explicit GAP was provider events arriving out of order.

The audit found no hard state drift and no hard money-flow contradiction.

## Findings and adjudication

| ID | Grok severity | Finding | Control-Tower adjudication |
|---|---|---|---|
| F-01 | MEDIUM | old Compliance section still said Stripe A/B/D OPEN | ACCEPT_FOR_IMPLEMENTATION |
| F-02 | LOW | threshold wording implied R2-B2 owns exact value | ACCEPT_FOR_IMPLEMENTATION |
| F-03 | MEDIUM | P0-2/P0-3 evidence locator too broad | ACCEPT_FOR_IMPLEMENTATION |
| F-04 | MEDIUM | out-of-order provider event invariant missing | DEFER runtime to R8; freeze invariant now |
| F-05 | MEDIUM | payable balance could be misread as mutable wallet authority | DEFER runtime to R6/R8; freeze derived-projection invariant now |
| F-06 | LOW | R7 EARNINGS mixed commission and payout state | ACCEPT_FOR_IMPLEMENTATION |
| F-07 | LOW | benchmark architecture/composition URL sets diverged | ACCEPT_FOR_IMPLEMENTATION |

## Financial invariants preserved

- no Creator transfer at purchase time
- M55 commission ledger is not Stripe balance
- commission and payout state machines are orthogonal
- append-only adjustment/reversal
- payout batching
- idempotency
- FAILED/RETURNED does not erase valid PAYABLE commission
- destination-change security hold
- payout request is not commission approval
- one purchase <= one Creator
- self/circular-referral block
- rate lock
- legal deadline overrides economic threshold when applicable
- benchmark precedent is not legal safe harbor

Additional invariant frozen from this audit:

`PROVIDER_EVENT_DELIVERY_ORDER_IS_NON_AUTHORITATIVE = TRUE`

`CREATOR_PAYABLE_BALANCE_IS_DERIVED_PROJECTION = TRUE`

`MUTABLE_CREATOR_WALLET_BALANCE_AS_FINANCIAL_AUTHORITY = PROHIBITED`

## Deferred gaps remain owned, not lost

The audit also identified future-gate details such as partial-refund math, post-PAYABLE reassignment, exit-reserve amount, below-threshold-at-deadline algorithm, R5 collision/cookie/multiple-link behavior, and unmatched-provider-money reconciliation.

These are not authorized for early implementation by this evidence file.

## Final Control-Tower classification

`GREEN_WITH_NONBLOCKING_FINDINGS_PATCHED_IN_DOCS`

No `REAL_INVALIDATOR`.

Sole executable CURRENT/NEXT remains `docs/ssot/M55_EXECUTION_STATE.json`.
