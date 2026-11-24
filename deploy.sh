#!/bin/bash
set -e
if [ -x /usr/local/bin/droplet-deploy.sh ]; then
  exec /usr/local/bin/droplet-deploy.sh "/var/www/apps/youngmenu-website" "main" "youngmenu-website"
fi

export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
cd "/var/www/apps/youngmenu-website"
echo "[deploy] Pulling latest changes from main..."
git fetch origin "main"
git reset --hard "origin/main"
npm ci --include=dev --no-audit --no-fund || npm install --include=dev --no-audit --no-fund
npm run build
pm2 reload "youngmenu-website" --update-env || pm2 restart "youngmenu-website" --update-env
