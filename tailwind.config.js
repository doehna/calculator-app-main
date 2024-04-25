const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '60p': '60px',
        '25': '25%',
        '50': '50%',
        '90': '90%'
      },
      minWidth: {
        '300p': '300px'
      },
      maxWidth: {
        '450p': '450px'
      },
      height: {
        '24p': '24px',
        '60p': '60px',
        '110p': '110px',
        '400p': '400px',
        '50': '50%'
      },
      fontFamily: {
        "league-spartan": ['"League Spartan"', 'sans-serif']
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        // Backgrounds
        'main-bg': 'hsl(0, 0%, 90%)',
        'toggle-bg': 'hsl(0, 5%, 81%)',
        'screen-bg': 'hsl(0, 0%, 93%)',
        
        // Keys
        'key-bg-special': 'hsl(185, 42%, 37%)',
        'key-shd-special': 'hsl(185, 58%, 25%)',
        'key-bg-toggle': 'hsl(25, 98%, 40%)',
        'key-shd-toggle': 'hsl(25, 99%, 27%)',
        'key-bg-standard': 'hsl(45, 7%, 89%)',
        'key-shd-standard': 'hsl(35, 11%, 61%)',
        
        //Text
        'standard': 'hsl(60, 10%, 19%)',
        'white': 'hsl(0, 0%, 100%)',
        'equal': 'hsl(0, 0%, 100%)',
        'header': 'hsl(60, 10%, 19%)',
      },
      medium: {
        // Backgrounds
        'main-bg': 'hsl(222, 26%, 31%)',
        'toggle-bg': 'hsl(223, 31%, 20%)',
        'screen-bg': 'hsl(224, 36%, 15%)',
        
        // Keys
        'key-bg-special': 'hsl(225, 21%, 49%)',
        'key-shd-special': 'hsl(224, 28%, 35%)',
        'key-bg-toggle': 'hsl(6, 63%, 50%)',
        'key-shd-toggle': 'hsl(6, 70%, 34%)',
        'key-bg-standard': 'hsl(30, 25%, 89%',
        'key-shd-standard': 'hsl(28, 16%, 65%)',
        
        //Text
        'standard': 'hsl(221, 14%, 31%)',
        'white': 'hsl(0, 0%, 100%)',
        'equal': 'hsl(0, 0%, 100%)',
        'header': 'hsl(0, 0%, 100%)',
      },
      dark: {
        // Backgrounds
        'main-bg': 'hsl(268, 75%, 9%)',
        'toggle-bg': 'hsl(268, 71%, 12%)',
        'screen-bg': 'hsl(268, 71%, 12%)',
        
        // Keys
        'key-bg-special': 'hsl(281, 89%, 26%)',
        'key-shd-special': 'hsl(285, 91%, 52%)',
        'key-bg-toggle': 'hsl(176, 100%, 44%)',
        'key-shd-toggle': 'hsl(177, 92%, 70%)',
        'key-bg-standard': 'hsl(268, 47%, 21%)',
        'key-shd-standard': 'hsl(290, 70%, 36%)',
        
        //Text
        'standard': 'hsl(52, 100%, 62%)',
        'white': 'hsl(0, 0%, 100%)',
        'equal': 'hsl(198, 20%, 13%)',
        'header': 'hsl(52, 100%, 62%)',
      },
    })
  ]
}
