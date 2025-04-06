import main from './eslint.config.mjs';
import tseslint from 'typescript-eslint';

export default [
  main,
  tseslint.configs.recommended,
  {
    rules: {
      'indent': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
