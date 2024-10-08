/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5e412f",
        secondary: "#fcebb6",
        slight: "#f2ebd5",
        sorange: "#ff8164",
        steal: "#6fbca2",
      },
    },
  },
  plugins: [],
};
