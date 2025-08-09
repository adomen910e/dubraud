import React, { useState } from 'react';

/**
 * Éditeur de couleurs interactif pour le Domaine de Dubraud
 * Permet de modifier les couleurs en temps réel
 */
const ColorShowcase = () => {
  // État pour les couleurs modifiables
  const [currentColors, setCurrentColors] = useState({
    primary: '#4b432f',
    primaryDark: '#3a3424',
    primaryLight: '#5d5340',
    primaryLighter: '#6f6451',
    secondary: '#5a4d35',
    tertiary: '#4a3f2d',
    warm: '#6b5d42',
    warmLight: '#8a7a5f',
    warmLighter: '#a89680',
    accent: '#8b7a56',
    accentLight: '#a69368',
    accentDark: '#6d5f42',
    neutral: '#f5f2eb',
    neutralDark: '#e8e2d5',
    neutralLight: '#faf8f3',
  });

  // Fonction pour mettre à jour une couleur
  const updateColor = (colorKey, newValue) => {
    setCurrentColors(prev => ({
      ...prev,
      [colorKey]: newValue
    }));
  };

  // Fonction pour réinitialiser les couleurs
  const resetColors = () => {
    setCurrentColors({
      primary: '#4b432f',
      primaryDark: '#3a3424',
      primaryLight: '#5d5340',
      primaryLighter: '#6f6451',
      secondary: '#5a4d35',
      tertiary: '#4a3f2d',
      warm: '#6b5d42',
      warmLight: '#8a7a5f',
      warmLighter: '#a89680',
      accent: '#8b7a56',
      accentLight: '#a69368',
      accentDark: '#6d5f42',
      neutral: '#f5f2eb',
      neutralDark: '#e8e2d5',
      neutralLight: '#faf8f3',
    });
  };

  // Fonction pour générer le code CSS à copier
  const generateCSS = () => {
    return `/* Couleurs Domaine de Dubraud - Palette Kaki */
:root {
  --color-primary: ${currentColors.primary};
  --color-primary-dark: ${currentColors.primaryDark};
  --color-primary-light: ${currentColors.primaryLight};
  --color-primary-lighter: ${currentColors.primaryLighter};
  --color-secondary: ${currentColors.secondary};
  --color-tertiary: ${currentColors.tertiary};
  --color-warm: ${currentColors.warm};
  --color-warm-light: ${currentColors.warmLight};
  --color-warm-lighter: ${currentColors.warmLighter};
  --color-accent: ${currentColors.accent};
  --color-accent-light: ${currentColors.accentLight};
  --color-accent-dark: ${currentColors.accentDark};
  --color-neutral: ${currentColors.neutral};
  --color-neutral-dark: ${currentColors.neutralDark};
  --color-neutral-light: ${currentColors.neutralLight};
}`;
  };

  // Composant pour un éditeur de couleur individuel
  const ColorEditor = ({ label, colorKey, description }) => (
    <div className="bg-white p-4 rounded-lg shadow-medium border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-800">{label}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div 
          className="w-12 h-12 rounded-lg border-2 border-gray-300 shadow-inner"
          style={{ backgroundColor: currentColors[colorKey] }}
        ></div>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          value={currentColors[colorKey]}
          onChange={(e) => updateColor(colorKey, e.target.value)}
          className="w-16 h-8 rounded border border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={currentColors[colorKey]}
          onChange={(e) => updateColor(colorKey, e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: currentColors.neutralLight }}>
      <div className="max-w-7xl mx-auto p-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: currentColors.primary }}>
            🎨 Éditeur de Couleurs - Domaine de Dubraud
          </h1>
          <p className="text-lg" style={{ color: currentColors.secondary }}>
            Modifiez les couleurs en temps réel - Palette 100% Kaki (sans orange)
          </p>
        </div>

        {/* Contrôles */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={resetColors}
            className="px-6 py-3 rounded-lg text-white font-semibold shadow-medium hover:shadow-strong transition-all duration-200"
            style={{ 
              backgroundColor: currentColors.primary,
              ':hover': { backgroundColor: currentColors.primaryDark }
            }}
          >
            🔄 Réinitialiser
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(generateCSS());
              alert('Code CSS copié dans le presse-papiers !');
            }}
            className="px-6 py-3 rounded-lg text-white font-semibold shadow-medium hover:shadow-strong transition-all duration-200"
            style={{ backgroundColor: currentColors.accent }}
          >
            📋 Copier CSS
          </button>
        </div>

        {/* Éditeurs de couleurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ColorEditor 
            label="Primary" 
            colorKey="primary" 
            description="Couleur principale kaki"
          />
          <ColorEditor 
            label="Primary Dark" 
            colorKey="primaryDark" 
            description="Pour les hovers"
          />
          <ColorEditor 
            label="Primary Light" 
            colorKey="primaryLight" 
            description="Variations claires"
          />
          <ColorEditor 
            label="Primary Lighter" 
            colorKey="primaryLighter" 
            description="États actifs"
          />
          <ColorEditor 
            label="Secondary" 
            colorKey="secondary" 
            description="Kaki chaud secondaire"
          />
          <ColorEditor 
            label="Tertiary" 
            colorKey="tertiary" 
            description="Accents profonds"
          />
          <ColorEditor 
            label="Warm" 
            colorKey="warm" 
            description="Éléments doux"
          />
          <ColorEditor 
            label="Warm Light" 
            colorKey="warmLight" 
            description="Kaki chaud clair"
          />
          <ColorEditor 
            label="Warm Lighter" 
            colorKey="warmLighter" 
            description="Backgrounds doux"
          />
          <ColorEditor 
            label="Accent" 
            colorKey="accent" 
            description="Or mat harmonieux"
          />
          <ColorEditor 
            label="Accent Light" 
            colorKey="accentLight" 
            description="Or clair"
          />
          <ColorEditor 
            label="Accent Dark" 
            colorKey="accentDark" 
            description="Or foncé"
          />
          <ColorEditor 
            label="Neutral" 
            colorKey="neutral" 
            description="Crème chaud"
          />
          <ColorEditor 
            label="Neutral Dark" 
            colorKey="neutralDark" 
            description="Crème foncé"
          />
          <ColorEditor 
            label="Neutral Light" 
            colorKey="neutralLight" 
            description="Crème très clair"
          />
        </div>

        {/* Aperçu en temps réel */}
        <div className="space-y-8">
          {/* Palette principale */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>
              🎨 Aperçu de la Palette
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {Object.entries(currentColors).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div 
                    className="w-full h-20 rounded-lg shadow-medium mb-2"
                    style={{ backgroundColor: value }}
                  ></div>
                  <div className="text-sm font-medium" style={{ color: currentColors.primary }}>
                    {key}
                  </div>
                  <div className="text-xs font-mono" style={{ color: currentColors.secondary }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Exemples d'utilisation */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>
              🖼️ Exemples d'Utilisation
            </h2>
            
            {/* Boutons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button 
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-medium"
                style={{ backgroundColor: currentColors.primary }}
              >
                Bouton Primary
              </button>
              <button 
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-medium"
                style={{ backgroundColor: currentColors.secondary }}
              >
                Bouton Secondary
              </button>
              <button 
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-medium"
                style={{ backgroundColor: currentColors.accent }}
              >
                Bouton Accent
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-semibold shadow-medium border-2"
                style={{ 
                  backgroundColor: currentColors.neutral,
                  color: currentColors.primary,
                  borderColor: currentColors.primary
                }}
              >
                Bouton Outline
              </button>
            </div>

            {/* Cartes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div 
                className="p-6 rounded-xl shadow-medium"
                style={{ backgroundColor: currentColors.neutral }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: currentColors.primary }}>
                  Carte Neutre
                </h3>
                <p style={{ color: currentColors.secondary }}>
                  Exemple de contenu avec la palette kaki harmonieuse.
                </p>
              </div>
              <div 
                className="p-6 rounded-xl shadow-medium text-white"
                style={{ backgroundColor: currentColors.primary }}
              >
                <h3 className="text-lg font-bold mb-2">
                  Carte Primary
                </h3>
                <p className="opacity-90">
                  Contenu sur fond kaki principal.
                </p>
              </div>
              <div 
                className="p-6 rounded-xl shadow-medium text-white"
                style={{ backgroundColor: currentColors.accent }}
              >
                <h3 className="text-lg font-bold mb-2">
                  Carte Accent
                </h3>
                <p className="opacity-90">
                  Contenu sur fond accent doré.
                </p>
              </div>
            </div>

            {/* Gradients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="p-8 rounded-xl text-white text-center shadow-strong"
                style={{ 
                  background: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.primaryLight})`
                }}
              >
                <h3 className="text-xl font-bold">Gradient Primary</h3>
                <p className="opacity-90 mt-2">Primary → Primary Light</p>
              </div>
              <div 
                className="p-8 rounded-xl text-white text-center shadow-strong"
                style={{ 
                  background: `linear-gradient(to right, ${currentColors.warm}, ${currentColors.accent})`
                }}
              >
                <h3 className="text-xl font-bold">Gradient Warm</h3>
                <p className="opacity-90 mt-2">Warm → Accent</p>
              </div>
            </div>
          </section>

          {/* Code CSS généré */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>
              💻 Code CSS Généré
            </h2>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{generateCSS()}</pre>
            </div>
          </section>

          {/* Instructions */}
          <section 
            className="p-8 rounded-xl border-l-4 shadow-medium"
            style={{ 
              backgroundColor: currentColors.neutralLight,
              borderColor: currentColors.accent
            }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: currentColors.primary }}>
              <span className="mr-2">💡</span>
              Instructions d'Utilisation
            </h3>
            <div style={{ color: currentColors.secondary }} className="space-y-3">
              <p className="font-medium">
                ✨ Cet éditeur vous permet de personnaliser votre palette kaki en temps réel
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">🎨 Comment utiliser :</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Cliquez sur les sélecteurs de couleur</li>
                    <li>Ou tapez directement les codes hex</li>
                    <li>Voyez les changements en temps réel</li>
                    <li>Copiez le CSS généré</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🔧 Pour appliquer :</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Copiez le code CSS généré</li>
                    <li>Modifiez <code className="bg-gray-200 px-1 rounded text-xs">src/config/colors.js</code></li>
                    <li>Remplacez les valeurs correspondantes</li>
                    <li>Sauvegardez pour voir les changements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase;
