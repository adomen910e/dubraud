# Référencement Google — Domaine de Dubraud

Passe SEO du 2026-06-05. Build OK, rendu vérifié dans le navigateur (titres/canonical/JSON-LD uniques par page, 0 doublon, 0 erreur console).

## Kanban

### ✅ Fait (technique, dans le code)
- **Meta par page** via `react-helmet-async` + composant réutilisable [`Seo.jsx`](src/components/seo/Seo.jsx) : `title`, `meta description`, `link canonical`, Open Graph, Twitter Card — uniques sur `/`, `/pensions`, `/installations`, `/contact`
- **Doublons supprimés** : les balises variables ont été retirées d'`index.html` (gérées par Helmet) → 1 seule balise de chaque par page
- **Titles & descriptions optimisés** (marque + localisation + mot-clé, longueur respectée) — voir copy ci-dessous
- **H1 unique et stable par page** (le H1 du Hero changeait à chaque slide → remplacé par un H1 stable `sr-only`, titre animé démoté en `<p>`)
- **Données structurées** : `LocalBusiness` enrichi (type équestre Wikidata, région, `areaServed`, image/logo) + `BreadcrumbList` sur chaque page interne
- **Performance / Core Web Vitals** :
  - Code-splitting des routes (`React.lazy`) → bundle JS initial **132 kB → 79 kB (-40 %)**
  - `loading="lazy"` + `decoding="async"` sur les images sous la ligne de flottaison
  - `fetchPriority="high"` sur l'image LCP du Hero
  - En-têtes de cache `public/_headers` (assets immutables 1 an)
- **`alt` enrichis géolocalisés** sur les images de contenu
- **sitemap.xml** avec `lastmod` + `robots.txt` avec `Sitemap:`

### ⚠️ Décision en attente
- **Compression des images** : `dubraud_2.png` (8,3 Mo !), `dubraud_1.png` (2,8 Mo), `cadre.jpg`, `repos.jpg`… plombent le LCP. Optimisation bloquée par sécurité (action destructive) → à autoriser. Cible : ≤1920px, WebP/JPEG qualité ~72, gain attendu ~80-90 % du poids.

### 📋 À faire par le client / hors-code
- **Google Search Console** : valider la propriété (DNS), soumettre `https://domaine-dubraud.com/sitemap.xml`
- **Google Business Profile** : créer/revendiquer la fiche (catégorie « Pension pour animaux » + « Centre équestre »), NAP identique au site, photos, avis — **levier local n°1**
- **Annuaires** : Equirodi, Chevalannonce (pensions), Gîtes de France / Blaye Tourisme pour les gîtes, PagesJaunes, Bing Places — NAP cohérent partout
- **Confirmer les données** : email `.com`/`.fr`, coordonnées GPS (pour `geo` du schema), vraies URL réseaux sociaux (`sameAs`)
- **Aller plus loin** : page dédiée `/gites` (2e persona touristes), FAQ balisée `FAQPage`, prerendering/SSG si l'on veut des aperçus sociaux par page sans JS (limite intrinsèque d'une SPA CRA)

## Copy SEO appliqué

| Page | Title | H1 |
|---|---|---|
| `/` | Pension pour chevaux en Gironde \| Domaine de Dubraud | Pension et élevage de chevaux en Gironde — Domaine de Dubraud, Saint-Christoly-de-Blaye |
| `/pensions` | Pension chevaux : pré-retraite, sport, box \| Dubraud (33) | Nos pensions pour chevaux : pré-retraite, pré-sport et box-paddock |
| `/installations` | Installations & prairies équestres près de Blaye \| Dubraud | Nos installations : 45 hectares de prairies, box et paddocks |
| `/contact` | Contact & accès – Pension équestre Saint-Christoly \| Dubraud | Contacter le Domaine de Dubraud à Saint-Christoly-de-Blaye |
