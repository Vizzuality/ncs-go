const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');

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
  plugins: [forms, lineClamp],
  theme: {
    screens: TAILWIND_BREAKPOINTS,
    fontFamily: {
      sans: ['SpaceGrotesk'],
      semibold: ['SpaceGrotesk-SemiBold'],
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
      xl: [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '2xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '3xl': [
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
      white: '#FFFFFF',
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
      forest: {
        200: '#C1ECD2',
        400: '#61CF77',
      },
      grassland: {
        200: '#F1FABE',
        400: '#C9EC80',
      },
      gray: {
        100: '#F6F5F2',
        400: '#CAC9C8',
        800: '#263C44',
        900: '#1E2D3A',
      },
      red: {
        600: '#E23248',
      },
    },
  },
};
