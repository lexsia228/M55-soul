import fs from 'node:fs';

export const REQUIRED_PROFILES = [
  'CONTINUATION_FAST_PATH',
  'PINNED_REVIEW_PREFLIGHT',
  'FULL_REPO_PREFLIGHT',
];

export const DANGEROUS_FULL_TASK_CLASSES = [
  'CREATOR_REVENUE_DESIGN',
  'LEGAL_TAX_OPERATOR',
  'STRIPE_PROVIDER_MONEY',
  'DB_LEDGER_SECURITY',
  'SSOT_GOVERNANCE',
  'MERGE_SYNC_INTEGRATION',
];

export const REQUIRED_MANDATORY_STAGES = [
  'IDENTIFY_TASK',
  'GIT_FIRST_BASELINE',
  'ROUTE_RELEVANT_AUTHORITY',
  'EXISTING_DECISION_CHECK',
  'PRE_MUTATION_RECHECK_IF_MUTATING',
  'PRE_GREEN_OR_INTEGRATION_RECHECK_WHEN_APPLICABLE',
];

export const REQUIRED_UNIVERSAL_READS = [
  'docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md',
  'docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json',
  'docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md',
  'docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md',
];

export const REQUIRED_WORKFLOW_COMMANDS = [
  'node scripts/verify-m55-git-first-preflight.mjs',
  'node scripts/verify-m55-git-first-hardening.mjs',
  'node scripts/verify-m55-git-first-structure.mjs',
  'node --test scripts/m55-git-first-policy.test.mjs',
  'node scripts/verify-m55-git-first-diff.mjs',
];

export function validateManifest(manifest, { fileExists = fs.existsSync } = {}) {
  const failures = [];
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    return ['manifest must be a JSON object'];
  }
  if (manifest?.universal?.gitFirstRequired !== true) failures.push('universal.gitFirstRequired must be true');
  if (manifest?.failClosedToken !== 'GIT_PREFLIGHT_INCOMPLETE') failures.push('failClosedToken mismatch');
  if (manifest?.universal?.unknownScopeProfile !== 'FULL_REPO_PREFLIGHT') failures.push('unknownScopeProfile must be FULL_REPO_PREFLIGHT');

  for (const read of REQUIRED_UNIVERSAL_READS) {
    if (!manifest?.universal?.requiredReads?.includes(read)) failures.push(`universal.requiredReads missing ${read}`);
  }

  for (const profile of REQUIRED_PROFILES) {
    if (!manifest?.profiles?.[profile]) failures.push(`missing profile ${profile}`);
    if (manifest?.profiles?.[profile]?.requiresGitIdentity !== true) failures.push(`${profile}.requiresGitIdentity must be true`);
  }
  if (manifest?.profiles?.PINNED_REVIEW_PREFLIGHT?.mutationAllowed !== false) failures.push('PINNED_REVIEW_PREFLIGHT.mutationAllowed must be false');
  if (manifest?.profiles?.FULL_REPO_PREFLIGHT?.requiresFreshRemoteMain !== true) failures.push('FULL_REPO_PREFLIGHT.requiresFreshRemoteMain must be true');
  if (manifest?.profiles?.FULL_REPO_PREFLIGHT?.requiresRelevantUnmergedAuthorityCheck !== true) failures.push('FULL_REPO_PREFLIGHT.requiresRelevantUnmergedAuthorityCheck must be true');

  for (const stage of REQUIRED_MANDATORY_STAGES) {
    if (!manifest?.mandatoryStages?.includes(stage)) failures.push(`mandatoryStages missing ${stage}`);
  }

  if (manifest?.taskClasses?.UIUX_CONTINUATION?.defaultProfile !== 'CONTINUATION_FAST_PATH') {
    failures.push('UIUX_CONTINUATION must default to CONTINUATION_FAST_PATH');
  }
  if (manifest?.taskClasses?.PINNED_DIFF_REVIEW?.defaultProfile !== 'PINNED_REVIEW_PREFLIGHT') {
    failures.push('PINNED_DIFF_REVIEW must default to PINNED_REVIEW_PREFLIGHT');
  }
  if (manifest?.taskClasses?.PINNED_DIFF_REVIEW?.mutationAllowed !== false) failures.push('PINNED_DIFF_REVIEW.mutationAllowed must be false');
  for (const taskClass of DANGEROUS_FULL_TASK_CLASSES) {
    if (manifest?.taskClasses?.[taskClass]?.defaultProfile !== 'FULL_REPO_PREFLIGHT') {
      failures.push(`${taskClass} must default to FULL_REPO_PREFLIGHT`);
    }
  }

  for (const [taskClass, config] of Object.entries(manifest?.taskClasses ?? {})) {
    if (Array.isArray(config.requiredAuthority)) {
      for (const rel of config.requiredAuthority) {
        if (typeof rel !== 'string' || !rel.trim()) failures.push(`${taskClass}.requiredAuthority contains invalid path`);
        else if (!fileExists(rel)) failures.push(`${taskClass}.requiredAuthority missing file ${rel}`);
      }
    }
    if (config.requiredUnmergedAuthority !== undefined) {
      if (config.checkRelevantOpenPrOrStackedBranch !== true) {
        failures.push(`${taskClass}.requiredUnmergedAuthority requires checkRelevantOpenPrOrStackedBranch=true`);
      }
      if (!Array.isArray(config.requiredUnmergedAuthority) || config.requiredUnmergedAuthority.length === 0) {
        failures.push(`${taskClass}.requiredUnmergedAuthority must be a non-empty array`);
      } else {
        for (const item of config.requiredUnmergedAuthority) {
          if (!item || typeof item !== 'object' || Array.isArray(item)) {
            failures.push(`${taskClass}.requiredUnmergedAuthority contains invalid entry`);
            continue;
          }
          if (typeof item.path !== 'string' || !item.path.trim()) failures.push(`${taskClass}.requiredUnmergedAuthority entry missing path`);
          if (typeof item.discoveryHint !== 'string' || !item.discoveryHint.trim()) failures.push(`${taskClass}.requiredUnmergedAuthority entry missing discoveryHint`);
        }
      }
    }
  }

  if (!Array.isArray(manifest?.hardTriggerPaths) || manifest.hardTriggerPaths.length === 0) failures.push('hardTriggerPaths must be non-empty');
  if (!Array.isArray(manifest?.semanticOwnerPaths) || manifest.semanticOwnerPaths.length === 0) failures.push('semanticOwnerPaths must be non-empty');

  const handoff = manifest?.continuationHandoff;
  if (!handoff || handoff.enabled !== true) failures.push('continuationHandoff.enabled must be true');
  for (const key of ['lane','owner','workspaceOrRef','authorizedTask','candidateSha','mutablePaths','observedAt']) {
    if (!handoff?.requiredFields?.includes(key)) failures.push(`continuationHandoff.requiredFields missing ${key}`);
  }
  if (handoff?.newChatMayUseFastWhenValid !== true) failures.push('continuationHandoff.newChatMayUseFastWhenValid must be true');
  if (handoff?.missingOrStaleHandoffDefaultsFull !== true) failures.push('continuationHandoff.missingOrStaleHandoffDefaultsFull must be true');

  return failures;
}

export function validateCursorRule(text, label) {
  const failures = [];
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) failures.push(`${label} missing frontmatter`);
  else if (!/^alwaysApply:\s*true\s*$/m.test(frontmatter[1])) failures.push(`${label} alwaysApply must be true`);
  for (const token of ['GIT_PREFLIGHT_INCOMPLETE','CONTINUATION_FAST_PATH','FULL_REPO_PREFLIGHT']) {
    if (!text.includes(token)) failures.push(`${label} missing ${token}`);
  }
  return failures;
}

export function validateWorkflow(text) {
  const failures = [];
  const activeLines = text.split(/\r?\n/).filter(line => !/^\s*#/.test(line));
  const active = activeLines.join('\n');

  if (!/^on:\s*$/m.test(active)) failures.push('workflow missing active on: block');
  if (!/^\s{2}pull_request:\s*$/m.test(active)) failures.push('workflow missing active pull_request trigger');
  if (!/^\s{2}push:\s*$/m.test(active)) failures.push('workflow missing active push trigger');
  if (!/^\s{6}- main\s*$/m.test(active)) failures.push('workflow push trigger must include main');
  if (!/^\s{6}- uses:\s*actions\/checkout@v4\s*$/m.test(active)) failures.push('workflow must use actions/checkout@v4');
  if (!/^\s{10}fetch-depth:\s*0\s*$/m.test(active)) failures.push('workflow checkout must use fetch-depth: 0');

  for (const command of REQUIRED_WORKFLOW_COMMANDS) {
    const escaped = command.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!new RegExp(`^\\s{8}run:\\s*${escaped}\\s*$`, 'm').test(active)) {
      failures.push(`workflow missing active command: ${command}`);
    }
  }

  if (/^\s+paths:\s*$/m.test(active)) failures.push('workflow must not use a paths filter; Git-first self-protection must run on every PR');
  return failures;
}

export function validateAssetIndexWorkflow(text) {
  const failures = [];
  const activeLines = text.split(/\r?\n/).filter(line => !/^\s*#/.test(line));
  const active = activeLines.join('\n');

  if (!/^\s{6}contents:\s*write\s*$/m.test(active)) failures.push('asset-index workflow must scope contents: write to its job');
  if (!/^\s{6}pull-requests:\s*write\s*$/m.test(active)) failures.push('asset-index workflow must scope pull-requests: write to its job');
  if (!/gh pr create/.test(active)) failures.push('asset-index workflow must create a pull request');
  if (!/--base main/.test(active)) failures.push('asset-index pull request must target main');
  if (!/automation\/m55-asset-index-/.test(active)) failures.push('asset-index workflow must use the dedicated automation branch family');
  if (/git push(?:\s+origin)?\s+main(?:\s|$)/m.test(active)) failures.push('asset-index workflow must not push directly to main');
  if (/git push\s*\|\|\s*true/.test(active)) failures.push('asset-index workflow must not swallow push failures');
  if (/gh pr merge/.test(active)) failures.push('asset-index workflow must not auto-merge its pull request');
  if (/gh pr review[^\n]*--approve/.test(active)) failures.push('asset-index workflow must not auto-approve its pull request');

  return failures;
}

function globToRegExp(glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '___DOUBLE___')
    .replace(/\*/g, '[^/]*')
    .replace(/___DOUBLE___/g, '.*');
  return new RegExp(`^${escaped}$`);
}

export function pathMatches(path, pattern) {
  return globToRegExp(pattern).test(path);
}

export function classifyChangedPaths(paths, manifest) {
  const matched = [];
  for (const path of paths) {
    for (const pattern of [...(manifest?.hardTriggerPaths ?? []), ...(manifest?.semanticOwnerPaths ?? [])]) {
      if (pathMatches(path, pattern)) matched.push({ path, pattern });
    }
  }
  return { requiresFull: matched.length > 0, matched };
}
