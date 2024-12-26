/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-fade': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        'about-bg': "url('./src/assets/images/stackofcloths.jpg') ",
      },
    },
  },
  plugins: [],
}