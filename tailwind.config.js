/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: "#F5E6D3",
        darkBeige: "#D4B89F",
        lightWhite: "#FFFFFF",
        shadowedWhite: "#F2F2F2",
        lightGrey: "#D9D9D9",
        darkGrey: "#A6A6A6",
        suitDetails: "#808080",
        nightSky: "#2C3E50",
        lighterNightSky: "#34495E",
        lightMoonSurface: "#F5F5F5",
        darkMoonSurface: "#BFBFBF",
        darkGreen: "#2E8B57",
        lightGreen: "#3CB371",
        whiteStars: "#FFFFFF",
        faintStars: "#DCDCDC"
      }
    },
  },
  plugins: [],
}
