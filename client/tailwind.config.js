/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      patua: ['Patua One', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-cover': "url('/images/wazaa.jpg')",
      },
    },
  },
  plugins: [],
};
