import base from './eslint.config';
import react from 'eslint-plugin-react';

export default [
  base,
  react,
  {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ['./eslintrc.cjs', 'plugin:react/recommended', 'plugin:mdx/recommended', 'prettier'],
    rules: {
      'react/display-name': 'off',
    },
    settings: {
      'mdx/code-blocks': true,
      'react': {
        version: 'detect',
      },
    },
  },
];
