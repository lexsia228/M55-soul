#!/usr/bin/env node

import fs from 'node:fs';

const failures = [];
const requiredFiles = [
  'docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md',
  'docs/ssot/M55_GIT_FIRST_MINDMAP.md',
  '.cursor/rules/m55-scope-aware-repo-preflight.mdc',
  'docs/ssot/M55_GIT_FIRST_ENTRYPOINT.md',
  'docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json',
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) failures.push(`missing ${file}`);
}

function requireToken(file, token) {
  if (!fs.existsSync(file)) return;
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(token)) failures.push(`${file} missing ${token}`);
}

const hardening = 'docs/ssot/M55_GIT_FIRST_HARDENING_SSOT.md';
const cursor = '.cursor/rules/m55-scope-aware-repo-preflight.mdc';
const mindmap = 'docs/ssot/M55_GIT_FIRST_MINDMAP.md';

for (const token of [
  'HARD_TRIGGER_FORCES_FULL_PREFLIGHT = TRUE',
  'LANE_LOCK_REQUIRED_BEFORE_MUTATION = TRUE',
  'SUBTASK_BOUNDARY_CONTEXT_REFRESH_REQUIRED = TRUE',
  'CI_FAIL_CLOSED_FOR_GIT_FIRST_GOVERNANCE = TRUE',
  'LANE_STATE_CACHE_NEVER_OVERRIDES_REGISTRY = TRUE',
]) requireToken(hardening, token);

for (const token of [
  'HARD_TRIGGER_FORCES_FULL_PREFLIGHT = TRUE',
  'LANE_LOCK_REQUIRED_BEFORE_MUTATION = TRUE',
  'SUBTASK_BOUNDARY_CONTEXT_REFRESH_REQUIRED = TRUE',
  'docs/ssot/**',
  'app/api/stripe/**',
  'lib/m55/contracts/**',
]) requireToken(cursor, token);

for (const token of [
  'GIT FIRST -- ALWAYS',
  'HARD TRIGGER?',
  'CONTINUATION_FAST_PATH',
  'PINNED_REVIEW_PREFLIGHT',
  'FULL_REPO_PREFLIGHT',
  'LANE LOCK BEFORE MUTATION',
  'CONTEXT REFRESH',
  'MACHINE ENFORCEMENT',
]) requireToken(mindmap, token);

if (failures.length) {
  console.error('M55_GIT_FIRST_HARDENING_VERIFY=FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('M55_GIT_FIRST_HARDENING_VERIFY=PASS');
console.log('hard_trigger_forces_full=true');
console.log('lane_lock_required=true');
console.log('subtask_context_refresh_required=true');
console.log('ci_fail_closed=true');
