/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': '#00008B',
        'text-color': '#040720',
        'link-color': '#F70D1A',
        'pera-color': '#808080',

      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif",
        'lato': "'Lato', sans-serif",
        'oswald': "'Oswald', sans-serif",
        
      },

    },
  },
  plugins: [],
}

