import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

/**
 * Node.js ESLint preset
 */
export default defineConfig(
    {
        ignores: ['.turbo/', 'dist/', 'node_modules/'],
    },
    js.configs.recommended,
    tseslint.configs.recommended,
);