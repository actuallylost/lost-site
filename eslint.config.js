import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig(
	globalIgnores(["**/*.js", "**/*.d.ts", "node_modules/**", "out/**", ".next/**"]),
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {},
	},
);
