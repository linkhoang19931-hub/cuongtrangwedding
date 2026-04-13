/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        gold: {
          light: '#D4AF37',
          DEFAULT: '#B8860B',
          dark: '#8B6508',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
