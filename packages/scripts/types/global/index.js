/**
 * 输出全局变量到目标文件
 */

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { FRAMEWORK_MAP } from '../../config/index.js'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseGlobalPath = path.resolve(__dirname, 'base.tpl');

function formatType(str) {
  return str.replace(/declare/g, 'export');
}

function combineGlobals(framework) {
  const current = FRAMEWORK_MAP[framework];
  // 通用全局变量
  const baseGlobalData = fs.readFileSync(baseGlobalPath);
  // 框架特有全局变量
  const moreGlobalData = fs.readFileSync(
    path.resolve(__dirname, current.globalTplPath)
  );
  const outputPath = path.resolve(current.globalPath);
  let data = moreGlobalData.toString() + baseGlobalData.toString();
  if (['React(PC)', 'React(Mobile)'].includes(framework)) {
    data = formatType(data);
  }
  const callback = (err) => {
    if (err) return console.error(err);
    // eslint-disable-next-line no-console
    console.log(
      chalk.green(`globals: ${outputPath} has been created successfully!`)
    );
  };
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFile(outputPath, data, callback);
}

export default combineGlobals;
