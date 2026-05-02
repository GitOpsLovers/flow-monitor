import jsdoc from 'eslint-plugin-jsdoc';

const JS_TS_FILES = ['**/*.{js,mjs,ts}'];

/**
 * Configuration for JSDoc comments
 */
const jsdocConfig = [
  {
    plugins: {
      jsdoc,
    },
    files: JS_TS_FILES,
    rules: {
      'jsdoc/no-types': 'error',
    },
  },
];

export default jsdocConfig;