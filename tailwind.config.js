const { createThemes } = require('./node_modules/tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ['"League Spartan"', 'sans-serif']
      },
      colors: {
        "main": "hsl(222, 26%, 31%)",
        "toggle": "hsl(223, 31%, 20%)",
        "screen": "hsl(224, 36%, 15%)"
      },
    },
    plugins: [
      createThemes({
        light: { 
           'primary': 'yellow',
           'secondary': 'black',
        },
        medium: { 
           'primary': 'red',
           'secondary': 'white',
        },
        dark: { 
           'primary': 'black',
           'secondary': 'yellow',
        },
      })
    ],
  },
}