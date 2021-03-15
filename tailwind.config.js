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
        tighter: '-0.0225em',
        tight: '-0.015em',
        normal: '-0.0125em',
        wide: '-0.005em',
        wider: '0em',
        widest: '0.0125em',
      },
    },
    screens: {
      'xs-mini': '320px',
      'xs-base': '360px',
      'xs-plus': '400px',
      'sm-mini': '480px',
      'sm-base': '600px',
      'sm-plus': '640px',
      'md-mini': '720px',
      'md-base': '768px',
      'md-plus': '960px',
      'lg-mini': '1024px',
      'lg-base': '1200px',
      'lg-plus': '1440px',
      'xl-mini': '1536px',
      'xl-base': '1920px',
      'xl-plus': '2400px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus-visible'],
      margin: ['last'],
      ringColor: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringWidth: ['focus-visible'],
      textColor: ['focus-visible'],
    },
  },
  plugins: [
    plugin(
      function ({ addBase, addUtilities, e, theme, variants }) {
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

        const filterDesaturateUtilities = Object.entries(
          theme('filter.desaturate')
        ).map(([key, value]) => {
          return {
            [`.${e(`filter-desaturate-${key}`)}`]: {
              filter: `saturate(${value})`,
            },
          }
        })

        addUtilities(filterDesaturateUtilities, variants('filter'))
      },
      {
        theme: {
          filter: {
            desaturate: {
              0: '100%',
              10: '90%',
              20: '80%',
              25: '75%',
              30: '70%',
              40: '60%',
              50: '50%',
              60: '40%',
              70: '30%',
              75: '25%',
              80: '20%',
              90: '10%',
              100: '0%',
            },
          },
        },
        variants: {
          filter: ['dark'],
        },
      }
    ),
  ],
}
