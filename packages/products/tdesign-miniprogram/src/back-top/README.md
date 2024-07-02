:: BASE_DOC ::

## API

### BackTop Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Boolean / Object / Slot | true | 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
scroll-top | Number | 0 | 页面滚动距离 | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N
visibility-height | Number | 200 | 滚动高度达到此参数值才出现 | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
to-top | \- | 点击触发
### BackTop External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类
