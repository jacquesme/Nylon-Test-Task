module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'faux': ['Relative-faux'],
    },
    fontSize: {
      'xs': '.7rem',
      'sm': '1rem',
      'xl': '2.5rem',
      '2xl': '3rem',
    },
    letterSpacing: {
      tighter: '-.04em',
    },
    screens: {
      'sm': '768px',
      'md': '1025px',
      'lg': '1352px',
    },
    extend: {
      width: {
        'sm': '200px',
        'md': '825px',
      },
      maxWidth: {
        '82.5': '1320px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
