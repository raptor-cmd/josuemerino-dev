/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00E5FF',
          dark: '#00B8D9',
        },
        violet: {
          DEFAULT: '#A855F7',
          dark: '#7C3AED',
        },
        surface: {
          dark: '#080C18',
          card: 'rgba(255,255,255,0.04)',
          light: '#F0F2F7',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

