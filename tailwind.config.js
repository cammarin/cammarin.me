const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-mode-white': '#fcfffe',
        'light-mode-black': '#232029',
        'dark-mode-white': '#eef2f0',
        'dark-mode-black': '#1c1a23',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tight: '-0.0225em',
        normal: '-0.0125em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
