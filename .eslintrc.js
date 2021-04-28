module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": [1, "always"],
    "quotes": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "indent": 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-mixed-operators": 0,

    "@typescript-eslint/explicit-module-boundary-types": "off",
  }
}
