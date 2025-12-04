/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#b8860b",
        "charcoal-dark": "#1a1a1a",
        "charcoal-medium": "#262626",
        "charcoal-light": "#333333",
        "gold-accent": "#d4af37",
        "off-white": "#f5f5dc",
        "background-dark": "#101010",
      },
      fontFamily: {
        "serif-display": ["Cormorant Garamond", "serif"],
        "sans-body": ["Poppins", "sans-serif"]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
