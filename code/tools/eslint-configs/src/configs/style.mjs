import preferArrow from 'eslint-plugin-prefer-arrow'

const JS_TS_FILES = ['**/*.{js,mjs,ts}'];

/**
 * ESLint configuration for code style
 */
const styleConfig = [
    {
        plugins: {
            'prefer-arrow': preferArrow,
        },
        files: JS_TS_FILES,
        rules: {
            camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
            'capitalized-comments': 'off',
            'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
            'implicit-arrow-linebreak': ['off', 'beside'],
            'new-cap': ['error', {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            }],
            'no-bitwise': 'error',
            'no-mixed-operators': ['error', {
                groups: [
                    ['%', '**'], ['%', '+'], ['%', '-'], ['%', '*'], ['%', '/'],
                    ['/', '*'],
                    ['&', '|', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!=='],
                    ['&&', '||'],
                ],
                allowSamePrecedence: false,
            }],
            'no-nested-ternary': 'error',
            'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            'one-var': ['error', 'never'],
            'one-var-declaration-per-line': ['error', 'always'],
            'prefer-object-spread': 'error',
            'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
            radix: ['error', 'as-needed'],
            yoda: 'error',
            'prefer-arrow/prefer-arrow-functions': [
                'error',
                {
                    allowStandaloneDeclarations: true,
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
        },
    },
];

export default styleConfig;