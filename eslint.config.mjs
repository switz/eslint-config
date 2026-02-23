// @ts-check

import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

import tseslint from 'typescript-eslint';

/**
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    rules: {
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
      'no-var': ['error'],
      'no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'prefer-arrow-callback': ['error'],
      'no-template-curly-in-string': ['error'],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
  ...tseslint.configs.recommended,
  prettierPlugin,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          quoteProps: 'consistent',
          endOfLine: 'auto',
        },
      ],
    },
  },
];
