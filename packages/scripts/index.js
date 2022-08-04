/**
 * 1. 自动生成 API 文档
 * 2. 自动生成组件 API 类型定义文件（type.ts）
 * 3. 自动生成 props 定义文件（props.ts）
 * 4. 自动生成英文 API 文档（api_en.md）
 * 5. 自动生成组件单元测试用例（TODO）
 *
 * ======== 输出全部组件的 API 中文文档和英文文档 ========
 * 命令行示例：npm run api:docs ALL 'Vue(PC)' onlyDocs
 * 命令行示例：npm run api:docs ALL 'React(PC)' onlyDocs
 * 命令行示例：npm run api:docs ALL 'VueNext(PC)' onlyDocs
 *
 * ======== 输出单个组件的 API 文件 ========
 * 命名行示例：npm run api:docs Button 'Vue(PC)' finalProject
 * 命名行示例：npm run api:docs Button 'Vue(PC)'
 * 命名行示例：npm run api:docs Button 'VueNext(PC)'
 * 命名行示例：npm run api:docs Button 'Vue(Mobile)'
 * 命名行示例：npm run api:docs Button 'React(PC)'
 * 命名行示例：npm run api:docs Button 'React(Mobile)'
 * 命名行示例：npm run api:docs Button 'Miniprogram'
 * 
 * ======= 参数之间使用逗号分隔 =======
 * 命名行示例：npm run api:docs Button 'Vue(PC)' useDefault,finalProject,onlyDocs,isUseUnitTest
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
 * allParams 全部指令参数，具体内容见 parseParams
 */
// const [component, framework, language, isUseDefault, isUseUnitTest, finalProject] = process.argv.slice(2);
const [component, framework, allParams] = process.argv.slice(2);

const { useDefault, onlyDocs, isUseUnitTest } = parseParams(allParams);

let selfUseDefault = useDefault;

// 全量组件，改动较大，限制为暂时只能生成文档，不能生成 TS 文件
if (isAll(component) && onlyDocs) {
  generateDocuments();
}

if (component && !isAll(component)) {
  generateComponentApi();
}

/**
 * 解析参数字符串
 * onlyDocs 输出纯文档，不包含任何 API 定义
 * useDefault 是否使用 hook useDefault/useVModel 处理受控和非受控（部分 Vue2 组件使用的是 mapProps）
 * finalProject 是否在当前项目目录下生成对应生成相关文件，默认输出到各框架项目目录中
 * isUseUnitTest 是否输出单测用例
 * 
 * @param {String} str 参数字符串
 */
function parseParams(str) {
  if (!str) return {};
  return {
    onlyDocs: str.includes('onlyDocs'),
    useDefault: str.includes('useDefault'),
    finalProject: str.includes('finalProject'),
    isUseUnitTest: str.includes('isUseUnitTest'),
  };
}

/**
 * 输出单个组件的全部文件：TS 定义、Props 定义、API 文档（英文 + 中文）
 * 一般用于单个组件开发（由于全量组件一次性生成风险过高，不再支持全量输出所有组件。如果真的到必要的时候再打开）
 */
function generateComponentApi() {
  const components = map.data.components.map(item => item.value);
  const r = validateParams(components);
  if (!r || isAll(component)) return;
  console.log(chalk.blue(`\n ----- Framework: ${framework} Starting to Generate Component API ------ \n`));
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = pick(frameworkData, cmpMap[component] || [component]);

  if (!onlyDocs) {
    // 生成 API 类型定义文件
    generateTypes(baseData, framework);
    if (['VueNext(PC)', 'Vue(Mobile)'].includes(framework)) {
      selfUseDefault = true;
    }
    console.log('selfUseDefault', selfUseDefault);
    // 生成 props 文件
    generateVueProps(baseData, framework, selfUseDefault);
    // 生成 React defaultProps 文件
    if (framework.indexOf('React') !== -1) {
      generateReactDefaultProps(baseData, framework);
    }
    // 生成 props 单元测试文件
    if (isUseUnitTest) {
      generateUnitTest(baseData, framework, { language });
    }
  }
  // 生成 API 中文文档
  generateDocs(baseData, framework);
  // generate API English documents
  generateDocs(baseData, framework, { language: 'en' });
}

/**
 * 仅输出全部组件的 API 文档（英文 + 中文）
 * 一般用于统一更新文档描述，集体输出
 */
function generateDocuments() {
  const components = map.data.components.map(item => item.value);
  const r = validateParams(components);
  if (!r || !isAll(component)) return;
  console.log(chalk.blue(`\n ----- Framework: ${framework} Starting to Generate All Components API Documents ------ \n`));
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const baseData = frameworkData;
  // 生成 API 中文文档
  generateDocs(baseData, framework);
  // generate API English documents
  generateDocs(baseData, framework, { language: 'en' });
}

function validateParams(components) {
  if (!component) {
    console.error(chalk.red('\nError: 请输入单个组件名称（前期需要规范每一个组件）\n 如果想生成全量组件的 API 类型定义，请输入参数 ALL'));
    return false;
  }
  if (isAll(component)) {
    return true;
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

// 是否输出全量组件
function isAll(r) {
  return typeof r === 'string' && r.toLocaleLowerCase() === 'all';
}
