/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          offwhite: "#F9F7F2",
          moss: "#1B3022",
          sage: "#8A9A5B",
          sand: "#C2B280",
          dark: "#0F1A13",
          light: "#E9EEDC",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
