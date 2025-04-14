/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saans", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#5164DC",
          dark: "#2D3DA9",
          light: "#A9B4F4"
        }
      },
      backgroundImage: {
        hero: "url('/hero-poster.jpg')"
      }
    }
  },
  plugins: []
};
