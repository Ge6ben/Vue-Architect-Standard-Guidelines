import {
  createConfigForNuxt,
  defineFlatConfigs,
} from '@nuxt/eslint-config/flat'

export default defineFlatConfigs(
  createConfigForNuxt({
    dirs: {
      components: ['src/components'],
      pages: ['src/pages'],
      composables: ['src/composables', 'src/utils'],
      layouts: ['src/layouts'],
      plugins: ['src/plugins'],
    },
  }),
  {
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: [ "App",'default','index'],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },],
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
      'vue/no-multiple-template-root': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
       'logical-assignment-operators': ['error', 'always'],
      'prefer-const': 1,
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'no-console':'warn',
      'no-alert': 'warn',
      'no-debugger':'warn',
      'vue/require-default-prop': 0,
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'vue/singleline-html-element-content-newline': 0,
      'no-unused-vars': 'warn',
      'vue/no-v-html': 'warn',

    },
  },
)
