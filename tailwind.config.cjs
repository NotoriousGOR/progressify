/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  darkMode: "class",
  daisyui: {
    themes: ["cupcake", "dark", "pastel"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
