/**
 * Editorial copy-role overlay — additive metadata on governed / corpus copy units.
 * Does not replace existing COPY_ROLES in japaneseComprehensionTypes.
 */

export const EDITORIAL_ROLES = [
  'result_headline',
  'relationship_conclusion',
  'supporting_evidence',
  'safety_cue',
  'premium_open_loop',
  'purchase_cta',
  'conversation_cta',
  'share_caption',
  'manual_slot',
  'paid_instruction',
] as const;

export type EditorialRole = (typeof EDITORIAL_ROLES)[number];

export type EditorialAudience = 'public' | 'self' | 'partner' | 'purchaser' | 'internal';

export type EditorialRecipient = 'self' | 'partner' | 'social' | 'none';

export type EditorialRelationshipContext = 'personal' | 'pair' | 'none';

export type EditorialCertaintyLevel = 'observational' | 'hedged' | 'deterministic';

export type EditorialCommercialRole =
  | 'recognition'
  | 'bridge'
  | 'conversion'
  | 'share'
  | 'safety'
  | 'instruction';

export type EditorialFreePaidOwnership = 'free' | 'paid' | 'shared' | 'none';

export type EditorialPublicPrivateLevel = 'public' | 'private' | 'purchaser_only';

/** Machine-readable editorial context attached to corpus / governed units. */
export type EditorialCopyContext = {
  readonly editorialRole: EditorialRole;
  readonly subject: string;
  readonly audience: EditorialAudience;
  readonly recipient: EditorialRecipient;
  readonly relationshipContext: EditorialRelationshipContext;
  readonly certaintyLevel: EditorialCertaintyLevel;
  readonly commercialRole: EditorialCommercialRole;
  readonly freePaidOwnership: EditorialFreePaidOwnership;
  readonly publicPrivateLevel: EditorialPublicPrivateLevel;
};

export function isEditorialRole(value: string): value is EditorialRole {
  return (EDITORIAL_ROLES as readonly string[]).includes(value);
}

/** Pilot metadata for Pair Free share relationship conclusion (body). */
export function pairShareRelationshipConclusionContext(): EditorialCopyContext {
  return {
    editorialRole: 'relationship_conclusion',
    subject: 'between_them',
    audience: 'public',
    recipient: 'partner',
    relationshipContext: 'pair',
    certaintyLevel: 'observational',
    commercialRole: 'share',
    freePaidOwnership: 'free',
    publicPrivateLevel: 'public',
  };
}

/** Pilot metadata for Pair Free share post serialization. */
export function pairShareCaptionContext(): EditorialCopyContext {
  return {
    editorialRole: 'share_caption',
    subject: 'between_them',
    audience: 'public',
    recipient: 'partner',
    relationshipContext: 'pair',
    certaintyLevel: 'observational',
    commercialRole: 'share',
    freePaidOwnership: 'free',
    publicPrivateLevel: 'public',
  };
}
