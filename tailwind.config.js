/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 14px 35px -18px rgba(15, 23, 42, 0.22)'
      },
      backgroundImage: {
        accent: 'linear-gradient(135deg, rgba(224,242,254,0.9), rgba(224,231,255,0.9))'
      }
    }
  },
  plugins: []
};