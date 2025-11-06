
const props = `

### Checkbox Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
block | Boolean | true | 是否为块级元素 | N
borderless | Boolean | undefined | 是否开启无边框模式 | N
checkAll | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N
checked | Boolean | false | 是否选中 | N
defaultChecked | Boolean | false | 是否选中。非受控属性 | N
children | String / TNode | - | 多选框内容，同 label。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 多选框内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
contentDisabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
default | String / TNode | - | 多选框内容，同 label。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | undefined | 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled | N
icon | String / Array | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：\`[选中态图标，非选中态图标，半选中态图标]\`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标。TS 类型：\`'circle' \| 'line' \| 'rectangle' \| string[]\` | N
icon | String / Boolean / Array | 'circle' | 自定义选中图标和非选中图标。使用 Array 时表示：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标。TS 类型：\`'circle' \| 'line' \| 'rectangle' \| boolean \| Array<TNode \| String>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
indeterminate | Boolean | false | 是否为半选 | N
label | String / TNode | - | 主文案。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
lazyLoad | Boolean | false | 是否启用懒加载。数据量大时建议开启；加载复杂内容或大量图片时建议开启 | N
maxContentRow | Number | 5 | 内容最大行数限制 | N
maxLabelRow | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
placement | String | left | 多选框和内容相对位置。可选项：left/right | N
readonly | Boolean | undefined | 只读状态 | N
title | String | - | HTML 原生属性 | N
value | String / Number / Boolean | - | 多选框的值。TS 类型：\`string \| number \| boolean\` | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: { e: ChangeEvent }) => void\`<br/>值变化时触发 | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: { e: Event }) => void\`<br/>值变化时触发 | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: { value: boolean\|number\|string, label: boolean\|number\|string }) => void\`<br/>值变化时触发。\`context\` 表示当前点击项内容 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发，一般用于外层阻止冒泡场景 | N

### Checkbox Events

名称 | 参数 | 描述
-- | -- | --
change | \`(checked: boolean, context: { e: ChangeEvent })\` | 值变化时触发
change | \`(checked: boolean, context: { e: Event })\` | 值变化时触发
change | \`(checked: boolean, context: { value: boolean\|number\|string, label: boolean\|number\|string })\` | 值变化时触发。\`context\` 表示当前点击项内容
click | \`(context: { e: MouseEvent })\` | 点击时触发，一般用于外层阻止冒泡场景

### Checkbox Slots

名称 | 描述
-- | --
- | 默认插槽，主文案

### Checkbox External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-border | 边框样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-label | 标签样式类


### CheckboxGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
borderless | Boolean | false | 是否开启无边框模式。优先级低于 Checkbox.borderless | N
disabled | Boolean | undefined | 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled | N
keys | Object | - | 用来定义 value / label / disabled 在 \`options\` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
lazyLoad | Boolean | false | 是否启用懒加载。子组件 Checkbox 数据量大时建议开启；加载复杂内容或大量图片时建议开启 | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | - | 以配置形式设置子元素。示例1：\`['北京', '上海']\` ，示例2: \`[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]\`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：\`Array<CheckboxOption>\` \`type CheckboxOption = string \| number \| CheckboxOptionObj\` \`interface CheckboxOptionObj extends TdCheckboxProps { text?: string; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts) | N
options | Array | [] | 以配置形式设置子元素。示例1：\`['北京', '上海']\` ，示例2: \`[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]\`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：\`Array<CheckboxOption>\` \`type CheckboxOption = string \| number \| CheckboxOptionObj\` \`interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts) | N
readonly | Boolean | undefined | 只读状态 | N
value | Array | [] | 选中值。TS 类型：\`T\` \`type CheckboxGroupValue = Array<string \| number \| boolean>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts) | N
defaultValue | Array | [] | 选中值。非受控属性。TS 类型：\`T\` \`type CheckboxGroupValue = Array<string \| number \| boolean>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts) | N
onChange | Function |  | TS 类型：\`(value: T, context: CheckboxGroupChangeContext) => void\`<br/>值变化时触发。\`context.current\` 表示当前变化的数据项，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中，\`context.option\` 表示当前变化的数据项。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/> | N
onChange | Function |  | TS 类型：\`(value: T, context: CheckboxGroupChangeContext) => void\`<br/>值变化时触发，\`context.current\` 表示当前变化的数据值，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中；\`context.option\` 表示当前变化的数据项；\`context.current\` 即将废弃，请勿使用。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: ChangeEvent; current: CheckboxOption \| TdCheckboxProps; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/> | N
onChange | Function |  | TS 类型：\`(value: CheckboxGroupValue, context: { value: boolean\|number\|string, label: boolean\|number\|string }) => void\`<br/>值变化时触发。\`context\` 表示当前点击项内容 | N
onChange | Function |  | TS 类型：\`(value: T, context: CheckboxGroupChangeContext) => void\`<br/>值变化时触发。\`context.current\` 表示当前变化的数据项，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中，\`context.option\` 表示当前变化的数据项。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/> | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: T, context: CheckboxGroupChangeContext)\` | 值变化时触发。\`context.current\` 表示当前变化的数据项，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中，\`context.option\` 表示当前变化的数据项。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/>
change | \`(value: T, context: CheckboxGroupChangeContext)\` | 值变化时触发，\`context.current\` 表示当前变化的数据值，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中；\`context.option\` 表示当前变化的数据项；\`context.current\` 即将废弃，请勿使用。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: ChangeEvent; current: CheckboxOption \| TdCheckboxProps; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/>
change | \`(value: CheckboxGroupValue, context: { value: boolean\|number\|string, label: boolean\|number\|string })\` | 值变化时触发。\`context\` 表示当前点击项内容
change | \`(value: T, context: CheckboxGroupChangeContext)\` | 值变化时触发。\`context.current\` 表示当前变化的数据项，如果是全选则为空；\`context.type\` 表示引起选中数据变化的是选中或是取消选中，\`context.option\` 表示当前变化的数据项。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/checkbox/type.ts)。<br/>\`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }\`<br/>

### CheckboxGroup Slots

名称 | 描述
-- | --
- | 默认插槽，多选框组内容

`;
module.exports = {
  props,
};

