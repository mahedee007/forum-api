/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily:{
        'mulish': ["Mulish", "sans-serif"],
        'inter': ["inter", "sans-serif"],
      },
      colors: {
        'primary': '#12132D',
        'secondary': '#797DFC',
        'body': '#F3F3F5',
        'logo': 'linear-gradient(90deg, #797DFC 0.63%, rgba(121, 125, 252, 0.00) 41%)'
      },
      backgroundImage:{
        'banner': "url(./images/bgbanner.png)",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}