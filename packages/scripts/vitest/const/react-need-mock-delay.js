/**
 * 触发的事件后，一定需要延时才能获取到相关元素的场景
 * 测试延迟和事件名称有关，还是和最终代码实现有关（如果和代码实现有关，这部分代码将会删除）
 * 
 * API 系统录入 delay: 20 时，也会输出 mockTimeout
 * */
const reactNeedMockDelayEvents = [
  'mouseenter',
  'mouseleave',
];

module.exports = {
  reactNeedMockDelayEvents,
};
