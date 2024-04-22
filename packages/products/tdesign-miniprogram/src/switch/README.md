:: BASE_DOC ::

## API

### Switch Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
custom-value | Array | [true, false] | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：`Array<SwitchValue>` | N
disabled | Boolean | - | 是否禁用组件 | N
icon | Array | [] | `0.27.0`。开关的图标；[打开时的图标，关闭时的图标]。TS 类型：`string[]` | N
label | Array | [] | `0.27.0`。开关的标签；[打开时的标签，关闭时的标签]。TS 类型：`string[]` | N
loading | Boolean | false | `0.27.0`。是否处于加载中状态 | N
size | String | medium | `0.27.0`。开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | null | 开关值。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | 开关值。非受控属性。TS 类型：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/switch/type.ts) | N

### Switch Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SwitchValue)` | 数据发生变化时触发
