/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter','sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        nlwGradient:'linear-gradient(89.86deg, #9572FC 15%, #43E7AD 80%, #E1D55D 50%)',
        gameGradient:'linear-gradient(188deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.88%)'
      }
    },
  },
  plugins: [],
}
