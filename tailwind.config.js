/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     'sky-600': "#20a7db",
     'sky-500': "#20a7db",
     'sky-400': "#62c1e5",
     'sky-300': "#a0d9ef",
     'sky-200': "#cfecf7",
     "gray-dark": "#444444",
     "gray-light":"#999999",
     "light-color":"#ffffff"
    },
    fontFamily: {
      Lobster: ["Lobster", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}