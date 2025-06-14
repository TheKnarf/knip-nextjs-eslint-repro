import { defineConfig } from "eslint/config";
import eslintPluginNext from "@next/eslint-plugin-next";

export default defineConfig([
  {
    extends: [
      eslintPluginNext.flatConfig.coreWebVitals,
      eslintPluginNext.flatConfig.recommended,
    ],
  },
]);
