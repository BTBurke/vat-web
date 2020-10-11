module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base': '#211F30',
        'secondary': '#32384D',
        'accent-1': '#E29930',
        'accent-2': '#217CA3',
      },
    },
  },
  variants: {},
  plugins: [],
}
