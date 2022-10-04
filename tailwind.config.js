const aspectRatio = require('@tailwindcss/aspect-ratio');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');

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
  plugins: [aspectRatio, forms, lineClamp],
  theme: {
    fontFamily: {
      sans: ['Silka'],
      semibold: ['Silka-SemiBold'],
    },
    fontSize: {
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
      brand: '#5BC89C',
      blue: {
        200: '#CCECFA',
        400: '#8BDCFF',
      },
      brown: {
        200: '#F5E2AF',
        400: '#DAAA62',
      },
      gray: {
        100: '#F1F2F3',
        400: '#B5BBBF',
        800: '#2F3E4F',
        900: '#011426',
      },
      green: {
        200: '#BAE870',
        400: '#61CF77',
      },
      orange: {
        400: '#FFB053',
      },
      yellow: {
        400: '#FFE587',
      },
    },
  },
};
