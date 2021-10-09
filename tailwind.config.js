module.exports = {
  // purgecss.com
  purge: {
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
    safelist: {
      standard: [/.*(bg|text|w-).+/], // regexr.com/676ho
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
