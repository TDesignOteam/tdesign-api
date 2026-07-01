import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import importX from 'eslint-plugin-import-x';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

export default [
  ...vuePlugin.configs['flat/essential'],
  {
    ignores: ['snapshot*', 'node_modules/', 'common/', 'cypress/', 'script/test/cypress/', 'temp*', 'public/'],
  },
  {
    files: ['**/*.{vue,js,ts,tsx}'],
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
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];
