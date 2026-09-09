# M55 Revenue Auditor (Grok) — PR #187 Commercial / Legal / Tax Read-Only Red-Team

Status: **READY FOR GROK EXECUTION / READ-ONLY ONLY**

Repository: `lexsia228/m55-web`

PR: **#187**

Architecture/evidence payload commit:
`7e28aa9d008bdd40dafc5894713a803d44935cbf`

Branch:
`docs/m55-creator-commercial-legal-tax-evidence-v1`

The prompt file itself may be added after the payload commit. Do not treat that prompt-only wrapper commit as a payload drift.

## 0. Setup and STOP rules

1. Verify repository and branch.
2. Verify commit `7e28aa9d008bdd40dafc5894713a803d44935cbf` is an ancestor of current PR HEAD.
3. Compare payload commit against its parent/main base and audit those six payload files.
4. Exclude only this planning prompt file from financial/legal payload findings.
5. Read:
   - `AGENTS.md`
   - `docs/ssot/M55_EXECUTION_STATE.json`
   - `docs/ssot/M55_MULTI_AGENT_PARALLEL_OPERATING_MODEL_SSOT.md`
   - `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`
   - `docs/ssot/M55_CREATOR_COMPLIANCE_AND_PAYOUT_AUTOMATION_SSOT.md`
   - `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`
   - `docs/evidence/M55_CREATOR_REVENUE_COMMERCIAL_LEGAL_TAX_EVIDENCE_2026-09-09.md`
   - `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`
6. Verify clean working tree before and after.

Do NOT edit/install/commit/push/open PR/mutate Stripe/DB/env/provider/Production.
Do NOT invent tax/legal conclusions.
Do NOT treat competitor practice as authority.
Do NOT implement future gates.

Return `READY_PR187_COMMERCIAL_LEGAL_TAX_RED_TEAM` before the full audit.

## 1. Audit objective

Determine whether PR #187 creates a conservative, evidence-traceable financial/legal/tax firewall that prevents:
- accidental tax gross-up;
- silent Creator deductions;
- unsupported universal withholding;
- under-specified invoice/consumption-tax handling;
- misleading Creator earnings transparency;
- Tokushoho sales-display gaps;
- affiliate advertising-disclosure gaps;
- cross-border tax leakage;
- premature payout activation.

## 2. Required checks

### A. Gross vs net commission
Verify:
- 50/40/30 remains the commercial rate;
- rate applies to existing `COMMISSIONABLE_REVENUE`;
- no after-tax/net guarantee;
- statutory withholding is separate;
- refund/chargeback and processing-fee semantics do not conflict with earlier frozen rules.

### B. Withholding
Check for:
- unsupported claim that ordinary web affiliate is always zero withholding;
- unsupported claim that it is always `外交員等`;
- misuse of 10.21%;
- misuse of monthly ¥120,000 deduction;
- missing payer-side remittance/accounting implication;
- tax status changing commission validity incorrectly.

### C. Consumption tax / invoice
Check:
- Creator status is not inferred only from M55 payout volume;
- invoice registration and effective dates are separated from rate;
- 2026 transition percentages are dated, not timeless;
- purchaser-created/self-billing statement is framed as candidate, not automatic entitlement;
- any missing confirmation/preservation requirement is flagged.

### D. Tokushoho / customer sale
Check:
- tax-inclusive price;
- payment method/timing;
- provision timing;
- refund/cancellation;
- seller identity/contact;
- final confirmation;
- correction opportunity;
- no false blanket cooling-off claim;
- Creator payout rules are not confused with customer-sale rules.

### E. Affiliate advertising / stealth marketing
Check:
- M55 advertiser responsibility is represented;
- disclosure must be conspicuous/medium-appropriate;
- policy does not accidentally become a posting quota/work order;
- prohibited claims remain separate from commission economics.

### F. Stripe boundary
Verify:
- Stripe is money/KYC/payout rail;
- M55 owns tax classification, commission ledger, statements;
- Stripe technical fee capability is not treated as legal deduction authority;
- current pricing is dated.

### G. High-earner scenario
Reason through:
- ¥100k/month commission;
- ¥500k/month;
- ¥1m+/month;
- Creator invoice status changes;
- Creator becomes corporation;
- Creator becomes nonresident;
- high volume but no fraud.

Ensure no silent rate cliff or M55-funded tax gross-up is created.

### H. Evidence traceability
For every material tax/legal claim, classify:
- PRIMARY_SOURCE_SUPPORTED
- M55_INFERENCE
- OPEN
- OVERCLAIM

Flag broken/weak source locators and any statement stronger than the cited primary evidence.

## 3. Adversarial cases

At minimum:
1. Source withholding later determined required after some payouts.
2. Creator contract wording accidentally promises "take-home 50%".
3. Creator invoice number expires/changes.
4. Creator says "I'm tax exempt" but M55 lacks evidence.
5. Creator becomes nonresident mid-period.
6. M55 changes tax policy version mid-month.
7. Refund after commission becomes PAYABLE.
8. Refund after payout.
9. M55 wants to deduct Stripe payout fee.
10. Law changes transition input-credit percentage.
11. Creator disputes gross/net calculation.
12. Customer final-confirmation page omits refund terms.
13. Affiliate post hides #PR disclosure.
14. Creator produces 10,000 valid sales.
15. Self-billing statement is not confirmed by Creator.

For each:
- COVERED
- DEFERRED_TO_CORRECT_GATE
- GAP
- CONTRADICTION

## 4. Required report

### 1. PINNED AUTHORITY
### 2. FINAL CLASSIFICATION
Choose:
- GREEN_NO_MATERIAL_FINDINGS
- GREEN_WITH_NONBLOCKING_FINDINGS
- YELLOW_HOLD_REQUIRES_DOC_FIX
- RED_REAL_INVALIDATOR

### 3. MATERIAL FINDINGS
ID / severity / exact file-section / evidence / failure mode / narrow correction / owning gate

### 4. TAX FIREWALL VERDICT
### 5. TOKUSHOHO VERDICT
### 6. AFFILIATE DISCLOSURE VERDICT
### 7. STRIPE BOUNDARY VERDICT
### 8. HIGH-EARNER VERDICT
### 9. ADVERSARIAL MATRIX
### 10. SOURCE TRACEABILITY MATRIX
### 11. FALSE-POSITIVE WARNINGS
### 12. FINAL CLEAN-STATE PROOF

Do not instruct implementer directly.

Control Tower will classify every finding as:
- ACCEPT_FOR_IMPLEMENTATION
- REJECT_FALSE_POSITIVE
- DEFER_TO_OWNING_GATE
- NEEDS_FRESH_EVIDENCE
- REAL_INVALIDATOR

End:
`END_PR187_COMMERCIAL_LEGAL_TAX_RED_TEAM`
