const shell = require('shelljs');
const { uploadVitestFileDataToDB } = require('./utils');
const chalk = require('chalk');
const [component, framework] = process.argv.slice(2);

if (!component) {
  console.log(chalk.red('component is required.'));
  return;
}
if (!framework) {
  console.log(chalk.red('framework is required.'));
  return;
}

// 同步 vitest/tests 文件数据到本地 DB 文件
uploadVitestFileDataToDB(component)
  .then(() => {
    // 同步 DB 文件数据到 JSON
    shell.exec('npm run api:download')
    shell.exec(`npm run api:pure ${component} '${framework}' vitest,finalProject`);
    // 推送所有变更到远程仓库（手动操作，在合适的时机，无需每次变更都提交）
    // shell.exec('git add . && git commit -m "feat(test): upload tests to db" && git push');
  }, (e) => {
    console.error(e);
  });
