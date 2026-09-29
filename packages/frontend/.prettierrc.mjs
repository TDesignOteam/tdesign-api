import baseConfig from '../scripts/config/prettier.js';

export default {
  ...baseConfig,
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
  ],
};
