import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import type { ContentIntegrityCorpusItem } from '../../../commercialQuality/contentIntegrityTypes';
import { goldenFixtureById } from './m55EditorialGoldenCorpus';
import {
  EDITORIAL_LANGUAGE_RISK_ENFORCEMENT,
  evaluateDeterministicClaimRisk,
  evaluateEditorialLanguageRisk,
  evaluateMindReadingRisk,
  evaluateRelationshipTerminationAmbiguity,
  isEditorialFindingEnforced,
  partitionEditorialFindings,
} from './m55EditorialCommercialPolicy';
import { pairShareRelationshipConclusionContext } from './m55CopyRoleRegistry';

const KNOWN_R3_DEFECT =
  '付き合っている日常では、終わらせたい気持ちと置いて考えたい気持ちが同時に出やすい。';

function corpusItem(partial: Partial<ContentIntegrityCorpusItem> & Pick<ContentIntegrityCorpusItem, 'semanticText'>): ContentIntegrityCorpusItem {
  return {
    itemId: partial.itemId ?? 'test.item',
    surface: partial.surface ?? 'pair.free.share_card',
    sourceCategory: partial.sourceCategory ?? 'test',
    variantIdentity: partial.variantIdentity ?? 'R3',
    headingLabel: partial.headingLabel ?? 'body',
    semanticText: partial.semanticText,
    sourceOwner: partial.sourceOwner ?? 'test',
    editorial: partial.editorial ?? pairShareRelationshipConclusionContext(),
  };
}

describe('m55EditorialCommercialPolicy', () => {
  test('A: known R3 Pair Share sentence → P1 recipient_misinterpretation_risk', () => {
    const findings = evaluateRelationshipTerminationAmbiguity({
      text: KNOWN_R3_DEFECT,
      surface: 'pair.free.share_card',
      editorial: pairShareRelationshipConclusionContext(),
    });
    assert.equal(findings.length, 1);
    assert.equal(findings[0]?.severity, 'P1');
    assert.equal(findings[0]?.category, 'recipient_misinterpretation_risk');
    assert.equal(findings[0]?.editorialRiskFamily, 'relationship_termination_ambiguity');
    assert.equal(findings[0]?.editorialEnforcement, 'PENDING_PRODUCT_REMEDIATION');
  });

  test('B: explicitly scoped conversation closure → no termination ambiguity', () => {
    const findings = evaluateRelationshipTerminationAmbiguity({
      text: '付き合っている日常では、話を一区切りにして次へ進みたい気持ちと置いて考えたい気持ちが同時に出やすい。',
      surface: 'pair.free.share_card',
      editorial: pairShareRelationshipConclusionContext(),
    });
    assert.equal(findings.length, 0);
  });

  test('C: same lexeme in unrelated safe context → no global ban', () => {
    const findings = evaluateRelationshipTerminationAmbiguity({
      text: '生まれた日をただの日付で終わらせず、自分を見つめ直すための入口として扱います。',
      surface: 'self.free.result',
      editorial: {
        ...pairShareRelationshipConclusionContext(),
        editorialRole: 'result_headline',
        recipient: 'self',
        relationshipContext: 'personal',
        freePaidOwnership: 'free',
      },
    });
    assert.equal(findings.length, 0);
  });

  test('D: mind-reading rule fixture → correct category', () => {
    const findings = evaluateMindReadingRisk({
      text: '相手はもう決めていると思っているように見えやすい。',
      surface: 'pair.free.result',
    });
    assert.ok(findings.length >= 1);
    assert.equal(findings[0]?.category, 'mind_reading_risk');
    assert.equal(findings[0]?.editorialRiskFamily, 'mind_reading');
  });

  test('E: deterministic claim fixture → correct category', () => {
    const findings = evaluateDeterministicClaimRisk({
      text: 'この流れは必ず改善できます。',
      surface: 'self.free.result',
    });
    assert.ok(findings.length >= 1);
    assert.equal(findings[0]?.category, 'deterministic_claim_risk');
    assert.equal(findings[0]?.editorialRiskFamily, 'deterministic_claim');
  });

  test('F: golden fixture contains approved meaning + forbidden interpretation', () => {
    const fixture = goldenFixtureById('pair.share.R3.tempo_mismatch.relationship_conclusion.partner');
    assert.ok(fixture);
    assert.ok(fixture.approvedMeaning.some((m) => m.includes('NOT relationship termination')));
    assert.ok(fixture.forbiddenInterpretations.some((m) => m.includes('breakup')));
    assert.equal(fixture.relationStage, 'R3');
    assert.equal(fixture.interactionId, 'tempo_mismatch');
  });

  test('G: no Human approval generated', () => {
    const findings = evaluateEditorialLanguageRisk(
      corpusItem({ semanticText: KNOWN_R3_DEFECT, variantIdentity: 'R3' }),
    );
    for (const finding of findings) {
      assert.notEqual((finding as { humanApproval?: string }).humanApproval, 'APPROVED');
      assert.notEqual(finding.deterministicEvidence, 'HUMAN_APPROVED');
    }
  });

  test('H: migration enforcement state is explicit', () => {
    assert.equal(
      EDITORIAL_LANGUAGE_RISK_ENFORCEMENT.recipient_misinterpretation_risk,
      'PENDING_PRODUCT_REMEDIATION',
    );
    const findings = evaluateEditorialLanguageRisk(
      corpusItem({ semanticText: KNOWN_R3_DEFECT, variantIdentity: 'R3' }),
    );
    const { enforced, shadowPendingRemediation } = partitionEditorialFindings(findings);
    assert.equal(enforced.length, 0);
    assert.equal(shadowPendingRemediation.length, 1);
    assert.equal(isEditorialFindingEnforced(shadowPendingRemediation[0]!), false);
  });
});
