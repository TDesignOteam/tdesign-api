const chalk = require('chalk');
const pick = require('lodash/pick');
const { groupByComponent, formatArrayToMap, getApiComponentMapByFrameWork } = require('../common');
const { COMPONENT_API_MD_MAP } = require('../config');
const { generateProps } = require('./props');
const map = require('../map.json');
const { data: ALL_API } = require('../api.json');

const [component, framework] = process.argv.slice(2);

function isAll(r) {
  return typeof r === 'string' && r.toLocaleLowerCase() === 'all';
}

function start() {
  const components = map.data.components.map(item => item.value);
  const r = validateParams(components);
  if (!r) return;
  console.log(chalk.blue(`\n ----- 组件 configurable props json 文件自动生成开始（框架：${framework}） ------ \n`));
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = isAll(r)
    ? frameworkData
    : pick(frameworkData, cmpMap[component] || [component]);
    // 生成info-json文件
  generateProps(baseData, framework);
}

function validateParams(components) {
  if (!component) {
    console.error(chalk.red('\nError: 请输入单个组件名称（前期需要规范每一个组件）\n 如果想生成全量组件的 props json 文件，请输入参数 ALL'));
    return false;
  }
  if (isAll(component)) {
    return component;
  }
  if (!(components.includes(component))) {
    console.error(chalk.red(`\nError: 组件 ${component} 不存在。如果在上述组件中没有找到想要的组件，需要新增组件，请联系 PMC\n`));
    return false;
  }
  return true;
}

start();
