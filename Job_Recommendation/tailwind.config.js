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
        sidebarbgcolor:"#ffffff",
        dashboardbgcolor:"#f5f5f5",
        buttonvolor:"#ffd55a",
        buttonhovercolor: "#f4af1b",
        primarybgcolor: "#ebebef",
        secondarybgcolor: "#FFFFFF",
        primarytextcolor: "#000000",

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
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
