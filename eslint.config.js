import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: 8,
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          quoteProps: 'consistent',
          endOfLine: 'auto',
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
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
  },
];
