import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind';

export default [
  {
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      // enable all recommended rules to warn
      ...eslintPluginReadableTailwind.configs.warning.rules,
      // enable all recommended rules to error
      ...eslintPluginReadableTailwind.configs.error.rules,
      // disabled because this conflicts with prettier. not worth the headache
      'readable-tailwind/multiline': ['off'],
    },
  },
];
