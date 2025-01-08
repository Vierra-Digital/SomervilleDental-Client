// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        elmessiri: ['El Messiri', 'sans-serif'],
      },
      animation: {
        showup: 'showup 7s infinite',
        slidein: 'slidein 7s infinite',
        reveal: 'reveal 7s infinite',
      },
      keyframes: {
        showup: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slidein: {
          '0%': { marginLeft: '-800px' },
          '20%': { marginLeft: '-800px' },
          '35%': { marginLeft: '0px' },
          '100%': { marginLeft: '0px' },
        },
        reveal: {
          '0%': { opacity: '0', width: '0px' },
          '20%': { opacity: '1', width: '0px' },
          '30%': { width: '355px' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', width: '355px' },
        },
      }
    },
  },
  plugins: [],
}