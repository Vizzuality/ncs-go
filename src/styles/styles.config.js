/**
 * This file contain Tailwind CSS variables that are shared between the JS bundle and the Tailwind
 * configuration file (tailwind.config.js). Only add here variables that you want to access from the
 * JS/TS files.
 *
 * Please follow the Tailwind syntax in this file.
 */
module.exports = {
  BREAKPOINTS: {
    xxs: 0,
    xs: 360,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  TAILWIND_BREAKPOINTS: {
    xxs: '0px',

    xs: '360px',
    // => @media (min-width: 360px) { ... }

    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
};
