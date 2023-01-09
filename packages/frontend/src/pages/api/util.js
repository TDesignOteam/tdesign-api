import { TYPES_COMBINE_MAP } from '../../../../scripts/config/files-combine';
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

// 根据框架获取 API 文档输出路径关系（不同的框架，父子组件关系不一样）
export function getApiComponentMapByFrameWork(framework, map = TYPES_COMBINE_MAP) {
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
        || !framework
      ) {
        rMap[parentComponent] = item.list;
      }
    } else {
      console.warn('COMPONENT_API_MD_MAP 数据结构不对，只能是 Array 或者 Object 类型');
    }
  });
  return rMap;
}

// 输出父子组件映射关系（不同框架可能父子关系不一样）。可用于获取「根组件」名称。如：根据 BaseTable 获取 Table
export function getCmpTypeCombineMap(framework, map = TYPES_COMBINE_MAP) {
  const rMap = {};
  const newMap = getApiComponentMapByFrameWork(framework, map);
  Object.keys(newMap).forEach((parentCmp) => {
    newMap[parentCmp].forEach((childCmp) => {
      rMap[childCmp] = parentCmp;
    });
  });
  return rMap;
}

// 获取某个组件项目的全部元素。如：获取 Table 组件的全部 TS 定义，含 BaseTable/PrimaryTable 等
export function getCombinedComponentsByCurrentName(framework, map = TYPES_COMBINE_MAP) {
  const rMap = {};
  const newMap = getApiComponentMapByFrameWork(framework, map);
  Object.keys(newMap).forEach((parentCmp) => {
    const siblings = newMap[parentCmp];
    siblings.forEach((childCmp) => {
      rMap[childCmp] = siblings;
    });
  });
  return rMap;
}

export function parseJSON(json, defaultValue = undefined) {
  try {
    return JSON.parse(json)
  } catch(e) {
    return defaultValue
  }
}

export function getEventName(name) {
  return `on${upperFirst(camelCase(name))}`;
}
