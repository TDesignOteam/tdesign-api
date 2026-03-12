:: BASE_DOC ::

## API

### Switch Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
custom-value | Array | [true, false] | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：`Array<SwitchValue>` | N
disabled | Boolean | undefined | 是否禁用组件。优先级：Switch.disabled > Form.disabled | N
icon | Array | [] | 开关的图标；[打开时的图标，关闭时的图标]。TS 类型：`string[]` | N
label | Array | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 。TS 类型：`string[]` | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | null | 开关值。支持语法糖 `v-model:value`。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/switch/type.ts) | N
default-value | String / Number / Boolean | null | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/switch/type.ts) | N

### Switch Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SwitchValue, context: { e: MouseEvent })` | 数据发生变化时触发

### Switch External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-body | 描述文本样式类
t-class-dot | 滑块样式类
t-class-label | 开关内容样式类
