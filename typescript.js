module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    './eslintrc.js'
  ],
  rules: {
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    'ecmaFeatures.jsx': true
  },
  plugins: ["@typescript-eslint"]
};
