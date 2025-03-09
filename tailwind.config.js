/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {
      fontFamily: {
        sans: ['Funnel Display', 'sans-serif'],
      },
      colors: {
        'selection-bg': '#ffffff', // Aggiungi il colore di selezione che desideri
      },
    },
  },

  plugins: [],
};

