/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#057f77",
          secondary: "#76af2a",
          accent: "#da91ea",
          neutral: "#302833",
          "base-100": "#E8E8E9",
          info: "#ACC9E7",
          success: "#1FBD92",
          warning: "#F3B062",
          error: "#F66F98",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
