/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      colors: {
        orange: { DEFAULT: '#E8772E', light: '#F59E0B', dark: '#C55A1B' },
        navy: { DEFAULT: '#1a1a2e', light: '#2d2d4e', dark: '#0f0f1a' },
        purple: { DEFAULT: '#7C3AED', light: '#A78BFA' },
        light: { DEFAULT: '#F8F9FA', warm: '#FFF8F0' },
      },
    },
  },
  plugins: [],
}
