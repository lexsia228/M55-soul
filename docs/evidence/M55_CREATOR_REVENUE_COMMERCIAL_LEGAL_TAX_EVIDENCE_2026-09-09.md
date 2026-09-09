# M55 Creator Revenue — Commercial / Legal / Tax Evidence Pack — 2026-09-09

Status: **PRIMARY-SOURCE EVIDENCE PACK / HUMAN-APPROVED RESEARCH BASIS**

Purpose: reduce the risk that M55 later absorbs an unintended Creator tax gross-up, misses payer-side withholding, loses consumption-tax input credit unexpectedly, publishes incomplete customer sales terms, or cannot explain a Creator payout calculation.

This file is evidence, not executable authority and not professional tax/legal advice.

Normative authorities:
- `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`
- `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`
- `docs/ssot/M55_CREATOR_COMPLIANCE_AND_PAYOUT_AUTOMATION_SSOT.md`

M55-specific Stripe evidence:
- `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`

Benchmark composition evidence:
- `docs/evidence/M55_CREATOR_AFFILIATE_BENCHMARK_COMPOSITION_EVIDENCE_2026-09-09.md`

Research verification date: **2026-09-09 JST**

---

## 1. Evidence method

Priority:
1. Japanese government / regulator / tax authority primary sources.
2. Stripe official documentation and M55-specific Stripe Support.
3. Frozen mature-market benchmark evidence for operational patterns.
4. M55 inference, explicitly labeled.
5. No competitor practice is a legal safe harbor.

No tax or legal ambiguity is silently converted into runtime behavior.

---

## 2. Customer sale / Specified Commercial Transactions Act evidence

### Official sources

- Consumer Affairs Agency / Specified Commercial Transactions Act Guide — 通信販売:
  https://www.no-trouble.caa.go.jp/what/mailorder/
- 通信販売広告について:
  https://www.no-trouble.caa.go.jp/what/mailorder/advertising.html
- 通信販売広告Q&A:
  https://www.no-trouble.caa.go.jp/qa/advertising.html
- 通信販売の申込み段階における表示についてのガイドライン:
  https://www.caa.go.jp/policies/policy/consumer_transaction/specified_commercial_transactions/assets/consumer_transaction_cms101_2401119_03.pdf

### Supported findings

Current CAA guidance requires communication-sale advertising/final-confirmation handling for applicable items including:

- selling price / consideration;
- if consumption tax is collected, price display means tax-inclusive price;
- customer-borne charges;
- payment timing/method;
- delivery/service provision timing;
- cancellation/withdrawal/refund terms;
- special sales conditions where applicable;
- seller name/address/phone/responsible person information;
- final confirmation with required transaction details and ability to confirm/correct the application.

Communication sales do not have the same blanket cooling-off system as door-to-door sales.

### M55 application

M55 Revenue Safety must treat the following as release prerequisites, not optional footer copy:

`PRODUCT_CONTENT_DISCLOSED`
`TOTAL_PRICE_TAX_INCLUSIVE_DISCLOSED`
`PAYMENT_METHOD_AND_TIMING_DISCLOSED`
`PROVISION_TIMING_DISCLOSED`
`REFUND_CANCELLATION_TERMS_DISCLOSED`
`SELLER_IDENTITY_CONTACT_DISCLOSED`
`FINAL_CONFIRMATION_TERMS_VISIBLE`
`PURCHASE_CONTENT_CONFIRM_CORRECT_PATH_AVAILABLE`
`POST_PURCHASE_RECOVERY_SUPPORT_PATH_AVAILABLE`

The last recovery/support path is an M55 operating requirement, not stated as a statutory CAA element.

---

## 3. Affiliate / influencer advertising-disclosure evidence

### Official source

CAA stealth-marketing Q&A:
https://www.caa.go.jp/policies/policy/representation/fair_labeling/faq/stealth_marketing/

### Supported findings

CAA states:

- the regulated party is generally the advertiser involved in determining a display;
- influencers/affiliates who act for the advertiser are generally not themselves the regulated advertiser;
- affiliate disclosures must be clear considering the display as a whole;
- a notice can be insufficient if inconspicuous;
- a video disclosure only at the beginning can be insufficient depending on the presentation;
- even without detailed wording instructions, payment/relationship circumstances can make a third-party post a business display.

### M55 application

M55 policy should require clear affiliate/advertising disclosure whenever a Creator chooses to promote M55 under the affiliate relationship.

This is a compliance boundary only; it does not create a posting quota, schedule, or work-product order.

---

## 4. Creator's own income-tax evidence

### Official sources

NTA 令和7年分 確定申告特集 — 申告漏れ注意:
https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/shinkoku-tyuui/index.htm

NTA No.1500 雑所得:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1500.htm

### Supported findings

NTA expressly lists affiliate income among internet/new-economy income that, in principle, is reported as business income or miscellaneous income (business), depending on facts.

NTA also treats business-related miscellaneous income as gross income minus necessary expenses, and imposes additional record/document obligations at specified prior-year revenue levels.

### M55 application

A Creator's final income-tax liability is not automatically an additional tax bill M55 pays on top of the contractual commission.

However, M55 must separately determine and perform any payer-side source-withholding duty that applies to its exact payment.

M55 Creator-facing tax notice must not promise that payment is tax-free or that no filing is required.

---

## 5. Payer-side withholding — critical unresolved classification

### Official sources

NTA No.2793 報酬・料金等の源泉徴収義務者:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2793.htm

NTA No.2804 外交員等に支払う報酬・料金:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2804.htm

NTA No.2792 Q&A — 手取契約:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2792_qa.htm

NTA income-tax basic guidance on `外交員又は集金人`:
https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/36/04.htm

### Supported findings

- A payer must withhold when paying remuneration that is actually within a statutory source-withholding category.
- NTA separately identifies `外交員等` as a source-withholding category.
- Current NTA No.2804 uses a monthly ¥120,000 deduction rule for `外交員等` before applying 10.21% to the remainder, subject to its detailed conditions.
- The researched official sources do **not** state that ordinary web affiliate commission is universally inside or universally outside `外交員等`.
- When a source-withholding payment is contracted as a **net take-home amount**, NTA No.2792 Q&A requires gross-up calculation.

### Risk conclusion

`AFFILIATE_SOURCE_WITHHOLDING_CLASSIFICATION = OPEN`

This is the highest payer-side tax ambiguity for M55 v1.

Do not use:
- `WITHHOLDING = ALWAYS_ZERO`
- `WITHHOLDING = ALWAYS_10_21_PERCENT`

Both are unsupported.

### M55 contractual firewall

The 50% / 40% / 30% rate should be expressed as a **gross commercial commission rate** applied to `COMMISSIONABLE_REVENUE`.

Do not guarantee an after-tax or after-withholding take-home percentage.

This prevents a future source-withholding classification from automatically converting the advertised rate into an M55-funded tax gross-up.

---

## 6. Nonresident / cross-border evidence

### Official sources

NTA No.2878 国内源泉所得の範囲:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2878.htm

NTA No.2884 非居住者等に対する源泉徴収・税率:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2884.htm

### Supported findings

Nonresident payments can enter separate domestic-source-income and source-withholding rules, with treaty relief potentially changing the result.

### M55 application

Cross-border Creator payout is not a zero-regret extension of Japan-resident payout.

`NON_JAPAN_TAX_RESIDENCY -> TAX_REVIEW_REQUIRED`

Do not activate a nonresident payout path until its exact payment/activity/treaty classification is implemented.

---

## 7. Consumption tax / invoice evidence

### Official sources

NTA e-Tax invoice status guidance:
https://www.e-tax.nta.go.jp/toiawase/qa/e-taxweb_invoice/42.htm

NTA 令和8年度税制改正 — invoice transition:
https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice-review/index.htm

NTA No.6625 適格請求書等の記載事項:
https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6625.htm

NTA Invoice Q&A — 仕入明細書の相手方への確認:
https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/86.pdf

### Supported findings

- Consumption-tax taxable status may depend on the base-period ¥10 million test, specified-period tests, voluntary/other rules, and invoice registration.
- An invoice-registered business can be taxable even when the base-period threshold is not exceeded.
- M55 cannot classify a Creator solely from the amount M55 paid.
- Current 2026 reform evidence changes the transitional input-tax-credit percentages for purchases from non-invoice issuers to:
  - 70% from 2026-10 for two years;
  - 50% from 2028-10 for two years;
  - 30% from 2030-10 for one year;
  - 0% from 2031-10 onward,
  subject to current statutory conditions and limits.
- A purchaser-created `仕入明細書` can satisfy invoice-document preservation requirements when required fields are present and the counterparty confirms its contents.
- NTA gives electronic confirmation and agreed deemed-confirmation-after-no-objection as examples.
- Invoice documents generally carry statutory preservation requirements; implementation must use the then-current NTA rule.

### M55 application

Creator tax profile must include:
- entity type;
- tax residency;
- invoice registration status;
- invoice registration number when applicable;
- verification timestamp;
- withholding classification;
- policy versions.

Invoice status changes M55 accounting economics, not the already-earned commercial percentage by silent retroactive rewrite.

R8 should evaluate automated purchaser-created monthly payout/self-billing statements from the M55 ledger with Creator electronic confirmation.

---

## 8. Freelance Act / payout-fee evidence

### Official sources

JFTC Freelance Act Q&A, Q78:
https://www.jftc.go.jp/fllaw_limited/fllaw_qa.html

JFTC 2026-06-18 recommendation:
https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260618_spc.html

### Supported findings

If a transaction is within the Freelance Act, current JFTC guidance states that making the freelancer bear the bank-transfer fee and deducting it from remuneration is a prohibited reduction regardless of agreement.

The separate question whether M55 Affiliate v1 is within that Act remains fact-pattern dependent and is not closed by the affiliate label.

### M55 application

Stripe technically billing the platform and technically allowing user fees does not answer Japanese contract-law permissibility.

`CREATOR_FEE_DEDUCTION_IMPLEMENTATION = NOT_AUTHORIZED_PENDING_LEGAL_CLASSIFICATION`

Batching/threshold economics should be used before assuming fee pass-through.

---

## 9. Stripe money-rail evidence

### M55-specific source

`docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`

### Current Stripe public sources

Stripe Connect Japan pricing:
https://stripe.com/jp/connect/pricing

Stripe Separate Charges and Transfers:
https://docs.stripe.com/connect/separate-charges-and-transfers

### Supported/current M55 planning facts

M55-specific Stripe Support has already classified:
- Accounts v2;
- Express Dashboard;
- Separate Charges and Transfers;
- application/platform fee and loss responsibility;
- Japan platform to Japan Creator affiliate commission feasible in principle;
- delayed transfer after M55 review feasible in principle;
- current Connect charges billed to M55 platform under the planned configuration.

Stripe current public Japan Connect pricing shows the platform-managed model with active-account and per-payout charges; these are dated provider facts and require R8 reconciliation before activation.

### M55 application

Stripe is payment/KYC/payout rail.

M55 owns:
- attribution;
- gross commission calculation;
- tax classification;
- append-only commission ledger;
- adjustments;
- payout instruction;
- accounting statement;
- reconciliation.

---

## 10. Frozen M55 gross-to-net accounting model

Commercially frozen direction:

```
COMMISSIONABLE_REVENUE
  x frozen applicable rate (50% / 40% / 30%)
= GROSS_CREATOR_COMMISSION

+ lawful append-only positive adjustments
- lawful append-only negative adjustments
- STATUTORY_WITHHOLDING (only if classification requires)
- LEGALLY_AUTHORIZED_PAYOUT_OR_SERVICE_FEE (currently unresolved / not authorized)
= NET_PAYOUT
```

`COMMISSION_RATE_IS_GROSS_COMMERCIAL_RATE = TRUE`

`NET_OF_TAX_COMMISSION_GUARANTEE = PROHIBITED`

`NO_SILENT_CREATOR_DEDUCTION = TRUE`

`STATUTORY_WITHHOLDING_DOES_NOT_REDEFINE_COMMISSION_RATE = TRUE`

M55's ordinary card/payment-processing fee remains outside the advertised Creator commission base under the already frozen Creator Revenue SSOT.

---

## 11. Tax readiness model

Candidate architecture:

- `TAX_PROFILE_UNVERIFIED`
- `TAX_CLASSIFICATION_PENDING`
- `TAX_READY`
- `TAX_REVIEW_REQUIRED`

A commission may be valid while tax payout readiness is not.

`COMMISSION_PAYABLE + TAX_NOT_READY` must not erase the commission.

`UNKNOWN_TAX_CLASSIFICATION_MUST_FAIL_CLOSED_BEFORE_LIVE_PAYOUT = TRUE`

---

## 12. Creator Revenue Console transparency contract

Future Console/statement should display at minimum:

- eligible attributed purchases;
- `COMMISSIONABLE_REVENUE`;
- applicable rate and rate schedule version;
- gross Creator commission;
- PENDING / HOLD / PAYABLE / REVERSED / ADJUSTED;
- adjustment/refund reason;
- tax readiness;
- statutory withholding and classification, if any;
- legally authorized payout/service fee, if any;
- net payout;
- payout batch/date/status/provider reference;
- invoice-registration/accounting status at an appropriate privacy-safe level;
- machine-readable export.

No amount may disappear without an explainable state/event.

---

## 13. High-earner safety

High Creator earnings alone do not change the applicable rate or tax rule.

Scaling from 1 to 1,000+ conversions/month should change:
- reconciliation rigor;
- fraud/anomaly review;
- tax-profile verification;
- invoice-status verification;
- reporting;
- payout batch controls;
- accounting evidence.

It must not silently change:
- already-earned rate;
- commission identity;
- gross-to-net semantics.

At high volume, M55 must monitor its own input-tax-credit exposure and provider payout cost; that is M55 unit economics, not a reason to retroactively confiscate Creator commission.

---

## 14. Open items that remain intentionally unresolved

1. Exact source-withholding classification of ordinary M55 Affiliate v1 commission, including `外交員等`.
2. Exact Freelance Act classification of M55 Affiliate-only relationship for payout-fee purposes.
3. Exact legally permissible Creator-borne payout/service fee, if any.
4. Exact payout threshold/cadence — R8.
5. Exact money/tax rounding — R6.
6. Cross-border/nonresident Creator tax/treaty runtime.
7. Exact self-billing statement schema/confirmation cadence — R8/accounting.
8. Current provider prices at activation — R8 fresh reconciliation.

None of these open items blocks provider-independent architecture/code that does not invent the unresolved financial semantics.

---

## 15. Evidence-to-implementation release rule

For every money/tax rule implemented later, the review packet must identify:

- primary source;
- source verification date;
- M55 applicability decision;
- unresolved exclusions;
- SSOT token;
- code owner;
- test invariant;
- runtime/provider evidence where applicable.

`MONEY_DECISION_SOURCE_TRACEABILITY = REQUIRED`

`CREATOR_REVENUE_EVIDENCE_FIRST_FREEZE = REQUIRED`
