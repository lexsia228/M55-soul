#!/usr/bin/env bash
set -euo pipefail

echo "[M55 Guard] Checking Turn 13-C Invariants..."

# 1) .env.local forbidden in git
if git ls-files --error-unmatch .env.local >/dev/null 2>&1; then
  echo "❌ FAIL: .env.local is tracked."
  exit 1
fi

# 2) Wildcard postMessage '*' forbidden
if grep -r "postMessage.*['\"]\*['\"]" hooks src public/legacy/js >/dev/null 2>&1; then
  echo "❌ FAIL: wildcard targetOrigin '*' detected."
  grep -r "postMessage.*['\"]\*['\"]" hooks src public/legacy/js
  exit 1
fi

# 3) soul binder must validate event.origin
if [ -f public/legacy/js/m55_soul_binder.js ]; then
  if ! grep -q "event.origin !== window.location.origin" public/legacy/js/m55_soul_binder.js; then
    echo "❌ FAIL: m55_soul_binder.js missing strict event.origin check."
    exit 1
  fi
fi

# 4) Legacy File Change Allowlist (Strict)
# Only allow changes to specific wiring files in public/legacy
CHANGED_LEGACY=$(git diff --name-only HEAD~1..HEAD -- public/legacy || true)
ALLOWED_REGEX='^(public/legacy/page_chat\.html|public/legacy/js/m55_soul_binder\.js)$'

if [ -n "$CHANGED_LEGACY" ]; then
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    if [[ ! "$f" =~ $ALLOWED_REGEX ]]; then
      echo "❌ FAIL: Unauthorized legacy file changed: $f"
      echo "   Allowed: page_chat.html, m55_soul_binder.js"
      exit 1
    fi
  done <<< "$CHANGED_LEGACY"
fi

echo "✅ PASS: Turn 13-C Regression Guard."
