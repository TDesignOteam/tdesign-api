:: BASE_DOC ::

## API
### Button Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
block | Boolean | false | 是否为块级元素 | N
content | String / Slot | - | 按钮内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
custom-dataset | Object | - | 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取。TS 类型：`any` | N
disabled | Boolean | false | 禁用状态 | N
external-classes | Array | - | 组件类名。`['t-class', 't-class-icon', 't-class-loading']` | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 Object 类型，表示透传至 icon。 | N
icon-props | Object | {} | 图标属性，透传至 icon | N
loading | Boolean | false | 是否显示为加载状态 | N
loading-props | Object | - | 透传加载组件全部属性。TS 类型：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/button/type.ts) | N
shape | String | rectangle | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle | N
size | String | medium | 组件尺寸。可选项：extra-small/small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
style | String | - | 自定义组件样式 | N
t-id | String | - | 按钮标签 `id` | N
theme | String | default | 组件风格，依次为品牌色、危险色。可选项：default/primary/danger/light | N
type | String | - | 同小程序的 `formType`，[button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：submit/reset | N
variant | String | base | 按钮形式，基础、线框、文字。可选项：base/outline/text | N

### Button Events

名称 | 参数 | 描述
-- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
click | `(e: MouseEvent)` | 点击时触发
