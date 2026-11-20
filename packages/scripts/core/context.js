import { upperFirst, camelCase as camelcase } from 'lodash-es';
import { GLOBAL_COMPONENTS_CONFIG } from '../config/const.js';
import mapJson from '../map.json' with { type: 'json' };
import { groupByComponent, getApiComponentMapByFrameWork } from '../vitest/utils.js';
import { kebabCaseComponent } from './utils.js';

const { data } = mapJson;

const API_ORIGIN = 'http://127.0.0.1:16001';

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
  return componentsMap[cmp] && !componentsMap[cmp].type;
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
  const [r] = map[mapField].filter((item) => String(item.value) === String(value));
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
  const configName = `${upperFirst(cmp)}Config`;
  if (GLOBAL_COMPONENTS_CONFIG.includes(configName)) {
    return configName;
  }
  return '';
}

/**
 * Resolve component name to its merge list. First checks the merged map for direct key match,
 * then searches map values (handles kebab-case keys in CHAT_COMPONENT_MAP and future HO maps).
 * Falls back to [component] if no match found.
 */
function resolveComponentMergeList(mergeMap, component) {
  if (mergeMap[component]) return mergeMap[component];
  for (const [, values] of Object.entries(mergeMap)) {
    if (Array.isArray(values) && values.includes(component)) return values;
  }
  return [component];
}

/**
 * 根据框架的父子组件关系，取「父级组件」名称列表。
 * 父组件生成时会把子组件（如 AnchorItem、BaseTable）合并进自己的目录，子组件不需也不能单独建目录。
 * 以全部已登记组件为候选，避免误伤两种情况：
 * 1. Button 等独立组件不在 mergeMap 里，但它本身就是父级
 * 2. Table 在 map.json 里标记为 type: TS，但仍然是有子组件的父级
 */
function getParentComponentNames(components, mergeMap) {
  const childOnly = new Set(Object.values(mergeMap).flat());
  Object.keys(mergeMap).forEach((key) => childOnly.delete(key));
  return components.filter((name) => !childOnly.has(name));
}

export {
  API_ORIGIN,
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
  resolveComponentMergeList,
  getParentComponentNames,
};
