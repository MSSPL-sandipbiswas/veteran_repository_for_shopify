/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './layout/*.liquid',
    './snippets/*.liquid',
    './sections/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      addComponents({
        '.heading-com-42': {
          fontSize:'4.2rem', 
          lineHeight:'5rem', 
          fontWeight: '500', 
          marginBottom: '3rem',
          fontFamily: 'Barlow Condensed, sans-serif',
        },
        '.sub_heading_com':{
          fontWeight: '400',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize:'2rem',
          position: 'relative',
          color:'#4D4E4F', 
          display:'inline-block',
          marginBottom: '1rem',
          textTransform: 'capitalize',
        },
        '.com-font':{
          fontSize: '1.5rem',
          lineHeight:'2.5rem',
          color:'#2E2E2E',
        },
        '.com-font p': {
          marginBottom:'3rem',
        },
      })
    })
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
    extend: {
      padding: {
        '65': '65px',
      },
    },
  }
}

