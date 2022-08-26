/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'general': ['Roboto-Regular', 'sans-serif'],
        'titular': ['Oswald-SemiBold', 'serif']
      },
      colors: {
        gold: '#FBBC32',
        bronze: '#DC7D1C',
        lightgold: '#F6E5CC',
        lightbronze: '#C08741'
      },
      screens: {
        lg: '980px',
        xl: '1440px',
      },
      container: {
        center: true,
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'transparent': 'rgba(255,255,255,0)',
        'light-gray': 'rgba(124,124,124,0.3)',
        'light-black': 'rgba(0,0,0,0.3)',
      })
    },
    dropShadow: {
      'point-shadow': '5px 0px 0px #000'
    }
  },
  plugins: [],
}
