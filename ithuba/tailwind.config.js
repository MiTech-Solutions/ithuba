/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f2f7f2",
          100: "#e0ede0",
          200: "#c2dbc3",
          300: "#96c097",
          400: "#639f65",
          500: "#3f7e42",
          600: "#2d6330",
          700: "#254f28",
          800: "#1e3f21",
          900: "#19341b",
          950: "#0d1f0e",
        },
        gold: {
          50:  "#fdfaee",
          100: "#f9f0cc",
          200: "#f3de8a",
          300: "#edc847",
          400: "#e5b020",
          500: "#ca8f12",
          600: "#a86d0d",
          700: "#864f0e",
          800: "#6f3f12",
          900: "#5e3414",
          950: "#361a07",
        },
        cream: "#faf8f3",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
