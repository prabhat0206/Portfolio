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
        'project': "url('https://live.staticflickr.com/593/22654817303_ef1048b25b_b.jpg')",
      }
    },
  },
  plugins: [],
}
