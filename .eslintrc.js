const path = require('path')
const resolve = _path => path.resolve(__dirname, _path)

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": resolve('./tsconfig.json'),
        "tsconfigRootDir": resolve('./'),
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-restricted-globals": "off",
        "no-useless-constructor": 0,
        "no-extra-semi": 2,
        "semi": 0,
        "comma-dangle": 0,
        "no-unused-vars": 'error',
        'no-console': 'off',
    }
};
