module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-self-closing": [0],
        "vue/max-attributes-per-line": 0
    }
};
