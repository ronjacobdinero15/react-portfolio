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
          100: "#cecece",
          200: "#9d9d9d",
          300: "#6b6b6d",
          400: "#3a3a3c",
          500: "#09090b",
          600: "#070709",
          700: "#050507",
          800: "#040404",
          900: "#020202",
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
