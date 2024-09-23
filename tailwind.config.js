/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        base: {
          100: "#d0d0d1",
          200: "#a1a1a3",
          300: "#737274",
          400: "#2c2c2f",
          500: "#151418",
          600: "#111013",
          700: "#0d0c0e",
          800: "#08080a",
          900: "#040405",
        },
        secondary: {
          100: "#e1f8cf",
          200: "#c3f19f",
          300: "#acf773",
          400: "#86e33e",
          500: "#68dc0e",
          600: "#53b00b",
          700: "#3e8408",
          800: "#2a5806",
          900: "#152c03",
        },
      },
    },
  },
  plugins: [],
};
