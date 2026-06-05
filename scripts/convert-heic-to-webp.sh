#!/usr/bin/env bash
#
# Convertit les fichiers .HEIC/.heic d'un dossier en .webp optimisés pour le web,
# puis supprime les originaux HEIC (non affichables par les navigateurs).
#
# Les navigateurs ne savent PAS afficher le HEIC : il faut convertir les photos
# avant de les utiliser dans la galerie (qui charge les .webp/.jpg/.jpeg/.png).
#
# Prérequis (macOS) :
#   - sips  : natif macOS (décode le HEIC)
#   - cwebp : `brew install webp`
#
# Usage :
#   ./scripts/convert-heic-to-webp.sh [dossier]
#   (par défaut : src/assets/galerie)
#
set -euo pipefail

# Se placer à la racine du projet (le script est dans scripts/)
cd "$(dirname "$0")/.."

GALERIE="${1:-src/assets/galerie}"
MAX_WIDTH=1600   # largeur max en px (les photos plus petites ne sont pas agrandies)
QUALITY=80       # qualité WebP (0-100)

if ! command -v sips >/dev/null 2>&1; then
  echo "Erreur : 'sips' introuvable (macOS requis)." >&2
  exit 1
fi
if ! command -v cwebp >/dev/null 2>&1; then
  echo "Erreur : 'cwebp' introuvable. Installez-le : brew install webp" >&2
  exit 1
fi

shopt -s nullglob nocaseglob   # *.heic matche aussi *.HEIC ; pas d'erreur si aucun fichier

count=0
for f in "$GALERIE"/*.heic; do
  base="$(basename "${f%.*}")"
  out="$GALERIE/$base.webp"
  tmp="$(mktemp -u).jpg"

  # 1) HEIC -> JPEG via sips   2) JPEG -> WebP (redimensionné) via cwebp
  sips -s format jpeg "$f" --out "$tmp" >/dev/null
  cwebp -quiet -q "$QUALITY" -resize "$MAX_WIDTH" 0 "$tmp" -o "$out" >/dev/null

  rm -f "$tmp" "$f"
  echo "✓ $(basename "$f") -> $(basename "$out")"
  count=$((count + 1))
done

if [ "$count" -eq 0 ]; then
  echo "Aucun fichier HEIC trouvé dans '$GALERIE'."
else
  echo "$count fichier(s) HEIC converti(s) en WebP dans '$GALERIE'."
fi
