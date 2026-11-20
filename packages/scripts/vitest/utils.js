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

// 判断某条父子关系配置是否在当前框架生效
// 没有 includes，并且没有 excludes，则认为适用所有框架。
// 存在 includes，则表示仅在 includes 里面的框架才生效
// 存在 excludes，则表示在 excludes 中的框架，父子关系不生效
function isMergeConfigApplied(config, framework) {
  return (
    (!config.includes && !config.excludes) ||
    (config.includes && config.includes.includes(framework)) ||
    (config.excludes && !config.excludes.includes(framework))
  );
}

// 将一条配置规范化为「带 include/exclude 的配置对象」列表，支持三种写法：
// 1. ['List', 'ListItem']            → 纯组件名，适用于所有框架
// 2. { list: [], includes: [] }      → 单条配置
// 3. [{ list: [], includes: [] }]    → 同一父组件在不同框架下的多套配置
function normalizeMergeConfigs(item, parentComponent) {
  if (item instanceof Array) {
    if (item.every((v) => typeof v === 'string')) return [{ list: item }];
    return item.filter((v) => v && typeof v === 'object').map((config) => ({ ...config }));
  }
  if (item && typeof item === 'object') return [{ ...item }];
  console.warn(`组件 ${parentComponent} 的父子关系配置结构不对，只能是 Array 或者 Object 类型`);
  return [];
}

// 根据框架获取 API 文档输出路径关系（不同的框架，父子组件关系不一样）
function getApiComponentMapByFrameWork(map, framework) {
  const rMap = {};
  Object.keys(map).forEach((parentComponent) => {
    if (!parentComponent) return;
    const configs = normalizeMergeConfigs(map[parentComponent], parentComponent);
    const merged = [
      ...new Set(
        configs.filter((config) => isMergeConfigApplied(config, framework)).flatMap((config) => config.list || []),
      ),
    ];
    if (merged.length) rMap[parentComponent] = merged;
  });
  return rMap;
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
