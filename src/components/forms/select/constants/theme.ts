const THEME = {
  dark: {
    container:
      'block w-full h-16 px-4 py-4 m-0 font-sans text-lg text-gray-400 transition ease-in-out bg-gray-800 bg-no-repeat border border-gray-800 rounded-lg appearance-none bg-clip-padding focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700',
    open: 'ring-2 ring-brand-700 bg-gray-800 text-gray-400 rounded-lg pt-0',
    closed: 'border-gray-400 text-gray-400',
    prefix: {
      base: 'text-white',
    },
    icon: {
      closed: 'text-white',
      open: 'text-blue-500 transform rotate-180',
      disabled: 'text-gray-400',
    },
    item: {
      base: 'text-base text-gray-400',
      highlighted: 'text-base bg-gray-700 text-white',
      disabled: 'text-base opacity-50 pointer-events-none',
    },
  },
  light: {
    container: 'text-gray-600 bg-transparent ring-1 ring-gray-400 rounded-3xl',
    open: 'ring-2 ring-blue-400 bg-white text-gray-600 rounded-2xl',
    closed: 'text-gray-400',
    prefix: {
      base: 'text-gray-800',
    },
    icon: {
      closed: 'text-gray-600',
      open: 'text-blue-500 transform rotate-180',
      disabled: 'text-gray-400',
    },
    item: {
      base: 'text-sm text-gray-400',
      highlighted: 'text-sm bg-gray-100 text-gray-800',
      disabled: 'text-sm opacity-50 pointer-events-none',
    },
  },
  states: {
    none: '',
    error: 'ring-red-500',
    valid: 'ring-green-500',
  },
  sizes: {
    base: 'pr-10 pl-4 py-2 text-base',
    s: 'pl-4 pr-10 py-1.5 text-sm',
  },
};

export default THEME;
