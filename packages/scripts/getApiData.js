/**
 * 仅获取 API 数据，不输出到文件。用于在线预览 API 代码
 */

const { groupByComponent, formatArrayToMap, getApiComponentMapByFrameWork } = require('./common');
const { COMPONENT_API_MD_MAP } = require('./config');
const { getDocsByComponent } = require('./docs');
const { getTypesByComponent } = require('./types');
const { getPropsByComponent } = require('./types/vue-props');
const pick = require('lodash/pick');

/**
* framework 参数可选值：Vue(PC)/React(PC)/Angular(PC)/Vue(Mobile)/React(Mobile)/Angular(Mobile)/Miniprogram
*/

function getApiPreviewData(apiData, map, framework, component, isUseDefault) {
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(apiData, frameworkMap[framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = pick(frameworkData, cmpMap[component] || [component]);
  // 生成 API 类型定义
  const apiTypes = getTypesByComponent(baseData, framework, component);
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

module.exports = {
  getApiPreviewData,
};
