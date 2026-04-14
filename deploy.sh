#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Cacofonie — Deploy Script → Hostinger
# Einmalig ausführbar machen: chmod +x deploy.sh
# Nutzung: ./deploy.sh
# ─────────────────────────────────────────────────────────────

set -e

FTP_HOST="${FTP_HOST:-}"
FTP_USER="${FTP_USER:-}"
FTP_PASS="${FTP_PASS:-}"
REMOTE_DIR="${REMOTE_DIR:-public_html}"

# Credentials prüfen
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ]; then
  echo ""
  echo "Bitte FTP-Zugangsdaten eingeben (aus Hostinger hPanel):"
  read -p "FTP Host (z.B. ftp.cacofonie.ro): " FTP_HOST
  read -p "FTP Benutzername: " FTP_USER
  read -s -p "FTP Passwort: " FTP_PASS
  echo ""
fi

echo ""
echo "▶ Baue Projekt..."
source ~/.nvm/nvm.sh 2>/dev/null && nvm use 20 --silent 2>/dev/null || true
npm run build

echo ""
echo "▶ Lade hoch nach $FTP_HOST/$REMOTE_DIR ..."

lftp -c "
  set ftp:ssl-allow yes;
  set ssl:verify-certificate no;
  open -u '$FTP_USER','$FTP_PASS' '$FTP_HOST';
  mirror --reverse --delete --verbose --exclude='.git' ./out/ /$REMOTE_DIR/;
  bye
"

echo ""
echo "✅ Deploy abgeschlossen → https://cacofonie.ro"
