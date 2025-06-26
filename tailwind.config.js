/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF", // Innowise blue
        secondary: "#4DD0E1", // Light blue
        accent: "#FF5252", // Accent red
        dark: "#1F2937", // gray-800
        light: "#F9FAFB", // gray-50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        ui: ['Roboto', 'sans-serif'],
      },
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Add text shadow plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-lg': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.25)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}