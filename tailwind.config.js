/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/config/colors.js');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === COULEURS PRINCIPALES DE LA MARQUE ===
        // Palette basée sur #4b432f - Tons chauds et terreux
        'brand-primary': colors.brand.primary,
        'brand-primary-dark': colors.brand.primaryDark,
        'brand-primary-light': colors.brand.primaryLight,
        'brand-primary-lighter': colors.brand.primaryLighter,
        
        // Variations harmonieuses
        'brand-secondary': colors.brand.secondary,
        'brand-tertiary': colors.brand.tertiary,
        
        // Couleurs complémentaires chaudes
        'brand-warm': colors.brand.warm,
        'brand-warm-light': colors.brand.warmLight,
        'brand-warm-lighter': colors.brand.warmLighter,
        
        // Couleurs neutres harmonieuses
        'brand-neutral': colors.brand.neutral,
        'brand-neutral-dark': colors.brand.neutralDark,
        'brand-neutral-light': colors.brand.neutralLight,
        
        // Accents dorés harmonieux
        'brand-accent': colors.brand.accent,
        'brand-accent-light': colors.brand.accentLight,
        'brand-accent-dark': colors.brand.accentDark,
        
        // Aliases pour compatibilité (utilisant les couleurs de la palette kaki)
        'brand-brown': colors.brand.primary,
        'brand-light-brown': colors.brand.primaryLight,
        'brand-dark-brown': colors.brand.primaryDark,
        'brand-gold': colors.brand.accent,
        'brand-beige': colors.brand.neutral,
        'brand-cream': colors.brand.neutralLight,
        
        // === COULEURS SYSTÈME ===
        'system-white': colors.system.white,
        'system-black': colors.system.black,
        
        // Grays chauds harmonisés
        'warm-gray': colors.system.gray,
        
        // === COULEURS FONCTIONNELLES ===
        // États harmonisés avec la palette principale
        'success': colors.functional.success,
        'error': colors.functional.error,
        'warning': colors.functional.warning,
        'info': colors.functional.info,
      },
      fontFamily: {
        'script': ['Brush Script MT', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
        'cardo': ['Cardo', 'serif'],
        'bakery': ['Bakerie', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(75, 67, 47, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(75, 67, 47, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        // Ombres harmonisées avec la nouvelle palette
        'soft': colors.shadows.soft,
        'medium': colors.shadows.medium,
        'strong': colors.shadows.strong,
        'glow': colors.shadows.glow,
        'glow-strong': colors.shadows.glowStrong,
        'glow-warm': colors.shadows.glowWarm,
        'glow-accent': colors.shadows.glowAccent,
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
