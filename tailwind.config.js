const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    colors: {
      primary: "#fef7ea",
      secondary: "#f6c99b",
      black: colors.black,
    },
    extend: {
      fontFamily: {
        "special-elite": ['"Special Elite"', "cursive"],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"]
    },
  },
  plugins: [],
};
