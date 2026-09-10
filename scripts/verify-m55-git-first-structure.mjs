#!/usr/bin/env node
import fs from 'node:fs';
import { validateManifest, validateCursorRule, validateWorkflow } from './m55-git-first-policy.mjs';

const failures = [];
const required = [
  'AGENTS.md',
  'docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md',
  'docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json',
  'docs/ssot/M55_SCOPE_AWARE_REPO_PREFLIGHT_SSOT.md',
  'docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md',
  'docs/ssot/M55_GIT_FIRST_OPERATIONAL_FIXTURES.md',
  '.cursor/rules/m55-control-tower.mdc',
  '.cursor/rules/m55-scope-aware-repo-preflight.mdc',
  '.github/workflows/m55-git-first-preflight.yml',
  'scripts/m55-git-first-policy.mjs',
  'scripts/m55-git-first-policy.test.mjs',
  'scripts/verify-m55-git-first-diff.mjs',
];
for (const file of required) if (!fs.existsSync(file)) failures.push(`missing required file ${file}`);

if (fs.existsSync('docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json')) {
  try {
    const manifest = JSON.parse(fs.readFileSync('docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json','utf8'));
    failures.push(...validateManifest(manifest));
  } catch (error) {
    failures.push(`manifest parse failed: ${error.message}`);
  }
}
for (const file of ['.cursor/rules/m55-control-tower.mdc','.cursor/rules/m55-scope-aware-repo-preflight.mdc']) {
  if (fs.existsSync(file)) failures.push(...validateCursorRule(fs.readFileSync(file,'utf8'), file));
}
if (fs.existsSync('.github/workflows/m55-git-first-preflight.yml')) {
  failures.push(...validateWorkflow(fs.readFileSync('.github/workflows/m55-git-first-preflight.yml','utf8')));
}

const agents = fs.existsSync('AGENTS.md') ? fs.readFileSync('AGENTS.md','utf8') : '';
for (const ref of ['M55_GIT_FIRST_HARDENING_SSOT.md','M55_GIT_FIRST_OPERATIONAL_FIXTURES.md']) {
  if (!agents.includes(ref)) failures.push(`AGENTS.md missing universal governance reference ${ref}`);
}
if (!agents.includes('CONTINUATION_HANDOFF')) failures.push('AGENTS.md missing CONTINUATION_HANDOFF rule');

if (failures.length) {
  console.error('M55_GIT_FIRST_STRUCTURE_VERIFY=FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('M55_GIT_FIRST_STRUCTURE_VERIFY=PASS');
