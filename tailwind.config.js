const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const typography = require('@tailwindcss/typography');

const { TAILWIND_BREAKPOINTS } = require('./src/styles/styles.config');

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    './src/components/**/*.@(tsx|ts)',
    './src/containers/**/*.@(tsx|ts)',
    './src/layouts/**/*.@(tsx|ts)',
    './src/pages/**/*.tsx',
  ],
  plugins: [forms, lineClamp, typography],
  theme: {
    screens: TAILWIND_BREAKPOINTS,
    fontFamily: {
      sans: ['SpaceGrotesk'],
      semibold: ['SpaceGrotesk-SemiBold'],
      bold: ['SpaceGrotesk-Bold'],
    },
    fontSize: {
      sm: [
        '0.75rem',
        {
          lineHeight: '1.125rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2lg': [
        '1.5rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      xl: [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '2xl': [
        '2.5rem',
        {
          lineHeight: '3rem',
        },
      ],
      '3xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '4xl': [
        '3.5rem',
        {
          lineHeight: '4rem',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFEFA',
      brand: {
        700: '#00CC99',
        800: '#00bd90',
        900: '#03af87',
      },
      beige: '#F0EDE8',
      blue: {
        200: '#D6F1F3',
        400: '#A2E6EE',
        600: '#4FB8DA',
        800: '#2078AC',
      },
      brown: {
        200: '#FBE4C9',
        400: '#F0B884',
      },
      cream: {
        400: '#F9F7F3',
        700: '#E1DDD5',
      },
      forest: {
        200: '#C1ECD2',
        400: '#60CBA5',
      },
      grassland: {
        200: '#F1FABE',
        400: '#C9EC80',
      },
      gray: {
        100: '#F6F5F2',
        400: '#CAC9C8',
        600: '#7D898D',
        800: '#263C44',
        900: '#1E2D3A',
      },
      red: {
        600: '#E23248',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
  },
};
