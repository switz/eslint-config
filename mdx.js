module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['./eslintrc.js', 'plugin:react/recommended', 'plugin:mdx/recommended', 'prettier'],
  rules: {
    'react/display-name': 'off',
  },
  settings: {
    'mdx/code-blocks': true,
    'react': {
      version: 'detect',
    },
  },
};
