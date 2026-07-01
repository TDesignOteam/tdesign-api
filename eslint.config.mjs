import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importX from 'eslint-plugin-import-x';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

const importOrderRule = [
  'error',
  {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
    'newlines-between': 'never',
    alphabetize: { order: 'asc', caseInsensitive: true },
  },
];

export default [
  {
    ignores: [
      'snapshot*',
      'dist/',
      'lib/',
      'node_modules/',
      'common/',
      'packages/products/',
      'packages/frontend/_site/',
    ],
  },
  {
    files: ['packages/**/*.{js,ts,tsx,mjs}'],
    ignores: ['**/*.vue'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import-x': importX,
    },
    rules: {
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-new': 'warn',
      'new-cap': 'off',
      'no-underscore-dangle': 'off',
      'func-style': 'off',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/no-explicit-any': 'off',
      'import-x/order': importOrderRule,
    },
  },
  ...vuePlugin.configs['flat/essential'],
  {
    files: ['packages/frontend/**/*.{vue,js,ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: tsparser,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        aegis: 'readonly',
        NProgress: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import-x': importX,
    },
    rules: {
      indent: ['error', 2],
      'vue/multi-word-component-names': 'off',
      'import-x/order': importOrderRule,
    },
  },
  {
    files: ['packages/scripts/**/*.{js,ts}'],
    rules: {
      'no-console': 'off',
    },
  },
];
