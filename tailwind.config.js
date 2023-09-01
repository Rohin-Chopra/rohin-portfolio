/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-90": "90vh",
      },
      colors: {
        light: "#397db9",
        dark: "#121212",
        darkGray: "#181823",
        primary: "#5221E6",
        danger: "#dc3545",
        transparent: "transparent",
        dracula: "#282a36",
      },
    },

    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
