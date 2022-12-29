/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('https://wallpaperaccess.com/full/2391514.jpg')",
      }
    },
  },
  plugins: [],
}
