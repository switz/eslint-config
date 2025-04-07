import react from "eslint-plugin-react";
import main from "./eslint.config.mjs";
// import tailwind from './tailwind.mjs';

export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  ...main,
  // ...tailwind,
  {
    rules: {
      "react/display-name": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
