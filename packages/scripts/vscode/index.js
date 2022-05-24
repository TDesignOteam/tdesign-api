/**
 * 1. 自动生成 API 文档
 * 2. 自动生成组件 API 类型定义文件（type.ts）
 * 3. 自动生成 props 定义文件（props.ts）
 * 4. 自动生成组件单元测试用例（TODO）
 *
 * 命名行示例：npm run api-docs Button 'Vue(PC)'
 * 命名行示例：npm run api-docs Button 'VueNext(PC)'
 * 命名行示例：npm run api-docs Button 'Vue(Mobile)'
 * 命名行示例：npm run api-docs Button 'React(PC)'
 * 命名行示例：npm run api-docs Button 'React(Mobile)'
 * 命名行示例：npm run api-docs Button 'Angular(PC)'
 * 命名行示例：npm run api-docs Button 'Angular(Mobile)'
 * 命名行示例：npm run api-docs Button 'Miniprogram'
 *
 */
const { groupByComponent, formatArrayToMap } = require('../common');
const { generateDocs } = require('../docs');
const map = require('../map.json');
const { data: ALL_API } = require('../api.json');
const chalk = require('chalk');
/**
 * framework 参数可选值：Vue(PC)/VueNext(PC)/React(PC)/Angular(PC)/Vue(Mobile)/React(Mobile)/Angular(Mobile)/Miniprogram
 * component 参数为大驼峰
 */
const [framework] = process.argv.slice(2);

start();

function start() {
  console.log(chalk.blue(`\n ----- API 相关文件自动生成开始（框架：${framework}） ------ \n`));
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const framworkData = groupByComponent(ALL_API, frameworkMap[framework]);
  // 生成 API 文档
  generateDocs(framworkData, framework, { isVscode: true });
}
