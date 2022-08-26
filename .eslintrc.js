module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/name-property-casing': [
      'error',
      'PascalCase'
    ],
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ]
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ]
}
