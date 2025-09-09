/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'portfolio': {
          'dark': '#0f0f0f',
          'darker': '#1c1c1c',
          'card': '#1e1e1e',
          'input': '#2e2e2e',
          'gold': '#f1c40f',
          'gold-light': '#f9e79f',
          'gold-hover': '#f39c12',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};