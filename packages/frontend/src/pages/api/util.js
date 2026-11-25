import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
// 配置结构解析（Array / Object / includes / excludes）统一由 files-combine.js 实现，
// 前端页面不区分框架时传空 framework，等同于全部生效
import { getTypesCombineMap, resolveComponentMaps } from '../../../../scripts/config/files-combine';

// 根据框架获取 API 文档输出路径关系（不同的框架，父子组件关系不一样）
export function getApiComponentMapByFrameWork(framework, map = getTypesCombineMap(framework)) {
  return resolveComponentMaps(map, framework);
}

// 输出父子组件映射关系（不同框架可能父子关系不一样）。可用于获取「根组件」名称。如：根据 BaseTable 获取 Table
export function getCmpTypeCombineMap(framework, map = getTypesCombineMap(framework)) {
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
export function getCombinedComponentsByCurrentName(framework, map = getTypesCombineMap(framework)) {
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
  if (typeof json === 'object') return json
  try {
    return JSON.parse(json)
  } catch(e) {
    return defaultValue
  }
}

export function getEventName(name) {
  return `on${upperFirst(camelCase(name))}`;
}

export function loadScript(src) {
  const scriptDom = document.querySelector(`script[src="${src}"]`);
  if (scriptDom) return Promise.resolve();
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
  return new Promise((resolve) => {
    script.onload = () => {
      resolve();
    }
  })
}