module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-90": "90vh",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000",
      dark: "#121212",
      darkGray: "#181823",
      gray: "#8B8B91",
      primary: "#5221E6",
      danger: "#dc3545",
      transparent: "transparent",
    },
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
