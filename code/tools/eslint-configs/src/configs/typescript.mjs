import tseslint from 'typescript-eslint';

const TS_FILES = ['**/*.ts'];

/**
 * Configuration for TypeScript
 */
const typescriptConfig = [
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
].map(config => ({
    ...config,
    files: TS_FILES,
}));

export default typescriptConfig;