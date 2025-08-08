# Configuration des Couleurs - Domaine de Dubraud

Ce dossier contient la configuration centralisée des couleurs pour l'ensemble du site web du Domaine de Dubraud.

## 📁 Structure

- `colors.js` - Configuration centralisée de toutes les couleurs

## 🎨 Utilisation

### 1. Dans les composants React

```javascript
import { colors, getColor, withOpacity } from '../config/colors';

// Utilisation directe
const MyComponent = () => (
  <div style={{ backgroundColor: colors.brand.brown }}>
    <p style={{ color: colors.system.white }}>Texte blanc</p>
  </div>
);

// Avec la fonction utilitaire
const MyComponent = () => (
  <div style={{ backgroundColor: getColor('brand.brown') }}>
    <p style={{ color: getColor('system.white') }}>Texte blanc</p>
  </div>
);

// Avec opacité personnalisée
const MyComponent = () => (
  <div style={{ backgroundColor: withOpacity(colors.brand.brown, 0.5) }}>
    Arrière-plan brun à 50% d'opacité
  </div>
);
```

### 2. Dans Tailwind CSS

Les couleurs sont automatiquement disponibles dans Tailwind via le fichier `tailwind.config.js` :

```html
<!-- Classes Tailwind générées automatiquement -->
<div class="bg-brand-brown text-white">
  <p class="text-brand-gold">Texte doré</p>
</div>
```

### 3. Dans les styles CSS

```css
.my-class {
  background: linear-gradient(to right, var(--brand-brown), var(--brand-gold));
  color: var(--system-white);
}
```

## 🎯 Catégories de Couleurs

### Couleurs de la Marque (`colors.brand`)
- `brown` - Brun principal (#7C2D12)
- `darkBrown` - Brun foncé (#5B1F0A)
- `lightBrown` - Brun clair (#A16207)
- `beige` - Beige principal (#FEF3C7)
- `cream` - Crème (#FFFBEB)
- `gold` - Or (#D97706)
- `sage` - Vert sauge (#84CC16)
- `forest` - Vert forêt (#166534)

### Couleurs Système (`colors.system`)
- `white` - Blanc pur
- `black` - Noir pur
- `gray` - Palette de gris (50 à 900)

### Couleurs Fonctionnelles (`colors.functional`)
- `success` - Vert de succès
- `error` - Rouge d'erreur
- `warning` - Orange d'avertissement
- `info` - Bleu d'information
- `particles` - Couleurs pour les effets de particules

### Couleurs avec Opacité (`colors.opacity`)
- `backgrounds` - Arrière-plans transparents
- `borders` - Bordures transparentes
- `text` - Textes transparents

### Gradients (`colors.gradients`)
- `brandHorizontal` - Gradient horizontal de la marque
- `buttonPrimary` - Gradient pour boutons primaires
- `headerTop` - Gradient pour l'en-tête
- `heroOverlay` - Overlay pour la section hero
- Et bien d'autres...

### Ombres (`colors.shadows`)
- `soft` - Ombre douce
- `medium` - Ombre moyenne
- `strong` - Ombre forte
- `glow` - Effet de lueur
- `textShadow` - Ombre de texte

## 🔧 Modification des Couleurs

### Pour changer une couleur globalement :

1. Ouvrez `src/config/colors.js`
2. Modifiez la valeur souhaitée
3. Sauvegardez le fichier
4. La couleur sera automatiquement mise à jour partout dans l'application

### Exemple :
```javascript
// Pour changer la couleur principale de brun à bleu
export const colors = {
  brand: {
    brown: '#1E40AF', // Changé de #7C2D12 à #1E40AF (bleu)
    // ... autres couleurs
  }
};
```

## 🚀 Avantages du Système Centralisé

1. **Cohérence** - Toutes les couleurs sont définies en un seul endroit
2. **Maintenance** - Changement global en modifiant une seule valeur
3. **Évolutivité** - Facile d'ajouter de nouvelles couleurs
4. **Documentation** - Chaque couleur est documentée avec son usage
5. **Réutilisabilité** - Fonctions utilitaires pour manipuler les couleurs

## 📝 Bonnes Pratiques

1. **Utilisez les couleurs de la marque** pour maintenir la cohérence visuelle
2. **Documentez les nouvelles couleurs** ajoutées avec leur usage prévu
3. **Testez les changements** sur différentes pages avant de valider
4. **Respectez l'accessibilité** en maintenant un contraste suffisant
5. **Utilisez les gradients prédéfinis** plutôt que de créer de nouveaux

## 🎨 Palette de Couleurs Actuelle

La palette actuelle reflète l'identité du Domaine de Dubraud :
- **Bruns** : Évoquent la terre, le bois, l'authenticité
- **Beiges/Crèmes** : Douceur, naturel, chaleur
- **Or** : Premium, qualité, élégance
- **Verts** : Nature, prairies, environnement

Cette palette peut être facilement modifiée selon vos besoins en éditant le fichier `colors.js`.
