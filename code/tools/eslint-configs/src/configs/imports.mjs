import unusedImports from 'eslint-plugin-unused-imports';
import importX from 'eslint-plugin-import-x';

const JS_TS_FILES = ['**/*.{js,mjs,ts}'];

/**
 * ESLint configuration for import rules
 */
const importsConfig = [
  {
    files: JS_TS_FILES,
    plugins: {
      'unused-imports': unusedImports,
      'import-x': importX,
    },
    settings: {
      'import-x/internal-regex': '^@(features|core)/',
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [
            'tsconfig.json',
          ],
        },
      },
    },
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/named': 'error',
      'import-x/default': 'off',
      'import-x/namespace': 'error',
      'import-x/no-restricted-paths': 'off',
      'import-x/no-absolute-path': 'error',
      'import-x/no-dynamic-require': 'error',
      'import-x/no-internal-modules': 'off',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-cycle': 'off',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-relative-packages': 'error',
      'import-x/export': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-unused-modules': 'off',
      'import-x/unambiguous': 'error',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-import-module-exports': 'error',
      'import-x/exports-last': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/extensions': [
        'error',
        'never',
        {
          json: 'always',
        },
      ],
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import-x/prefer-default-export': 'off',
      'import-x/max-dependencies': 'off',
      'import-x/no-unassigned-import': [
        'error',
        {
          allow: ['**/*.css', '**/*.scss'],
        },
      ],
      'import-x/no-named-default': 'off',
      'import-x/no-default-export': 'off',
      'import-x/no-named-export': 'off',
      'import-x/no-anonymous-default-export': 'error',
      'import-x/group-exports': 'off',
      'import-x/dynamic-import-chunkname': 'off',
    },
  },
];

export default importsConfig;