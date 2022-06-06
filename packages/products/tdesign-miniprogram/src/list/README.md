:: BASE_DOC ::

## API

### List Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
async-loading | String / Slot | - | 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容 | N
footer | String / Slot | - | 底部 | N
header | String / Slot | - | 头部 | N
layout | String | horizontal | 排列方式（待设计稿输出）。可选项：horizontal/vertical | N
size | String | medium | 尺寸。可选项：small/medium/large | N
split | Boolean | false | 是否展示分割线 | N
stripe | Boolean | false | 是否展示斑马纹 | N

### List Events

名称 | 参数 | 描述
-- | -- | --
load-more | `(options: {})` | 点击加载更多时触发
scroll | `(options: {| WheelEvent; scrollTop: number; scrollBottom: number })` | 列表滚动时触发，scrollTop 表示顶部滚动距离，scrollBottom 表示底部滚动距离

### ListItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | String / Slot | - | 操作栏 | N
content | String / Slot | - | 内容 | N
