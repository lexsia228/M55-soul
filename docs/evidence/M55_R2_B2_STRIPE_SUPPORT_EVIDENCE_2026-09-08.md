# M55 R2-B2 Stripe Support Primary Evidence — 2026-09-08

**Evidence class:** `STRIPE_SUPPORT_PRIMARY_EVIDENCE`

**Source:** Stripe Support (account-specific response)

**Received:** 2026-09-08

**Classification gate:** R2-B2 `EXTERNAL_SUPPORTABILITY_CONFIRMATION`

**Authority:** supporting primary evidence for durable SSOT classification — does **not** modify `M55_EXECUTION_STATE.json` CURRENT/NEXT

## Evidence handling rules

- No secrets, tokens, or email addresses recorded in this file.
- Support email is **not** reproduced verbatim.
- Semantic configuration facts are preserved; v1-style/controller-looking property names from the email are **not** frozen as final Accounts v2 API syntax.
- Actual R8 implementation must use the then-current official Accounts v2 API schema at implementation time.

## A — Connect account implementation model

**Classification:** `R2_B2_STRIPE_A_ACCOUNT_CONFIGURATION = CLOSED_GREEN`

| Token | Value |
|---|---|
| `STRIPE_ACCOUNT_API` | `ACCOUNTS_V2` |
| `STRIPE_CONNECTED_ACCOUNT_DASHBOARD` | `EXPRESS` |
| `STRIPE_FEES_RESPONSIBILITY` | `APPLICATION` |
| `STRIPE_LOSSES_RESPONSIBILITY` | `APPLICATION` |
| `SEPARATE_CHARGES_AND_TRANSFERS` | `CONFIRMED_M55_CONNECT_FLOW` |

**Stripe Support material facts (semantic):**

- New Connect implementation should use **Accounts v2**.
- **Express Dashboard** can be used for connected accounts.
- Semantic configuration confirmed by Stripe Support:
  - dashboard type = express
  - fees payer = application (platform)
  - losses on payments = application (platform)
- M55 uses **Separate Charges and Transfers**.

**Implementation boundary (`IMPLEMENTATION_TIME_OPEN_ITEM`):**

- Do **not** treat email property-name wording as final API field syntax.
- R8 must map these semantics to the official Accounts v2 schema active at implementation time.

**Public doc corroboration (`CURRENT_PUBLIC_STRIPE_DOC_CORROBORATION`):**

- [Connect accounts](https://docs.stripe.com/connect/accounts)
- [Separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers)
- [Express Dashboard](https://docs.stripe.com/connect/express-dashboard)

## B — Negative balance / loss responsibility

**Classification:** `R2_B2_STRIPE_B_NEGATIVE_BALANCE_RESPONSIBILITY = CLOSED_GREEN_PLATFORM_RESPONSIBLE`

**Stripe Support material fact:**

- For M55's confirmed configuration, `losses.payments = application` — the **M55 platform** bears negative-balance responsibility on connected accounts.

**R8 impact (classification only — not implementation authorization):**

- reserve/recovery handling
- reconciliation
- risk controls
- post-payout negative adjustment handling

**Does not change:**

- 50/40/30 economics
- direct single-tier attribution
- Founding cohort 20
- PENDING / HOLD / PAYABLE architecture
- append-only ledger
- no retroactive PAYABLE rate reduction

## C — M55WEB account supportability

### `STRIPE_SUPPORT_PRIMARY_EVIDENCE`

**Stripe Support material facts (dated 2026-09-08 — preserve verbatim semantics):**

- Account review has been escalated/reconfirmed with Stripe's internal specialist team.
- Stripe Support said it would reconfirm item 3 with its internal specialist team and asked M55 to wait for that support-side follow-up.
- No final account approval has been received yet.

| Token | Value |
|---|---|
| `M55_ACCOUNT_FINAL_STRIPE_APPROVAL` | `NOT_YET_CONFIRMED` |

### `CURRENT_CONTROL_PLANE_INTERPRETATION`

**Classification:** `R2_B2_STRIPE_C_ACCOUNT_SUPPORTABILITY = NON_BLOCKING_STRIPE_SUPPORT_FOLLOWUP`

| Token | Value |
|---|---|
| `STRIPE_SUPPORT_FOLLOWUP` | `PENDING_NO_ACTION_REQUIRED` |
| `M55_ACTION_REQUIRED_FOR_STRIPE_FOLLOWUP` | `FALSE` |
| `DEVELOPMENT_BLOCKED_BY_STRIPE_SUPPORT_FOLLOWUP` | `FALSE` |
| `NO_ADDITIONAL_STRIPE_QUESTION_NOW` | `TRUE` |
| `M55_ACCOUNT_FINAL_STRIPE_APPROVAL` | `NOT_YET_CONFIRMED` — informational only; **not** a development blocker |

**Policy:**

- Support-side follow-up may still arrive; this is **not** a development wait gate and requires **no** additional Human question or action now.
- Do not reopen Stripe support questioning for C while follow-up is pending.
- Do **not** claim Stripe has issued final account approval.
- Do **not** claim Stripe will never contact M55 again or that future account/risk review cannot occur.
- Production cash activation remains fail-closed against then-current Stripe account/capability/requirements state.

## D — Connect pricing model

**Classification:** `R2_B2_STRIPE_D_PRICING_MODEL = CLOSED_FOR_PRICING_MODEL`

| Token | Value |
|---|---|
| `STRIPE_CONNECT_PRICING_OWNER` | `PLATFORM` |
| `R8_ACTUAL_BILLING_RECONCILIATION_REQUIRED` | `TRUE` |

**Stripe Support material facts (account-specific):**

- Configuration: Accounts v2 + Express Dashboard + Separate Charges and Transfers → **platform-managed pricing model**.
- Active connected account: **¥200/month + consumption tax**
  - "Active" = connected account with a bank payout during that month
- Payout: **0.25% + ¥250 + consumption tax**
- Connect charges are debited from the M55 platform Stripe balance

**Pricing nuance (`IMPLEMENTATION_TIME_OPEN_ITEM`):**

- Current public Stripe Japan Connect pricing also exposes a separate "funds routing and platform management" **0.25% of payout volume** line.
- Do **not** guess whether this is additive, overlapping, bundled, or account-specifically altered.
- At R8 before real payout activation: reconcile actual Stripe Dashboard / contract / invoice pricing.
- No invented final unit-cost formula in this gate.

**Public doc corroboration (`CURRENT_PUBLIC_STRIPE_DOC_CORROBORATION`):**

- [Stripe Connect pricing (Japan)](https://stripe.com/jp/connect/pricing)

## Resulting R2-B2 Stripe state (2026-09-08)

| Classification | Status |
|---|---|
| `R2_B2_STRIPE_A_ACCOUNT_CONFIGURATION` | `CLOSED_GREEN` |
| `R2_B2_STRIPE_B_NEGATIVE_BALANCE_RESPONSIBILITY` | `CLOSED_GREEN_PLATFORM_RESPONSIBLE` |
| `R2_B2_STRIPE_C_ACCOUNT_SUPPORTABILITY` | `NON_BLOCKING_STRIPE_SUPPORT_FOLLOWUP` |
| `STRIPE_SUPPORT_FOLLOWUP` | `PENDING_NO_ACTION_REQUIRED` |
| `DEVELOPMENT_BLOCKED_BY_STRIPE_SUPPORT_FOLLOWUP` | `FALSE` |
| `R2_B2_STRIPE_D_PRICING_MODEL` | `CLOSED_FOR_PRICING_MODEL` |
| `R2_B2_STRIPE_RESIDUAL_CONFIRMATION` | `C_ONLY_NON_BLOCKING` |
| `NO_ADDITIONAL_STRIPE_QUESTION_NOW` | `TRUE` |
| `NO_BROAD_STRIPE_RESEARCH_REPLAY` | `TRUE` |

## Preserved (no regression)

| Token | Value |
|---|---|
| `R2_B2_CORE_STRIPE_ARCHITECTURE_FEASIBLE` | `TRUE` |
| `STRIPE_CONNECT` | `VALIDATED_LEADING_PROVIDER_CANDIDATE` |
| `stripePayoutProviderStatus` | `UNSELECTED` |

`stripePayoutProviderStatus` remains `UNSELECTED`. Final provider selection does **not** depend solely on receiving a future support follow-up email; R2 Final Human acceptance and then-current account/capability/requirements state at activation time remain the governing boundaries.

## Japan legal / tax boundary (not closed by this evidence)

| Token | Status |
|---|---|
| `JAPAN_LEGAL_30_DAY_PAYMENT_COMPATIBILITY` | `OPEN` |
| Japan tax/withholding classification | `OPEN` for final activation semantics |

Do **not** invent: universal 10.21%, commission rounding, tax-base rounding, final payout threshold, final payout cadence.

## Gate authorization boundary

This evidence and its SSOT reconciliation do **not** authorize:

- Connect account creation
- Stripe API mutation
- KYC implementation
- live payout
- DB migration
- tax implementation
- R6/R8 implementation
- R3 completion
- provider final selection
