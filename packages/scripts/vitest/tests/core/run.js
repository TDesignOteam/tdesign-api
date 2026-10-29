import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import shell from 'shelljs';
import { kebabCaseComponent, scriptArgs } from '../../../core/utils.js';
import { NEED_USE_DEFAULT_OR_USE_VMODEL } from '../../const/vue2-use-default.js';
import { saveVitestFileData } from './utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const [component, framework, args] = scriptArgs();

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
  saveVitestFileData(component).then(
    () => {
      const useDefault =
        framework === 'Vue(PC)' && NEED_USE_DEFAULT_OR_USE_VMODEL.includes(component) ? ',useDefault' : '';
      shell.exec(`npm run api:docs -- ${component} '${framework}' vitest,finalProject${useDefault}`);
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
