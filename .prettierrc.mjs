import baseConfig from './packages/scripts/config/prettier.js';

export default {
  ...baseConfig,
  overrides: [
    {
      files: ['**/*.vue'],
      options: {
        parser: 'vue',
      },
    },
  ],
};
