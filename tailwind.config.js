/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        chiper: ["chiper", "sans-serif"],
      },
      colors: {
        "brand-800": "#1D9BF0",
        "brand-900": "#1A8DDA",
      },
      gridColumn: {
        "span-3/4": "span 3 / span 4",
      },
    },
  },
  plugins: [],
};
