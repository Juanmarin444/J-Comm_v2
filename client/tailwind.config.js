/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        // For the main text
        'hero-h1': 'clamp(20px, 4.21vw, 80px)', // min: 20px, scales with 1rem + 4vw, max: 80px
        // For the sub text
        'hero-p': 'clamp(16px, 0.5rem + 2vw, 40px)', // min: 16px, scales with 0.5rem + 2vw, max: 40px
        // For page main text
        'page-h1': 'clamp(24px, 4.21vw, 80px)', // min: 24px, scales with 1rem + 4vw, max: 90px
        // For page sub text
        'page-p': 'clamp(16px, 0.5rem + 2vw, 28px)', // min: 16px, scales with 0.5rem + 2vw, max: 20px
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

