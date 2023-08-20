module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-90": "90vh",
      },
      colors: {
        dark: "#121212",
        darkGray: "#181823",
        primary: "#5221E6",
        danger: "#dc3545",
        transparent: "transparent",
      },
    },

    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
