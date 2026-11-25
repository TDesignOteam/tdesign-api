import { resolveComponentMaps } from '../config/files-combine.js';

function parseJSON(json, error = '') {
  if (!json || json.indexOf('preSkip') !== -1) return {};
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(error || `${json} is not a JSON.`);
    return {};
  }
}

function formatArrayToMap(map, field) {
  const r = {};
  map[field].forEach((item) => {
    r[item.label] = item.value;
  });
  return r;
}

function getSkipCode(skip) {
  return skip ? '.skip' : '';
}

function groupByComponent(allApi, framework) {
  const categoryOrder = [
    'Props',
    'Events',
    'Functions',
    'Extends',
    'Return',
    '<T>',
    'External Classes',
    'CSS Variables',
    'Slots',
  ];
  const result = {};
  allApi.forEach((api) => {
    if (framework && !api.platform_framework.includes(framework)) return;
    if (result[api.component]) {
      result[api.component].push(api);
    } else {
      result[api.component] = [api];
    }
  });

  // API 默认按名称排序；插件方法参数使用源数据中的显式顺序。插件 API 形如：$Message.info(theme, duration)
  Object.keys(result).forEach((componentName) => {
    if (componentName[0] === '$') {
      result[componentName] = result[componentName].sort((a, b) => {
        // props 放在前面，其余类型放在后面 (props 的 field_category 值最小)
        if (a.field_category !== b.field_category) {
          return categoryOrder.indexOf(a.field_category) - categoryOrder.indexOf(b.field_category);
        }
        return a.order - b.order;
      });
    }
  });
  return result;
}

// 根据框架获取 API 文档输出路径关系（不同的框架，父子组件关系不一样）
// 配置的筛选规则（includes / excludes）统一由 config/files-combine.js 的 resolveComponentMaps 实现
function getApiComponentMapByFrameWork(map, framework) {
  return resolveComponentMaps(map, framework);
}

// 根据子组件或子类型获取父组件
function getParentByChildComponent(combineMap, childComponent) {
  const list = Object.entries(combineMap);
  for (let i = 0, len = list.length; i < len; i++) {
    const [parent, item] = list[i];
    if (item.includes(childComponent)) {
      return parent;
    }
  }
}

export {
  parseJSON,
  formatArrayToMap,
  groupByComponent,
  getApiComponentMapByFrameWork,
  getSkipCode,
  getParentByChildComponent,
};
