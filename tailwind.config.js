/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './snippets/*.liquid',
    './sections/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'blue': '#1B234A',
      'font-body': '#2E2E2E',
      'skyblue': '#13AFDF',
    },
    extend: {},
  },
  plugins: [],
}

