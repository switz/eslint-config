import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';
import main from './eslint.config.mjs';

export default [main, eslintPluginTailwindCSS.configs['flat/recommended']];
