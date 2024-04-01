/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'dark': '#080C2E',
        'primary': '#5D5D7C',
        'secondary': '#640EF1',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

