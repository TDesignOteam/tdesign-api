import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importX from 'eslint-plugin-import-x';
import globals from 'globals';

export default [
  {
    ignores: [
      'snapshot*',
      'dist/',
      'lib/',
      'node_modules/',
      'common/',
      'packages/products/',
      'packages/frontend/',
    ],
  },
  {
    files: ['**/*.{js,ts,tsx}'],
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
      'import-x/order': ['error', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
      }],
    },
  },
  {
    files: ['packages/scripts/**/*.{js,ts}'],
    rules: {
      'no-console': 'off',
    },
  },
];
