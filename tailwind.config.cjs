/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    colors: {
      primary: "#0D0D2B",
      secondary: "#2B076E",
      accent: "#3671E9",
      light: "#FFF",
      lightBg: "linear-gradient(180deg, #F8F9FB 0%, #FAFBFF 100%)",
      gray: {
        100: "#F2F2F2",
        200: "#E0E0E0",
        300: "#BDBDBD",
        400: "#828282",
      },
    },
    fontSize: {
      "head-1": "64px",
      "head-2": "40px",
      "head-3": "32px",

      "title-lg": "32px",
      "title-sm": "16px",

      "body-lg": "20px",
      "body-md": "18px",
      "body-sm": "16px",
    },
    extend: {
      fontFamily: {
        sans: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
