import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...reactPlugin.configs.recommended,
  ...reactHooksPlugin.configs.recommended,
  ...jsxA11yPlugin.configs.recommended,
  {
    files: ["*.astro", "*.tsx", "*.jsx"],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: tsParser,
      extraFileExtensions: [".astro"],
      sourceType: "module",
      project: "./tsconfig.json",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      node: true,
      "astro/astro": true,
      es2020: true,
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.astro/*.js", "*.astro/*.js", "*.jsx", "*.tsx"],
    env: {
      browser: true,
      es2020: true,
    },
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  {
    files: ["**/*.astro/*.ts", "*.astro/*.ts", "*.tsx"],
    parser: tsParser,
    parserOptions: {
      sourceType: "module",
      project: "./tsconfig.json",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2020: true,
    },
    processor: "astro/client-side-ts",
  },
];
