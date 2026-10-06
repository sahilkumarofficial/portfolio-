/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050B14',
        bgSecondary: '#07111F',
        brandPrimary: '#2563EB',
        brandSecondary: '#06B6D4',
        brandAccent: '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
