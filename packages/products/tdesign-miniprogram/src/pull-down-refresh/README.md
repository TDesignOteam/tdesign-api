:: BASE_DOC ::

## API
### PullDownRefresh Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
external-classes | Array | - | 加载loading样式。`['t-class', 't-class-loading','t-class-text', 't-class-indicator']` | N
loading-bar-height | String / Number | 50 | 加载中下拉高度，如果值为数字则单位是：'px' | N
loading-props | Object | - | 加载loading样式。TS 类型：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pull-down-refresh/type.ts) | N
loading-texts | Array | [] | 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]` | N
max-bar-height | String / Number | 80 | 最大下拉高度，如果值为数字则单位是：'px' | N
refresh-timeout | Number | 3000 | 刷新超时时间 | N
style | String | - | 自定义组件样式 | N
value | Boolean | false | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态 | N
default-value | Boolean | undefined | 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态。非受控属性 | N

### PullDownRefresh Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: boolean)` | 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态
refresh | \- | 结束下拉时触发
timeout | \- | 刷新超时触发
