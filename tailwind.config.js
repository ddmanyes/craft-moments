/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
    "./assets/js/**/*.{js,jsx,ts,tsx}",
    "./themes/dream/layouts/**/*.html",
    "./themes/dream/assets/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        textMain: 'var(--color-textMain)',
        cardBg: 'var(--color-card-bg)',
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['Inter', '"Noto Sans TC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
