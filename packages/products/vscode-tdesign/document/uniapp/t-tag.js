
const props = `

### Tag Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 组件子元素，同 \`content\`。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closable | Boolean | false | 标签是否可关闭 | N
closable | Boolean / Object / TNode | false | 标签是否可关闭。TS 类型：\`boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
color | String | - | 自定义标签颜色 | N
content | String / TNode | - | 组件子元素。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
customStyle | String | - | 自定义组件样式 | N
default | String / TNode | - | 组件子元素，同 \`content\`。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | TNode | undefined | 标签中的图标，可自定义图标呈现。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object / TNode | - | 标签中的图标，可自定义图标呈现。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
maxWidth | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large | N
theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N
title | String | - | 标签标题，在标签hover时展示，默认为标签内容 | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N
onClose | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果关闭按钮存在，点击关闭按钮时触发 | N

### Tag Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 点击时触发
close | \`(context: { e: MouseEvent })\` | 如果关闭按钮存在，点击关闭按钮时触发

### Tag Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容
closable | 标签可关闭内容区域
icon | 标签中的图标

### Tag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### CheckTag Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
checked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态 | N
defaultChecked | Boolean | - | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N
checkedProps | Object | - | 透传标签选中态属性。TS 类型：\`TdTagProps\` | N
children | String / TNode | - | 组件子元素。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closable | Boolean | false | 标签是否可关闭 | N
content | String / Number / Array / TNode | - | 组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：\`string \| number \| string[] \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / Number / Array / TNode | - | 组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：\`string \| number \| string[]\` | N
default | String / TNode | - | 组件子元素，默认插槽。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | TNode | - | 标签中的图标，可自定义图标呈现。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object / TNode | - | 标签图标。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
uncheckedProps | Object | - | 透传标签未选态属性。TS 类型：\`TdTagProps\` | N
value | String / Number | - | 标签唯一标识，一般用于标签组场景，单个可选择标签无需设置 | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N
onChange | Function |  | TS 类型：\`(checked: boolean, context: CheckTagChangeContext) => void\`<br/>状态切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts)。<br/>\`interface CheckTagChangeContext { e: MouseEvent \| KeyboardEvent; value: string \| number }\`<br/> | N
onChange | Function |  | TS 类型：\`(checked: boolean) => void\`<br/>状态切换时触发 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击标签时触发 | N
onClose | Function |  | TS 类型：\`() => void\`<br/>如果关闭按钮存在，点击关闭按钮时触发 | N
onClose | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果关闭按钮存在，点击关闭按钮时触发 | N

### CheckTag Events

名称 | 参数 | 描述
-- | -- | --
change | \`(checked: boolean, context: CheckTagChangeContext)\` | 状态切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts)。<br/>\`interface CheckTagChangeContext { e: MouseEvent \| KeyboardEvent; value: string \| number }\`<br/>
change | \`(checked: boolean)\` | 状态切换时触发
click | \`(context: { e: MouseEvent })\` | 点击标签时触发
close | \- | 如果关闭按钮存在，点击关闭按钮时触发
close | \`(context: { e: MouseEvent })\` | 如果关闭按钮存在，点击关闭按钮时触发

### CheckTag Slots

名称 | 描述
-- | --
- | 默认插槽，作用同 \`content\` 插槽
content | 自定义内容区域
icon | 标签区域

### CheckTag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### CheckTagGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
checkedProps | Object | - | 透传标签选中态属性。TS 类型：\`TdTagProps\` | N
multiple | Boolean | false | 是否支持选中多个标签 | N
options | Array | - | 标签选项列表。TS 类型：\`CheckTagGroupOption[]\` \`interface CheckTagGroupOption extends TdCheckTagProps { label: string \| TNode; value: string \| number }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts) | N
uncheckedProps | Object | - | 透传标签未选态属性。TS 类型：\`TdTagProps\` | N
value | Array | [] | 选中标签值。TS 类型：\`CheckTagGroupValue\` \`type CheckTagGroupValue = Array<string \| number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts) | N
defaultValue | Array | [] | 选中标签值。非受控属性。TS 类型：\`CheckTagGroupValue\` \`type CheckTagGroupValue = Array<string \| number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts) | N
onChange | Function |  | TS 类型：\`(value: CheckTagGroupValue, context: CheckTagGroupChangeContext) => void\`<br/>[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts)。<br/>\`interface CheckTagGroupChangeContext { type: 'check' \| 'uncheck'; e: MouseEvent \| KeyboardEvent; value: string \| number }\`<br/> | N

### CheckTagGroup Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: CheckTagGroupValue, context: CheckTagGroupChangeContext)\` | [详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tag/type.ts)。<br/>\`interface CheckTagGroupChangeContext { type: 'check' \| 'uncheck'; e: MouseEvent \| KeyboardEvent; value: string \| number }\`<br/>

`;
module.exports = {
  props,
};

