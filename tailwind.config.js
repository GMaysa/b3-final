/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      smm: {'max': '426px'},
      // maxMd: {'max': '768px'}, 
      //maxwidth dio
      xs: '320px',
      sm: "426px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
