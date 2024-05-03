/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },

  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
  plugins: ['vue', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'lf',
        bracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'logical-assignment-operators': ['error', 'always'],
    'prefer-const': 1,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 4],
    'vue/singleline-html-element-content-newline': 0,
    'no-unused-vars': 'off',
    'vue/no-v-html': 'off',
  },
  ignorePatterns: ['dist'],
};
