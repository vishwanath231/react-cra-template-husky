import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["build/*", "src/components/ui"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: prettierPlugin,
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
    },
    extends: ["js/recommended", tseslint.configs.recommended, pluginReact.configs.flat.recommended],
    rules: {
      "react/prop-types": "warn",
      "no-console": "warn",
      //* Avoid Bugs
      "no-undef": "error",
      semi: "error",
      "semi-spacing": "error",
      //* Best Practices
      eqeqeq: "warn",
      "no-invalid-this": "error",
      "no-return-assign": "error",
      "no-unused-expressions": ["error", { allowTernary: true }],
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-constant-condition": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "req|res|next|__" }],
      //* Enhance Readability
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-mixed-spaces-and-tabs": "warn",
      "space-before-blocks": "error",
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      quotes: ["warn", "double"],
      //
      "max-len": ["error", { code: 200 }],
      "max-lines": ["error", { max: 1000 }],
      "keyword-spacing": "error",
      "multiline-ternary": ["error", "never"],
      "no-mixed-operators": "error",
      //
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": "error",
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      //* ES6
      "arrow-spacing": "error",
      "no-confusing-arrow": "error",
      "no-duplicate-imports": "error",
      "no-var": "error",
      "object-shorthand": "off",
      "prefer-const": "error",
      "prefer-template": "warn",
      //* Prettier
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
]);
