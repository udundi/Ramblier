/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-', // prefix for all utility classes
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.liquid',
    './blocks/**/*.liquid',
    './assets/**/*.js',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      brand: {
        navy: '#0F214D',
        forest: '#283f22',
        Beige: '#edeae4',
        gray: '#909090',
      },
    },
    fontSize: {
      8: '0.5rem', // 8px
      10: '0.625rem', // 10px
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      26: '1.625rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      55: '3.4375rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
    },
    extend: {
      animation: {
        'fade-in': 'animation: 3s infinite alternate fade-in',
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      transitionProperty: {
        button: 'background-color, transform, border-color, color',
        size: 'width, height, max-width, max-height',
      },
      maxWidth: {
        'container-xl': 'min(87.5rem, 90%)',
        'container-lg': 'min(72.75rem, 90%)',
        'container-md': 'min(65.25rem, 90%)',
        'container-sm': 'min(43.125rem, 90%)',
        'screen-3xl': '1920px',
      },
      maxHeight: {
        'container-xl': 'min(87.5rem, 90%)',
        'container-lg': 'min(72.75rem, 90%)',
        'container-md': 'min(65.25rem, 90%)',
        'container-sm': 'min(43.125rem, 90%)',
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
        poppins: ['"Poppins"', 'sans-serif'],
        noto: ['"Noto Serif"', 'serif'],
        'dear-jocelyn': ['"Dear Jocelyn"', 'cursive'],
        // playfair: ['Playfair Display', 'serif'],
        // interstate: ['"Interstate"', 'sans-serif'],
        // cadet: ['Cadet', 'sans-serif'],
        // cadet_bold: ['Cadet Bold', 'sans-serif'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '3/8': '3 / 8',
        '9/16': '9 / 16',
        '8/3': '8 / 3',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
