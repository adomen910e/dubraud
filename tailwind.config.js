/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#7C2D12',
        'brand-light-brown': '#A16207',
        'brand-beige': '#FEF3C7',
      },
      fontFamily: {
        'script': ['Brush Script MT', 'cursive'],
      }
    },
  },
  plugins: [],
}
