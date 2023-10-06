/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['.9375rem', '1.75rem'],
      },
      keyframes: {
        moveup: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    colors: {
      black: {
        DEFAULT: '#000000',
        light: 'rgba(0,0,0,.5)',
        dark: 'rgba(0,0,0,.75)',
      },
      white: {
        DEFAULT: '#FFFFFF',
        700: 'rgba(255,255,255,.75)',
      },
      gray: '#303030',
    },
  },
  plugins: [],
  darkMode: 'class',
};
