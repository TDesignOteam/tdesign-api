:: BASE_DOC ::

## API

### List Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
async-loading | String / Slot | - | 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
footer | String / Slot | - | 底部。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
header | String / Slot | - | 头部。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N

### List Events

名称 | 参数 | 描述
-- | -- | --
load-more | `(options: {})` | 点击加载更多时触发
scroll | `(options: {\| WheelEvent; scrollTop: number; scrollBottom: number })` | 列表滚动时触发，scrollTop 表示顶部滚动距离，scrollBottom 表示底部滚动距离


### ListItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
action | String / Slot | - | 操作栏。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content | String / Slot | - | 内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
