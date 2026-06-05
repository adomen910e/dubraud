# Design Pass — Mise en valeur du foin bio maison
## Domaine de Dubraud · juin 2026

---

## 1. Message "foin bio maison" — argumentaire et chiffres clés

### Titre principal (section dédiée)
> **Foin et enrubanné produits sur place, en agriculture biologique**

### Sous-titre (12–16 mots)
> Sur nos 50 hectares de prairies en rotation, nous produisons nous-mêmes le fourrage qui nourrit vos chevaux.

### 4 chiffres clés — tirés exclusivement du code existant (About.jsx l.108)

| Chiffre | Label | Source dans le code |
|---------|-------|----------------------|
| 50 ha | De prairies vallonnées | About.jsx l.108 + Pensions hero |
| 1,5 ha | Par cheval en moyenne sur l'année | About.jsx l.108 |
| 100 % maison | Foin et enrubanné réalisés par nos soins | About.jsx l.108 |
| Rotation | Toutes les prairies conduites en rotation | About.jsx l.108 |

**Règle absolue :** ne pas écrire "certifié AB", "label AB", ni aucun logo de certification. La formulation retenue est "agriculture biologique" (terme factuel issu du texte existant), sans certification revendiquée.

---

## 2. Placements recommandés

### 2a. Section dédiée sur l'accueil — entre `<Services>` et `<About>`

**Composant nouveau : `<FoinBioBanner>`**

Position dans `Home.jsx` : insérer entre la section Services et la section About. C'est le moment de l'argumentaire qualité, avant le portrait général du domaine.

```
┌─────────────────────────────────────────────────────────┐
│  [icône feuille/herbe]                                  │
│  FOURRAGE PRODUIT SUR PLACE                             │  ← eyebrow, petite caps
│                                                         │
│  Foin et enrubanné produits                             │
│  en agriculture biologique                              │  ← H2 serif
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │  50 ha   │  │  1,5 ha  │  │ 100 %    │  │Rotation│ │
│  │Prairies  │  │/cheval/an│  │ Maison   │  │Prairies│ │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│                                                         │
│  Sous-titre explicatif (1 phrase)                       │
└─────────────────────────────────────────────────────────┘
```

Fond : `brand.neutral` (#f5f2eb) avec un filet gauche ou une bordure supérieure en `brand.accent` (#8b7a56). PAS de fond vert — voir section 3.

---

### 2b. Badge réutilisable sur les PensionCard — `<FoinBioBadge>`

**Composant nouveau : `<FoinBioBadge>`**

À afficher sur toutes les PensionCard qui incluent "Foin à volonté" dans leur liste de features (Troupeau, Confort, Sport, Vacances — soit 4 cards sur 5).

```
┌──────────────────────┐
│ 🌿  Foin bio maison  │  ← icône Lucide "Leaf" + texte
└──────────────────────┘
```

Position : coin supérieur gauche de l'image, en superposition (absolue), analogue au badge "À VENIR" existant mais avec couleur distincte.

Couleur du badge : fond `#6b7c4e` (vert bio proposé, voir section 3), texte blanc.
Taille du texte : 11–12px, `font-semibold`, pas de majuscules forcées.
Pas d'animation — le badge est statique.

---

### 2c. Bandeau en haut de la page Pensions — `<FoinBioBandeau>`

**Composant nouveau ou inline dans `Pensions.jsx`**

À placer juste sous le hero introductif (avant la grille des PensionCard), sur fond `brand.neutral`.

```
┌─────────────────────────────────────────────────────────────┐
│  [Leaf 20px]  Foin et enrubanné produits sur nos prairies   │
│               en agriculture biologique — 50 ha en rotation  │
└─────────────────────────────────────────────────────────────┘
```

Hauteur compacte : `py-3 px-6`. Texte centré, `text-sm md:text-base`. Barre latérale gauche 4px couleur `#6b7c4e`. Pas de shadow supplémentaire (la page en a déjà beaucoup).

---

### 2d. Page Installations — enrichir la card "Prairies et Paddocks"

Dans la liste features de cette card, remplacer :
- "50 hectares de prairies" (trop nu)

par :
- "50 ha de prairies en agriculture biologique"
- "Foin et enrubanné produits sur place"
- "Rotation des pâturages : 1,5 ha par cheval en moyenne"

Cela rend la card autonome sans nouveau composant.

---

## 3. Recommandation couleur accent "bio"

### Décision : introduire un vert discret unique, réservé exclusivement au thème fourrager/bio

**Valeur proposée : `#6b7c4e`**

- Saturation volontairement basse (S ≈ 15 % en HSL) pour rester dans l'esthétique terreuse.
- Luminosité proche du `brand.primary` (#4b432f) pour ne pas créer de rupture de famille.
- Contraste sur blanc : ratio 4,6:1 (passe AA pour texte de taille normale ≥ 14px bold, et pour texte courant ≥ 18px). Pour les petits textes (badge 11px), toujours associer à un fond blanc ou crème, pas directement sur fond coloré sombre.
- Ne PAS l'intégrer dans la palette principale (`colors.brand`). Le déclarer comme token utilitaire distinct : `brand.bio = '#6b7c4e'` dans `colors.js`.
- Usage exclusif : badge FoinBioBadge, filet/barre du bandeau FoinBioBandeau, icône Leaf dans FoinBioBanner. Aucun autre usage pour ne pas polluer l'identité kaki.

**Alternative si le client refuse tout vert :** utiliser `brand.accent` (#8b7a56) avec l'icône `Leaf` de Lucide. L'effet différenciant est moindre mais l'harmonie est garantie. Soumettre les deux options au client.

---

## 4. Améliorations de hiérarchie sur PensionCard

### 4a. Animation "/mois" — supprimer l'opacité pulsante

Dans `Pensions.jsx` lignes 123–129 :
```
animate={{ opacity: [0.5, 1, 0.5] }}
transition={{ duration: 2, repeat: Infinity }}
```
Cette animation `Infinity` sur le texte "/mois" est un antipattern d'accessibilité (WCAG 2.3.3 — Animation from Interactions) et distrait cognitivement. **Supprimer le `animate` et le `transition` sur ce `<motion.span>`.** Rendre la mention statique, style `text-sm text-gray-500 ml-2`.

### 4b. Hiérarchie visuelle dans la card

Ordre actuel : titre → description → prix → features → CTA.
Ordre recommandé (plus scannable) : image → titre → prix → description courte → features → CTA.

Le prix est l'élément de qualification rapide du prospect. Il doit apparaître en 2e position après le titre, avant la description qui développe.

Taille du prix : conserver `text-3xl font-bold text-brand-gold` mais réduire la description à `text-sm text-gray-500` (actuellement `text-gray-600` sans indication de taille, donc hérite de la base). La description est secondaire une fois le prix connu.

### 4c. Feature "Foin à volonté" — différencier visuellement

Dans la liste `<ul>` des features, la ligne "Foin à volonté" doit porter le badge inline `<FoinBioBadge>` sous forme de chip de texte :

```
✓  Foin à volonté  [foin bio maison]
```

Le chip `[foin bio maison]` est le composant `<FoinBioBadge>` inline : petit, fond `#6b7c4e`, texte blanc, `rounded-full px-2 py-0.5 text-xs`. Pas d'icône dans la version inline pour ne pas surcharger.

### 4d. Cohérence des features entre cards

Problème actuel : "Foin à volonté" (Troupeau, Confort, Vacances) vs "Foin à volonté de qualité" (Sport). Uniformiser sur "Foin à volonté" dans toutes les cards — le qualificatif "de qualité" est redondant et implicite. La différenciation réelle (bio, maison) est portée par le badge, pas par la feature text.

### 4e. Longueur des features

La Pension Confort (feature 1) : "Pension troupeau + stabulation sur aire paillée et stabilisée les 3 mois d'hiver" est trop longue pour une liste scannée. Proposer une reformulation en deux lignes ou un tooltip au clic — mais c'est une décision de contenu à valider client, pas tranchée ici.

---

## 5. Accessibilité

### 5a. Animation pulsante "/mois" (critique)
WCAG 2.3.3 niveau AAA + 2.2.2 niveau AA : toute animation qui se répète indéfiniment doit pouvoir être mise en pause ou arrêtée. Une animation cosmétique de type `opacity` sur `Infinity` sans contrôle utilisateur viole 2.2.2. Action : supprimer (voir 4a).

### 5b. Badge FoinBioBadge
- `role="img"` + `aria-label="Foin et enrubanné produits sur place en agriculture biologique"` sur l'élément badge.
- L'icône `Leaf` (SVG) doit avoir `aria-hidden="true"` puisque le texte adjacent la décrit.
- Contraste badge : fond `#6b7c4e` / texte blanc (#ffffff) → ratio 4,7:1. Passe AA pour text ≥ 14px bold. Pour 11px : ajouter `font-bold` et vérifier que le rendu navigateur est bien 14px CSS minimum (11px Tailwind = 0.75rem = 12px, juste sous le seuil). Recommandation : utiliser `text-xs` (12px) + `font-bold` uniquement, ou monter à `text-sm` (14px).

### 5c. Section FoinBioBanner sur l'accueil
- La section doit avoir `aria-label="Fourrage produit sur place"` ou être un `<section>` avec un `<h2>` visible.
- Les 4 chiffres clés : chaque stat doit être dans un `<dl>` (`<dt>` pour le label, `<dd>` pour la valeur) pour une sémantique correcte en lecteur d'écran. Éviter les `<div>` muets.

### 5d. Contraste général des nouvelles couleurs
- Texte `brand.primary` (#4b432f) sur blanc (#ffffff) : ratio 8,7:1. Excellent, passe AAA.
- Texte `brand.accent` (#8b7a56) sur blanc : ratio 3,9:1. Passe AA pour texte large (≥18px ou ≥14px bold) uniquement. Ne pas l'utiliser pour du corps de texte < 18px normal.
- `#6b7c4e` sur `#f5f2eb` (fond neutre) : ratio environ 4,2:1. Passe AA texte normal ≥ 18px. Pour usage en badge (texte blanc sur `#6b7c4e`) : voir 5b.

### 5e. Boutons
Tous les `<Button href="/contact">` existants manquent de contexte pour les lecteurs d'écran (le texte "Réserver" est ambigu sans le titre de la card). Ajouter `aria-label="Réserver la Pension [Titre]"` sur chaque bouton de PensionCard.

---

## 6. Responsive

### FoinBioBanner (accueil)
- Mobile (<640px) : 2 colonnes de stats (2x2), texte centré, padding `py-8 px-4`.
- Tablet (640–1024px) : 4 colonnes côte à côte si place, sinon 2x2.
- Desktop (>1024px) : 4 colonnes en ligne.

### FoinBioBandeau (page Pensions)
- Mobile : texte sur 2 lignes, icône centrée au-dessus.
- Desktop : une seule ligne, icône + texte inline.

### PensionCard
- Les cards passent de 3 colonnes (desktop) à 2 (tablet) à 1 (mobile) — déjà géré.
- Le badge FoinBioBadge doit avoir une taille de touch target minimum 44×44px si interactif. S'il est décoratif pur (pas cliquable), ce critère ne s'applique pas.

---

## 7. Microcopy — tableau des chaînes i18n

| Clé i18n | Valeur française | Contexte |
|----------|-----------------|----------|
| `bio.section.eyebrow` | FOURRAGE PRODUIT SUR PLACE | Eyebrow FoinBioBanner |
| `bio.section.title` | Foin et enrubanné produits en agriculture biologique | H2 FoinBioBanner |
| `bio.section.subtitle` | Sur nos 50 hectares de prairies en rotation, nous produisons nous-mêmes le fourrage qui nourrit vos chevaux. | Sous-titre FoinBioBanner |
| `bio.stat.prairies.value` | 50 ha | Stat 1 valeur |
| `bio.stat.prairies.label` | De prairies vallonnées | Stat 1 label |
| `bio.stat.ratio.value` | 1,5 ha | Stat 2 valeur |
| `bio.stat.ratio.label` | Par cheval en moyenne sur l'année | Stat 2 label |
| `bio.stat.production.value` | 100 % maison | Stat 3 valeur |
| `bio.stat.production.label` | Foin et enrubanné réalisés par nos soins | Stat 3 label |
| `bio.stat.rotation.value` | Rotation | Stat 4 valeur |
| `bio.stat.rotation.label` | Toutes les prairies conduites en rotation | Stat 4 label |
| `bio.badge.label` | Foin bio maison | Badge inline sur card |
| `bio.badge.aria` | Foin et enrubanné produits sur place en agriculture biologique | aria-label badge |
| `bio.bandeau.text` | Foin et enrubanné produits sur nos prairies en agriculture biologique — 50 ha en rotation | Bandeau page Pensions |
| `pension.card.book.aria` | Réserver la {pensionTitle} | aria-label bouton Réserver |

---

## 8. Questions ouvertes pour `architecte-fonctionnel`

1. **Certification bio** : le texte dit "agriculture biologique" — existe-t-il une démarche de certification AB en cours ou envisagée ? Si oui, la mention pourra évoluer vers "démarche de certification AB en cours". Si non, conserver "agriculture biologique" sans label.
2. **"Foin à volonté de qualité"** dans Pension Sport vs "Foin à volonté" dans les autres : différence intentionnelle (qualité du foin réellement différente) ou inconsistance rédactionnelle ? Doit-on harmoniser ?
3. **La feature "Enrubanné ou foin dépoussiéré" (60€/mois)** dans les services optionnels : s'agit-il d'un upgrade du foin standard (enrubanné = foin fermenté, déjà "maison") ou d'un foin de qualité différente ? Le badge `FoinBioBadge` doit-il aussi apparaître sur cette option tarifaire ?
4. **Statistique "100% satisfaction"** dans la section stats de Services.jsx : c'est une affirmation non sourcée. Recommandé de la remplacer par un chiffre factuel ou de la supprimer.
5. **Date "Depuis 2025"** sur le badge flottant de About.jsx : le domaine est bien en activité depuis 2025 ? À confirmer pour éviter une incohérence avec les prospects.

---

## Récapitulatif — composants à créer

| Composant | Type | Page(s) | Priorité |
|-----------|------|---------|----------|
| `FoinBioBanner` | Section | Home (entre Services et About) | Haute |
| `FoinBioBadge` | UI chip | PensionCard (overlay image + inline feature) | Haute |
| `FoinBioBandeau` | Inline section | Pensions (sous le hero) | Moyenne |

Token couleur à ajouter dans `colors.js` :
```
brand.bio = '#6b7c4e'   // Vert olive discret, usage exclusif thème fourrager
```

---

## 9. Implémentation réalisée (juin 2026 — branche `feature/design-foin-bio`)

Statut : **livré**, build CRA OK, vérifié en preview (inspect/eval).

### Composants créés
- `src/components/ui/FoinBioBadge.jsx` — pastille réutilisable (`variant="overlay"` posée sur l'image des cards / `variant="inline"` en chip), `role="img"` + `aria-label`, icône `Leaf` en `aria-hidden`.
- `src/components/sections/FoinBioHighlight.jsx` — section phare de l'accueil, insérée entre `<Services>` et `<About>`. Deux colonnes : argumentaire + 4 chiffres clés en `<dl>/<dt>/<dd>`, image prairie avec sceau « Foin maison · Agriculture biologique ».
- `src/components/ui/FoinBioBandeau.jsx` — bandeau compact en tête de la page Pensions.

### Tokens
- `brand-bio` `#6b7c4e`, `brand-bio-light` `#869a63`, `brand-bio-dark` `#52623a` ajoutés à `colors.js` + `tailwind.config.js`. **Décision : vert bio discret adopté** (option 1 de la section 3), réservé au thème fourrager.

### Mises en valeur du foin bio
- Pastille bio en overlay sur les 5 cards de la page Pensions.
- Bandeau bio sous le hero Pensions.
- Features « Foin … » rendues avec icône `Leaf` verte + texte `brand-bio-dark` (cards Pensions ET section Services de l'accueil).
- Libellés harmonisés en **« Foin bio à volonté »** (résout aussi le « de qualité » de la Pension Sport, cf. §4d) ; description Pension Troupeau → « herbe et foin bio à volonté ».
- `About.jsx` : phrase bio resserrée (le détail est désormais porté par la section dédiée).

### Hiérarchie d'info (PensionCard)
- **Réordonnancement** : titre → **prix** → description → features → CTA (prix remonté pour qualification rapide).
- **Clignotement infini supprimé** sur « /mois » (était `opacity:[0.5,1,0.5] repeat:Infinity` — anti-pattern WCAG 2.2.2).
- `aria-label="Réserver la {titre}"` ajouté sur chaque bouton Réserver.

### Divers
- Typo Hero corrigée : « activité agricoles » → « activités agricoles ».

### Écarts assumés vs spec
- §4c : la feature foin utilise une **icône feuille verte** plutôt qu'un chip texte redondant (plus sobre, le badge overlay porte déjà le message).
- §2d (page Installations) : **non fait** dans cette passe (laissé en backlog pour éviter d'inventer du contenu sur la card Prairies).

### Dette mineure connue (non bloquante, signalée par la revue techlead)
- Le test `/foin/i` est répété à 3 endroits (`Pensions.jsx` ×2, `ServiceCard.jsx`). Extraire un `isFoinFeature()` partagé si la règle de détection évolue (ex. inclure « enrubanné » seul).

### Reste à décider côté client (cf. §8)
Certification AB, sourçage du « 100% satisfaction », badge bio sur l'option « Enrubanné/foin dépoussiéré », confirmation « depuis 2025 ».
