# M55 Editorial / Commercial Automation SSOT

Status: **HUMAN-APPROVED FOUNDATION CONTRACT v1**
Scope: **Editorial automation policy, copy-role metadata, golden semantics, deterministic language-risk gates**

## Authority position

This document is **subordinate**, in exact order, to:

1. `docs/ssot/M55_EXECUTION_STATE.json`
2. Product Authority / machine product truth (`lib/m55/contracts/m55CommercialFunnelContract.ts`)
3. `docs/ssot/M55_COMMERCIAL_QUALITY_CONTRACT.md`
4. Active funnel contract (`M55_SELF_FUNNEL_CONTRACT.md` or `M55_PAIR_FUNNEL_CONTRACT.md`)
5. `docs/ssot/M55_COPY_AND_CLAIMS.md`
6. `docs/ssot/M55_VISUAL_SYSTEM.md`
7. `docs/ssot/M55_UX_BENCHMARK_STACK.md`

This SSOT is **not** executable `CURRENT` / `NEXT` authority. It does **not** reorder the macro roadmap.

## Non-authorization (mandatory)

This SSOT **cannot**:

- cannot authorize new product meaning or psychological claims
- alter Free/Paid ownership or remap Pair Free→Paid mapping
- change pricing, product capability, checkout, or payment semantics
- cannot replace Human commercial approval (`USER_VISIBLE_CLOSED_GREEN`)
- cannot reselect UX benchmarks
- cannot authorize Production merge, deploy, or provider mutation
- permit AI to invent claims unsupported by higher authority

AI may evaluate, flag, and structure findings. AI may not grant Human approval.

## Implementation owner (reuse-first)

Extend the existing M55 Commercial Quality Control Plane:

- `lib/commercialQuality/**` — repository-independent engine + shared integrity types
- `lib/m55/commercialUx/qualityControl/**` — M55 adapters, corpus, editorial policy

Do **not** create a second verifier framework, approval system, or competing Product Authority.

---

## A. Editorial intent by surface

For each surface, editorial automation reviews **intent**, not product invention.

| Surface | User job | Emotional outcome | Comprehension outcome | Commercial outcome | Density | Narrative order | CTA role | Prohibited semantics | Human approval |
|---|---|---|---|---|---|---|---|---|---|
| Personal Free | recognize self pattern | seen, not judged | one-read clarity | trust + Premium open-loop | medium | headline → evidence → open-loop | continue / unlock hint | fate, score, diagnosis | required for closure |
| Personal Premium | actionable self reading | relief + agency | specific scenes | paid value proof | high | thesis → why → handling | revisit / apply | deterministic cure | required |
| Pair Free | recognize two-person flow | mutual recognition | partner-safe wording | Paid bridge without leak | medium | between-them → expression | see reading / share | partner mind-reading, breakup subtext | required |
| Pair Premium | handle mismatch together | constructive distance | each-side observability | one-time purchase clarity | high | thesis → loop → reset | phrase / experiment | blame, coercion | required |
| Personal Share | self-expression to social | “this is me” | recipient can parse | organic discovery | low–medium | insight → CTA | social / recipient entry | overshare, shame | required |
| Pair Share | send partner something useful | connection not accusation | partner won't misread as breakup | share motivation + safety | low–medium | conclusion → CTA | partner review together | termination ambiguity, rejection | required |

Product/runtime availability (live, purchasable, env-gated) is owned by machine contract and execution state — **not** this SSOT.

---

## B. Copy-role contract

Every governed copy unit may carry additive editorial metadata (`EditorialCopyContext`):

| Field | Purpose |
|---|---|
| `editorialRole` | semantic job of the text unit |
| `subject` | who the sentence is about |
| `audience` | who reads it in-product |
| `recipient` | who receives shared/conversation object |
| `relationshipContext` | personal / pair / none |
| `certaintyLevel` | observational / hedged / deterministic |
| `commercialRole` | recognition / bridge / conversion / share / safety / instruction |
| `freePaidOwnership` | free / paid / shared |
| `publicPrivateLevel` | public / private / purchaser_only |

Required editorial roles (minimum):
`result_headline`, `relationship_conclusion`, `supporting_evidence`, `safety_cue`, `premium_open_loop`, `purchase_cta`, `conversation_cta`, `share_caption`, `manual_slot`, `paid_instruction`.

Existing `GovernedCopyEntry` / corpus identities remain intact. Overlay is additive.

Machine owner: `lib/m55/commercialUx/qualityControl/m55CopyRoleRegistry.ts`

---

## C. Relationship-sensitive language safety

Rules are **contextual**, not global forbidden-word lists.

Risk families (minimum):

- `relationship_termination_ambiguity`
- `rejection_separation_ambiguity`
- `blame`
- `mind_reading`
- `deterministic_claim`
- `emotional_diagnosis`
- `coercive_instruction`
- `shame_judgment`
- `accidental_escalation`

**Pilot rule (Phase 1A+):**
When `surface` ∈ `{ pair.free.share_card, pair.free.share_post }`, `editorialRole` ∈ `{ relationship_conclusion, share_caption }`, `recipient = partner`, and termination lexemes appear **without** conversational scope markers (`話を一区切り`, `その場のやり取り`, `会話の区切り`) → `recipient_misinterpretation_risk` (P1).

Example: 「終わらせたい」 is **not** globally banned. It is HIGH-RISK in partner-facing relationship conclusions without explicit conversation-object scope.

Machine owner: `lib/m55/commercialUx/qualityControl/m55EditorialCommercialPolicy.ts`

---

## D. Editorial quality rules

Deterministic + AI-reviewable dimensions:

- “so what?” clarity
- conclusion before evidence ordering
- duplicate identity across profiles
- generic filler / unsupported certainty
- Japanese naturalness
- semantic repetition / adjacent duplication
- value density (too little / too much fatigue)
- CTA continuity
- sendability / recipient usefulness
- Free→Paid open-loop quality
- paid value specificity

Existing checks in `contentIntegritySemanticChecks.ts` and `japaneseComprehensionChecks.ts` remain authoritative for their categories. Editorial policy extends — does not replace — them.

---

## E. Visual quality rules

Reuse existing layout / responsive engine:

- `lib/commercialQuality/continuousResponsiveEngine.ts`
- `lib/commercialQuality/layoutInvariants.ts`
- `lib/m55/commercialUx/visualQuality/commercialVisualQualityContract.ts`

Breakpoints: 320 / 390 / 1440 (+ share ratios 1:1 / 4:5 / 9:16 where applicable).

Review: Japanese orphan/mid-word wrap, dead whitespace, hierarchy, clipping, CTA attachment, editorial density.

Do **not** duplicate the responsive engine.

---

## F. Golden fixture model

Golden fixtures freeze **semantic contracts**, not literal copy snapshots.

Each fixture defines:

- authoritative inputs/keys (relation stage, interaction id, surface, role, recipient)
- approved meaning patterns
- forbidden interpretations
- required UI states / captures (when in capture gates)
- `humanApprovedExemplar` status

Machine owner: `lib/m55/commercialUx/qualityControl/m55EditorialGoldenCorpus.ts`

First Human-derived fixture: `pair.share.R3.tempo_mismatch.relationship_conclusion.partner`

---

## G. Benchmark use

Use **only** the frozen stack in `M55_UX_BENCHMARK_STACK.md`. No reselection in ordinary gates.

Benchmarks supply interaction pattern, hierarchy, editorial density, decision/commerce pattern — **not** M55 wording.

---

## H. AI / Bot role model

Preserve multi-agent authority (`M55_MULTI_AGENT_PARALLEL_OPERATING_MODEL_SSOT.md`):

| Role | Responsibility |
|---|---|
| Cursor | bounded mutation owner when authorized |
| Grok | read-only visual/commercial/sendability red-team |
| Codex | independent exact-diff / semantic review |
| Human | final commercial/product authority |

Structured machine outputs: `P0` / `P1` / `P2` / `GREEN` / `HOLD`.
AI never grants Human approval. `visionJudgeAttachment` remains `candidate_only`.

---

## I. Automation levels

| Level | Scope |
|---|---|
| L1 | Deterministic lint — dup, Free/Paid leak, copy-role rules, JP basics, CTA, scenarios, **contextual language-risk** |
| L2 | Playwright capture — golden fixtures, viewports, share ratios, candidate approval pack |
| L3 | Independent AI review — structured corpus + screenshots → JSON findings only |
| L4 | Bounded remediation — CSS/layout/tokens/templates/mechanical CTA only (no new meaning) |
| L5 | Candidate PR automation — only after explicit future Human authorization; no merge/deploy |

### Migration enforcement (Phase 1A)

New category `recipient_misinterpretation_risk` may run in **shadow mode** (`PENDING_PRODUCT_REMEDIATION`) on full corpus until product copy remediation (Phase 1B). Shadow findings are generated, reported, and **not** counted as enforced GREEN. They are not Human-approved debt.

---

## J. Premium schema-first generation contract

AI may fill **approved schemas**; AI may not invent schemas or product capabilities without Human approval.

### Personal Premium slots

`result_thesis`, `why_background`, `contexts_scenes`, `strengths_friction`, `handling`, `usable_action`, `reflection_revisit`

### Pair Premium slots

`relationship_thesis`, `why_pattern_happens`, `conditions`, `each_side_observable_view`, `mismatch_sequence`, `return_reset_order`, `usable_phrase`, `small_experiment`, `revisit_question`, `deeper_scene_mapping`

Each slot requires: provenance owner, allowed inference level, Free/Paid ownership, safety rules, required tests, public/private status.

---

## Verification

```bash
npm run verify:m55-ssot
npm run verify:m55-commercial-quality-control-plane
npx tsx --test lib/m55/commercialUx/qualityControl/m55EditorialCommercialPolicy.test.ts
```

---

## Related files

| Path | Role |
|---|---|
| `m55CopyRoleRegistry.ts` | Editorial role overlay types |
| `m55EditorialCommercialPolicy.ts` | Contextual language-risk evaluator |
| `m55EditorialGoldenCorpus.ts` | Golden semantic fixtures |
| `contentIntegritySemanticChecks.ts` | Engine integration hook |
| `m55ContentIntegrityCorpus.ts` | Generated prose corpus + metadata pilot |
