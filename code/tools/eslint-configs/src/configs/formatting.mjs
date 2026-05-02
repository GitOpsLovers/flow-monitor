import stylistic from '@stylistic/eslint-plugin'

const JS_TS_FILES = ['**/*.{js,mjs,ts}'];

/**
 * ESLint configuration for code formatting
 */
const formattingConfig = [
    {
        plugins: {
            '@stylistic': stylistic
        },
        files: JS_TS_FILES,
        rules: {
            'block-spacing': 'error',
            'comma-spacing': ['error', { before: false, after: true }],
            'comma-style': ['error', 'last', {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            }],
            'computed-property-spacing': ['error', 'never'],
            'dot-location': ['error', 'property'],
            'eol-last': ['error', 'always'],
            'function-call-argument-newline': ['error', 'consistent'],
            'function-paren-newline': ['error', 'multiline-arguments'],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'keyword-spacing': ['error', {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true },
                },
            }],
            'linebreak-style': ['error', 'unix'],
            'lines-around-directive': ['error', { before: 'always', after: 'always' }],
            'max-len': ['error', 150, 4, {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            }],
            'new-parens': 'error',
            'newline-per-chained-call': ['error', { ignoreChainWithDepth: 6 }],
            'no-floating-decimal': 'error',
            'no-mixed-spaces-and-tabs': 'error',
            'no-multi-spaces': ['error', { ignoreEOLComments: false }],
            'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
            'no-spaced-func': 'error',
            'no-tabs': 'error',
            'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
            'no-whitespace-before-property': 'error',
            'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
            'object-curly-spacing': ['error', 'always'],
            'object-curly-newline': ['error', {
                ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
                ObjectPattern: { minProperties: 5, multiline: true, consistent: true },
                ImportDeclaration: { minProperties: 8, multiline: true, consistent: true },
                ExportDeclaration: { minProperties: 8, multiline: true, consistent: true },
            }],
            'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
            'padded-blocks': ['error', {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            }, { allowSingleLineBlocks: true }],
            semi: ['error', 'always'],
            'semi-spacing': ['error', { before: false, after: true }],
            'semi-style': ['error', 'last'],
            'space-before-blocks': 'error',
            'space-in-parens': ['error', 'never'],
            'space-unary-ops': ['error', { words: true, nonwords: false, overrides: {} }],
            'spaced-comment': ['error', 'always', {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', '/'],
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', ':', '::'],
                    balanced: true,
                },
            }],
            'switch-colon-spacing': ['error', { after: true, before: false }],
            'template-tag-spacing': ['error', 'never'],
            'unicode-bom': ['error', 'never'],
            '@stylistic/indent': ['error', 4],
        },
    },
];

export default formattingConfig;