const shell = require('shelljs');
const { uploadVitestFileDataToDB } = require('./tests');
const chalk = require('chalk');
const [component] = process.argv.slice(2);

if (!component) {
  console.log(chalk.red('component is required.'));
  return;
}

// 同步 vitest/tests 文件数据到本地 DB 文件
uploadVitestFileDataToDB(component).then(() => {
  // 同步 DB 文件数据到 JSON
  shell.exec('npm run api:download');
  // 推送所有变更到远程仓库
  shell.exec('git add . && git commit -m "feat(test): upload tests to db" && git push');
});
