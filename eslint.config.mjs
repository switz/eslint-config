import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';
import globals from 'globals';

import tseslint from 'typescript-eslint';

// export default (main, tseslint.configs.recommended, {
//   rules: {
//     'indent': 'off',
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
//     '@typescript-eslint/indent': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/camelcase': 'off',
//     '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
//     '@typescript-eslint/no-empty-function': 'off',
//   },
// });

export default tseslint.config(
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
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      // enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      // enable all recommended rules to error
      ...eslintPluginReadableTailwind.configs.error.rules,
      'readable-tailwind/multiline': ['off'],
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
          // plugins: ['prettier-plugin-tailwindcss'],
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          quoteProps: 'consistent',
          endOfLine: 'auto',
        },
      ],
    },
  }
);
