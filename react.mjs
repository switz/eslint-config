import react from 'eslint-plugin-react';
// import tailwind from './tailwind.mjs';

export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  // ...tailwind,
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
