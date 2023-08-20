/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Island Moments', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-color': '#ff7e01',
        'secondary-color': '#faa935',
        'heading-color': '#0b2727',
        tcolor: '#6e7074',
      },
      screens: {
        xs: '420px',
        tablet: '600px',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill,auto)',
      },
    },
  },
  plugins: [],
}
