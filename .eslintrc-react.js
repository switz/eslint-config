module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    './eslintrc.js',
    'plugin:react/recommended',
  ],
  rules: {
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
