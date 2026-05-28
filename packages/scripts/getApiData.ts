/**
 * 仅获取 API 数据，不输出到文件。用于在线预览 API 代码
 */

import { pick } from 'lodash-es';
import { groupByComponent, formatArrayToMap, getApiComponentMapByFrameWork } from './common.ts';
import { COMPONENT_API_MD_MAP } from './config/index.ts';
import { getDocsByComponent } from './docs/index.ts';
import { getTypesByComponent } from './types/index.ts';
import { getPropsByComponent } from './types/vue-props.ts';

/**
 * framework 参数可选值：Vue(PC)/React(PC)/Angular(PC)/Vue(Mobile)/React(Mobile)/Angular(Mobile)/Miniprogram
 */

async function getApiPreviewData(apiData, map, framework, component, isUseDefault) {
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(apiData, frameworkMap[framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = pick(frameworkData, cmpMap[component] || [component]);
  // 生成 API 类型定义
  const apiTypes = await getTypesByComponent(baseData, framework, component);
  // console.log(apiTypes);
  // 生成 API 文档
  const apiDocs = getDocsByComponent(baseData, framework, component);
  // console.log(apiDocs);
  // 生成 props 定义
  const apiPrpos = getPropsByComponent(baseData, framework, component, isUseDefault);
  // console.log(apiPrpos);
  return {
    apiTypes,
    apiDocs,
    apiPrpos,
  };
}

export { getApiPreviewData };
