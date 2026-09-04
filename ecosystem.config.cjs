/* eslint-disable @typescript-eslint/no-require-imports */
const { name } = require('./package.json');
const path = require('path');

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/server/app.js'),
      instances: require('os').cpus().length,
      instance_var: name, // 运行实例的名称
      autorestart: true,
      exec_mode: 'cluster',
      watch: true,
      env_production: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
