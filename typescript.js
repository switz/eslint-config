module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    './eslintrc.js',
  ],
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures.jsx': true,
  },
  plugins: ['@typescript-eslint'],
};
