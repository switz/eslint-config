module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: [
    './eslintrc.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    'ecmaFeatures.jsx': true
  },
  plugins: ["@typescript-eslint"]
};
