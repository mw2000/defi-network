module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'defi-blue': '#3458D5',
        'defi-purple': '#8B47E2',
        'defi-dark': '#1D1929',
        'defi-light': '#C8C4D4'
      },
      fontFamily: {
        'neueMachina': 'NeueMachina'
      },
      height: {
        xxl: '36rem'
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-within'],
      textColor: ['hover'],
      // 'responsive', 'hover', 'focus', 
    }
  },
  plugins: [],
}
