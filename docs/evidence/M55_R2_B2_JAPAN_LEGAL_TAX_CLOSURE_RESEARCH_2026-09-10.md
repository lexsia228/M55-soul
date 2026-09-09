# M55 R2-B2 Japan Legal / Tax Closure Research — 2026-09-10

Status: PRIMARY-SOURCE EVIDENCE / NOT YET R2-B2 CLOSED

Repository authority: main @ `228bf19abc0a9a26dec751618b0d8836d0da3e65`
Current executable gate remains `REVENUE_SAFETY_E2E`.

Purpose: reduce the remaining R2-B2 Japan legal/tax questions to the smallest fact-pattern-specific confirmations required before R2 final Human acceptance.

## 1. What is already closed

Stripe/provider:
- Accounts v2 / Express / Separate Charges and Transfers: closed for architecture.
- Platform bears fees/losses/negative-balance responsibility: closed for architecture.
- Stripe C support follow-up: completed / no M55 action required.
- Stripe final account approval: not represented as permanent/final approval.

Commercial/tax architecture:
- 50/40/30 = gross commercial commission on `COMMISSIONABLE_REVENUE`.
- no after-tax/net guarantee.
- no silent deductions.
- unknown tax classification blocks live payout without erasing valid commission.
- invoice/consumption-tax profile is effective-dated.
- My Number must not be collected speculatively.
- late-discovered withholding is a separate tax/accounting correction event.

## 2. Freelance Act — official evidence

Primary sources:
- JFTC Act text:
  https://www.jftc.go.jp/fllaw.html
- JFTC Freelance Act Q&A:
  https://www.jftc.go.jp/fllaw_limited/fllaw_qa.html
- JFTC consultation desk:
  https://www.jftc.go.jp/soudan/soudan/freelance.html

Supported current findings:
- the Act can cover a business asking another business to provide services for its business;
- JFTC Q26 states even services used by the ordering business itself can be covered when the service content is specified;
- there is no official categorical affiliate exclusion found;
- if the Act applies, transaction terms must be disclosed electronically/in writing;
- payment deadline is within 60 days of service receipt/completion, as short as possible;
- bank-transfer fee deduction from remuneration is prohibited regardless of agreement;
- already-fixed remuneration cannot be retroactively reduced by changing the calculation formula;
- recruiting multiple freelancers via web/SNS can trigger accurate/current recruitment-information obligations.

M55 fact pattern intentionally reduces outsourcing characteristics:
- Affiliate-first only;
- no mandatory post count;
- no fixed posting schedule;
- no deliverable;
- no required copy;
- zero referrals allowed with no penalty;
- no exclusivity;
- no inventory/purchase/training requirement;
- direct single-tier only;
- commission only on eligible attributed paid purchases.

Unresolved legal issue:
`FREELANCE_ACT_M55_AFFILIATE_FACT_PATTERN = REQUIRES_JFTC_CONFIRMATION`

Critical sub-question:
If this relationship is covered, what is the legally relevant `役務の提供を受けた日` / payment-deadline anchor for an ongoing voluntary performance-based affiliate relationship?

## 3. 30-day review compatibility

The ordinary JFTC payment rule, when applicable, is within 60 days from the legally relevant service-receipt/completion date.

M55's 30-day compliance review is not inherently incompatible with a 60-day outer limit, but **approval/PAYABLE date cannot be assumed to reset the statutory clock**.

`COMMISSION_APPROVAL_DATE_IS_NOT_ASSUMED_LEGAL_DEADLINE_START = TRUE`

Required JFTC confirmation:
- whether the service event is the attributed conversion, a promotion/service period, another event, or fact-dependent;
- whether monthly batching can be used without causing any covered service to exceed the legal deadline.

## 4. Creator-borne payout/transfer fee

If the Freelance Act applies, JFTC Q78 states bank-transfer fees cannot be deducted from remuneration regardless of agreement.

Stripe technical ability to charge platform/users is not legal authority for M55 to deduct Creator payout costs.

`CREATOR_FEE_DEDUCTION_IMPLEMENTATION = NOT_AUTHORIZED_PENDING_LEGAL_CLASSIFICATION`

Safe launch fallback:
`R2_B2_SAFE_FALLBACK_CREATOR_BANK_TRANSFER_FEE = M55_BORNE`

This is a fallback, not a permanent economic policy.

## 5. Source withholding — resident corporation vs resident individual

Primary sources:
- NTA No.2793:
  https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2793.htm
- NTA No.2804:
  https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2804.htm
- NTA Income Tax Basic Circular 204-22 / 204-22-2:
  https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/36/04.htm
- NTA consultation:
  https://www.nta.go.jp/taxes/shiraberu/shirabekata/9200.htm

### Japan resident corporate Creator

NTA No.2793 states that source withholding on payments to domestic corporations is generally limited to horse-racing prizes under the cited corporate rule.

Therefore for ordinary M55 affiliate commission:

`JP_DOMESTIC_CORPORATE_CREATOR_WITHHOLDING = NO_SOURCE_WITHHOLDING_EXPECTED_UNDER_CURRENT_NTA_GENERAL_RULE`

This does not remove possible information-return/accounting duties if a payment category independently creates them.

### Japan resident individual Creator

NTA requires withholding only when the remuneration is actually in a statutory category.

NTA explicitly includes `外交員等`; its basic circular also treats certain salespeople paid according to handling quantity/value as `外交員` remuneration.

No official NTA source located by this review categorically includes or excludes ordinary web affiliate commission.

Therefore:

`JP_RESIDENT_INDIVIDUAL_AFFILIATE_WITHHOLDING = REQUIRES_NTA_OR_TAX_ADVISER_CLASSIFICATION`

Do not use:
- universal zero;
- universal 10.21%;
- universal `外交員等`.

## 6. Corporate/individual onboarding consequence

Candidate fail-closed architecture for later Human approval:

- Japan resident corporation: withholding generally not required under current NTA general rule; verify entity status.
- Japan resident individual: tax classification required before first cash payout; one-time/profile-versioned review, not Human approval per payout.
- nonresident/foreign entity: `TAX_REVIEW_REQUIRED`; cross-border payout remains blocked until R8/treaty classification.

This candidate does not itself close R2-B2.

## 7. Consumption tax / invoice

Current evidence remains sufficient for architecture:
- Creator tax/invoice status is profile-based;
- M55 payout volume alone is not authority;
- invoice status is verified/effective-dated;
- self-billing/purchaser-created statement remains R8 candidate;
- invoice status must not retroactively reduce earned commission.

No additional broad tax research is required for R2-B2 absent a new invalidator.

## 8. Exact remaining blockers to R2-B2 closure

A. JFTC fact-pattern confirmation:
1. Does M55 Affiliate-first v1 constitute `役務の提供を委託` on the stated facts?
2. If yes, what event/period starts the payment-deadline clock for success-fee affiliate activity?
3. Does the 30-day review + batch payout design remain compliant if final payout occurs within the applicable statutory deadline?
4. Is any Creator-borne payout/service fee permissible, distinguishing bank-transfer fee from a separately contracted service fee?

B. NTA/tax-adviser classification:
1. For a Japan-resident individual, does M55 Affiliate-first performance commission fall within `外交員等` or another source-withholding category?
2. If yes, what calculation/timing/payment-report treatment applies to this exact structure?
3. If no, confirm no payer-side source withholding on ordinary affiliate commission under these facts.

## 9. R2-B2 closure rule

Do not close R2-B2 from inference alone.

`R2_B2_JAPAN_LEGAL_TAX_PUBLIC_RESEARCH = COMPLETE`

`R2_B2_JFTC_FACT_PATTERN_CONFIRMATION = REQUIRED`

`R2_B2_NTA_OR_TAX_ADVISER_WITHHOLDING_CONFIRMATION = REQUIRED_FOR_INDIVIDUAL_CASH`

`R2_B2_STRIPE_RESEARCH_REPLAY = PROHIBITED_ABSENT_INVALIDATOR`

After the two bounded confirmations, Control Tower should update the SSOT and request explicit Human R2 final acceptance.
