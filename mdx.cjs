module.exports = {
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
    "mdx/language-mapper": {},
    'react': {
      version: 'detect',
    },
  },
};
