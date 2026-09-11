import test from 'node:test';
import assert from 'node:assert/strict';
import { validateManifest, validateCursorRule, validateWorkflow, validateAssetIndexWorkflow, classifyChangedPaths } from './m55-git-first-policy.mjs';

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

const validWorkflow = `name: test
on:
  pull_request:
  push:
    branches:
      - main
jobs:
  verify:
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: legacy
        run: node scripts/verify-m55-git-first-preflight.mjs
      - name: legacy-hardening
        run: node scripts/verify-m55-git-first-hardening.mjs
      - name: structure
        run: node scripts/verify-m55-git-first-structure.mjs
      - name: negative
        run: node --test scripts/m55-git-first-policy.test.mjs
      - name: diff
        run: node scripts/verify-m55-git-first-diff.mjs
`;

const validAssetIndexWorkflow = `name: m55-asset-index
on:
  schedule:
    - cron: '15 21 * * *'
jobs:
  build-index:
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: branch
        run: echo automation/m55-asset-index-1
      - name: push branch
        run: git push origin "$BRANCH"
      - name: create pull request
        run: gh pr create --base main --head "$BRANCH"
`;

test('baseline manifest passes', () => {
  assert.deepEqual(validateManifest(baseManifest,{fileExists:exists}), []);
});

test('dangerous task class cannot downgrade to FAST', () => {
  const m = clone(baseManifest); m.taskClasses.STRIPE_PROVIDER_MONEY.defaultProfile='CONTINUATION_FAST_PATH';
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('STRIPE_PROVIDER_MONEY')));
});

test('hardening universal read cannot be removed', () => {
  const m = clone(baseManifest); m.universal.requiredReads = m.universal.requiredReads.filter(x=>!x.includes('HARDENING'));
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('HARDENING')));
});

test('missing mandatory stage fails', () => {
  const m = clone(baseManifest); m.mandatoryStages = m.mandatoryStages.filter(x=>x!=='PRE_MUTATION_RECHECK_IF_MUTATING');
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('PRE_MUTATION_RECHECK_IF_MUTATING')));
});

test('missing local authority file fails', () => {
  const m = clone(baseManifest); m.taskClasses.DB_LEDGER_SECURITY.requiredAuthority=['missing.md'];
  assert.ok(validateManifest(m,{fileExists:()=>false}).some(x=>x.includes('missing.md')));
});

test('well-formed unmerged authority need not exist in current checkout', () => {
  const m = clone(baseManifest);
  m.taskClasses.LEGAL_TAX_OPERATOR.checkRelevantOpenPrOrStackedBranch = true;
  m.taskClasses.LEGAL_TAX_OPERATOR.requiredUnmergedAuthority = [{path:'docs/ssot/future.md',discoveryHint:'fresh open PR search'}];
  assert.deepEqual(validateManifest(m,{fileExists:()=>false}), []);
});

test('unmerged authority requires fresh-discovery contract', () => {
  const m = clone(baseManifest);
  m.taskClasses.LEGAL_TAX_OPERATOR.requiredUnmergedAuthority = [{path:'docs/ssot/future.md',discoveryHint:'fresh open PR search'}];
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('checkRelevantOpenPrOrStackedBranch')));
});

test('unmerged authority requires path and discovery hint', () => {
  const m = clone(baseManifest);
  m.taskClasses.LEGAL_TAX_OPERATOR.checkRelevantOpenPrOrStackedBranch = true;
  m.taskClasses.LEGAL_TAX_OPERATOR.requiredUnmergedAuthority = [{path:'docs/ssot/future.md'}];
  assert.ok(validateManifest(m,{fileExists:exists}).some(x=>x.includes('discoveryHint')));
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

test('valid workflow passes structural validator', () => {
  assert.deepEqual(validateWorkflow(validWorkflow), []);
});

test('workflow missing structural verifier fails', () => {
  const workflow = validWorkflow.replace('        run: node scripts/verify-m55-git-first-structure.mjs\n','');
  assert.ok(validateWorkflow(workflow).some(x=>x.includes('verify-m55-git-first-structure')));
});

test('commented-out workflow command does not count', () => {
  const workflow = validWorkflow.replace('        run: node scripts/verify-m55-git-first-structure.mjs','        # run: node scripts/verify-m55-git-first-structure.mjs');
  assert.ok(validateWorkflow(workflow).some(x=>x.includes('verify-m55-git-first-structure')));
});

test('workflow paths filter fails self-protection rule', () => {
  const workflow = validWorkflow.replace('  pull_request:\n','  pull_request:\n    paths:\n      - AGENTS.md\n');
  assert.ok(validateWorkflow(workflow).some(x=>x.includes('paths filter')));
});

test('asset-index PR routing baseline passes', () => {
  assert.deepEqual(validateAssetIndexWorkflow(validAssetIndexWorkflow), []);
});

test('asset-index direct main push fails', () => {
  const workflow = `${validAssetIndexWorkflow}\n      - name: unsafe\n        run: git push origin main\n`;
  assert.ok(validateAssetIndexWorkflow(workflow).some(x=>x.includes('directly to main')));
});

test('asset-index swallowed push failure fails', () => {
  const workflow = validAssetIndexWorkflow.replace('git push origin "$BRANCH"','git push || true');
  assert.ok(validateAssetIndexWorkflow(workflow).some(x=>x.includes('swallow push failures')));
});

test('asset-index auto-merge fails', () => {
  const workflow = `${validAssetIndexWorkflow}\n      - name: unsafe merge\n        run: gh pr merge --merge\n`;
  assert.ok(validateAssetIndexWorkflow(workflow).some(x=>x.includes('auto-merge')));
});

test('asset-index auto-approve fails', () => {
  const workflow = `${validAssetIndexWorkflow}\n      - name: unsafe approve\n        run: gh pr review --approve\n`;
  assert.ok(validateAssetIndexWorkflow(workflow).some(x=>x.includes('auto-approve')));
});

test('known hard-trigger changed path requires FULL', () => {
  const result=classifyChangedPaths(['app/api/stripe/route.ts'],baseManifest);
  assert.equal(result.requiresFull,true);
});

test('known semantic-owner path requires FULL', () => {
  const result=classifyChangedPaths(['app/foo/checkout/action.ts'],baseManifest);
  assert.equal(result.requiresFull,true);
});

test('ordinary UIUX css path does not machine-force FULL', () => {
  const result=classifyChangedPaths(['components/home/Hero.module.css'],baseManifest);
  assert.equal(result.requiresFull,false);
});
