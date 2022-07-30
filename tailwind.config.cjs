/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {    
      colors: {
      'cinzaYT1' : '#202020',
      'cinzaYT2' : '#181818',
      'cinzaYT3' : '#313131',
      'azulYT'   : '#3EA6FF',
      'cinzaYTP' : '#121212'
      
    },
  },

  },
  plugins: [],
}
