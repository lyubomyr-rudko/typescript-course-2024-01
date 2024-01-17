/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  ignorePatterns: ['*.js'],
  rules: {
    "prettier/prettier": ["error",{
      "endOfLine": "auto"}
    ]
  },
};
