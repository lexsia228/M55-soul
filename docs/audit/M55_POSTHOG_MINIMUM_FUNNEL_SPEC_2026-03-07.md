# M55 PostHog Minimum Funnel Spec — 2026-03-07

## Purpose
Define the minimum privacy-safe product analytics events for `/prototype/hub`.

## Scope
Applies only to the isolated hub monetization surface.
Do not instrument storefront/public pages in this phase.
Do not contaminate AI chat with sales logging noise.

## Events
- `hub_view`
  - fired when `/prototype/hub` is viewed
- `view_retention_comparison`
  - fired when retention comparison section becomes visible
- `view_plan_summary`
  - fired when plan summary section becomes visible
- `dtr_card_click`
  - fired when a DTR shelf card is clicked

## Rules
- do not use disabled annual CTA clicks as the primary signal
- do not record sensitive free-text content
- do not log AI chat conversation content
- keep properties minimal and operationally useful

## Suggested properties
- `tier`
- `has_monthly_dtr`
- `section`
- `card_type`

## Operating note
Implement only after visual verification and Stripe merchant baseline are complete.
