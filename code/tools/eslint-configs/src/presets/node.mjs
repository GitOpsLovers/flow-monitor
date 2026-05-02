import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import basePreset from './base.mjs';
import bestPracticesConfig from '../configs/best-practices.mjs';
import styleConfig from '../configs/style.mjs';
import jsdocConfig from '../configs/jsdoc.mjs';
import formattingConfig from '../configs/formatting.mjs';
import typescriptConfig from '../configs/typescript.mjs';
import importsConfig from '../configs/imports.mjs';
import { defineConfig } from 'eslint/config';

/**
 * Node.js ESLint preset
 */
export default defineConfig(
    ...basePreset,
    ...bestPracticesConfig,
    ...styleConfig,
    ...formattingConfig,
    ...jsdocConfig,
    ...typescriptConfig,
    ...importsConfig,
);