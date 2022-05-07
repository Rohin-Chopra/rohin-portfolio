module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './lib/**/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-90': '90vh',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000',
      dark: '#121212',
      darkGray: '#181823',
      gray: '#8B8B91',
      primary: '#5221E6',
      danger: '#dc3545',
      transparent: 'transparent',
      linkedin: '#0077b5',
      github: '#171515',
      javascript: '#f0db4f',
      typescript: '#007acc',
      react: '#007acc',
      gatsby: '#663399',
      nodejs: '##68a063',
      bootstrap: '##563d7c',
    },
    fontFamily: {
      display: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
