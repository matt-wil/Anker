/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          grotesk: 'var(--font-grotesk)',
          noto: 'var(--font-noto)',
          faculty: ['"Faculty Glyphic"', 'serif'],
        },
        colors: {
          ankerBlue: 'var(--ankerBlue)'
        },
      },
    },
    plugins: [],
  }