:: BASE_DOC ::

## API

### Radio Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
allow-uncheck | Boolean | false | 是否允许取消选中 | N
block | Boolean | true | 是否为块级元素 | N
checked | Boolean | false | 是否选中 | N
default-checked | Boolean | undefined | 是否选中。非受控属性 | N
content | String / Slot | - | 单选内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content-disabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否为禁用态 | N
icon | String / Array / Slot | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽。TS 类型：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String / Slot | - | 主文案。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max-content-row | Number | 5 | 内容最大行数限制 | N
max-label-row | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
placement | String | left | 复选框和内容相对位置。可选项：left/right | N
readonly | Boolean | false | 只读状态 | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：`RadioValue` `type RadioValue = string \| number \| boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 值变化时触发
### Radio External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-border | 边框样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-label | 标签样式类


### RadioGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
borderless | Boolean | false | 是否开启无边框模式 | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效。TS 类型：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
placement | String | 'left' | 复选框和内容相对位置；仅在使用 options 时生效。。可选项：left/right | N
value | String / Number / Boolean | false | 选中的值。TS 类型：`RadioValue` | N
default-value | String / Number / Boolean | undefined | 选中的值。非受控属性。TS 类型：`RadioValue` | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: RadioValue)` | 选中值发生变化时触发
