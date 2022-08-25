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
    },
  },
  plugins: [],
}
