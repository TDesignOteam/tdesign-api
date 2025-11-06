
const props = `

### DropdownMenu Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
arrowIcon | String / Object | 'caret-down-small' | 自定义箭头图标 | N
closeOnClickOverlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
direction | String | down | 菜单展开方向。可选项：down/up | N
duration | String / Number | 200 | 动画时长 | N
showOverlay | Boolean | true | 是否显示遮罩层 | N
zIndex | Number | 11600 | 菜单栏 z-index 层级 | N
onClose | Function |  | TS 类型：\`() => void\`<br/>菜单关闭时触发 | N
onOpen | Function |  | TS 类型：\`() => void\`<br/>菜单展开时触发 | N

### DropdownMenu Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 菜单关闭时触发
open | \- | 菜单展开时触发

### DropdownMenu Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### DropdownMenu External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-item | 选项样式类
t-class-label | 标签样式类


### DropdownItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
active | Boolean | false | 是否高亮当前操作项 | N
content | String / TNode | '' | 下拉操作项内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | false | 是否禁用操作项 | N
divider | Boolean | false | 是否显示操作项之间的分隔线（分隔线默认在下方） | N
footer | TNode | - | 底部。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
keys | Object | - | 用来定义 value / label / disabled 在 \`options\` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：\`Array<DropdownOption>\` \`interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
optionsColumns | String / Number | 1 | 选项分栏（1-3） | N
optionsLayout | String | columns | 已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用 | N
placement | String | left | 复选框和内容相对位置，仅单选菜单栏有效。可选项：left/right | N
prefixIcon | TNode | - | 组件前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
theme | String | default | 下拉菜单选项主题。可选项：default/success/warning/error。TS 类型：\`DropdownItemTheme\` \`type DropdownItemTheme = 'default' \| 'success' \| 'warning' \| 'error'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
value | String / Number / Object | - | 下拉操作项唯一标识。TS 类型：\`string \| number \| { [key: string]: any }\` | N
value | String / Number / Array | undefined | 选中值。TS 类型：\`DropdownValue \` \`type DropdownValue = string \| number \| Array<DropdownValue>;\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
defaultValue | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：\`DropdownValue \` \`type DropdownValue = string \| number \| Array<DropdownValue>;\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
value | String / Number / Array | undefined | 选中值。TS 类型：\`DropdownValue \` \`type DropdownValue = string \| number \| Array<DropdownValue>;\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
defaultValue | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：\`DropdownValue \` \`type DropdownValue = string \| number \| Array<DropdownValue>;\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/dropdown-menu/type.ts) | N
visible | Boolean | false | 是否展示 | N
onChange | Function |  | TS 类型：\`(value: DropdownValue) => void\`<br/>值改变时触发 | N
onClick | Function |  | TS 类型：\`(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void\`<br/>点击时触发 | N
onClose | Function |  | TS 类型：\`() => void\`<br/>关闭时触发 | N
onConfirm | Function |  | TS 类型：\`(value: DropdownValue) => void\`<br/>点击确认时触发 | N
onReset | Function |  | TS 类型：\`(value: DropdownValue) => void\`<br/>点击重置时触发 | N
onReset | Function |  | TS 类型：\`() => void\`<br/>点击重置时触发 | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: DropdownValue)\` | 值改变时触发
click | \`(dropdownItem: DropdownOption, context: { e: MouseEvent })\` | 点击时触发
close | \- | 关闭时触发
confirm | \`(value: DropdownValue)\` | 点击确认时触发
reset | \`(value: DropdownValue)\` | 点击重置时触发
reset | \- | 点击重置时触发

### DropdownItem Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### DropdownItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-column | 菜单列样式类
t-class-column-item | 菜单列选项样式类
t-class-column-item-label | 菜单列选项标签样式类
t-class-content | 内容样式类
t-class-footer  | 底部样式类

`;
module.exports = {
  props,
};

