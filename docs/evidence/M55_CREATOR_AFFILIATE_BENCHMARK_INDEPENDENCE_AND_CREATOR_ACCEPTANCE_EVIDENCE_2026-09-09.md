# M55 Creator Affiliate — Benchmark Independence / Creator Acceptance Evidence — 2026-09-09

Status: **TARGETED PUBLIC-EVIDENCE PACK / HUMAN-APPROVED RESEARCH BASIS**

Purpose:
1. prove M55 is using ordinary public affiliate patterns, not cloning one competitor;
2. define what cannot be copied;
3. map the Core Six into an original M55 affiliate product;
4. define the minimum transparency/trust needed for real Affiliates/Influencers to understand and operate the program.

Normative architecture:
- `docs/ssot/M55_CREATOR_AFFILIATE_BENCHMARK_TARGET_ARCHITECTURE_SSOT.md`
- `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`

Commercial/legal/tax authority:
- `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`
- `docs/evidence/M55_CREATOR_REVENUE_COMMERCIAL_LEGAL_TAX_EVIDENCE_2026-09-09.md`

Research verification date: **2026-09-09 JST**

---

## 1. Legal/IP boundary — public pattern ≠ protected expression license

### 1.1 Copyright

Official Culture Agency evidence:
- https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/pdf/93726501_05.pdf
- https://www.bunka.go.jp/seisaku/chosakuken/pdf/94097701_02.pdf
- https://www.bunka.go.jp/seisaku/bunka_gyosei/kibankyoka/faq/index.html?s=09

Supported proposition:
- a copyrighted work must be a creative **expression**;
- an unexpressed idea is not itself a copyrighted work;
- Culture Agency material explicitly contrasts freely usable ideas with protected expression.

M55 implication:
- ordinary affiliate concepts may be studied;
- competitor wording, source code, graphics, screenshots, original help text, and sufficiently creative arrangement/expression are not copied.

`BENCHMARK_PATTERN_ADOPTION_NOT_EXPRESSION_COPYING = TRUE`

### 1.2 Patents / business-related inventions

Official JPO evidence:
- https://www.jpo.go.jp/system/patent/gaiyo/sesaku/biz_pat.html

Supported proposition:
- a business-method idea itself is not treated as a patent-law invention merely as an idea;
- business methods realized through ICT can be patentable business-related inventions.

M55 implication:
- "affiliate tracking is common" is not a complete patent-clearance argument;
- any unusual vendor-like technical mechanism should receive a targeted J-PlatPat/public-rights check before it becomes distinctive runtime.

`PATTERN_COMMONALITY_IS_NOT_PATENT_CLEARANCE = TRUE`

### 1.3 Design / GUI

Official JPO evidence:
- https://www.jpo.go.jp/system/design/gaiyo/seidogaiyo/torokugaiyo/index.html
- https://www.jpo.go.jp/system/laws/rule/guideline/design/kaisei_hogo.html

Supported proposition:
- images and certain graphical designs can be registered/protected under the Design Act.

M55 implication:
- do not reproduce a competitor dashboard screen pixel-for-pixel;
- use M55's own component system, hierarchy, spacing, labels, iconography, navigation and information architecture expression.

### 1.4 Trademark / brand

Official JPO evidence:
- https://www.jpo.go.jp/system/trademark/gaiyo/seidogaiyo/chizai08.html
- https://www.jpo.go.jp/system/trademark/gaiyo/seidogaiyo/shotoha.html

Supported proposition:
- trademarks identify the source of goods/services and registered marks can exclude similar uses in relevant scope.

M55 implication:
- no competitor product/program names, logos, icons, badges, or presentation likely to create source confusion.

### 1.5 Unfair Competition / trade secrets

Official METI evidence:
- https://www.meti.go.jp/policy/economy/chizai/chiteki/unfaircompetition_new.html
- https://www.meti.go.jp/policy/economy/chizai/chiteki/trade-secret.html

Supported proposition:
the Unfair Competition Prevention Act covers categories including:
- confusion with well-known source indications;
- misuse of famous source indications;
- certain imitated product forms;
- trade-secret misappropriation;
- misleading source/quality representations.

M55 implication:
- use public webpages/docs only as benchmark evidence;
- never use leaked code, private dashboards, confidential pricing logic, internal docs, or credentials;
- preserve independent authorship/provenance.

---

## 2. Correct characterization of M55 development

Do not document:
- "copy FirstPromoter";
- "copy Rewardful";
- "make it look like A8";
- "clone Shopify Collabs".

Use:
`ADAPT_PUBLIC_STANDARD_PATTERN_TO_M55_CONTRACT`.

The implementation is a synthesis of multiple public patterns plus M55-specific requirements:

```
standard affiliate link pattern
+ standard pending/refund lifecycle
+ standard payout aggregation
+ Japan payout/reporting precedent
+ M55 50/40/30 economics
+ M55 Product Truth / claims controls
+ M55 append-only financial ledger
+ M55 tax firewall
+ Stripe M55-specific Connect configuration
= M55 independently authored affiliate system
```

---

## 3. Core Six -> M55 mapping

| M55 need | Benchmark evidence | What M55 learns | What M55 does NOT copy |
|---|---|---|---|
| Simple Creator proposition | 開運メーカー | unique link; share on SNS/blog/YouTube; real-time clicks/conversions/reward | wording, visual design, 20% rate |
| Stripe-linked attribution events | Rewardful | referral identity + Stripe events + refund-driven adjustment + affiliate dashboard | SDK/code/schema, 60-day window, portal UI |
| Fraud/security/payout scaling | FirstPromoter | self-referral checks, suspicious-review threshold, payout-method security, affiliate payout scaling | proprietary code, exact fraud limits, exact workflow |
| Pending/refund/dispute | Shopify Collabs | Pending holding period, refund cancellation, dispute, upcoming payout visibility | Shopify UI/copy, $25 threshold, exact cadence |
| Japan payout choice | A8.net | 1,000/5,000/carry-over choices; payout request; payout status familiarity | exact amounts, fee legality, exact screen design |
| Japan payout/accounting statement | ValueCommerce | approved reward, later payout, payout reports, invoice-aware payment statement | exact tax algorithm, exact schedule, UI/report layout |

Core Six are **evidence owners**, not licensors or implementation dependencies.

---

## 4. Public current evidence supporting Creator-facing expectations

### 開運メーカー
Current public affiliate page:
https://makers.tokyo/fortune/affiliate

Documents:
- free affiliate participation;
- dedicated link;
- SNS/blog/YouTube/newsletter sharing;
- 20% outcome commission;
- real-time click / conversion / reward visibility;
- payout request after a stated threshold.

M55 inference:
Creators in M55's adjacent Japanese product category can reasonably expect simple links and immediately understandable result visibility.

### Rewardful
Current public help:
https://help.rewardful.com/en/articles/6684154-integration-with-stripe-payment-links-method-b
https://help.rewardful.com/en/articles/2213091-how-does-rewardful-use-my-stripe-account

Documents:
- referred visitors/leads/conversions;
- personalized affiliate dashboard;
- affiliate links/stats;
- Stripe webhook/event linkage;
- refund/cancellation commission adjustment.

M55 inference:
Creator-facing stats should be backed by transaction/event evidence, not vanity analytics.

### Shopify Collabs
Current public help:
https://help.shopify.com/ja/manual/promoting-marketing/collabs/creators/payments
https://help.shopify.com/ja/manual/promoting-marketing/collabs/merchants/payments

Documents:
- Pending holding period;
- 1–90 day merchant-selected hold;
- refund cancellation;
- dispute;
- upcoming/next payout visibility;
- payout threshold/frequency.

M55 inference:
A Creator should understand **why money is pending** and **when it can become payable**.

### FirstPromoter
Current public fraud evidence:
https://help.firstpromoter.com/en/articles/13772161-fraud-protection-settings-in-firstpromoter

Documents:
- fraud/self-referral safeguards;
- cap for automatic approval;
- email verification before payout-method update.

M55 inference:
fraud review must be objective and payout-destination changes require security hardening.

### A8.net
Current public help:
https://support.a8.net/a8/as/faq/2013/09/post_168.html
https://support.a8.net/a8/as/faq/2008/08/post_166.html

Documents:
- 5,000-yen mode;
- 1,000-yen mode;
- carry-over;
- user-selected payout preference;
- full accumulated payout;
- payout scheduling.

M55 inference:
Japan Affiliates are familiar with explicit payout preference and balance carry-over concepts.

### ValueCommerce
Current public help:
https://help.valuecommerce.ne.jp/aff/transactions/comission/01/
https://help.valuecommerce.ne.jp/aff/transactions/comission/02/
https://help.valuecommerce.ne.jp/aff/etc/etc/11/
https://help.valuecommerce.ne.jp/aff/report/

Documents:
- the qualifying action/reward condition is stated in program detail;
- approved reward precedes later payment;
- 1,000-yen threshold/carry-over;
- payout reports;
- invoice-system-aware payment statement/reporting.

M55 inference:
reward conditions and payout/accounting evidence should be visible before participation and exportable later.

---

## 5. M55 Creator Program Truth — before first link

A Creator should never need to infer financial rules from legal boilerplate.

Before the first affiliate link can be used, M55 should present a concise Program Truth screen containing:

### Participation
- approved Affiliate status;
- no fee to join;
- no inventory purchase;
- no M55 product purchase required;
- no recruitment/downline compensation;
- no posting quota or fixed posting schedule.

### Earnings
- eligible products;
- 50% / 40% / 30% rate schedule;
- exact rate effective dates;
- `COMMISSIONABLE_REVENUE` definition;
- attribution policy/version;
- purchase eligibility rules.

### Lifecycle
- PENDING;
- HOLD + reason;
- PAYABLE;
- REVERSED / ADJUSTED;
- refund/chargeback consequences.

### Payout
- threshold/cadence once frozen;
- payout preference once frozen;
- Stripe/KYC readiness;
- tax readiness;
- legal deadline fallback where applicable;
- failed/returned handling.

### Money transparency
- gross commission;
- every adjustment;
- statutory withholding if applicable;
- lawful approved fee if applicable;
- net payout;
- next payout;
- statement history/export.

### Promotion rules
- affiliate/PR disclosure;
- approved claims;
- prohibited claims;
- self-referral/fraud rules.

### Support / dispute
- attribution discrepancy;
- commission discrepancy;
- payout failure;
- tax/profile correction;
- appeal/contact path.

### Change management
- current terms/policy/rate version;
- effective date;
- no retroactive rate rewrite of already-earned valid commission.

`CREATOR_PROGRAM_TRUTH_REQUIRED_BEFORE_FIRST_AFFILIATE_LINK = TRUE`

---

## 6. Creator Revenue Console target — functional architecture only

### Overview
- referral link(s)
- clicks / tracked visits
- eligible conversions
- attributed sales
- conversion rate

### Commission
- transaction/event row
- commissionable revenue
- applicable rate
- gross commission
- state
- release/review date
- adjustment/refund reason

### Balance
- Pending
- Hold
- Payable projection
- paid-to-date

### Payout
- threshold/progress
- next payout
- payout preference
- provider/KYC readiness
- failed/returned state
- history

### Tax/accounting
- tax readiness
- invoice-registration status
- withholding amount/classification when applicable
- lawful fee when applicable
- net payout
- statement/CSV/PDF export

### Support
- discrepancy/appeal
- payout issue
- policy/version history

No competitor's component names/layout/visual system is copied.

---

## 7. Creator acceptance principles

The program should be understandable enough that a rational Creator can answer:

1. What do I promote?
2. What percentage do I earn today?
3. What amount is that percentage applied to?
4. Which sale is mine?
5. Why is a commission Pending/Hold?
6. What can reverse it?
7. When will I be paid?
8. What will be deducted, and why?
9. What happens if Stripe/KYC/tax is blocked?
10. How do I challenge a mistake?
11. Can M55 reduce my rate after I earned it?
12. Can I export my records for tax filing?

If any answer is not visible, the Creator experience is not Revenue-Ready.

`CREATOR_EARNINGS_EXPLAINABILITY_REQUIRED = TRUE`

---

## 8. Independent implementation proof packet

Future implementation review should preserve:

- feature requirement;
- public benchmark(s);
- exact benchmark URLs/date;
- M55-specific decision;
- source-specific values explicitly rejected;
- M55 original UX/copy/design;
- code owner;
- tests;
- runtime proof.

For UI, capture that no competitor screenshot/design asset was imported.

For code, only repository-authored or properly licensed dependencies may enter runtime.

`BENCHMARK_TO_M55_PROVENANCE_REQUIRED = TRUE`

`NO_COMPETITOR_ASSET_IMPORT = TRUE`

---

## 9. IP escalation triggers

Targeted legal/IP review becomes materially useful if M55 proposes:

- a technical mechanism intentionally modeled on a vendor's proprietary algorithm/flow;
- a dashboard deliberately made visually similar to one vendor;
- a name/logo/badge similar to another affiliate product;
- imported competitor content/terms/help text;
- use of non-public vendor information;
- a J-PlatPat result suggesting a live patent/design right covering the intended implementation.

Ordinary multi-source standard-pattern synthesis does not by itself require pausing development.

---

## 10. Final evidence position

`M55_AFFILIATE_IS_MULTI_SOURCE_INDEPENDENT_IMPLEMENTATION = TARGET`

`COMMERCIAL_PRECEDENT_SUPPORTS_PATTERN_NOT_COPYRIGHT_LICENSE = TRUE`

`COMPETITOR_OPERATION_IS_NOT_LEGAL_SAFE_HARBOR = TRUE`

`CREATOR_TRUST_IS_FINANCIAL_PRODUCT_QUALITY = TRUE`

## 11. Control-Tower third-audit Creator acceptance / privacy findings — 2026-09-09

### 11.1 Program Truth acknowledgement evidence

Showing Program Truth is not enough for later financial disputes.

`CREATOR_PROGRAM_TRUTH_ACK_REQUIRED_BEFORE_FIRST_AFFILIATE_LINK = TRUE`

Minimum acknowledgement evidence:
- Creator ID;
- accepted terms version;
- accepted rate-schedule version;
- accepted attribution-policy version when applicable;
- accepted payout-policy version when applicable;
- timestamp;
- locale;
- immutable acceptance event ID.

Do not require re-acceptance for every nonmaterial copy edit. Material changes affecting earnings, attribution, payout, tax duties, prohibited conduct, or dispute rights require versioned prospective notice/acceptance according to the final contract policy.

`CREATOR_MATERIAL_POLICY_CHANGE_NOTICE_REQUIRED = TRUE`

`ALREADY_EARNED_COMMISSION_USES_GOVERNING_EVENT_POLICY_VERSION = TRUE`

### 11.2 Transparency must not leak customer identity

Creator financial transparency does not authorize disclosure of purchaser PII.

`CREATOR_REVENUE_CONSOLE_CUSTOMER_PII_DISCLOSURE = PROHIBITED_BY_DEFAULT`

Use privacy-safe transaction references and only the minimum event fields needed to explain attribution/commission.

A dispute path may permit additional controlled evidence where legally/privacy permitted, but ordinary Creator exports must not expose customer name, email, payment details, health-like/private consultation content, or full Stripe identifiers.

### 11.3 Acceptance evidence is part of provenance

Future review chain becomes:

`benchmark evidence -> M55 rule -> Creator-visible Program Truth -> Creator acknowledgement/version -> original implementation -> tests -> runtime evidence`.
