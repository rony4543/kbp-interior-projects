/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        chillax: ['"Chillax"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffbe6',
          100: '#fff3c2',
          200: '#ffe685',
          300: '#ffd447',
          400: '#ffbd1a',
          500: '#D4AF37',
          600: '#b89020',
          700: '#916b14',
          800: '#735115',
          900: '#5c4117',
        }
      }
    },
  },
  plugins: [],
}
