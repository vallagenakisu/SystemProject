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
        primary: "#F36259", // Custom dark blue
        secondary: "#EED8C7", // Custom light gray
        //accent: "#FB923C", // Custom coral
        highlight: "black", // Custom blue
        //success: "#34D399", // Custom green
        //error: "#EF4444", // Custom red
      },
    },
  },
  plugins: [],
};
