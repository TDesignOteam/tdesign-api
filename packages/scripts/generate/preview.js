/**
 * 仅获取 API 数据，不输出到文件。用于在线预览 API 代码
 */

import { pick } from 'lodash-es';
import { BASE_MAP_TAGS, getDocsCombineMap } from '../config/index.js';
import {
  groupByComponent,
  formatArrayToMap,
  getApiComponentMapByFrameWork,
  resolveComponentMergeList,
} from '../core/context.js';
import { getDocsByComponent } from '../docs/index.js';
import { getTypesByComponent } from '../types/index.js';
import { getPropsByComponent } from '../types/vue-props.js';

/**
 * framework 参数可选值：Vue(PC)/VueNext(PC)/React(PC)/Vue(Mobile)/React(Mobile)/Miniprogram/UniApp
 */

async function getApiPreviewData(apiData, map, framework, component, isUseDefault) {
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(apiData, frameworkMap[framework]);
  // 预览只按通用表 + Chat 表取父子关系，与在线预览一直以来的取数范围保持一致
  const cmpMap = getApiComponentMapByFrameWork(getDocsCombineMap(framework, BASE_MAP_TAGS), framework);
  const baseData = pick(frameworkData, resolveComponentMergeList(cmpMap, component));
  // 生成 API 类型定义
  const apiTypes = await getTypesByComponent(baseData, framework, component);
  // console.log(apiTypes);
  // 生成 API 文档
  const apiDocs = getDocsByComponent(baseData, framework, component);
  // console.log(apiDocs);
  // 生成 props 定义
  const apiProps = getPropsByComponent(baseData, framework, component, isUseDefault);
  // console.log(apiProps);
  return {
    apiTypes,
    apiDocs,
    apiProps,
  };
}

export { getApiPreviewData };
