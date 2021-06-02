module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fill: (theme) => ({
      red: theme('colors.red.200'),
      green: theme('colors.green.500'),
      gray: theme('colors.gray.500'),
      white: theme('colors.white'),
      indigo: theme('colors.indigo.500'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
