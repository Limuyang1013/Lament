module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "import/extensions": "off",
        "no-restricted-globals": "off",
        "no-useless-constructor": 0,
        "no-extra-semi": 2,
        "semi": 0,
        "no-unused-vars": 2
    }
};
