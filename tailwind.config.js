module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./lib/**/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
