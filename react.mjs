import main from './eslint.config.mjs';
import react from 'eslint-plugin-react';

export default [
  ...main,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    rules: {
      'react/display-name': 'off',
    },
  },
];
