/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff9d', // neon green
          dark: '#00cc7d',
        },
        secondary: {
          DEFAULT: '#00d4ff', // neon blue
          dark: '#00a8cc',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 