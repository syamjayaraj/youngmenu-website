#!/bin/bash
set -e
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
cd "/var/www/apps/youngmenu-website"
echo "[deploy] Pulling latest changes from main..."
git fetch origin main
git reset --hard origin/main
echo "[deploy] Installing dependencies if needed..."
npm install --production=false --legacy-peer-deps
echo "[deploy] Building Next.js application..."
npm run build
echo "[deploy] Restarting PM2 process..."
pm2 restart "youngmenu-website" --update-env
echo "[deploy] youngmenu-website deployed successfully."
