// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {}, // Додайте цей плагін перед Tailwind CSS
    'tailwindcss': {},
    'postcss-preset-env': {
      stage: 1,
    },
  },
};
