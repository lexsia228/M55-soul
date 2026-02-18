#!/usr/bin/env bash
set -euo pipefail

echo "[M55 GUARD] Turn 13-C regression guard (v2 range-safe)"

# --- helper: compute diff range ---
# GitHub Actions specific logic to find base commit
if [ "${GITHUB_EVENT_NAME:-}" == "pull_request" ]; then
  BASE_SHA=$(jq -r .pull_request.base.sha "$GITHUB_EVENT_PATH" 2>/dev/null || true)
elif [ "${GITHUB_EVENT_NAME:-}" == "push" ]; then
  BASE_SHA=$(jq -r .before "$GITHUB_EVENT_PATH" 2>/dev/null || true)
else
  BASE_SHA=""
fi

# Fallback if jq fails or local run
if [ -z "${BASE_SHA}" ] || [ "${BASE_SHA}" == "null" ]; then
  BASE_SHA="HEAD~1"
fi

echo "Diff Range: ${BASE_SHA}..HEAD"
CHANGED_FILES=$(git diff --name-only "${BASE_SHA}" HEAD 2>/dev/null || true)

# --- [A] .env.local must not be tracked ---
if git ls-files --error-unmatch .env.local >/dev/null 2>&1; then
  echo "❌ FAIL: .env.local is tracked by git"
  exit 1
fi

# --- [B] postMessage must not use wildcard targetOrigin ---
if echo "$CHANGED_FILES" | grep -q "hooks/useSoulBridge.ts"; then
  if grep "postMessage" hooks/useSoulBridge.ts | grep -E "['\"]\*['\"]"; then
    echo "❌ FAIL: postMessage uses wildcard '*' in hooks/useSoulBridge.ts"
    exit 1
  fi
fi

# --- [C] binder must verify event.origin ---
if echo "$CHANGED_FILES" | grep -q "public/legacy/js/m55_soul_binder.js"; then
  if ! grep -q "event.origin !== window.location.origin" public/legacy/js/m55_soul_binder.js; then
    echo "❌ FAIL: missing event.origin verification in m55_soul_binder.js"
    exit 1
  fi
fi

# --- [D] legacy allowlist ---
# Only allow changes to specific wiring files in public/legacy
LEGACY_CHANGES=$(echo "$CHANGED_FILES" | grep "^public/legacy/" || true)
if [ -n "$LEGACY_CHANGES" ]; then
  # Allowlist: page_chat.html, m55_soul_binder.js
  # Using grep -v to find forbidden files
  FORBIDDEN=$(echo "$LEGACY_CHANGES" | grep -vE "^public/legacy/page_chat\.html$|^public/legacy/js/m55_soul_binder\.js$" || true)

  if [ -n "$FORBIDDEN" ]; then
    echo "❌ FAIL: Unauthorized legacy changes detected:"
    echo "$FORBIDDEN"
    exit 1
  fi
fi

echo "✅ PASS: Turn 13-C regression guard OK"
