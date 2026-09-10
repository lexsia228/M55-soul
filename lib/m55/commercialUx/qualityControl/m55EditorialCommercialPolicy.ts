/**
 * Contextual editorial / relationship-language risk policy.
 * Not a global forbidden-word list — rules are role, surface, and recipient aware.
 */

import type {
  ContentIntegrityCorpusItem,
  ContentIntegrityFinding,
  EditorialEnforcementMode,
} from '../../../commercialQuality/contentIntegrityTypes';
import type { EditorialCopyContext, EditorialRole } from './m55CopyRoleRegistry';

export const EDITORIAL_RISK_FAMILIES = [
  'relationship_termination_ambiguity',
  'rejection_separation_ambiguity',
  'blame',
  'mind_reading',
  'deterministic_claim',
  'emotional_diagnosis',
  'coercive_instruction',
  'shame_judgment',
  'accidental_escalation',
] as const;

export type EditorialRiskFamily = (typeof EDITORIAL_RISK_FAMILIES)[number];

export type EditorialRiskCategory =
  | 'recipient_misinterpretation_risk'
  | 'mind_reading_risk'
  | 'deterministic_claim_risk'
  | 'editorial_language_risk';

/** Machine-readable migration state for new editorial categories on full corpus. */
export const EDITORIAL_LANGUAGE_RISK_ENFORCEMENT: Readonly<
  Record<EditorialRiskCategory, EditorialEnforcementMode>
> = {
  recipient_misinterpretation_risk: 'PENDING_PRODUCT_REMEDIATION',
  mind_reading_risk: 'ACTIVE',
  deterministic_claim_risk: 'ACTIVE',
  editorial_language_risk: 'ACTIVE',
};

const PAIR_SHARE_SURFACES = new Set(['pair.free.share_card', 'pair.free.share_post']);

const RELATIONSHIP_CONCLUSION_ROLES = new Set<EditorialRole>([
  'relationship_conclusion',
  'share_caption',
]);

const TERMINATION_LEXEME = /終わらせ|終わり|別れ/u;

const CONVERSATION_SCOPE_MARKERS = [
  '話を一区切り',
  'その場のやり取り',
  '会話の区切り',
  '話を一区切りに',
] as const;

const MIND_READING_PATTERNS: readonly { pattern: RegExp; evidence: string }[] = [
  { pattern: /相手は[^。]{0,40}と思っている/u, evidence: 'partner mind-reading without observational frame' },
  { pattern: /相手が[^。]{0,40}望んでいる/u, evidence: 'partner desire attribution' },
];

const DETERMINISTIC_CLAIM_PATTERNS: readonly { pattern: RegExp; evidence: string }[] = [
  { pattern: /必ず[^。]{0,20}(なる|できる|改善)/u, evidence: 'unsupported certainty (必ず)' },
  { pattern: /きっと[^。]{0,20}(別れる|終わる|うまくいく)/u, evidence: 'unsupported prediction (きっと)' },
];

export type EditorialLanguageRiskInput = {
  readonly text: string;
  readonly surface: string;
  readonly editorial?: EditorialCopyContext;
};

function hasConversationScope(text: string): boolean {
  return CONVERSATION_SCOPE_MARKERS.some((marker) => text.includes(marker));
}

function editorialFinding(
  item: ContentIntegrityCorpusItem,
  severity: 'P1',
  category: EditorialRiskCategory,
  family: EditorialRiskFamily,
  evidence: string,
  currentText: string,
): ContentIntegrityFinding {
  return {
    findingId: `CI-${category}-${family}-${item.itemId}`,
    itemId: item.itemId,
    severity,
    category,
    editorialRiskFamily: family,
    editorialEnforcement: EDITORIAL_LANGUAGE_RISK_ENFORCEMENT[category],
    deterministicEvidence: `${family}: ${evidence}`,
    currentText: currentText.slice(0, 200),
  };
}

function matchesPilotPairShareConclusion(input: EditorialLanguageRiskInput): boolean {
  if (!PAIR_SHARE_SURFACES.has(input.surface)) return false;
  if (!input.editorial) return false;
  if (input.editorial.recipient !== 'partner') return false;
  return RELATIONSHIP_CONCLUSION_ROLES.has(input.editorial.editorialRole);
}

export function evaluateRelationshipTerminationAmbiguity(
  input: EditorialLanguageRiskInput,
  item?: ContentIntegrityCorpusItem,
): ContentIntegrityFinding[] {
  if (!matchesPilotPairShareConclusion(input)) return [];
  if (!TERMINATION_LEXEME.test(input.text)) return [];
  if (hasConversationScope(input.text)) return [];

  const corpusItem: ContentIntegrityCorpusItem =
    item ??
    ({
      itemId: 'editorial.policy.standalone',
      surface: input.surface,
      sourceCategory: 'editorial_policy_eval',
      variantIdentity: 'standalone',
      headingLabel: 'editorial',
      semanticText: input.text,
      sourceOwner: 'lib/m55/commercialUx/qualityControl/m55EditorialCommercialPolicy.ts',
      editorial: input.editorial,
    } satisfies ContentIntegrityCorpusItem);

  return [
    editorialFinding(
      corpusItem,
      'P1',
      'recipient_misinterpretation_risk',
      'relationship_termination_ambiguity',
      'partner-facing share conclusion uses termination lexeme without conversational scope',
      input.text,
    ),
  ];
}

export function evaluateMindReadingRisk(
  input: EditorialLanguageRiskInput,
  item?: ContentIntegrityCorpusItem,
): ContentIntegrityFinding[] {
  const findings: ContentIntegrityFinding[] = [];
  for (const rule of MIND_READING_PATTERNS) {
    if (!rule.pattern.test(input.text)) continue;
    const corpusItem: ContentIntegrityCorpusItem =
      item ??
      ({
        itemId: 'editorial.policy.mind_reading',
        surface: input.surface,
        sourceCategory: 'editorial_policy_eval',
        variantIdentity: 'standalone',
        headingLabel: 'editorial',
        semanticText: input.text,
        sourceOwner: 'lib/m55/commercialUx/qualityControl/m55EditorialCommercialPolicy.ts',
        editorial: input.editorial,
      } satisfies ContentIntegrityCorpusItem);
    findings.push(
      editorialFinding(
        corpusItem,
        'P1',
        'mind_reading_risk',
        'mind_reading',
        rule.evidence,
        input.text,
      ),
    );
  }
  return findings;
}

export function evaluateDeterministicClaimRisk(
  input: EditorialLanguageRiskInput,
  item?: ContentIntegrityCorpusItem,
): ContentIntegrityFinding[] {
  const findings: ContentIntegrityFinding[] = [];
  for (const rule of DETERMINISTIC_CLAIM_PATTERNS) {
    if (!rule.pattern.test(input.text)) continue;
    const corpusItem: ContentIntegrityCorpusItem =
      item ??
      ({
        itemId: 'editorial.policy.deterministic_claim',
        surface: input.surface,
        sourceCategory: 'editorial_policy_eval',
        variantIdentity: 'standalone',
        headingLabel: 'editorial',
        semanticText: input.text,
        sourceOwner: 'lib/m55/commercialUx/qualityControl/m55EditorialCommercialPolicy.ts',
        editorial: input.editorial,
      } satisfies ContentIntegrityCorpusItem);
    findings.push(
      editorialFinding(
        corpusItem,
        'P1',
        'deterministic_claim_risk',
        'deterministic_claim',
        rule.evidence,
        input.text,
      ),
    );
  }
  return findings;
}

export function evaluateEditorialLanguageRisk(
  item: ContentIntegrityCorpusItem,
): ContentIntegrityFinding[] {
  const input: EditorialLanguageRiskInput = {
    text: item.semanticText,
    surface: item.surface,
    editorial: item.editorial,
  };
  return [
    ...evaluateRelationshipTerminationAmbiguity(input, item),
    ...evaluateMindReadingRisk(input, item),
    ...evaluateDeterministicClaimRisk(input, item),
  ];
}

export function isEditorialFindingEnforced(finding: ContentIntegrityFinding): boolean {
  if (!finding.editorialEnforcement) return true;
  return finding.editorialEnforcement === 'ACTIVE';
}

export function partitionEditorialFindings(findings: readonly ContentIntegrityFinding[]): {
  enforced: ContentIntegrityFinding[];
  shadowPendingRemediation: ContentIntegrityFinding[];
} {
  const enforced: ContentIntegrityFinding[] = [];
  const shadowPendingRemediation: ContentIntegrityFinding[] = [];
  for (const finding of findings) {
    if (isEditorialFindingEnforced(finding)) {
      enforced.push(finding);
    } else {
      shadowPendingRemediation.push(finding);
    }
  }
  return { enforced, shadowPendingRemediation };
}

export function editorialEnforcementStateSummary(): Readonly<
  Record<EditorialRiskCategory, EditorialEnforcementMode>
> {
  return EDITORIAL_LANGUAGE_RISK_ENFORCEMENT;
}
