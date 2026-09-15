:: BASE_DOC ::

## API

### Split Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / Slot / Function | - | 必需。必须是 Panel 组件，数量需与 initialSizes 长度匹配。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | Y
className | String | - | 容器自定义类名 | N
direction | String | horizontal | 分割方向。horizontal：左右排列；vertical：上下排列。可选项：horizontal/vertical | N
draggerIcon | String / Slot / Function | - | 拖拽图标。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
gap | Number | 0 | 面板之间的间距（px），会体现在分割条视觉上 | N
lazy | Boolean | false | 延迟渲染模式 | N
panelSize | Object | - | 定义每个面板的最大最小比例。TS 类型：`{min?: number; max?: number }` | N
splitterClassName | String | - | 自定义分割条的样式类名 | N
splitterSize | Number | 6 | 分割条的可交互区域宽度/高度（px） | N
onResize | Function |  | TS 类型：`(sizes: number[]) => void`<br/>拖拽过程中尺寸变化的回调（像素值数组）。TS 类型：`{min?: number max?: number }` | N
onResizeEnd | Function |  | TS 类型：`(sizes: number[]) => void`<br/>拖拽结束时的回调。TS 类型：`{min?: number max?: number }` | N
onResizeStart | Function |  | TS 类型：`(sizes: number[]) => void`<br/>开始拖拽时的回调。TS 类型：`{min?: number max?: number }` | N

### Split Events

名称 | 参数 | 描述
-- | -- | --
resize | `(sizes: number[])` | 拖拽过程中尺寸变化的回调（像素值数组）。TS 类型：`{min?: number max?: number }`
resize-end | `(sizes: number[])` | 拖拽结束时的回调。TS 类型：`{min?: number max?: number }`
resize-start | `(sizes: number[])` | 开始拖拽时的回调。TS 类型：`{min?: number max?: number }`

### SplitInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
getSizes | \- | `number[]` | 获取当前各面板的像素尺寸。TS 类型：`{min?: number max?: number }`
reset | \- | \- | 重置为初始尺寸。TS 类型：`{min?: number max?: number }`
setSizes | `(sizes: (number \| string \| 'auto')[]) ` | \- | 程序化设置尺寸。TS 类型：`{min?: number max?: number }`
