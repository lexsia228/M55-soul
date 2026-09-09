# M55 Creator Affiliate Benchmark Composition Evidence — 2026-09-09

Status: **DURABLE EVIDENCE / HUMAN-APPROVED TRACEABILITY**

Purpose: preserve exactly which mature commercial pattern informed each M55 Affiliate/Stripe design surface. This file is evidence, not executable authority and not a legal safe harbor.

Normative target architecture: `docs/ssot/M55_CREATOR_AFFILIATE_BENCHMARK_TARGET_ARCHITECTURE_SSOT.md`

Tax/legal authority: `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`

M55-specific Stripe Support evidence: `docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`

Verification date: **2026-09-09 JST**

---

## 1. Evidence rules

1. A benchmark may support a **commercial/operational pattern** only.
2. It does not prove M55's exact legal, tax, accounting, Stripe-account or pricing treatment.
3. M55-specific Stripe Support evidence overrides generic affiliate SaaS examples for account configuration/responsibility.
4. Current law/tax official sources override competitor/vendor practice.
5. Thresholds, fees, cadence, cookie windows and vendor pricing are dated facts and are never copied as timeless constants.
6. Money-moving implementation requires explicit source-to-M55 traceability.
7. M55 remains financial authority for commission; Stripe remains payment/KYC/payout rail.

`BENCHMARK_COMPOSITION_EVIDENCE_REQUIRED_FOR_MONEY_SURFACES = TRUE`

`BENCHMARK_SOURCE_TO_M55_TRACEABILITY_REQUIRED = TRUE`

---

## 2. Composition summary — what M55 combines

| M55 surface | Primary benchmark source | Pattern taken | M55 treatment |
|---|---|---|---|
| Stripe-linked affiliate payout | FirstPromoter | approved commissions -> balance -> threshold/eligibility -> batch payout from business Stripe balance; affiliate self-connects to Stripe | **ADAPT** through M55 payout port; M55 ledger remains authority |
| Stripe purchase/refund observation | Rewardful | Stripe webhook/payment events generate or recalculate commission after refunds | **ADAPT** to existing M55 Stripe/webhook event model |
| Pending review before payable | Shopify Collabs + Rewardful | commission starts Pending/holding and is canceled/adjusted if refunded before clearing | **ADAPT** to canonical `COMMISSION_PENDING_COMPLIANCE_REVIEW` -> PAYABLE/HOLD/ADJUST |
| Fraud/self-referral gate | FirstPromoter | fraud/self-referral checks before commission/payout eligibility | **ADAPT** with objective M55 reason codes and append-only evidence |
| Creator link + outcome dashboard | Rewardful + 開運メーカー + Shopify Collabs | personalized links, clicks/visits, conversions/sales, commission visibility | **ADAPT** into M55 Creator Revenue Console |
| Batch payout / balance aggregation | FirstPromoter + A8.net + ValueCommerce | aggregate multiple commissions rather than one bank payout per conversion | **ADAPT / REQUIRED** |
| Payout preference / carry-over concept | A8.net | 5,000 / 1,000 / carry-over modes and Creator-triggered next payout | **ADAPT concept only**; exact threshold/carry-over constrained by M55 legal/tax rules |
| Japan approval -> payment/reporting | ValueCommerce | approval before payout; minimum payout; carry-over; payout reports; invoice-aware payment statement | **ADAPT** to M55 ledger/report/tax layer |
| Fortune/digital-report affiliate commercial precedent | 開運メーカー | fortune/digital reports + Stripe + dedicated affiliate links + social sharing + commission dashboard | **REUSE AS COMMERCIAL PRECEDENT**, not legal safe harbor |
| Exact fee deduction | A8.net and other market examples | affiliate/media-borne transfer fee exists commercially | **DEFER / NOT AUTHORIZED** until M55 legal classification |
| Exact threshold/cadence | A8.net / ValueCommerce / Shopify / Rewardful | mature programs use thresholds and cycles | **DEFER values** to R8 |
| Exact attribution window | Rewardful/others | cookie-based windows are conventional | **DEFER** to R5 |
| Commission accounting authority | none | vendor SaaS can keep balances/commission records | **REJECT as M55 SSOT**; M55 append-only ledger is authority |

---

## 3. FirstPromoter — Stripe payout / fraud / scale evidence

### Sources verified

- https://help.firstpromoter.com/en/articles/8971513-how-to-pay-your-promoters
- https://help.firstpromoter.com/en/articles/16295072-how-to-enable-stripe-connect-for-your-stripe-payouts-on-firstpromoter
- https://help.firstpromoter.com/en/articles/9019492-how-payouts-work-in-firstpromoter
- https://firstpromoter.com/features/affiliate-payout
- https://changelog.firstpromoter.com/stripe-payouts-pay-affiliates-directly-from-your-stripe-balance-1SFpUk

### Current material evidence

FirstPromoter currently documents:

- automated payouts using Stripe Payouts;
- Stripe Connect as the rail for sending money to affiliates;
- affiliate onboarding/verification through Stripe;
- approved commissions accumulating into affiliate balances;
- threshold/eligibility before payout;
- batch payout from the business's Stripe balance;
- monthly aggregation of commissions into payout records;
- payout status handling;
- 2FA requirement in its Stripe payout workflow.

### M55 composition

**Taken**

- affiliate self-onboarding to payout rail;
- no M55 storage of full Creator bank details where Stripe can own them;
- balance aggregation;
- threshold/eligibility;
- batch payout;
- payout security hardening;
- scaling assumption from tens to thousands of affiliates.

**Not taken**

- FirstPromoter as M55 financial ledger;
- exact NET-30;
- exact payout/provider implementation;
- vendor-specific status names;
- any implication that FirstPromoter's Stripe setup is automatically identical to M55's account.

**M55 destination**

`PAYOUT_AND_SETTLEMENT` R8 + provider-neutral payout port.

---

## 4. Rewardful — Stripe attribution/event/adjustment evidence

### Sources verified

- https://www.rewardful.com/articles/how-rewardful-pays-affiliate-commissions
- https://help.rewardful.com/en/articles/2213091-how-does-rewardful-use-my-stripe-account
- https://help.rewardful.com/en/articles/4209748-stripe-checkout-client-side-integration
- https://www.rewardful.com/affiliate-program

### Current material evidence

Rewardful currently documents:

- connection to Stripe;
- Stripe webhook notifications for paid events and refunds;
- checking whether the paying customer was referred;
- commission generation from amount actually paid;
- full/partial refund recalculation;
- Pending -> Due lifecycle around a refund window;
- payout thresholds;
- personalized affiliate dashboards;
- personalized referral links;
- self-referral prohibition in Rewardful's own affiliate program.

### M55 composition

**Taken**

- Stripe event -> purchase observation -> commission command;
- refund event -> explicit adjustment/reversal command;
- Creator-specific link;
- Creator-facing statistics;
- pending-before-payable concept.

**Not taken**

- Rewardful's 60-day cookie window;
- Rewardful's $50 threshold;
- PayPal payout choice;
- recurring-SaaS assumptions;
- Rewardful as runtime/ledger dependency.

**M55 destination**

R4 link foundation + R5 attribution + R6 commission event handling + R7 Creator Console.

---

## 5. Shopify Collabs — holding/refund/dispute/Creator analytics evidence

### Sources verified

- https://help.shopify.com/en/manual/promoting-marketing/collabs/creators/payments
- https://help.shopify.com/en/manual/promoting-marketing/collabs/merchants/payments

### Current material evidence

Shopify Collabs currently documents:

- affiliate commission begins Pending;
- merchant-selected holding period between 1–90 days;
- default 30-day holding period;
- canceled or fully refunded order during holding period automatically cancels Pending commission;
- payment dispute is available during the holding period;
- Creator sees upcoming/next payout;
- automatic payout occurs only after a minimum balance threshold.

### M55 composition

**Taken**

- do not pay at purchase time;
- Pending review window;
- refund/cancellation changes commission before payout;
- explicit dispute/discrepancy path;
- Creator visibility into pending/upcoming money;
- threshold/batching concept.

**Not taken**

- $25 threshold;
- twice-monthly cadence;
- Shopify billing ownership;
- Shopify-specific dispute implementation.

**M55 destination**

R5 compliance + R7 Creator Console + R8 payout.

---

## 6. A8.net — Japan threshold / carry-over / payout preference evidence

### Sources verified

- https://support.a8.net/a8/as/faq/2013/09/post_168.html
- https://support.a8.net/a8/as/faq/2004/08/as_9.html

### Current material evidence

A8.net currently documents:

- 5,000-yen payout mode;
- 1,000-yen payout mode;
- carry-over mode;
- Creator/media member can request next payout from carry-over after the balance reaches 1,000 yen;
- payout is the accumulated balance, not an arbitrary partial amount;
- bank-transfer costs may be borne by the media member under A8's current commercial terms.

### M55 composition

**Taken**

- payout preference is a normal affiliate UX;
- threshold and carry-over are mature Japan affiliate concepts;
- aggregated full-balance payout is preferable to per-sale micro-payout;
- payout/fee rules must be disclosed clearly.

**Not taken / blocked**

- exact 1,000/5,000 values;
- indefinite carry-over;
- A8 fee amounts;
- A8's fee-deduction legality as evidence for M55.

`A8_FEE_PRECEDENT_IS_COMMERCIAL_EVIDENCE_ONLY = TRUE`

**M55 destination**

R7 payout preference UX + R8 threshold/cadence/fee policy after legal classification.

---

## 7. ValueCommerce — Japan approval / reporting / invoice evidence

### Sources verified

- https://help.valuecommerce.ne.jp/aff/transactions/comission/01/
- https://help.valuecommerce.ne.jp/aff/transactions/comission/02/

### Current material evidence

ValueCommerce currently documents:

- affiliate compensation for actions occurring through affiliate advertisements;
- fixed or percentage-based outcome compensation;
- payout after the order data is approved;
- payment on a later scheduled date;
- minimum payout of 1,000 yen;
- balance below minimum carries forward;
- payout reports;
- payment statement used for invoice-system-compatible tax calculation;
- consumption-tax handling tied to approval/payment/accounting.

### M55 composition

**Taken**

- distinguish generated commission from approved/payable money;
- payout reports/statements;
- tax/invoice accounting belongs in payment/accounting layer;
- aggregated payout;
- effective-dated tax treatment.

**Not taken**

- exact payment date;
- 1,000-yen threshold;
- its advertiser/media legal relationship;
- its exact consumption-tax logic.

**M55 destination**

R6 ledger + R7 statement view + R8 tax/accounting/payout reconciliation.

---

## 8. 開運メーカー — closest Japan product-category commercial evidence

### Sources verified

- https://makers.tokyo/fortune/affiliate
- https://makers.tokyo/fortune/pricing

### Current material evidence

開運メーカー currently documents:

- fortune/diagnostic services and premium detailed reports;
- Stripe automatic billing on subscription report plans;
- free affiliate registration;
- 20% outcome commission;
- dedicated referral links;
- sharing via SNS/blog/YouTube/newsletter;
- real-time dashboard for clicks, conversions and reward amounts.

### M55 composition

**Taken**

- simple Creator proposition: share a dedicated link and earn when paid conversion occurs;
- fortune/digital-report + affiliate is a real Japanese commercial combination;
- social/influencer distribution is normal for this product category;
- real-time clicks/conversions/reward visibility.

**Not taken**

- 20% rate;
- any product/legal claim;
- exact payout mechanics;
- any inference that its operation proves M55 tax/legal treatment.

`KAIUN_MAKER_IS_CLOSEST_PRODUCT_CATEGORY_PRECEDENT_NOT_LEGAL_SAFE_HARBOR = TRUE`

**M55 destination**

R4 Creator distribution foundation + R7 Creator Console + Product/marketing precedent.

---

## 9. M55-specific Stripe evidence override

The Core Six do **not** control M55 Stripe account semantics.

For M55 specifically, Stripe Support/Kuriyama evidence already establishes the current planning facts:

- Accounts v2;
- Express Dashboard;
- Separate Charges and Transfers;
- fees payer/application responsibility;
- losses/application responsibility;
- platform-managed pricing;
- Connect charges debited from M55 platform Stripe balance;
- M55 product-sale affiliate commission to Japan connected Creator supported in principle;
- ~30-day internal review before later transfer supported in principle.

Source of record:

`docs/evidence/M55_R2_B2_STRIPE_SUPPORT_EVIDENCE_2026-09-08.md`

`M55_SPECIFIC_STRIPE_EVIDENCE_OVERRIDES_GENERIC_BENCHMARK_STRIPE_SETUP = TRUE`

---

## 10. Money-path provenance map

Every future money-moving implementation should be explainable through this provenance chain:

```
Customer Stripe payment
  Evidence:
    M55 existing Stripe payment implementation
    + Rewardful event-observation pattern
    + M55-specific Stripe Support

Referral attribution
  Evidence:
    Rewardful / FirstPromoter / 開運メーカー
  Authority:
    M55 R5 attribution contract

Commission Pending
  Evidence:
    Shopify Collabs / Rewardful
  Authority:
    M55 canonical commission state machine

Fraud/self-referral
  Evidence:
    FirstPromoter + mature affiliate precedent
  Authority:
    M55 objective rules + append-only evidence

PAYABLE aggregation
  Evidence:
    FirstPromoter / A8 / ValueCommerce
  Authority:
    M55 commission ledger

Creator visibility
  Evidence:
    Shopify Collabs / Rewardful / 開運メーカー
  Authority:
    M55 Creator Revenue Console

Threshold / cadence / payout preference
  Evidence:
    A8 / ValueCommerce / Shopify / Rewardful
  Authority:
    M55 R8 + legal/tax SSOT

Stripe transfer/payout
  Evidence:
    M55-specific Stripe Support + Stripe official docs
    FirstPromoter only as operational precedent
  Authority:
    M55 provider port + R8

Tax/invoice statement
  Evidence:
    ValueCommerce commercial precedent
    NTA official rules control legal tax treatment
  Authority:
    M55 tax/legal SSOT + R8
```

---

## 11. Rejected evidence shortcuts

Never use any of the following as a release argument:

- "FirstPromoter does it, therefore Stripe must allow M55's exact account setup."
- "A8 charges transfer fees, therefore M55 may deduct them."
- "開運メーカー does fortune affiliate, therefore M55 is legally approved."
- "Shopify uses 30 days, therefore 30 days is a Japanese statutory safe harbor."
- "ValueCommerce uses 1,000 yen, therefore M55 should use 1,000 yen."
- "Rewardful uses a 60-day cookie, therefore M55 attribution should be 60 days."

`COMMERCIAL_PRECEDENT_NEVER_OVERRIDES_M55_PROVIDER_LEGAL_TAX_EVIDENCE = TRUE`

---

## 12. Evidence maintenance rule

At future implementation/review:

1. identify the exact M55 surface;
2. cite the benchmark source that informed the pattern;
3. cite the M55 SSOT owning the final rule;
4. cite M55-specific Stripe evidence if money moves through Stripe;
5. cite current official law/tax evidence if fee/tax/deadline behavior is involved;
6. record any deviation from the benchmark;
7. do not rerun the whole market study unless a real invalidator exists.

This is the durable review trail for later audit, tax/accounting review, provider review, security review and regression analysis.
