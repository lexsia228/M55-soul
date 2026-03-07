# M55 Refined Execution Roadmap — 2026-03-07

## Purpose
This file freezes the current execution order for the M55 web monetization phase.
It is an operational roadmap for team alignment and AI handoff.
It is not yet a permanent constitutional SSOT checkpoint.

## Phase 1A: Freeze money core
- finalize webhook diff
- apply migration
- verify invoice.paid grant
- verify duplicate replay does not double-grant
- verify retryable failure remains retryable
- define payment-failure state machine
- do not immediately revoke access on a single failed renewal

## Phase 1B: Merchant baseline
- enable Stripe automatic receipts
- enable failed-payment customer emails
- confirm JP disclosure / receipt / legal paths
- do not build a custom receipt system yet

## Phase 2: Build value-selling hub
- present text-only wireframe for `/prototype/hub`
- preserve AI chat, Tarot, ai_meter, Today, Weekly, Prime/DTR, and My as first-class surfaces
- annual plan remains display-only
- annual checkout / purchase CTA stays disabled or feature-flagged

## Phase 2.5: Add guarded funnel observability
- prefer PostHog as primary hub funnel analytics
- keep tracking minimal and privacy-safe
- do not contaminate AI chat with sales logging noise

## Phase 3: Tune and only then expand
- tune comparison copy
- tune shelf order
- tune disabled CTA language
- postpone domestic provider branching
- postpone BRAND_MODE / site cloning until the current revenue loop is stable

## Operating note
This roadmap should later be summarized into a short checkpoint in `docs/ssot/M55_SYSTEM_SSOT.md` immediately before the next implementation phase begins.
