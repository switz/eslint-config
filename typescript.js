module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    './eslintrc.js',
  ],
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures.jsx': true,
  },
  plugins: ['@typescript-eslint'],
};
