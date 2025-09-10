/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#1e293b',
        },
        'pink': {
          500: '#ec4899',
        },
      },
    },
  },
  plugins: [],
}