import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

const tsconfigRootDir = process.cwd();

export default [
  {
    // Global settings for all files
    files: ["**/*.{js,jsx,ts,tsx,astro}"],
    ignores: ["**/node_modules/**", "**/dist/**"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      astro: eslintPluginAstro,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      parserOptions: {
        tsconfigRootDir,
        project: "./tsconfig.json",
      },
    },
    settings: {
      react: {
        version: "19.0",
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...eslintPluginAstro.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir,
        ecmaFeatures: {
          jsx: true,
        },
        allowImportingTsExtensions: true,
        stylistic: true,
      },
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
      "import/no-unresolved": ["error", { ignore: ["\\.css$"] }],
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
        tsconfigRootDir,
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir,
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
];
