/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#053BA6",
      },
      fontFamily: {
        salsa: "Salsa",
        regular: "Inter400",
        medium: "Inter500",
      },
      backgroundImage: {
        main: "linear-gradient(180deg, #081228 18%, #030916 49%)",
      },
    },
  },
  plugins: [],
};
