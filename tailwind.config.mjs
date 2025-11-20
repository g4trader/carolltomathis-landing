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
          blush: "#f6d7cf",
          nude: "#e1b8a5",
          cocoa: "#b8876b",
          deep: "#472b2b"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(79, 38, 28, 0.28)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      keyframes: {
        "bg-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        "bg-flow": "bg-flow 18s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;