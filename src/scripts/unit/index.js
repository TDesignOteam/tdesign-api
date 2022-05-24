const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {
  getGenSegmentFuncMap,
  getUnitTestFilePath,
  generateComponentUnitTest,
} = require('./gen-unit-test');

/**
 * - group props
 */
function generateUnitTest(baseData, framework, extra) {
  const genSegmentFuncMap = getGenSegmentFuncMap(framework);
  if (
    !genSegmentFuncMap
    || !genSegmentFuncMap.getTestImportSegment  // 必须有单测头部引入内容
    || !genSegmentFuncMap.getDefaultSegment     // 必须有默认的生成单测案例方法
  ) {
    console.warn(chalk.red(`${framework} does not support generate unit test!\n`));
    return;
  }
  console.log(framework, extra);
  Object.keys(baseData).forEach((cmp) => {
    const file = getUnitTestFilePath(framework, cmp);
    const unitTestCnt = generateComponentUnitTest(
      framework,
      cmp,
      baseData[cmp],
    );
    if (unitTestCnt.length === 0) {
      console.warn(chalk.yellow(`${framework} : the number of ${cmp}'s unit test is 0!\n`));
      return;
    };
    const folder = path.dirname(file);
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      fs.writeFile(file, unitTestCnt, 'utf8', (err) => {
        if (err) return console.error(err);
        console.log(chalk.green(`unit test: ${file} has been created.`));
      });
    });
  });
}

module.exports = {
  generateUnitTest,
};
