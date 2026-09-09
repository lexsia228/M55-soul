/**
 * Golden semantic fixtures — freeze meaning patterns, not literal copy snapshots.
 */

import type { EditorialRole } from './m55CopyRoleRegistry';

export type GoldenFixtureStatus = 'human_derived' | 'human_approved_exemplar' | 'candidate';

export type EditorialGoldenFixture = {
  readonly fixtureId: string;
  readonly surface: string;
  readonly relationStage: string;
  readonly interactionId: string;
  readonly editorialRole: EditorialRole;
  readonly recipient: 'partner' | 'self' | 'social' | 'none';
  readonly approvedMeaning: readonly string[];
  readonly forbiddenInterpretations: readonly string[];
  readonly humanApprovedExemplar: boolean;
  readonly status: GoldenFixtureStatus;
};

export const M55_EDITORIAL_GOLDEN_FIXTURES: readonly EditorialGoldenFixture[] = [
  {
    fixtureId: 'pair.share.R3.tempo_mismatch.relationship_conclusion.partner',
    surface: 'pair.free.share_card',
    relationStage: 'R3',
    interactionId: 'tempo_mismatch',
    editorialRole: 'relationship_conclusion',
    recipient: 'partner',
    approvedMeaning: [
      'conversation closure / pacing mismatch between partners',
      'difference in wanting to close a topic vs wanting time to think',
      'NOT relationship termination',
    ],
    forbiddenInterpretations: [
      'wants to end the relationship',
      'breakup intent',
      'rejection intent',
      'partner may read as wanting to separate',
    ],
    humanApprovedExemplar: false,
    status: 'human_derived',
  },
];

export function goldenFixtureById(fixtureId: string): EditorialGoldenFixture | undefined {
  return M55_EDITORIAL_GOLDEN_FIXTURES.find((fixture) => fixture.fixtureId === fixtureId);
}
