import globals from 'globals';
import Config from './index.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...Config,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
