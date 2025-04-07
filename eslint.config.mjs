import globals from 'globals';
import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
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
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
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

// export default {
//   plugins: ['prettier-plugin-tailwindcss'],
//   singleQuote: true,
//   trailingComma: 'es5',
//   printWidth: 100,
//   quoteProps: 'consistent',
//   endOfLine: 'auto',
// };
