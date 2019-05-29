module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'react/display-name': 'off',
    'semi': ['error', 'always'],
    'space-before-blocks': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
