import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsonConfig from '../configs/json.mjs';
import packageJsonConfig from '../configs/package-json.mjs';
import { defineConfig } from 'eslint/config';

/**
 * Base ESLint preset
 */
export default defineConfig(
    {
        ignores: ['.turbo/', 'dist/', 'node_modules/'],
    },
    ...jsonConfig,
    ...packageJsonConfig
);