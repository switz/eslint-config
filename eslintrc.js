module.exports = {
  extends: [
    'eslint:recommended',
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
    'max-len': ['error', { code: 100 }],
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
    'semi': ['error', 'always'],
    'space-before-blocks': ['error'],
  },
};
