/**
 * 获取单元测试案例描述
 * @param {*} componentName - 组件名称
 * @param {*} segmentName - 案例类型名称
 * @param {*} value - 案例值
 * @returns 
 */
function getUnitTestDescription(
  componentInfo = {},
  segmentName = '',
  value = '',
) {
  const {
    field_name: fieldName,
    field_desc_zh: fieldZhDesc,
  } = componentInfo;
  return `[${segmentName}] ${fieldName}: ${value} (${fieldZhDesc})`;
};

module.exports = {
  getUnitTestDescription,
};
