#!/usr/bin/env bash
# Static export → Cloudflare Pages project "didnthappen-web" (custom domain didnthappen.onarika.net).
# Needs CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID in env (or a logged-in wrangler).
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf out
STATIC_EXPORT=1 npx next build
cp cloudflare/_headers out/_headers
cd cloudflare
npx wrangler pages deploy ../out --project-name didnthappen-web --branch main --commit-dirty=true
