/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7EB572",
        secondary: "#413E76",
        light: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
