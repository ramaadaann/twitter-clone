/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-800": "#1D9BF0",
        "brand-900": "#1A8DDA",
      },
    },
  },
  plugins: [],
};
