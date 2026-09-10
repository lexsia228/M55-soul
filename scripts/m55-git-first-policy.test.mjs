import test from 'node:test';
import assert from 'node:assert/strict';
import { validateManifest, validateCursorRule, validateWorkflow, classifyChangedPaths } from './m55-git-first-policy.mjs';

const baseManifest = {
  universal: {
    gitFirstRequired: true,
    unknownScopeProfile: 'FULL_REPO_PREFLIGHT',
    requiredReads: [
      'docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md',
      'docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json',
      'docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md',
      'docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md',
    ],
  },
  failClosedToken: 'GIT_PREFLIGHT_INCOMPLETE',
  profiles: {
    CONTINUATION_FAST_PATH: { requiresGitIdentity: true },
    PINNED_REVIEW_PREFLIGHT: { requiresGitIdentity: true, mutationAllowed: false },
    FULL_REPO_PREFLIGHT: { requiresGitIdentity: true, requiresFreshRemoteMain: true, requiresRelevantUnmergedAuthorityCheck: true },
  },
  taskClasses: {
    UIUX_CONTINUATION: { defaultProfile: 'CONTINUATION_FAST_PATH', requiredAuthority: [] },
    PINNED_DIFF_REVIEW: { defaultProfile: 'PINNED_REVIEW_PREFLIGHT', mutationAllowed: false, requiredAuthority: [] },
    CREATOR_REVENUE_DESIGN: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
    LEGAL_TAX_OPERATOR: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
    STRIPE_PROVIDER_MONEY: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
    DB_LEDGER_SECURITY: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
    SSOT_GOVERNANCE: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
    MERGE_SYNC_INTEGRATION: { defaultProfile: 'FULL_REPO_PREFLIGHT', requiredAuthority: [] },
  },
  mandatoryStages: [
    'IDENTIFY_TASK','GIT_FIRST_BASELINE','ROUTE_RELEVANT_AUTHORITY','EXISTING_DECISION_CHECK',
    'PRE_MUTATION_RECHECK_IF_MUTATING','PRE_GREEN_OR_INTEGRATION_RECHECK_WHEN_APPLICABLE',
  ],
  hardTriggerPaths: ['docs/ssot/**','app/api/stripe/**','supabase/**'],
  semanticOwnerPaths: ['lib/m55/contracts/**','app/**/checkout/**','app/**/webhook/**'],
  continuationHandoff: {
    enabled: true,
    requiredFields: ['lane','owner','workspaceOrRef','authorizedTask','candidateSha','mutablePaths','observedAt'],
    newChatMayUseFastWhenValid: true,
    missingOrStaleHandoffDefaultsFull: true,
  },
};
const exists = () => true;
const clone = value => JSON.parse(JSON.stringify(value));

test('baseline manifest passes', () => {
  assert.deepEqual(validateManifest(baseManifest,{fileExists:exists}), []);
});

test('dangerous task class cannot downgrade to FAST', () => {
  const m = clone(baseManifest); m.taskClasses.STRIPE_PROVIDER_MONEY.defaultProfile='CONTINUATION_FAST_PATH';
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('STRIPE_PROVIDER_MONEY')));
});

test('missing mandatory stage fails', () => {
  const m = clone(baseManifest); m.mandatoryStages = m.mandatoryStages.filter(x=>x!=='PRE_MUTATION_RECHECK_IF_MUTATING');
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('PRE_MUTATION_RECHECK_IF_MUTATING')));
});

test('missing authority file fails', () => {
  const m = clone(baseManifest); m.taskClasses.DB_LEDGER_SECURITY.requiredAuthority=['missing.md'];
  assert.ok(validateManifest(m,{fileExists:()=>false}).some(x=>x.includes('missing.md')));
});

test('PINNED mutation cannot be enabled', () => {
  const m = clone(baseManifest); m.profiles.PINNED_REVIEW_PREFLIGHT.mutationAllowed=true;
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('mutationAllowed')));
});

test('continuation handoff must be complete', () => {
  const m = clone(baseManifest); m.continuationHandoff.requiredFields = ['lane'];
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('candidateSha')));
});

test('Cursor alwaysApply false fails', () => {
  const text='---\ndescription: x\nalwaysApply: false\n---\nGIT_PREFLIGHT_INCOMPLETE CONTINUATION_FAST_PATH FULL_REPO_PREFLIGHT';
  assert.ok(validateCursorRule(text,'cursor').some(x=>x.includes('alwaysApply')));
});

test('workflow missing structural verifier fails', () => {
  const workflow='pull_request:\npush:\n  branches:\n    - main\nfetch-depth: 0\nnode --test scripts/m55-git-first-policy.test.mjs\nnode scripts/verify-m55-git-first-diff.mjs';
  assert.ok(validateWorkflow(workflow).some(x=>x.includes('verify-m55-git-first-structure')));
});

test('workflow paths filter fails self-protection rule', () => {
  const workflow='pull_request:\n  paths:\n    - AGENTS.md\npush:\n  branches:\n    - main\nfetch-depth: 0\nnode scripts/verify-m55-git-first-structure.mjs\nnode --test scripts/m55-git-first-policy.test.mjs\nnode scripts/verify-m55-git-first-diff.mjs';
  assert.ok(validateWorkflow(workflow).some(x=>x.includes('paths filter')));
});

test('known hard-trigger changed path requires FULL', () => {
  const result=classifyChangedPaths(['app/api/stripe/route.ts'],baseManifest);
  assert.equal(result.requiresFull,true);
});

test('ordinary UIUX css path does not machine-force FULL', () => {
  const result=classifyChangedPaths(['components/home/Hero.module.css'],baseManifest);
  assert.equal(result.requiresFull,false);
});
