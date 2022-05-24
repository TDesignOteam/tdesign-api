const upperFirst = require('lodash/upperFirst');
const camelcase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const { data } = require('./map.json');

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
  return kebabCase(name);
}

function getTdCmpName(cmp) {
  return isTypeApi(cmp) ? getCmpName(cmp) : `Td${getCmpName(cmp)}`;
}

function getFolderName(cmp) {
  return kebabCase(cmp);
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

function groupByComponent(allApi, framework) {
  const result = {};
  allApi.forEach((api) => {
    if (!api.platform_framework.includes(framework)) return;
    if (result[api.component]) {
      result[api.component].push(api);
    } else {
      result[api.component] = [api];
    }
  });
  // API 默认顺序为字母顺序，但是插件 API 的顺序应当为创建顺序。插件 API 形如：$Message.info(theme, duration)
  Object.keys(result).forEach((componentName) => {
    const plugin = isPlugin(componentName);
    if (plugin) {
      result[componentName] = result[componentName].sort((a, b) => {
        // props 放在前面，其余类型放在后面 (props 的 field_category 值最小)
        if (a.field_category < b.field_category) return -1;
        return a.create_time.localeCompare(b.create_time);
      });
    }
  });
  return result;
}

// 根据框架获取 API 文档输出路径关系（不同的框架，父子组件关系不一样）
function getApiComponentMapByFrameWork(map, framework) {
  const rMap = {};
  Object.keys(map).forEach((parentComponent) => {
    const item = map[parentComponent];
    if (item instanceof Array) {
      rMap[parentComponent] = item;
    } else if (typeof item === 'object') {
      // 没有 includes，并且没有 excludes，则认为适用所有框架。
      // 存在 includes，则表示仅在 includes 里面的框架才生效
      // 存在 excludes，则表示在 excludes 中的框架，父子关系不生效
      if ((!item.includes && !item.excludes)
        || (item.includes && item.includes.includes(framework))
        || (item.excludes && !item.excludes.includes(framework))
      ) {
        rMap[parentComponent] = item.list;
      }
    } else {
      console.warn('COMPONENT_API_MD_MAP 数据结构不对，只能是 Array 或者 Object 类型');
    }
  });
  return rMap;
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

module.exports = {
  getLabelByKey,
  getApiTitles,
  groupByComponent,
  formatArrayToMap,
  getCmpName,
  renameToCase,
  isPlugin,
  isTypeApi,
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
};
