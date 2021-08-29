module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#161b22",
      },
      fontFamily: {
        'classic': ['sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
