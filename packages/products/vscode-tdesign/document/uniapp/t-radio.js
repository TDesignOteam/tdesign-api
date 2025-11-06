
const props = `

### Radio Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | left | 已废弃。复选框和内容相对位置。可选项：left/right | N
allowUncheck | Boolean | false | 是否允许取消选中 | N
block | Boolean | true | 是否为块级元素 | N
borderless | Boolean | undefined | 是否开启无边框模式 | N
checked | Boolean | false | 是否选中 | N
defaultChecked | Boolean | false | 是否选中。非受控属性 | N
children | String / TNode | - | 单选内容，同 label。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
color | String | #0052d9 | 已废弃。单选按钮颜色 | N
content | String / TNode | - | 单选内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
contentDisabled | Boolean | false | 是否禁用组件内容（content）触发选中 | N
contentDisabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
default | String / TNode | - | 单选按钮内容，同 label。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | undefined | 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled | N
disabled | Boolean | undefined | 是否为禁用态 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标、值为 'none' 则表示没有图标。TS 类型：\`'circle' \| 'line' \| 'dot' \| 'none' \|Array<TNode>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Array / TNode | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：\`[选中态图标，非选中态图标]\`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽。TS 类型：\`'circle' \| 'line' \| 'dot' \| Array<string>\` | N
label | String / TNode | - | 主文案。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
maxContentRow | Number | 5 | 内容最大行数限制 | N
maxLabelRow | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
placement | String | - | 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
value | String / Number / Boolean | undefined | 单选按钮的值。TS 类型：\`T\` | N
value | String / Number / Boolean | false | 单选按钮的值。TS 类型：\`T\` \`type RadioValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: { e: Event }) => void\`<br/>选中状态变化时触发 | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: { e: ChangeEvent }) => void\`<br/>选中状态变化时触发 | N
onChange | Function |  | TS 类型：\`(checked: boolean) => void\`<br/>值变化时触发 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发，一般用于外层阻止冒泡场景 | N

### Radio Events

名称 | 参数 | 描述
-- | -- | --
change | \`(checked: boolean, context: { e: Event })\` | 选中状态变化时触发
change | \`(checked: boolean, context: { e: ChangeEvent })\` | 选中状态变化时触发
change | \`(checked: boolean)\` | 值变化时触发
click | \`(context: { e: MouseEvent })\` | 点击时触发，一般用于外层阻止冒泡场景

### Radio Slots

名称 | 描述
-- | --
- | 默认插槽，主文案
icon | 自定义选中图标和非选中图标

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
align | String | left | 复选框和内容相对位置；仅在使用 options 时生效 | N
allowUncheck | Boolean | false | 是否允许取消选中 | N
borderless | Boolean | false | 是否开启无边框模式；优先级低于 Radio | N
borderless | Boolean | false | 是否开启无边框模式 | N
disabled | Boolean | undefined | 是否禁用全部子单选框。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled | N
disabled | Boolean | undefined | 是否禁用全部子单选框 | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效。TS 类型：\`'circle' \| 'line' \| 'dot' \| Array<string>\` | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标。TS 类型：\`'circle' \| 'line' \| 'dot' \| Array<TNode>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
keys | Object | - | 用来定义 value / label / disabled 在 \`options\` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
name | String | - | HTML 元素原生属性 | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：\`Array<RadioOption>\` \`type RadioOption = string \| number \| RadioOptionObj\` \`interface RadioOptionObj { label?: string \| TNode; value?: string \| number \| boolean; disabled?: boolean }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N
options | Array | - | 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：\`Array<RadioOption>\` \`type RadioOption = string \| number \| RadioOptionObj\` \`interface RadioOptionObj { label?: string; value?: string \| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N
placement | String | left | 复选框和内容相对位置。优先级低于 Radio.placement。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
size | String | medium | 组件尺寸【讨论中】。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
theme | String | radio | 用于在使用 options 方式渲染时决定组件的风格。可选项：radio/button | N
value | String / Number / Boolean | - | 选中的值。TS 类型：\`T\` \`type RadioValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N
defaultValue | String / Number / Boolean | - | 选中的值。非受控属性。TS 类型：\`T\` \`type RadioValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/radio/type.ts) | N
variant | String | outline | 单选组件按钮形式。可选项：outline/primary-filled/default-filled | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: Event; name?:string }) => void\`<br/>选中值发生变化时触发, \`context.name\` 指 RadioGroup 的 name 属性 | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: ChangeEvent; name?: string }) => void\`<br/>选中值发生变化时触发, \`context.name\` 指 RadioGroup 的 name 属性 | N
onChange | Function |  | TS 类型：\`(value: RadioValue, context: { e: Event }) => void\`<br/>选中值发生变化时触发 | N

### RadioGroup Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: T, context: { e: Event; name?:string })\` | 选中值发生变化时触发, \`context.name\` 指 RadioGroup 的 name 属性
change | \`(value: T, context: { e: ChangeEvent; name?: string })\` | 选中值发生变化时触发, \`context.name\` 指 RadioGroup 的 name 属性
change | \`(value: RadioValue, context: { e: Event })\` | 选中值发生变化时触发

### RadioGroup Slots

名称 | 描述
-- | --
- | 默认插槽，单选框组内容

`;
module.exports = {
  props,
};

