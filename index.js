module.exports = {
    rules: {
        'comma-dangle': ['error', 'never'],
        curly: ['error', 'all'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
            ignorePattern: '^import|^export|^const .* = require(\'.*\');$|\'.*\'[;|,]?$|`.*`[;|,]?$'
        }],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-underscore-dangle': 'off',
        'operator-linebreak': ['error', 'before'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    }
};
