const prettierConfig = require('./prettier.config');

module.exports = {
  extends: ['eslint:recommended'],
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'comma-spacing': ['error'],
    // 'eol-last': ['error', 'always'],
    // 'indent': ['error', 2],
    // 'key-spacing': ['error'],
    // 'keyword-spacing': ['error'],
    // 'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': 'warn',
    // 'no-multiple-empty-lines': [
    //   'error',
    //   {
    //     max: 2,
    //     maxBOF: 0,
    //     maxEOF: 0,
    //   },
    // ],
    // 'no-trailing-spaces': ['error'],
    'no-var': ['error'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    // 'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    // 'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    // 'semi': ['error', 'always'],
    // 'space-before-blocks': ['error'],
  },
};
