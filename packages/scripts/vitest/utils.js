function parseJSON(json, error = '') {
  if (json.indexOf('preSkip') !== -1) return {}
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
    const plugin = result[componentName].type === 'plugin';
    // console.log(plugin, result[componentName]);
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
    if (!parentComponent) return;
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

module.exports = {
  parseJSON,
  formatArrayToMap,
  groupByComponent,
  getApiComponentMapByFrameWork,
};
