import { upperFirst, camelCase as camelcase } from 'lodash-es';
import { GLOBAL_COMPONENTS_CONFIG } from './config/const.ts';
import mapJson from './map.json' with { type: 'json' };
import { kebabCaseComponent } from './utils.ts';
import { groupByComponent, getApiComponentMapByFrameWork } from './vitest/utils.ts';

const { data } = mapJson;

const componentsMap = getMap(data.components);

/**
 * 将组件数组转为以 value 为键的映射对象
 * @param {Array<{value: string}>} data - 组件配置数组
 * @returns {Record<string, {value: string}>} 以 value 为键的映射对象
 */
function getMap(data) {
  const map = {};
  data.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

/**
 * 将插件名转换为对应的 Options 类型名（如 $Message.info → MessageOptions）
 * @param {string} name - 插件名称（以 $ 开头）
 * @returns {string} 转换后的 Options 类型名
 */
function renameToCase(name) {
  return `${upperFirst(camelcase(name.substr(1)))}Options`;
}

/**
 * 判断组件是否为插件类型
 * @param {string} cmp - 组件名称
 * @returns {boolean} 是否为插件
 */
function isPlugin(cmp) {
  return componentsMap[cmp] && componentsMap[cmp].type === 'plugin';
}

/**
 * 判断组件是否为 TypeScript 类型声明
 * @param {string} cmp - 组件名称
 * @returns {boolean} 是否为 TS 类型
 */
function isTypeApi(cmp) {
  return componentsMap[cmp] && componentsMap[cmp].type === 'TS';
}

/**
 * 判断是否为普通 UI 组件（非插件、非 TS 类型）
 * @param {string} cmp - 组件名称
 * @returns {boolean} 是否为普通组件
 */
function isComponent(cmp) {
  return !componentsMap[cmp].type;
}

/**
 * 获取组件对应的 TypeScript 类型名（插件 → XxxOptions，TS 类型 → 原名，组件 → XxxProps）
 * @param {string} cmp - 组件名称
 * @returns {string} 类型名
 */
function getCmpName(cmp) {
  if (isPlugin(cmp)) return renameToCase(cmp);
  if (isTypeApi(cmp)) {
    return cmp;
  }
  return `${cmp}Props`;
}

/**
 * 获取组件实例方法类型名（如 Button → ButtonInstanceFunctions）
 * @param {string} cmp - 组件名称
 * @returns {string} 实例方法类型名
 */
function getInstanceName(cmp) {
  return `${upperFirst(camelcase(cmp))}InstanceFunctions`;
}

/**
 * 获取事件处理函数名（如 click → onClick）
 * @param {string} name - 事件名称
 * @returns {string} 事件处理函数名
 */
function getEventName(name) {
  return `on${upperFirst(camelcase(name))}`;
}

/**
 * 获取 Vue 事件的 emit 名称（kebab-case 格式）
 * @param {string} name - 事件名称
 * @returns {string} kebab-case 格式的 emit 名称
 */
function getVueEventEmitName(name) {
  return kebabCaseComponent(name);
}

/**
 * 获取 TDesign 前缀的类型名（普通组件 → TdXxxProps，TS 类型 → 原名）
 * @param {string} cmp - 组件名称
 * @returns {string} TDesign 类型名
 */
function getTdCmpName(cmp) {
  return isTypeApi(cmp) ? getCmpName(cmp) : `Td${getCmpName(cmp)}`;
}

/**
 * 获取组件对应的文件夹名称（kebab-case 格式）
 * @param {string} cmp - 组件名称
 * @returns {string} kebab-case 格式的文件夹名
 */
function getFolderName(cmp) {
  return kebabCaseComponent(cmp);
}

/**
 * 获取组件默认值变量名（如 Button → defaultButton）
 * @param {string} cmp - 组件名称
 * @returns {string} 默认值变量名
 */
function getDefaultValueName(cmp) {
  return `default${upperFirst(cmp)}`;
}

/**
 * 判断是否为组件实例方法（普通组件且 field_category 为 Functions）
 * @param {string} cmp - 组件名称
 * @param {string} type - 字段分类类型
 * @returns {boolean} 是否为组件实例方法
 */
function isComponentFunction(cmp, type) {
  return !componentsMap[cmp].type && type === 'Functions';
}

/**
 * 将映射数组中指定字段的 label/value 转为以 label 为键、value 为值的对象
 * @param {Record<string, Array<{label: string, value: string}>>} map - 映射集合
 * @param {string} field - 具体的 Map 名称
 * @returns {Record<string, string>} label → value 映射对象
 */
function formatArrayToMap(map, field) {
  const r = {};
  map[field].forEach((item) => {
    r[item.label] = item.value;
  });
  return r;
}

/**
 * 根据值在映射集合中查找对应的标签
 * @param {Record<string, Array<{label: string, value: string | number}>>} map - 映射集合
 * @param {string} mapField - 具体的 Map 名称
 * @param {string | number} value - 待查找的值
 * @returns {string | undefined} 匹配的标签，未找到时返回 undefined
 */
function getLabelByKey(map, mapField, value) {
  const [r] = map[mapField].filter((item) => String(item.value) === String(value));
  return r && r.label;
}

/**
 * 将标题数组格式化为 Markdown 表格头部（标题行 + 分隔行）
 * @param {string[]} titles - 标题列表
 * @returns {string} Markdown 表格头部字符串
 */
function getApiTitles(titles) {
  const firstLine = titles.join(' | ');
  const secondLine = titles.map(() => '--').join(' | ');
  return [firstLine, secondLine].join('\n');
}

/**
 * 输出子组件到父组件的映射关系（不同框架可能父子关系不一样）
 * @param {Record<string, string[]>} map - 组件 API 映射
 * @param {string} framework - 框架名称
 * @returns {Record<string, string>} 子组件名 → 父组件名 映射
 */
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

/**
 * 获取组件 Map 信息，将组件数组转为以 value 为键的映射对象
 * @param {Array<{value: string}>} components - 组件配置数组
 * @returns {Record<string, {value: string}>} 以 value 为键的映射对象
 */
function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

/**
 * 获取组件的全局配置名（如 Button → ButtonConfig），不在全局配置列表中的返回空字符串
 * @param {string} cmp - 组件名称
 * @returns {string} 全局配置名或空字符串
 */
function getGlobalConfigName(cmp) {
  const configName = `${upperFirst(cmp)}Config`;
  if (GLOBAL_COMPONENTS_CONFIG.includes(configName)) {
    return configName;
  }
  return '';
}

export {
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
