const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const kebabCase = require('lodash/kebabCase');
const { uploadVitestFileDataToDB } = require('./utils');
const chalk = require('chalk');
const { NEED_USE_DEFAULT_OR_USE_VMODEL } = require('../../const/vue2-use-default');
const [component, framework, args] = process.argv.slice(2);

const argsList = args.split(',');
const isWatch = argsList.includes('watch');

if (!component) {
  console.log(chalk.red('component is required.'));
  return;
}
if (!framework) {
  console.log(chalk.red('framework is required.'));
  return;
}

function generateToFinalProject() {
  // 同步 vitest/tests 文件数据到本地 DB 文件
  uploadVitestFileDataToDB(component)
  .then(() => {
    // 同步 DB 文件数据到 JSON
    shell.exec('npm run api:download')
    const useDefault = framework === 'Vue(PC)' && NEED_USE_DEFAULT_OR_USE_VMODEL.includes(component) ? ',useDefault' : '';
    shell.exec(`npm run api:pure ${component} '${framework}' vitest,finalProject${useDefault}`);
    // 推送所有变更到远程仓库（手动操作，在合适的时机，无需每次变更都提交）
    // shell.exec('git add . && git commit -m "feat(test): upload tests to db" && git push');
  }, (e) => {
    console.error(e);
  });
}

if (isWatch) {
  const filePath = path.resolve(__dirname, `../${kebabCase(component)}.js`);
  console.log(`start to listen ${filePath}`);
  fs.watchFile(filePath, { interval: 1000 }, (current, previous) => {
    console.log('---- starting to generate -----');
    if (current.size !== previous.size) {
      generateToFinalProject();
    }
  });
} else {
  generateToFinalProject();
}
