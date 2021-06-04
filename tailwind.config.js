module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'defi-blue': '#3458D5',
        'defi-purple': '#8B47E2'
        // 'vert-green':
        // {
        //   DEFAULT: '#06EAEA',
        //   light: '#b4f9f9',
        //   dark: '#03e1e1'
        // }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
