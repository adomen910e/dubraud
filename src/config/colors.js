// Configuration centralisée des couleurs du Domaine de Dubraud
// Ce fichier contient toutes les couleurs utilisées dans l'application
// Modifiez ces valeurs pour changer l'apparence globale du site

export const colors = {
  // === COULEURS PRINCIPALES DE LA MARQUE ===
  brand: {
    // Palette basée sur #4b432fff - Tons chauds et terreux
    primary: '#4b432f',          // Couleur de base - brun olive profond
    primaryDark: '#3a3424',      // Version plus foncée pour les hovers
    primaryLight: '#5d5340',     // Version plus claire pour les variations
    primaryLighter: '#6f6451',   // Encore plus clair pour les états actifs
    
    // Variations harmonieuses de la couleur de base
    secondary: '#5a4d35',        // Brun chaud secondaire
    tertiary: '#4a3f2d',        // Brun profond pour les accents
    
    // Couleurs complémentaires chaudes
    warm: '#6b5d42',            // Brun chaud pour les éléments doux
    warmLight: '#8a7a5f',       // Brun chaud clair
    warmLighter: '#a89680',     // Brun très clair pour les backgrounds
    
    // Couleurs neutres harmonieuses
    neutral: '#f5f2eb',         // Crème chaud pour les arrière-plans
    neutralDark: '#e8e2d5',     // Crème plus foncé
    neutralLight: '#faf8f3',    // Crème très clair
    
    // Accents dorés basés sur la teinte de base
    accent: '#8b7a56',          // Or mat harmonieux
    accentLight: '#a69368',     // Or clair
    accentDark: '#6d5f42',      // Or foncé
  },

  // === COULEURS SYSTÈME ===
  system: {
    // Couleurs de base
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    
    // Grays chauds harmonisés avec la couleur de base
    gray: {
      50: '#faf9f6',    // Gris très clair avec nuance chaude
      100: '#f4f2ed',   // Gris clair chaud
      200: '#e9e5dc',   // Gris moyen clair
      300: '#d4cfc2',   // Gris moyen
      400: '#a69d8a',   // Gris moyen foncé
      500: '#7a7060',   // Gris foncé
      600: '#5d5340',   // Gris très foncé (proche de primary)
      700: '#4b432f',   // Gris profond (couleur de base)
      800: '#3a3424',   // Gris très profond
      900: '#2a251a',   // Gris presque noir
    }
  },

  // === COULEURS FONCTIONNELLES ===
  functional: {
    // États harmonisés avec la palette kaki uniquement
    success: '#5d5340',         // Kaki clair pour succès
    error: '#4a3f2d',           // Kaki foncé pour erreur
    warning: '#6f6451',         // Kaki moyen pour avertissement
    info: '#3a3424',            // Kaki très foncé pour info
    
    // Couleurs pour les particules et effets basées sur la palette kaki
    particles: {
      primary: '#4b432f',       // Particules couleur primaire kaki
      light: '#8a7a5f',         // Particules kaki clair
      warm: '#6b5d42',          // Particules kaki chaud
      neutral: '#f5f2eb',       // Particules neutres
      white: '#FFFFFF',         // Blanc pour contraste
    }
  },

  // === COULEURS AVEC OPACITÉ ===
  opacity: {
    // Arrière-plans avec transparence basés sur la nouvelle palette
    backgrounds: {
      whiteGlass: 'rgba(255, 255, 255, 0.1)',      // Verre blanc 10%
      whiteGlass20: 'rgba(255, 255, 255, 0.2)',    // Verre blanc 20%
      whiteGlass80: 'rgba(255, 255, 255, 0.8)',    // Verre blanc 80%
      whiteGlass90: 'rgba(255, 255, 255, 0.9)',    // Verre blanc 90%
      whiteGlass95: 'rgba(255, 255, 255, 0.95)',   // Verre blanc 95%
      whiteGlass98: 'rgba(255, 255, 255, 0.98)',   // Verre blanc 98%
      
      primaryGlass10: 'rgba(75, 67, 47, 0.1)',     // Couleur primaire 10%
      primaryGlass20: 'rgba(75, 67, 47, 0.2)',     // Couleur primaire 20%
      primaryGlass30: 'rgba(75, 67, 47, 0.3)',     // Couleur primaire 30%
      primaryGlass40: 'rgba(75, 67, 47, 0.4)',     // Couleur primaire 40%
      primaryGlass60: 'rgba(75, 67, 47, 0.6)',     // Couleur primaire 60%
      
      neutralGlass95: 'rgba(245, 242, 235, 0.95)', // Neutre transparent 95%
      neutralGlass98: 'rgba(245, 242, 235, 0.98)', // Neutre transparent 98%
      warmGlass60: 'rgba(107, 93, 66, 0.6)',       // Chaud transparent 60%
    },
    
    // Bordures avec transparence harmonisées
    borders: {
      primary20: 'rgba(75, 67, 47, 0.2)',          // Bordure primaire 20%
      primary15: 'rgba(75, 67, 47, 0.15)',         // Bordure primaire 15%
      primary10: 'rgba(75, 67, 47, 0.1)',          // Bordure primaire 10%
      accent30: 'rgba(139, 122, 86, 0.3)',         // Bordure accent 30%
      accent60: 'rgba(139, 122, 86, 0.6)',         // Bordure accent 60%
      warm50: 'rgba(107, 93, 66, 0.5)',            // Bordure chaude 50%
      warm70: 'rgba(107, 93, 66, 0.7)',            // Bordure chaude 70%
    },
    
    // Textes avec transparence
    text: {
      white80: 'rgba(255, 255, 255, 0.8)',         // Texte blanc 80%
      primary90: 'rgba(75, 67, 47, 0.9)',          // Texte primaire 90%
      primary70: 'rgba(75, 67, 47, 0.7)',          // Texte primaire 70%
    }
  },

  // === GRADIENTS ===
  gradients: {
    // Gradients principaux basés sur la nouvelle palette
    primary: 'linear-gradient(to right, #4b432f, #5d5340)',
    primaryReverse: 'linear-gradient(to right, #5d5340, #4b432f)',
    primaryVertical: 'linear-gradient(to bottom, #4b432f, #5d5340)',
    
    // Gradients chauds et harmonieux
    warm: 'linear-gradient(to right, #4b432f, #6b5d42)',
    warmReverse: 'linear-gradient(to right, #6b5d42, #4b432f)',
    warmLight: 'linear-gradient(to right, #6b5d42, #8a7a5f)',
    
    // Gradients pour les boutons
    buttonPrimary: 'linear-gradient(to right, #4b432f, #5d5340)',
    buttonPrimaryHover: 'linear-gradient(to right, #3a3424, #4a3f2d)',
    buttonSecondary: 'linear-gradient(to right, #6b5d42, #8b7a56)',
    buttonSecondaryHover: 'linear-gradient(to right, #5a4d35, #6d5f42)',
    
    // Gradients pour les arrière-plans
    headerTop: 'linear-gradient(to bottom, rgba(245, 242, 235, 0.98), rgba(245, 242, 235, 0.95))',
    headerOverlay: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
    heroOverlay: 'linear-gradient(to bottom, rgba(75, 67, 47, 0.3), rgba(75, 67, 47, 0.4), rgba(75, 67, 47, 0.6))',
    
    // Gradient décoratif harmonieux
    decorativeLine: 'linear-gradient(to right, #4b432f, #8b7a56, #4b432f)',
    decorativeWarm: 'linear-gradient(to right, #6b5d42, #a69368, #6b5d42)',
    
    // Gradients pour les effets
    shine: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
    glow: 'linear-gradient(to right, rgba(139, 122, 86, 0.4), rgba(75, 67, 47, 0.4))',
    glowStrong: 'linear-gradient(to right, rgba(139, 122, 86, 0.6), rgba(75, 67, 47, 0.6))',
    glowWarm: 'linear-gradient(to right, rgba(107, 93, 66, 0.4), rgba(90, 77, 53, 0.4))',
  },

  // === OMBRES ===
  shadows: {
    // Ombres harmonisées avec la palette
    soft: '0 2px 15px -3px rgba(75, 67, 47, 0.07), 0 10px 20px -2px rgba(75, 67, 47, 0.04)',
    medium: '0 4px 25px -5px rgba(75, 67, 47, 0.1), 0 10px 10px -5px rgba(75, 67, 47, 0.04)',
    strong: '0 10px 40px -10px rgba(75, 67, 47, 0.15), 0 2px 10px -2px rgba(75, 67, 47, 0.05)',
    
    // Ombres colorées basées sur la palette
    glow: '0 0 20px rgba(75, 67, 47, 0.3)',
    glowStrong: '0 0 30px rgba(75, 67, 47, 0.5)',
    glowWarm: '0 0 25px rgba(107, 93, 66, 0.4)',
    glowAccent: '0 0 20px rgba(139, 122, 86, 0.3)',
    
    // Ombres de texte harmonieuses
    textShadow: '0 1px 2px rgba(245, 242, 235, 0.8)',
    textShadowDark: '0 1px 2px rgba(75, 67, 47, 0.3)',
  }
};

// === UTILITAIRES ===

// Fonction pour obtenir une couleur avec opacité personnalisée
export const withOpacity = (color, opacity) => {
  // Convertit une couleur hex en rgba avec l'opacité spécifiée
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Fonction pour obtenir une couleur de la configuration
export const getColor = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], colors);
};

// Export par défaut
export default colors;
