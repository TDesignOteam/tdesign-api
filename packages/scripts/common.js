const upperFirst = require('lodash/upperFirst');
const camelcase = require('lodash/camelCase');
const { data } = require('./map.json');
const { kebabCaseComponent} = require('./utils');
const { GLOBAL_COMPONENTS_CONFIG } = require('./config/const');
const { groupByComponent, getApiComponentMapByFrameWork } = require('./vitest/utils');

const componentsMap = getMap(data.components);

function getMap(data) {
  const map = {};
  data.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

// $Message.info => MessageOptions
function renameToCase(name) {
  return `${upperFirst(camelcase(name.substr(1)))}Options`;
}

function isPlugin(cmp) {
  return componentsMap[cmp] && componentsMap[cmp].type === 'plugin';
}

function isTypeApi(cmp) {
  return componentsMap[cmp] && componentsMap[cmp].type === 'TS';
}

function isComponent(cmp) {
  return !componentsMap[cmp].type;
}

function getCmpName(cmp) {
  if (isPlugin(cmp)) return renameToCase(cmp);
  if (isTypeApi(cmp)) {
    return cmp;
  }
  return `${cmp}Props`;
}

// 获取组件实例名称
function getInstanceName(cmp) {
  return `${upperFirst(camelcase(cmp))}InstanceFunctions`;
}

function getEventName(name) {
  return `on${upperFirst(camelcase(name))}`;
}

function getVueEventEmitName(name) {
  return kebabCaseComponent(name);
}

function getTdCmpName(cmp) {
  return isTypeApi(cmp) ? getCmpName(cmp) : `Td${getCmpName(cmp)}`;
}

function getFolderName(cmp) {
  return kebabCaseComponent(cmp);
}

function getDefaultValueName(cmp) {
  return `default${upperFirst(cmp)}`;
}

// 是否为组件实例方法
function isComponentFunction(cmp, type) {
  return !componentsMap[cmp].type && type === 'Functions';
}

function formatArrayToMap(map, field) {
  const r = {};
  map[field].forEach((item) => {
    r[item.label] = item.value;
  });
  return r;
}

/**
 * @param {*} map Map 集合
 * @param {*} mapField 具体的  Map 名称
 * @param {*} value
 */
function getLabelByKey(map, mapField, value) {
  const [r] = map[mapField].filter(item => String(item.value) === String(value));
  return r && r.label;
}

function getApiTitles(titles) {
  const firstLine = titles.join(' | ');
  const secondLine = titles.map(() => '--').join(' | ');
  return [firstLine, secondLine].join('\n');
}




// 输出父子组件映射关系（不同框架可能父子关系不一样）
function getCmpTypeCombineMap(map, framework) {
  const rMap = {};
  const newMap = getApiComponentMapByFrameWork(map, framework);
  Object.keys(newMap).forEach((parentCmp) => {
    newMap[parentCmp].forEach((childCmp) => {
      rMap[childCmp] = parentCmp;
    });
  });
  return rMap;
}

// 获取组件 Map 信息
function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

function getGlobalConfigName(cmp) {
  const configName =  `${upperFirst(cmp)}Config`;
  if (GLOBAL_COMPONENTS_CONFIG.includes(configName)) {
    return configName;
  }
  return '';
}

module.exports = {
  getLabelByKey,
  getApiTitles,
  groupByComponent,
  formatArrayToMap,
  getCmpName,
  renameToCase,
  isPlugin,
  isTypeApi,
  isComponent,
  componentsMap,
  getTdCmpName,
  getEventName,
  getFolderName,
  getVueEventEmitName,
  getDefaultValueName,
  isComponentFunction,
  getInstanceName,
  getApiComponentMapByFrameWork,
  getCmpTypeCombineMap,
  getComponentsMap,
  getGlobalConfigName,
};
