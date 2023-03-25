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
      gridAutoRows: {
        "rows-10": "grid-template-rows: repeat(10, minmax(0, 1fr));",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
      },
    },
  },
  plugins: [],
};
