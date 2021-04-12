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
      fontSize: {
        tiny: [
          '0.625rem', // 10px
          {
            letterSpacing: '0.0125em', // widest
            lineHeight: '0.75rem', // 12 px
          },
        ],
        xs: [
          '0.75rem', // 12px
          {
            letterSpacing: '0em', // wider
            lineHeight: '1rem', // 16px
          },
        ],
        sm: [
          '0.875rem', // 14px
          {
            letterSpacing: '-0.005em', // wide
            lineHeight: '1.25rem', // 20px
          },
        ],
        base: [
          '1rem', // 16px
          {
            letterSpacing: '-0.0125em', // normal
            lineHeight: 1.5, // 24px
          },
        ],
        lg: [
          '1.125rem', // 18px
          {
            letterSpacing: '-0.015em', // tight
            lineHeight: '1.75rem', // 28px
          },
        ],
        xl: [
          '1.25rem', // 20px
          {
            letterSpacing: '-0.015em', // tight
            lineHeight: '1.75rem', // 28px
          },
        ],
        '2xl': [
          '1.5rem', // 24px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '2rem', // 32px
          },
        ],
        '3xl': [
          '1.75rem', // 28px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '2.25rem', // 36px
          },
        ],
        '4xl': [
          '2rem', // 32px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '2.5rem', // 40px
          },
        ],
        '5xl': [
          '2.25rem', // 36px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '2.5rem', // 40px
          },
        ],
        '6xl': [
          '2.625rem', // 42px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '3rem', // 48px
          },
        ],
        '7xl': [
          '3rem', // 48px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '3.375rem', // 54px
          },
        ],
        '8xl': [
          '3.75rem', // 60px
          {
            letterSpacing: '-0.0225em', // tighter
            lineHeight: '4.25rem', // 68px
          },
        ],
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
    filter: {
      'grayscale-0': 'grayscale(0)',
      'grayscale-5': 'grayscale(0.05)',
      'grayscale-10': 'grayscale(0.1)',
      'grayscale-20': 'grayscale(0.2)',
      'grayscale-25': 'grayscale(0.25)',
      'grayscale-30': 'grayscale(0.3)',
      'grayscale-40': 'grayscale(0.4)',
      'grayscale-50': 'grayscale(0.5)',
      'grayscale-60': 'grayscale(0.6)',
      'grayscale-70': 'grayscale(0.7)',
      'grayscale-75': 'grayscale(0.75)',
      'grayscale-80': 'grayscale(0.8)',
      'grayscale-90': 'grayscale(0.9)',
      'grayscale-100': 'grayscale(1)',
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
      filter: ['dark'],
      glowOpacity: [
        'hover',
        'focus-visible',
        'group-hover',
        'group-focus-visible',
      ],
      glowSize: [
        'hover',
        'focus-visible',
        'group-hover',
        'group-focus-visible',
      ],
      margin: ['last'],
      ringColor: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringWidth: ['focus-visible'],
      textColor: ['focus-visible'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-interaction-variants'),
    plugin(
      function ({ addBase, addUtilities, e, theme, variants }) {
        // Based on: https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/nameClass.js
        const asClass = (name) => {
          return `.${e(name)}`
        }

        // Based on: https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/nameClass.js
        const nameClass = (classPrefix, key) => {
          if (key.toUpperCase() === 'DEFAULT') {
            return asClass(classPrefix)
          }

          if (key === '-') {
            return asClass(`-${classPrefix}`)
          }

          if (key.startsWith('-')) {
            return asClass(`-${classPrefix}${key}`)
          }

          return asClass(`${classPrefix}-${key}`)
        }

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

        const glowOpacityUtilities = Object.entries(theme('glowOpacity')).map(
          ([modifier, value]) => ({
            [nameClass('glow-opacity', modifier)]: {
              '&::before': {
                opacity: value,
              },
            },
          })
        )

        addUtilities(glowOpacityUtilities, variants('glowOpacity'))

        // The `data-content` prop is necessary for `background-clip: text`.
        const glowSizeUtilities = Object.entries(theme('glowSize')).map(
          ([modifier, value]) => ({
            [nameClass('glow', modifier)]: {
              '&::before': {
                position: 'absolute',
                top: '0.05em',
                left: '0.05em',
                zIndex: -1,
                display: 'block',
                width: '100%',
                height: '100%',
                content: 'attr(data-content)',
                background: 'inherit',
                filter: `blur(${value})`,
                backgroundBlendMode: 'multiply',
              },
            },
          })
        )

        addUtilities(glowSizeUtilities, variants('glowSize'))

        // Trick to fix viewport units on mobile.
        // The custom property is set with JS on window resize.
        const heightUtilities = [
          {
            '.h-screen': {
              height: 'calc(var(--vh, 1vh) * 100)',
            },
            '.min-h-screen': {
              minHeight: 'calc(var(--vh, 1vh) * 100)',
            },
          },
        ]

        addUtilities(heightUtilities, variants('height'))
      },
      {
        theme: {
          glowOpacity: (theme) => theme('opacity'),
          glowSize: {
            sm: '2px',
            DEFAULT: '3px',
            md: '5px',
            lg: '10px',
            xl: '20px',
            '2xl': '40px',
          },
        },
        variants: {
          glowOpacity: ['dark'],
          glowSize: ['dark'],
        },
      }
    ),
  ],
}
