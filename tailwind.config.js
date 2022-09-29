/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    fontFamily: {
      sans: ['Syne', 'sans-serif'],
      wordMark: ['Mulish', 'sans-serif'],
      mono: 'monospace',
      defaultSans:
        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      heading: "'League Gothic', serif",
      syne: 'Syne, serif',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
