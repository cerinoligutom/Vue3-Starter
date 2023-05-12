/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'vue', 'tailwindcss', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'tailwindcss/no-custom-classname': 'error',
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' },
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/define-macros-order': [
      'warn',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
