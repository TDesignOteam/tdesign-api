import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
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
    },
  },
  {
    ignores: ['snapshot*', 'dist/', 'lib/', 'node_modules/', 'common/', 'packages/products/'],
  },
];
