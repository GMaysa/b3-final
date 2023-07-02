/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs", "flowbite/plugin")],
};
