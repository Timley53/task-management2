/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    screens :{
      'xs': '400px',
      'sm': '640px',
      'md': '760px',
      'lg': '1024px',
      'xl': '1280px',
      
    },
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
],}
