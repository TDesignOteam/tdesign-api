function parseJSON(json, error = '') {
  if (!json || json.indexOf('preSkip') !== -1) return {}
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
  const result = {};
  allApi.forEach((api) => {
    if (framework && !api.platform_framework.includes(framework)) return;
    if (result[api.component]) {
      result[api.component].push(api);
    } else {
      result[api.component] = [api];
    }
  });
  // API field_category_text 等于 Extends，提取Pick，Omit 类型的 API
  Object.keys(result).forEach((componentName) => {
    result[componentName].forEach((api,index) => {
      if (api.field_category_text !== 'Extends') return;
      if(api.field_name.indexOf('Pick') !== -1) {
        const pickRegex = /Pick<([^,]+),\s*([^>]+)>/;;
        const pickMatch = api.field_name.match(pickRegex);
        if (pickMatch) {
          const pickComponentName = pickMatch[1].replace('Td', '').replace('Props', '').replace('<T>', '');
          const pickList= pickMatch[2].replaceAll("'",'').replaceAll(' ','').split('|')
          result[pickComponentName].forEach((item)=>{
            if (pickList.includes(item.field_name)){
              result[api.component].push(item);
            }
          })
          delete result[componentName][index];
          // result[api.component]= result[api.component].sort((a, b) => a.field_name.localeCompare(b.field_name));
        }
      }
      if(api.field_name.indexOf('Omit') !== -1) {
        const omitRegex = /Omit<([^,]+),\s*([^>]+)>/;;
        const omitMatch = api.field_name.match(omitRegex);
        if (omitMatch) {
          const omitComponentName = omitMatch[1].replace('Td', '').replace('Props', '').replace('<T>', '');
          const omitList= omitMatch[2].replaceAll("'",'').replaceAll(' ','').split('|')
          result[omitComponentName].forEach((item)=>{
            if (!omitList.includes(item.field_name)){
              result[api.component].push(item);
            }
          })
          delete result[componentName][index];
          // result[api.component]= result[api.component].sort((a, b) => a.field_name.localeCompare(b.field_name));
        }
      }
    })
  })

  // API 默认顺序为字母顺序，但是插件 API 的顺序应当为创建顺序。插件 API 形如：$Message.info(theme, duration)
  Object.keys(result).forEach((componentName) => {
    if (componentName[0]==='$') {
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

module.exports = {
  parseJSON,
  formatArrayToMap,
  groupByComponent,
  getApiComponentMapByFrameWork,
  getSkipCode,
  getParentByChildComponent,
};
