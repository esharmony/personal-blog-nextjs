module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        'my-orange':'#f8b500'
      },
      fontFamily: {
        mainFont: ["inter", "sans-serif"],
        headerFont: ["parisienne", "cursive"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
