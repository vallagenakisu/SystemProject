/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      small: "200px",
      med: "768px",
      large: "1000px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primarybgcolor: "#A5A5A5",
        secondarybgcolor: "#FFFFFF",
        primarytextcolor: "#000000",

      },
      animation: {
        fade: "fade 3s ease-in-out infinite", // Custom animation
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },  // Start as invisible
          "70%": { opacity: "1" }, // Fade in
          "100%": { opacity: "0" }, // Fade out
        },
      },
    },
  },
  plugins: [],
};
