import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import basePreset from './base.mjs';
import basics from '../configs/basics.mjs';
import { defineConfig } from 'eslint/config';

/**
 * Node.js ESLint preset
 */
export default defineConfig(
    ...basePreset,
    ...basics
);