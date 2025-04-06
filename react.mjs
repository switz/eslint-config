import react from 'eslint-plugin-react';
import main from './eslint.config.mjs';

export default [
  ...main,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    rules: {
      'react/display-name': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
