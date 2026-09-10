#!/usr/bin/env node
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { classifyChangedPaths } from './m55-git-first-policy.mjs';

const manifest = JSON.parse(fs.readFileSync('docs/ssot/M55_GIT_PREFLIGHT_MANIFEST.json','utf8'));
const base = process.env.M55_BASE_SHA;
const head = process.env.M55_HEAD_SHA;
const prBody = process.env.M55_PR_BODY ?? '';
const eventName = process.env.M55_EVENT_NAME ?? 'local';

if (!base || !head) {
  console.error('M55_GIT_FIRST_DIFF_VERIFY=FAIL');
  console.error('- M55_BASE_SHA and M55_HEAD_SHA are required');
  process.exit(1);
}

let changed;
try {
  changed = execFileSync('git',['diff','--name-only',`${base}...${head}`],{encoding:'utf8'})
    .split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
} catch (error) {
  console.error('M55_GIT_FIRST_DIFF_VERIFY=FAIL');
  console.error(`- unable to resolve exact diff ${base}...${head}: ${error.message}`);
  process.exit(1);
}

const classification = classifyChangedPaths(changed, manifest);
const marker = prBody.match(/M55_PREFLIGHT_PROFILE:\s*(CONTINUATION_FAST_PATH|PINNED_REVIEW_PREFLIGHT|FULL_REPO_PREFLIGHT)/i)?.[1]?.toUpperCase();

if (classification.requiresFull && eventName === 'pull_request' && marker !== 'FULL_REPO_PREFLIGHT') {
  console.error('M55_GIT_FIRST_DIFF_VERIFY=FAIL');
  console.error('- changed paths require FULL_REPO_PREFLIGHT but PR body does not declare M55_PREFLIGHT_PROFILE: FULL_REPO_PREFLIGHT');
  for (const hit of classification.matched) console.error(`- ${hit.path} <= ${hit.pattern}`);
  process.exit(1);
}

console.log('M55_GIT_FIRST_DIFF_VERIFY=PASS');
console.log(`changed_file_count=${changed.length}`);
console.log(`machine_requires_full=${classification.requiresFull}`);
if (classification.matched.length) console.log(`matched=${JSON.stringify(classification.matched)}`);
console.log('semantic_note=static path classification is not complete semantic proof');
