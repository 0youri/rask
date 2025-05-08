/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark': '#0A2E36',
        'primary-light': '#27FB6B',
        'primary': '#14CC60',
        'accent-light': '#09A129',
        'accent': '#036D19',
        'accent-red': '#830505',
      }
    },
  },
  plugins: [],
   
}