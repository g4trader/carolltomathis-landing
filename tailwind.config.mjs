/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5f7",
          100: "#ffe4ec",
          200: "#ffbdd0",
          300: "#ff94b3",
          400: "#ff6b96",
          500: "#ff3f7b",
          600: "#e02662",
          700: "#b81a4f",
          800: "#8f123e",
          900: "#66082d"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;