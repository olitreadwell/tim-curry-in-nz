#!/usr/bin/env bash
# Serves the static export on a throwaway port and curls every route.
set -euo pipefail

PORT="${SMOKE_PORT:-3521}"
BASE="http://localhost:$PORT"

echo "building..."
npm run build >/dev/null

if [ ! -d out ]; then
  echo "FAIL: static export directory 'out' missing"
  exit 1
fi

echo "starting static server on port $PORT..."
python3 -m http.server "$PORT" --directory out >/dev/null 2>&1 &
pid=$!
trap 'kill "$pid" 2>/dev/null || true' EXIT

for _ in $(seq 1 30); do
  if curl -fsS "$BASE/" >/dev/null 2>&1; then
    break
  fi
  sleep 0.25
done

check() {
  local label="$1" expected="$2" actual="$3"
  if [ "$actual" != "$expected" ]; then
    echo "FAIL: $label: got $actual, want $expected"
    exit 1
  fi
  echo "ok: $label"
}

check "homepage status" "200" "$(curl -s -o /dev/null -w '%{http_code}' "$BASE/")"
check "hero image status" "200" "$(curl -s -o /dev/null -w '%{http_code}' "$BASE/images/tim-curry-1978.jpg")"
check "asset status" "200" "$(curl -s -o /dev/null -w '%{http_code}' "$(find out/_next/static -name '*.js' | head -1 | sed 's|^out/|'"$BASE"'/|')")"

echo "smoke: all green"
