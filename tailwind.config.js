/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1D9BF0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
