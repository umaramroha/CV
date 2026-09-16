/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0A4D3C',
          dark: '#073A2D',
          light: '#146B54',
        },
        terracotta: {
          DEFAULT: '#E07A5F',
          dark: '#C4624A',
        },
        cream: {
          DEFAULT: '#F8F5F0',
          dark: '#EDE8E0',
        },
        ink: '#1A1A1A',
        stone: '#2D2A26',
        muted: '#6B6560',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(10, 77, 60, 0.4)' },
          '70%': { boxShadow: '0 0 0 6px rgba(10, 77, 60, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(10, 77, 60, 0)' },
        },
      },
    },
  },
  plugins: [],
}
