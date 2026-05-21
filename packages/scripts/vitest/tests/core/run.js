import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import shell from 'shelljs';
import { kebabCaseComponent } from '../../../utils.js';
import { NEED_USE_DEFAULT_OR_USE_VMODEL } from '../../const/vue2-use-default.js';
import { uploadVitestFileDataToDB } from './utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const [component, framework, args] = process.argv.slice(2);

const argsList = args.split(',');
const isWatch = argsList.includes('watch');

if (!component) {
  console.log(chalk.red('component is required.'));
  process.exit(1);
}
if (!framework) {
  console.log(chalk.red('framework is required.'));
  process.exit(1);
}

function generateToFinalProject() {
  // 同步 vitest/tests 文件数据到本地 DB 文件
  uploadVitestFileDataToDB(component).then(
    () => {
      // 同步 DB 文件数据到 JSON
      shell.exec('npm run api:download');
      const useDefault =
        framework === 'Vue(PC)' && NEED_USE_DEFAULT_OR_USE_VMODEL.includes(component) ? ',useDefault' : '';
      shell.exec(`npm run api:pure ${component} '${framework}' vitest,finalProject${useDefault}`);
    },
    (e) => {
      console.error(e);
    },
  );
}

if (isWatch) {
  const filePath = path.resolve(__dirname, `../${kebabCaseComponent(component)}.js`);
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
