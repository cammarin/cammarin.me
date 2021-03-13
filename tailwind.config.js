const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neutral: {
          10: '#fcfffe',
          20: '#f1f4f3',
          30: '#e5e9e8',
          40: '#dadddc',
          50: '#c7cccb',
          60: '#b4bcbc',
          70: '#a7b0b0',
          80: '#99a2a5',
          90: '#8b949a',
          100: '#7c858f',
          200: '#6f7584',
          300: '#626678',
          400: '#57596d',
          500: '#4a495d',
          600: '#393646',
          700: '#2c2835',
          800: '#23202a',
          900: '#1a171f',
        },
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
  plugins: [
    plugin(function ({ addBase }) {
      const webfonts = [
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '100 900',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter/Inter-roman.var.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontStyle: 'italic',
            fontWeight: '100 900',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter/Inter-italic.var.woff2") format("woff2")',
          },
        },
      ]

      addBase(webfonts)
    }),
  ],
}
