/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#B19CD9', // Muted Lavender as Primary
        },
        accent: {
          dark: '#DCC6E0', // Soft Lavender for accent
        },
        background: {
          dark: '#121212', // Dark Gray
        },
        text: {
          dark: '#E0E0E0', // Light Gray for text
        },
        muted: {
          dark: '#A3A3A3', // Dimmed Text
        },
        error: {
          dark: '#E57373', // Bright Red for error
        },
      },
    },

  },
  plugins: [],
}