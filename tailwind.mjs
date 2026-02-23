import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // enable all recommended rules
    extends: [eslintPluginBetterTailwindcss.configs.recommended],

    // if needed, override rules to configure them individually
    rules: {
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100 }],
      // 'better-tailwindcss/enforce-shorthand-classes': ['error'],
    },

    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'src/styles/global.css',
      },
    },
  },
]);
