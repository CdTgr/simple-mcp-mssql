import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      curly: "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "no-console": [
        "warn",
        { allow: ["warn", "error", "info", "time", "timeEnd"] },
      ],
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      pretier: prettier,
      "typescript-eslint": tseslint,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@?\\w"],
            ["^[^.]"],
            ["^\\u0000~", "^~"],
            ["^\\u0000\\.", "^\\."],
          ],
        },
      ],
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      curly: "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },
  {
    ignores: ["node_modules", "dist", "eslint.config.js"],
  }
);
