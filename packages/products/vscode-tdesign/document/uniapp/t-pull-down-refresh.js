
const props = `

### PullDownRefresh Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用下拉刷新 | N
enableBackToTop | Boolean | true | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启 | N
enablePassive | Boolean | false | 开启 passive 特性，能优化一定的滚动性能 | N
header | TNode | - | 头部。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
loadingBarHeight | String / Number | 50 | 加载中下拉高度，如果值为数字则单位是：'px' | N
loadingProps | Object | - | 加载loading样式。TS 类型：\`LoadingProps\`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/pull-down-refresh/type.ts) | N
loadingTexts | Array | [] | 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：\`string[]\` | N
lowerThreshold | String / Number | 50 | 距底部/右边多远时，触发 scrolltolower 事件 | N
maxBarHeight | String / Number | 80 | 最大下拉高度，如果值为数字则单位是：'px' | N
refreshTimeout | Number | 3000 | 刷新超时时间 | N
scrollIntoView | String | - | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | N
showScrollbar | Boolean | true | 滚动条显隐控制 (同时开启 enhanced 属性后生效) | N
successDuration | String / Number | 500 | 刷新成功提示展示时长，单位 'ms' | N
upperThreshold | String / Number | 50 | 距顶部/左边多远时，触发 scrolltoupper 事件 | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Boolean | false | 组件状态，值为 \`true\` 表示下拉状态，值为 \`false\` 表示收起状态 | N
defaultValue | Boolean | false | 组件状态，值为 \`true\` 表示下拉状态，值为 \`false\` 表示收起状态。非受控属性 | N
onChange | Function |  | TS 类型：\`(value: boolean) => void\`<br/>下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态 | N
onDragend | Function |  | TS 类型：\`(scrollTop: number, scrollLeft: number) => void\`<br/>滑动结束事件 | N
onDragging | Function |  | TS 类型：\`(scrollTop: number, scrollLeft: number) => void\`<br/>滑动事件 | N
onDragstart | Function |  | TS 类型：\`(scrollTop: number, scrollLeft: number) => void\`<br/>滑动开始事件 | N
onRefresh | Function |  | TS 类型：\`() => void\`<br/>结束下拉时触发 | N
onScrolltolower | Function |  | TS 类型：\`() => void\`<br/>滚动到页面底部时触发 | N
onTimeout | Function |  | TS 类型：\`() => void\`<br/>刷新超时触发 | N

### PullDownRefresh Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: boolean)\` | 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态
dragend | \`(scrollTop: number, scrollLeft: number)\` | 滑动结束事件
dragging | \`(scrollTop: number, scrollLeft: number)\` | 滑动事件
dragstart | \`(scrollTop: number, scrollLeft: number)\` | 滑动开始事件
refresh | \- | 结束下拉时触发
scrolltolower | \- | 滚动到页面底部时触发
timeout | \- | 刷新超时触发

### PullDownRefresh Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### PullDownRefresh External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 指示样式类
t-class-loading | 加载样式类
t-class-text | 文本样式类

`;
module.exports = {
  props,
};

