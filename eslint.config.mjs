import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginNext from "@next/eslint-plugin-next";

export default defineConfig([
  {
    extends: [
      eslintPluginNext.flatConfig.coreWebVitals,
      eslintPluginNext.flatConfig.recommended,
    ],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
]);
