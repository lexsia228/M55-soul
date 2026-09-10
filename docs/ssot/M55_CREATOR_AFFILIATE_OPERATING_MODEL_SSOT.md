# M55 Creator Affiliate Operating Model SSOT

Status: **ACTIVE / HUMAN-APPROVED TARGET CONTRACT (2026-09-10)**

Implementation status: **NOT IMPLEMENTED**

This SSOT freezes the Creator Affiliate operating-model delta approved by the Human on 2026-09-10. It does **not** change CURRENT/NEXT, activate Stripe Connect, create connected accounts, move money, apply DB migrations, or authorize Production cash payout.

Sole executable authority remains `docs/ssot/M55_EXECUTION_STATE.json`.

Parent authorities:
- `docs/ssot/M55_CREATOR_REVENUE_E2C2E_SSOT.md`
- `docs/ssot/M55_CREATOR_COMPLIANCE_AND_PAYOUT_AUTOMATION_SSOT.md`
- `docs/ssot/M55_CREATOR_AFFILIATE_STRIPE_TAX_LEGAL_SSOT.md`
- `docs/ssot/M55_OPERATOR_BUSINESS_STATUS_SSOT.md`
- `docs/ssot/M55_CREATOR_AFFILIATE_BENCHMARK_TARGET_ARCHITECTURE_SSOT.md`

This file adds only missing operating-model decisions. Existing frozen economics, legal/tax boundaries, anti-MLM rules, commission states, payout states, 30-day compliance review, append-only ledger, Stripe Separate Charges and Transfers target, Founding Creator schedule, and General User cash prohibition remain unchanged.

---

## A. Core business objective

`CREATOR_CASH_CORE_ARCHITECTURE = APPROVED_TARGET`

M55 Creator Affiliate v1 is an acquisition engine in which an **approved Creator earns cash only from eligible attributable customer revenue**.

No cash commission is created merely for:
- posting content;
- generating clicks;
- follower count;
- creator recruitment;
- creator sign-up;
- free completion alone;
- mandatory deliverables or working hours.

The economic alignment is:

`CREATOR_PROFIT_GROWS_WHEN_ELIGIBLE_M55_SALES_GROW = TRUE`

M55 therefore treats Creator commission as variable acquisition cost attached to realized eligible revenue, not as prepaid advertising spend.

---

## B. Attribution policy v1

Human-approved target:

`ATTRIBUTION_WINDOW_DAYS = 30`

`ATTRIBUTION_MODEL = LAST_QUALIFIED_DIRECT_CREATOR_TOUCH`

`ONE_ELIGIBLE_PURCHASE_MAX_ONE_CREATOR = TRUE`

A qualified Creator touch requires a valid M55-issued direct referral identity for an approved/active Creator. Client-supplied creator IDs, commission rates, Stripe account IDs, or commission amounts are never attribution authority.

Target flow:

`CREATOR_REFERRAL_URL`
→ server resolves opaque referral token
→ durable attribution touchpoint
→ current candidate attribution
→ checkout starts
→ server re-validates candidate
→ immutable checkout attribution snapshot
→ later payment event may create one eligible conversion/commission

Rules:
- later qualified Creator touches may replace the current candidate **before checkout lock**;
- checkout lock freezes attribution for that checkout;
- later unrelated clicks must not steal or rewrite a locked purchase attribution;
- database race order must not decide attribution;
- retroactive manual reassignment after purchase is prohibited by default and requires a separately authorized correction path with immutable evidence rather than history rewrite;
- self-referral, circular referral, duplicate commission, invalid purchase and fraud controls remain mandatory.

Referral URLs must use opaque/non-sensitive public tokens. Creator email, legal identity, Stripe connected-account ID and financial data must not be encoded in public URLs.

---

## C. Checkout binding and provider metadata boundary

`AFFILIATE_ATTRIBUTION_OWNER = M55`

`STRIPE_METADATA_IS_CORRELATION_NOT_FINANCIAL_AUTHORITY = TRUE`

At checkout creation, M55 binds the authoritative attribution snapshot to an internal purchase/checkout context. Stripe metadata may contain only the minimum opaque correlation reference needed to reconcile the checkout back to M55.

Never trust client input for:
- creator identity;
- creator rate;
- commission amount;
- tax treatment;
- payout destination;
- payout eligibility.

Existing checkout idempotency and purchase-context protections must be reused rather than bypassed.

---

## D. Eligible product policy registry

`AFFILIATE_ELIGIBLE_PRODUCT_POLICY_MUST_BE_VERSIONED = TRUE`

`AFFILIATE_ELIGIBLE_PRODUCT_POLICY_MUST_NOT_BE_HARDCODED_FROM_STALE_RUNTIME_STATE = TRUE`

Exact launch SKU eligibility must be resolved from then-current Product/Runtime Authority and represented by an effective-dated/versioned policy registry.

Each eligible-product policy entry must define at minimum:
- product key;
- effective-from / effective-to;
- commission-eligible boolean;
- commissionable component/basis;
- upgrade treatment;
- refund/chargeback treatment reference;
- policy version.

Target principles:
- only actual paid eligible customer purchases create Creator cash commission;
- free usage never creates Creator cash commission;
- recovery, fulfillment repair and duplicate processing never create a second commission;
- an upgrade may be commissionable only on the eligible incremental revenue and must use the authoritative attribution policy for that purchase lineage;
- launch inclusion/exclusion of add-on/reply-ticket SKUs is a later product-policy decision and must not be inferred from old status text.

---

## E. Commission accounting authority

Existing `COMMISSIONABLE_REVENUE` and 50% → 40% → 30% schedule remain authoritative.

`M55_COMMISSION_LEDGER_IS_FINANCIAL_AUTHORITY = TRUE`

`CREATOR_PAYABLE_BALANCE_IS_DERIVED_PROJECTION = TRUE`

`MUTABLE_CREATOR_WALLET_BALANCE_AS_FINANCIAL_AUTHORITY = PROHIBITED`

Commission history must remain append-only.

Partial refund handling must be financially distinct from product entitlement handling:
- full eligible refund may create a full commission reversal;
- partial eligible refund creates a proportional/contract-defined negative adjustment;
- original commission evidence remains immutable;
- exact tax-base and commission rounding remain R6-owned and must not be invented here.

Disputes/chargebacks can occur after the standard review window. The implementation must ingest the relevant provider dispute lifecycle and apply HOLD / REVERSE / ADJUST logic without assuming that day 30 eliminates later loss risk.

---

## F. M55 profit-protection / liquidity contract

`M55_CREATOR_PROGRAM_MUST_PRESERVE_POSITIVE_CONTRIBUTION = TRUE`

`CREATOR_PAYABLE_RESERVE = REQUIRED`

Creator payout execution must fail closed when platform liquidity is insufficient.

Conceptual transfer gate:

`AVAILABLE_PLATFORM_LIQUIDITY >= CURRENT_PAYOUT_BATCH + REQUIRED_CREATOR_LIABILITY_RESERVE + REFUND_DISPUTE_RISK_RESERVE`

No fixed reserve percentage or yen amount is frozen here. R8 owns the quantitative reserve/cadence/threshold model using then-current Stripe pricing, payout settings, legal/tax requirements and actual unit economics.

One purchase must never imply one bank payout.

`PAYOUT_BATCHING_REQUIRED = TRUE`

Payout threshold/cadence remain R8-owned unless a later Human decision explicitly freezes them.

M55 must not assume funds already paid out to a Creator bank account can always be automatically pulled back. Post-payout recovery must follow the existing immutable adjustment / lawful offset / reserve / exception framework.

---

## G. Creator Revenue Console — required authenticated surface

`CREATOR_REVENUE_CONSOLE_REQUIRED = TRUE`

`CREATOR_REVENUE_CONSOLE_CANONICAL_ROUTE_TARGET = /creator`

Approved Creators must receive a dedicated authenticated Creator surface inside M55. Ordinary users must not receive Creator financial controls merely by being logged in.

Minimum top-level Creator summary:
- attributed sales;
- estimated/pending commission;
- payable commission;
- next expected payout/release information.

Minimum sections:
1. **Performance** — unique attributed visits, valid Free completions where applicable, eligible paid conversions, conversion rate, attributed sales.
2. **Earnings** — anonymized purchase reference, product, purchase timestamp, `COMMISSIONABLE_REVENUE`, applied rate, estimated/gross commission, commission state, `release_at`, adjustments and reason codes.
3. **Payout** — payable amount, payout readiness, batch state, gross commission, statutory withholding if applicable, any separately lawful approved fee, net payout, provider reference, expected bank-arrival window and final provider status.
4. **Referral** — active Creator referral URL/token presentation, copy/QR/share helpers as later UX allows.
5. **Compliance / Account** — Creator terms/policy versions, disclosure/claims state, Stripe onboarding/KYC readiness, tax/invoice readiness, actionable block reasons, correction/appeal path.

Stripe Express or equivalent provider dashboard is a **secondary provider surface**, not the M55 Creator commission/accounting authority.

---

## H. Earnings and bank-arrival transparency

`CREATOR_BANK_ARRIVAL_TRANSPARENCY = REQUIRED`

Creator UI must distinguish at minimum:
- purchase event time;
- estimated/pending commission;
- `release_at` / expected PAYABLE eligibility date;
- payout batch eligibility/date;
- transfer/provider processing state;
- expected bank-arrival window when calculable;
- final posted/failed/returned state from provider evidence.

M55 must never present the 30-day review end as equivalent to money already arriving in the Creator's bank account.

Creator-facing money breakdown must preserve:

`GROSS_CREATOR_COMMISSION`
`+/- LAWFUL_APPEND_ONLY_ADJUSTMENTS`
`- STATUTORY_WITHHOLDING_IF_REQUIRED`
`- SEPARATELY_LAWFUL_HUMAN_APPROVED_FEE_IF_ANY`
`= NET_PAYOUT`

No silent deduction and no silent disappearance of previously shown amounts.

Customer privacy boundary remains unchanged: no customer full name, email, DOB, private answers/content, card/bank data, raw device identity or raw fraud graph is exposed to Creators.

---

## I. Creator onboarding / activation contract

For the initial manually approved Founding cohort, Creator cash capability target order is:

`APPLICATION`
→ `M55_APPROVAL`
→ `CREATOR_TERMS_ACCEPTED`
→ `TAX_PROFILE_READY`
→ `STRIPE_HOSTED_ONBOARDING`
→ `PROVIDER_PAYOUT_READINESS_GREEN`
→ `CREATOR_CASH_CAPABILITY_ACTIVE`

Referral-link issuance/visibility and payout readiness may be separate flags if a later implementation needs that distinction, but **real payout remains fail-closed** until legal/tax/provider requirements are satisfied.

M55 must not store full Creator bank-account details when Stripe-hosted collection can own that data.

---

## J. Operator legal-entity epoch / sole-proprietor-to-corporation transition

Current operating-fact authority remains `M55_OPERATOR_BUSINESS_STATUS_SSOT.md`:

`M55_OPERATOR_FORM = SOLE_PROPRIETOR`
`M55_BUILD_MODEL = SOLO_BUILD`
`M55_EMPLOYEES = NONE`
`M55_PAYS_SALARY_OR_WAGES = FALSE`
`M55_IS_SALARY_PAYER_FOR_WITHHOLDING = FALSE`

Creator financial evidence must bind to an effective-dated operator/payer legal-entity epoch.

`OPERATOR_LEGAL_ENTITY_EPOCH_BINDING = REQUIRED`

Minimum conceptual fields:
- operator legal form;
- payer identity/reference;
- effective-from / effective-to;
- applicable tax/legal/payout policy version;
- provider-account/configuration reference where needed.

On incorporation or other legal-form change:
- create a new epoch;
- do not rewrite historical sole-proprietor commission/payout records;
- reclassify payer-side legal/tax duties before the affected next cash payout;
- reconcile Stripe/provider business identity and Creator Terms before activation under the new entity.

`ENTITY_CONVERSION_FROM_SOLE_PROPRIETOR = HARD_REVIEW_TRIGGER`

Likewise:

`FIRST_EMPLOYEE_HIRE = HARD_REVIEW_TRIGGER`

`FIRST_SALARY_OR_WAGE_PAYMENT = HARD_REVIEW_TRIGGER`

Only the affected legal/tax/provider branch reopens; unrelated CLOSED GREEN product gates do not.

---

## K. General User reward lane — non-cash only

Existing rule remains:

`GENERAL_USER_PRIMARY_V1 = FREE_COMPLETION_DIGITAL_UNLOCK`

Human-approved operating target:

`GENERAL_USER_REWARD_V1 = ADDITIONAL_FREE_INSIGHT_UNLOCK`

`GENERAL_USER_REWARD_V1_MAX_UNLOCKS = 3`

Target trigger:
- direct invite;
- distinct referred user/account;
- valid meaningful Self Free or Pair Free completion;
- abuse checks pass;
- one bounded non-cash Free insight unlock to referrer.

The first three valid completions may each unlock one bounded Free insight, maximum three total for v1.

Hard boundaries:
- no cash;
- no cash-equivalent transferable balance;
- no generic points wallet;
- no transferability;
- no fixed cash value;
- no Premium purchase prerequisite;
- no automatic Premium discount;
- no Premium chapter/body leakage;
- no recruitment/downline reward.

Exact public copy/content of unlock 1/2/3 remains a later product-boundary micro-spec. The unlock must remain on the Free side of the established free/paid boundary.

---

## L. Implementation ownership / no jump-ahead

This target contract does not reorder the canonical roadmap:

R2 `REVENUE_SAFETY_E2E`
→ R3 independent launch-readiness audit
→ R4 distribution foundation
→ R5 attribution/compliance
→ R6 commission ledger
→ R7 Creator dashboard
→ R8 payout/settlement

Implementation ownership:
- R4: Creator identity/referral foundation and program state;
- R5: attribution, lock/conflict/privacy/compliance;
- R6: deterministic commission calculation, append-only ledger, refund/dispute adjustments;
- R7: `/creator` Revenue Console and transparency UX;
- R8: Stripe Connect onboarding/transfer/payout/reconciliation, liquidity reserve, tax/payout statements, exact threshold/cadence.

No Production Stripe/DB/env/provider mutation is authorized by this SSOT.
