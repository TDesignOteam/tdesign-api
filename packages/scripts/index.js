/**
 * 1. 自动生成 API 文档
 * 2. 自动生成组件 API 类型定义文件（type.ts）
 * 3. 自动生成 props 定义文件（props.ts）
 * 4. 自动生成英文 API 文档（api_en.md）
 * 5. 自动生成组件单元测试用例（TODO）
 *
 * 命令行示例：npm run api:docs ALL 'Vue(PC)'（全量组件）
 * 命令行示例：npm run api:docs ALL 'Vue(PC)' zh（全量组件 API 中文文档）
 * 命令行示例：npm run api:docs ALL 'React(PC)' zh（全量组件 API 中文文档）
 * 命令行示例：npm run api:docs ALL 'VueNext(PC)' zh（全量组件 API 中文文档）
 *
 * 命名行示例：npm run api:docs Button 'Vue(PC)'
 * 命名行示例：npm run api:docs Button 'VueNext(PC)'
 * 命名行示例：npm run api:docs Button 'Vue(Mobile)'
 * 命名行示例：npm run api:docs Button 'React(PC)'
 * 命名行示例：npm run api:docs Button 'React(Mobile)'
 * 命名行示例：npm run api:docs Button 'Angular(PC)'
 * 命名行示例：npm run api:docs Button 'Angular(Mobile)'
 * 命名行示例：npm run api:docs Button 'Miniprogram'
 *
 * 多语种
 * npm run api:docs Button 'Vue(PC)' en
 *
 */
const { groupByComponent, formatArrayToMap, getApiComponentMapByFrameWork } = require('./common');
const { COMPONENT_API_MD_MAP } = require('./config');
const { generateDocs } = require('./docs');
const { generateUnitTest } = require('./unit');
const map = require('./map.json');
const { data: ALL_API } = require('./api.json');
const { generateTypes } = require('./types');
const { generateReactDefaultProps } = require('./types/react-default-props');
const { generateVueProps } = require('./types/vue-props');
const chalk = require('chalk');
const pick = require('lodash/pick');

/**
 * framework 参数可选值：Vue(PC)/VueNext(PC)/React(PC)/Angular(PC)/Vue(Mobile)/React(Mobile)/Angular(Mobile)/Miniprogram
 * component 参数为大驼峰
 * language 可选值：空/en（空表示中文，en 表示英文）
 * isUseDefault 指定是否支持useDefault的受控和非受控逻辑（空表示不支持）
 * isLocal 是否在本地统计目录下对应生成相关文件
 */
const [component, framework, language, isUseDefault, isUseUnitTest, isLocal] = process.argv.slice(2);
let selfUseDefault = isUseDefault;

start();

function isAll(r) {
  return typeof r === 'string' && r.toLocaleLowerCase() === 'all';
}

function start() {
  const components = map.data.components.map(item => item.value);
  const r = validateParams(components);
  if (!r) return;
  console.log(chalk.blue(`\n ----- API 相关文件自动生成开始（框架：${framework}） ------ \n`));
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = isAll(r)
    ? frameworkData
    : pick(frameworkData, cmpMap[component] || [component]);

  // 生成 API 类型定义文件
  generateTypes(baseData, framework);
  if (language) {
    // 根据不同的语言生成 API 文档
    generateDocs(baseData, framework, { language });
  } else {
    // 生成 API 文档
    generateDocs(baseData, framework);
  }
  if (framework === 'VueNext(PC)') {
    selfUseDefault = true;
  }

  // 生成 props 文件
  generateVueProps(baseData, framework, selfUseDefault);
  // 生成 React defaultProps 文件
  if (framework.indexOf('React') !== -1) {
    generateReactDefaultProps(baseData, framework);
  }
  // 生成 props 单元测试文件
  if (isUseUnitTest) {
    // TODO: 有需要就手工挂载
    generateUnitTest(baseData, framework, { language });
  }
}

function validateParams(components) {
  if (!component) {
    console.error(chalk.red('\nError: 请输入单个组件名称（前期需要规范每一个组件）\n 如果想生成全量组件的 API 类型定义，请输入参数 ALL'));
    return false;
  }
  if (isAll(component)) {
    return component;
  }
  if (!(components.includes(component))) {
    console.error(chalk.red(`\nError: 组件 ${component} 不存在。如果在上述组件中没有找到想要的组件，需要新增组件，请联系 PMC\n`));
    return false;
  }

  const keys = ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)', 'Vue(Mobile)', 'React(Mobile)', 'Angular(Mobile)', 'Miniprogram'];
  if (!keys.includes(framework)) {
    console.error(chalk.red(`\n请输入正确的组件库框架名称，可选值有：${keys}。示例：npm run api-docs Button Vue(PC)\n`));
    return false;
  }
  return true;
}
