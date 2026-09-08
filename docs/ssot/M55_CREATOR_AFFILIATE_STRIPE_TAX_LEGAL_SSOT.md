# M55 Creator Affiliate / Stripe / Tax-Legal SSOT

Status: **ACTIVE / HUMAN-APPROVED ARCHITECTURE CONTRACT (2026-09-09)**

Implementation status: **CREATOR CASH INFRASTRUCTURE NOT IMPLEMENTED**

Sole executable CURRENT/NEXT authority remains `docs/ssot/M55_EXECUTION_STATE.json`. This SSOT does not advance the execution gate, select the payout provider, create connected accounts, move money, or authorize Production cash activation.

Parent roadmap authority: `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`

Compliance/payout state authority: `docs/ssot/M55_CREATOR_COMPLIANCE_AND_PAYOUT_AUTOMATION_SSOT.md`

Stripe primary evidence: `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`

---

## A. Human-approved v1 business model

`CREATOR_PROGRAM_V1 = AFFILIATE_FIRST`

M55 v1 is designed around a Creator-specific URL/direct link. A Creator may introduce M55 to another user. If the attributed user makes an eligible paid purchase, M55 may create a commission under the published Creator contract.

Affiliate v1 intentionally does **not** require:

- a minimum number of posts;
- a fixed posting date/time;
- a commissioned video, article, image or other creative deliverable;
- a fixed working schedule;
- recruitment of other Creators;
- downline/upline or recursive compensation;
- purchase/inventory/joining fee as a condition of earning.

The Creator chooses whether, when, where and how to introduce M55, subject to mandatory safety/compliance boundaries.

`AFFILIATE_V1_MANDATORY_DELIVERABLE = NONE`

`AFFILIATE_V1_MANDATORY_POSTING_SCHEDULE = NONE`

`AFFILIATE_V1_RECRUITMENT_COMMISSION = PROHIBITED`

This is a **design fact**, not a legal conclusion that the Freelance Act can never apply. Contract labels do not override transaction reality.

---

## B. Mandatory Creator safeguards

M55 may require every Affiliate Creator to comply with:

- M55 Creator terms;
- Stripe rules and connected-account requirements;
- applicable Japanese law;
- clear advertising / PR disclosure when legally required;
- M55 approved-claims and prohibited-claims policy;
- no guaranteed fortune/future/result claims;
- no psychic/supernatural-authority overclaim prohibited by M55 Product Truth;
- no self-referral, circular-referral, duplicate-identity/payment abuse or fraud;
- no deceptive earnings claim;
- refund/chargeback/eligibility rules.

These safeguards do not silently convert Affiliate v1 into a sponsored-content work order. If M55 later commissions a specific deliverable, post, campaign, script, date or production service, that relationship must enter a separately classified `SPONSORED_CREATOR` contract.

`AFFILIATE_CREATOR_AND_SPONSORED_CREATOR_MUST_NOT_BE_SILENTLY_MIXED = TRUE`

---

## C. Stripe reverse-designed money flow

Human-approved target architecture:

```
Customer
  -> M55 paid product
  -> Stripe charge on M55 platform
  -> M55 attribution decision
  -> M55 commission calculation
  -> M55 compliance/refund/fraud review
  -> COMMISSION_PAYABLE
  -> aggregate payout batch
  -> Stripe Connect transfer: M55 platform -> Creator connected account
  -> Stripe payout: Creator connected account -> Creator bank
  -> Stripe/provider event -> M55 reconciliation
```

`CUSTOMER_CHARGE_OWNER = M55_PLATFORM`

`AFFILIATE_ATTRIBUTION_OWNER = M55`

`COMMISSION_LEDGER_OWNER = M55`

`STRIPE_CONNECT_FLOW = SEPARATE_CHARGES_AND_TRANSFERS`

`STRIPE_ACCOUNT_API = ACCOUNTS_V2`

`STRIPE_CONNECTED_ACCOUNT_DASHBOARD = EXPRESS`

`STRIPE_CONNECT_FEES_BILLED_TO = M55_PLATFORM_BALANCE`

`STRIPE_CONNECT_LOSS_RESPONSIBILITY = APPLICATION`

`STRIPE_HOSTED_KYC_AND_BANK_DATA_PREFERRED = TRUE`

`M55_FULL_CREATOR_BANK_DATA_STORAGE = PROHIBITED_UNLESS_LATER_UNAVOIDABLE_AND_HUMAN_APPROVED`

Do not transfer Creator commission at customer-purchase time. Purchase attribution is not commission finality.

---

## D. Commission and payout separation

Commission validity and payout readiness are orthogonal.

Canonical commission states remain:

- `COMMISSION_PENDING_COMPLIANCE_REVIEW`
- `COMMISSION_HOLD`
- `COMMISSION_PAYABLE`
- `COMMISSION_REVERSED`
- `COMMISSION_ADJUSTED`

Canonical payout states remain:

- `PAYOUT_NOT_READY`
- `PAYOUT_BLOCKED_KYC`
- `PAYOUT_BLOCKED_PROVIDER`
- `PAYOUT_BLOCKED_SECURITY`
- `PAYOUT_QUEUED`
- `PAYOUT_PROCESSING`
- `PAYOUT_POSTED`
- `PAYOUT_FAILED`
- `PAYOUT_RETURNED`

A Creator payout request is a **timing preference / early trigger** only. It does not approve a commission and cannot make an invalid commission valid.

`CREATOR_PAYOUT_REQUEST_IS_NOT_COMMISSION_APPROVAL = TRUE`

---

## E. Payout batching and small-balance economics

Never create one bank payout per purchase.

`PAYOUT_BATCHING_REQUIRED = TRUE`

M55 should aggregate valid `COMMISSION_PAYABLE` amounts before payout to reduce fixed per-payout cost and reconciliation load.

The following remain unresolved until R8/legal-tax closure:

- exact economic payout threshold;
- exact payout cadence;
- whether Creator may choose threshold/cadence options;
- exact early-payout mechanics;
- exact fee amount or fee formula;
- exact treatment when a balance is below the economic threshold near a legal deadline.

`ECONOMIC_PAYOUT_THRESHOLD = UNRESOLVED`

`LEGAL_PAYMENT_DEADLINE_OVERRIDES_ECONOMIC_THRESHOLD = TRUE_IF_APPLICABLE`

If an applicable statutory or contractual payment deadline arrives before the economic threshold, the deadline wins. No threshold/carry-over policy may be used to create an unlawful late payment.

---

## F. Payout-cost ownership: economic objective vs legal authority

Human economic requirement:

`M55_PAYOUT_COST_PASS_THROUGH_OBJECTIVE = HUMAN_APPROVED`

The goal is to avoid a business model where M55 permanently absorbs avoidable Creator bank-payout costs, especially for very small balances.

But:

`CREATOR_FEE_DEDUCTION_IMPLEMENTATION = NOT_AUTHORIZED_PENDING_LEGAL_CLASSIFICATION`

Stripe billing and Creator fee policy are separate facts:

1. Under the M55-specific Stripe Support answer dated 2026-09-08, the observed Accounts v2 + Express Dashboard + Separate Charges and Transfers configuration uses platform-managed pricing and Connect charges are debited from the M55 platform Stripe balance.
2. Stripe's public Japan Connect pricing states that when the platform controls pricing, Stripe bills the platform and the platform can charge users fees in supported configurations.
3. Whether M55 may lawfully pass through a payout/service fee to a particular Creator depends on the exact contract/transaction classification and Japanese law.

If the Freelance Act applies, current JFTC Q&A states that making the freelancer bear the bank-transfer fee and deducting it from remuneration is a prohibited remuneration reduction regardless of agreement.

Therefore no implementation may silently convert a Stripe fee, bank fee or platform expense into a Creator deduction until R2-B2 closes the exact legal mechanics.

---

## G. Creator legal-relationship classification

R2-B2 must classify at minimum:

`CREATOR_RELATIONSHIP_CLASSIFICATION`

Candidate factual models:

- `AFFILIATE_ONLY` — voluntary link introduction; no specific work product/order;
- `SPONSORED_CREATOR` — M55 commissions a specific content/service/deliverable;
- any other legally supported classification identified by counsel.

M55 v1 target is `AFFILIATE_ONLY`, but the final legal conclusion must be based on contract and actual operation, not the label.

Official JFTC guidance describes an委託 as requesting another business to provide a specified service or create a specified information product; it also states that substantive involvement and transaction reality govern classification.

`COMMERCIAL_PRECEDENT_IS_NOT_LEGAL_SAFE_HARBOR = TRUE`

Existing affiliate/creator platforms are implementation evidence, not proof that M55's exact contract is legally identical.

---

## H. Tax / withholding fail-closed contract

M55 must not hard-code a universal withholding percentage for Affiliate Creator commission.

`UNIVERSAL_WITHHOLDING_RATE = PROHIBITED`

The National Tax Agency lists specific categories of remuneration subject to withholding. Exact treatment must be classified from the recipient and transaction facts.

Minimum Creator tax profile:

- `creator_entity_type` — individual / corporation;
- `tax_residency`;
- `invoice_registration_status`;
- `invoice_registration_number` when applicable;
- `invoice_status_verified_at`;
- `withholding_classification`;
- `withholding_policy_version`;
- `consumption_tax_policy_version`;
- `tax_profile_last_confirmed_at`.

`CREATOR_TAX_PROFILE_REQUIRED_BEFORE_CASH_ACTIVATION = TRUE`

Tax status must be re-confirmable on material change and periodically. Exact refresh cadence is unresolved.

---

## I. Consumption tax / invoice fail-closed contract

Do not infer a Creator's consumption-tax status only from M55 commission volume.

NTA guidance states that a business can become a consumption-tax taxable person based on the ¥10 million base-period / specified-period rules, and an invoice-registered business is taxable regardless of that base-period sales threshold.

M55 therefore needs Creator self-declaration plus verifiable invoice-registration status where relevant.

Policy must be effective-dated. The 2026 tax reform changed the transitional input-tax-credit percentage for purchases from non-invoice issuers to:

- 70% from 2026-10 for 2 years;
- 50% from 2028-10 for 2 years;
- 30% from 2030-10 for 1 year;
- 0% from 2031-10 onward,

subject to then-current law and M55's actual accounting classification.

`TAX_POLICY_MUST_BE_VERSIONED = TRUE`

Do not embed these percentages as timeless constants outside a versioned tax-policy layer.

---

## J. High-earner / high-volume Creator design

A Creator reaching large legitimate volume is a success case, not an automatic violation.

`HIGH_VOLUME_ALONE_IS_NOT_COMMISSION_INVALIDATION = TRUE`

`NO_RETROACTIVE_RATE_REDUCTION_FOR_SUCCESS_VOLUME = TRUE`

High volume may increase:

- tax-profile verification;
- invoice-status verification;
- KYC/provider requirements monitoring;
- attribution anomaly review;
- self/circular-referral review;
- chargeback/refund monitoring;
- payout reconciliation;
- accounting evidence retention;
- security/ATO controls.

It must not, by itself:

- erase valid commission;
- silently lower a frozen applicable commission rate;
- create an arbitrary payout forfeiture;
- substitute Human suspicion for objective evidence.

Exact enhanced-review thresholds are unresolved and must not be invented before sufficient data/legal-tax design.

---

## K. Creator Revenue Console minimum contract

Future M55 Creator Revenue Console must show enough information for the Creator and M55 to reconcile money:

- attributed visits / eligible conversions;
- eligible sales base;
- estimated commission;
- pending / hold / payable commission;
- reason codes for hold/adjustment;
- payable balance;
- payout preference and next legal/contractual payout deadline where applicable;
- Stripe/KYC readiness;
- invoice/tax-profile status at an appropriate privacy-safe level;
- payout batch status;
- gross commission, legal tax deductions, any legally approved fee, and net payout;
- payout history / provider reference.

No amount may silently disappear.

---

## L. Activation blockers

Actual Creator cash activation is prohibited until all of the following are GREEN:

1. Affiliate v1 legal relationship classification for the exact M55 contract/operation.
2. Japan payment-deadline classification.
3. Exact legality/contract mechanics of any Creator-borne payout/platform fee.
4. Japan withholding classification for intended Creator categories.
5. Consumption-tax/invoice accounting treatment and evidence requirements.
6. Creator terms and disclosure contract.
7. R6 deterministic money/rounding contract.
8. R8 current Stripe account/configuration/capability/price reconciliation.
9. KYC/payout readiness fail-closed implementation.
10. Commission/payout ledger and reconciliation evidence.
11. Explicit Human activation approval.

`ACTUAL_CASH_ACTIVATION_FAIL_CLOSED = TRUE`

Provider-independent implementation may proceed before all external classifications close, but it may not invent unresolved financial/legal semantics.

---

## M. Dated primary/official evidence

Stripe M55-specific primary evidence:
- Gmail thread with Stripe Support / Kuriyama, 2026-09-06 through 2026-09-08.
- Durable repo evidence: `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`.

Current Stripe public evidence:
- https://stripe.com/jp/connect/pricing
- https://docs.stripe.com/connect/separate-charges-and-transfers
- https://docs.stripe.com/connect/accounts-v2

Japan Freelance Act / JFTC:
- https://www.jftc.go.jp/fllaw_limited/fllaw_qa.html
- https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260618_spc.html

Japan tax / NTA:
- https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2792.htm
- https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2793.htm
- https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6531.htm
- https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice-review/index.htm

All external facts are dated evidence, not timeless constants. Re-verify at R8/activation and after relevant law/provider changes.

---

## N. No-regression / no-overclaim

- Do not relabel Affiliate v1 as a sponsored work order without an actual product/business change.
- Do not claim Affiliate v1 is definitively outside the Freelance Act until the exact relationship is professionally classified.
- Do not claim a competitor's operation proves M55 legality.
- Do not deduct a bank-transfer fee from remuneration when the Freelance Act applies.
- Do not hard-code universal 10.21% withholding.
- Do not treat Stripe pricing observed in 2026 as timeless.
- Do not use Creator inactivity or an economic threshold to violate an applicable payment deadline.
- Do not reduce valid earned commission merely because a Creator becomes highly successful.
- Do not move real Creator money until the activation blockers are closed.
