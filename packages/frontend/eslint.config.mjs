import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

export default [
  ...vuePlugin.configs['flat/essential'],
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
    },
    rules: {
      indent: ['error', 2],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['snapshot*', 'node_modules/', 'common/', 'cypress/', 'script/test/cypress/', 'temp*', 'public/'],
  },
];
