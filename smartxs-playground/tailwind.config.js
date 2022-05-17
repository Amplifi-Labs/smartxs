module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xs: ['.75rem', {lineHeight: '1rem'}],
      },
      colors: {
        'light-blue-100': '#E0F2FE',
        'primary-700': '#0369A1',
        'primary-800': '#075985',
        'primary-900': '#0C4A6E',
        'secondary-700': '#C2410C',
      },
    },
  },
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
