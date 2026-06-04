# Audit qualité — Domaine de Dubraud

Audit multi-agents (qualité code, SEO/a11y, UX/design) + corrections appliquées le 2026-06-04.

## Kanban

### ✅ Fait
- **Sécurité** : `ssl/server.key/.crt/.pub` retirés du suivi git + `.gitignore` durci (`ssl/`, `*.key`, `*.crt`, `*.pem`, `.env`)
- **Code mort supprimé** : `pages/Hebergement.jsx`, `components/examples/ColorShowcase.jsx`, `components/ui/NavigationDropdown.jsx`, `logo.svg`, `App.test.js`, `App.css`, `reportWebVitals.js`, images `logo_old.png` / `logo_with_bg.png`
- **Routes** : suppression import + route `/colors` (debug exposée en prod) dans `App.js`
- **Dépendances** : retrait `react-icons` (inutilisé) et `web-vitals` (mort) de `package.json`
- **SEO** : `lang="fr"`, `theme-color` marque, `noscript` en FR, balises Open Graph, JSON-LD `LocalBusiness`, `manifest.json` réécrit, `robots.txt` + `sitemap.xml`
- **Correctness** : lien `tel:` sans espaces, liens sociaux `target/rel`, `useMemo` sur la galerie (effets re-déclenchés), `whileHover` `shadow`→`boxShadow`
- **a11y** : `aria-label` sur tous les boutons-icônes (Hero, galerie, menu mobile), `aria-expanded`/`aria-controls` menu mobile, labels formulaire associés (`htmlFor`/`id`), `<main>` sur chaque page, `prefers-reduced-motion` global (`MotionConfig reducedMotion="user"`)
- **UX** : retour succès/erreur du formulaire, noms de pensions alignés (Contact ↔ page Pensions), bloc commenté mort retiré (`Installations.jsx`)

### ⚠️ À valider par Laurine/le client (données réelles — je n'invente pas)
- **Email** : unifié sur `contact@domaine-dubraud.com` (= domaine de prod défini dans `netlify.toml` ; le Footer en `.fr` divergeait) → confirmer le bon domaine
- **Surface** : unifié sur **45 hectares** (le Hero et la majorité l'utilisaient ; 2 endroits disaient 40) → confirmer la vraie valeur
- **Carte Google Maps** : URL d'intégration avec coordonnées factices → fournir le vrai lien d'intégration (Maps → Partager → Intégrer)
- **Réseaux sociaux** : liens Facebook/Instagram en `#` → fournir les vraies URL (ou masquer)
- **Icônes PWA** : `logo192.png`/`logo512.png` sont encore les icônes Create React App → remplacer par le vrai logo redimensionné

### 📋 Backlog (améliorations non bloquantes)
- Factoriser les cartes quasi-dupliquées (`PensionCard`/`InstallationCard`) en un composant `OfferCard`
- Centraliser les coordonnées de contact dans `src/config/contact.js`
- Cohérence design : ombres/arrondis/polices, couleurs hors palette (`gray`/`slate`/`green-500`)
- Focus-trap dans la modale galerie ; alt descriptifs sur les photos
