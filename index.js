module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'promise'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:sonarjs/recommended-legacy',
        'plugin:prettier/recommended',
    ],
    rules: {
        'array-callback-return': 'warn',
        'consistent-return': 'error',
        curly: 'error',
        'default-case': 'warn',
        'default-case-last': 'error',
        eqeqeq: 'warn',
        'no-await-in-loop': 'warn',
        'no-caller': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-constructor-return': 'error',
        'no-else-return': 'warn',
        'no-eq-null': 'warn',
        'no-eval': 'error',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-fallthrough': ['error', { commentPattern: '(break[\\s\\w]*omitted)|fallthrough' }],
        'no-floating-decimal': 'error',
        'no-global-assign': 'warn',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: true,
                skipRegExps: true,
                skipTemplates: true,
            },
        ],
        'no-iterator': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-promise-executor-return': 'warn',
        'no-proto': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-return-await': 'off',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-vars': 'off',
        'no-useless-backreference': 'warn',
        'no-useless-call': 'error',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'off',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-void': [
            'warn',
            {
                allowAsStatement: true,
            },
        ],
        'prefer-promise-reject-errors': 'error',
        'prefer-template': 'warn',
        radix: 'error',
        'require-atomic-updates': 'warn',
        'require-unicode-regexp': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],

        '@typescript-eslint/ban-tslint-comment': 'error',
        'class-methods-use-this': 'off',
        '@typescript-eslint/class-methods-use-this': [
            'warn',
            { ignoreOverrideMethods: true, ignoreClassesThatImplementAnInterface: true },
        ],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['warn', { allowKeywords: true }],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-loop-func': 'warn',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true,
                allowedNames: ['self'],
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': ['warn', { allowConstantLoopConditions: true }],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
        '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],

        'import/order': [
            'error',
            {
                groups: [['builtin', 'external', 'internal']],
            },
        ],
        'import/no-deprecated': 'warn',
        'import/no-empty-named-blocks': 'warn',

        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/max-switch-cases': 'warn',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-element-overwrite': 'warn',
        'sonarjs/no-small-switch': 'warn',

        'promise/catch-or-return': 'off',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/always-return': 'off',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'warn',
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
};
