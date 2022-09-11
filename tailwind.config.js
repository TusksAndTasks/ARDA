/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'general': ['Roboto-Regular', 'sans-serif'],
        'titular': ['Oswald-SemiBold', 'serif'],
        'general-bold': ['Roboto-Black', 'sans-serif'],
        'general-medium': ['Roboto-Medium', 'sans-serif']
      },
      colors: {
        gold: '#FBBC32',
        bronze: '#DC7D1C',
        lightgold: '#F6E5CC',
        lightbronze: '#C08741'
      },
      screens: {
        xsm: {min: '420px', max: '639px'},
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
      }),
      filter:{
        'gold': 'invert(93%) sepia(7%) saturate(6422%) hue-rotate(329deg) brightness(99%) contrast(100%)'
      },
      backgroundImage: {
        'triangle-pattern': "url('../public/images/pattern.png')"
      },
      backgroundSize: {
        "partial-pattern": "556px",
        "partial-pattern-xl": "450px",
        "partial-pattern-lg": "340px",
        "partial-pattern-md": "260px",
        "partial-pattern-xsm": "190px",
      },
      backgroundPosition: {
        "pattern-pos": "-60px -70px",
        "pattern-pos-sm": "-60px 330px",
        "pattern-pos-xl": "-135px",
        "pattern-pos-lg": "-65px 230px",
        "pattern-pos-md": "-70px 250px",
        "partial-pos-xsm": "-44px -54px"
      }
    },
    dropShadow: {
      'point-shadow': '5px 0px 0px #000'
    },

  },
  plugins: [
  require('@tailwindcss/forms')
  ],
}
