
const props = `

### Cascader Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
autofocus | Boolean | - | 自动聚焦 | N
borderless | Boolean | false | 无边框模式 | N
checkProps | Object | - | 参考 checkbox 组件 API。TS 类型：\`CheckboxProps\`，[Checkbox API Documents](./checkbox?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
checkStrictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
checkStrictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
clearable | Boolean | false | 是否支持清空选项 | N
closeBtn | Boolean / TNode | true | 关闭按钮。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
collapsedItems | TNode | - | 多选情况下，用于设置折叠项内容，默认为 \`+N\`。如果需要悬浮就显示其他内容，可以使用 collapsedItems 自定义。\`value\` 表示当前存在的所有标签，\`collapsedSelectedItems\` 表示折叠的标签，\`count\` 表示折叠的数量，\`onClose\` 表示移除标签的事件回调。TS 类型：\`TNode<{ value: CascaderOption[]; collapsedSelectedItems: CascaderOption[]; count: number; onClose: (context: { index: number, e?: MouseEvent }) => void }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | undefined | 是否禁用组件 | N
empty | String / TNode | - | 无匹配选项时的内容，默认全局配置为 '暂无数据'。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
filter | Function | - | 自定义过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据。TS 类型：\`(filterWords: string, node: TreeNodeModel) => boolean \| Promise<boolean>\` | N
filterable | Boolean | false | 是否可搜索 | N
header | TNode | - | 头部。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
inputProps | Object | - | 透传 Input 输入框组件的全部属性。TS 类型：\`InputProps\`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
keys | Object | - | 用来定义 value / label / children / disabled 在 \`options\` 中对应的字段别名。TS 类型：\`TreeKeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
keys | Object | - | 用来定义 value / label 在 \`options\` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
keys | Object | - | 用来定义 value / label / children / disabled 在 \`options\` 中对应的字段别名。TS 类型：\`CascaderKeysType\` \`type CascaderKeysType = TreeKeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
label | String / TNode | - | 左侧文本。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
lazy | Boolean | true | 延迟加载 children 为 true 的子节点，即使 expandAll 被设置为 true，也同样延迟加载 | N
lazy | Boolean | false | 是否异步加载 | N
load | Function | - | 加载子树数据的方法（仅当节点 children 为 true 时生效）。TS 类型：\`(node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>\` | N
loadCompleted | Boolean | false | 是否完成异步加载 | N
loading | Boolean | false | 是否为加载状态 | N
loadingText | String / TNode | - | 远程加载时显示的文字，支持自定义。如加上超链接。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
max | Number | 0 | 用于控制多选数量，值为 0 则不限制 | N
middleContent | TNode | - | 中间内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
minCollapsedNum | Number | 0 | 最小折叠数量，用于多选情况下折叠选中项，超出该数值的选中项折叠。值为 0 则表示不折叠 | N
multiple | Boolean | false | 是否允许多选 | N
option | TNode | - | 自定义单个级联选项, item 是选项本身的值，index 是下标，onChange 用于触发当前节点选中，onExpand 用于触发当前节点展开。TS 类型：\`TNode<{ item: CascaderOption; index: number, onChange: ()=> void, onExpand: ()=> void }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
options | Array | [] | 可选项数据源。TS 类型：\`Array<CascaderOption>\` | N
overlayProps | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：\`OverlayProps\`，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
panelBottomContent | String / TNode | - | 面板内的底部内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
panelTopContent | String / TNode | - | 面板内的顶部内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
placeholder | String | undefined | 占位符 | N
placeholder | String | 选择选项 | 未选中时的提示文案 | N
placeholder | String / TNode | '选择选项' | 未选中时的提示文案。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
popupProps | Object | - | 透传 Popup 组件全部属性。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
popupVisible | Boolean | - | 是否显示下拉框 | N
defaultPopupVisible | Boolean | - | 是否显示下拉框。非受控属性 | N
prefixIcon | TNode | - | 组件前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
readonly | Boolean | undefined | 只读状态，值为真会隐藏输入框，且无法打开下拉框 | N
reserveKeyword | Boolean | false | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | N
scroll | \- | - | 懒加载和虚拟滚动。为保证组件收益最大化，当数据量小于阈值 \`scroll.threshold\` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，\`scroll.threshold\` 默认为 \`100\`。TS 类型：\`TScroll\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
selectInputProps | Object | - | 透传 SelectInput 筛选器输入框组件的全部属性。TS 类型：\`SelectInputProps\`，[SelectInput API Documents](./select-input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
showAllLevels | Boolean | true | 选中值使用完整路径，输入框在单选时也显示完整路径 | N
size | String | medium | 组件尺寸。可选项：large/medium/small。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
subTitles | Array | [] | 每级展示的次标题。TS 类型：\`Array<string>\` | N
suffix | String / TNode | - | 后置图标前的后置内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | TNode | - | 组件后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
tagInputProps | Object | - | 透传 TagInput 标签输入框组件的全部属性。TS 类型：\`TagInputProps\`，[TagInput API Documents](./tag-input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
tagProps | Object | - | 透传 Tag 标签组件全部属性。TS 类型：\`TagProps\`，[Tag API Documents](./tag?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
theme | String | step | 展示风格。可选项：step/tab | N
tips | String / TNode | - | 输入框下方提示文本，会根据不同的 \`status\` 呈现不同的样式。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
title | String / TNode | - | 标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
trigger | String | click | 展开下一层级的方式。可选项：click/hover | N
value | String / Number / Array | [] | 选中项的值。TS 类型：\`CascaderValue<CascaderOption>\` \`type CascaderValue<T extends TreeOptionData = TreeOptionData> = string \| number \| T \| Array<CascaderValue<T>>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
defaultValue | String / Number / Array | [] | 选中项的值。非受控属性。TS 类型：\`CascaderValue<CascaderOption>\` \`type CascaderValue<T extends TreeOptionData = TreeOptionData> = string \| number \| T \| Array<CascaderValue<T>>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts) | N
value | String / Number | - | 选项值 | N
defaultValue | String / Number | - | 选项值。非受控属性 | N
value | String / Number | null | 选项值 | N
defaultValue | String / Number | null | 选项值。非受控属性 | N
valueDisplay | String / TNode | - | 自定义选中项呈现的内容。TS 类型：\`string \| TNode<{ value: CascaderValue<CascaderOption>; onClose: (index: number) => void; displayValue?: CascaderValue<CascaderOption>; selectedOptions: CascaderOption[] }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
valueMode | String | onlyLeaf | 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaf 表示无论什么情况，选中值仅呈现叶子节点。可选项：onlyLeaf/parentFirst/all | N
valueType | String | single | 用于控制选中值的类型。single 表示输入输出值为 叶子结点值， full 表示输入输出值为全路径。可选项：single/full | N
visible | Boolean | false | 是否展示 | N
onBlur | Function |  | TS 类型：\`(context: { value: CascaderValue<CascaderOption> } & SelectInputBlurContext ) => void\`<br/>当输入框失去焦点时触发 | N
onChange | Function |  | TS 类型：\`(value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>) => void\`<br/>选中值发生变化时触发。TreeNodeModel 从树组件中导出。\`context.node\` 表示触发事件的节点，\`context.source\` 表示触发事件的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`interface CascaderChangeContext<CascaderOption> { node?: TreeNodeModel<CascaderOption>; source: CascaderChangeSource }\`<br/><br/>\`import { TreeNodeModel } from '@Tree'\`<br/><br/>\`type CascaderChangeSource = 'invalid-value' \| 'check' \| 'clear' \| 'uncheck'\`<br/> | N
onChange | Function |  | TS 类型：\`(value: string \| number, selectedOptions: string[]) => void\`<br/>值发生变更时触发 | N
onChange | Function |  | TS 类型：\`(value: string \| number, selectedOptions: CascaderOption[]) => void\`<br/>值发生变更时触发 | N
onClear | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>清空按钮点击时触发 | N
onClose | Function |  | TS 类型：\`(trigger: CascaderTriggerSource) => void\`<br/>关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'\`<br/> | N
onFocus | Function |  | TS 类型：\`(context: { value: CascaderValue<CascaderOption>; e: FocusEvent }) => void\`<br/>获得焦点时触发 | N
onPick | Function |  | TS 类型：\`(value: string \| number, label: string, index: number, level: number) => void\`<br/>选择后触发 | N
onPick | Function |  | TS 类型：\`(context: { value: string \| number, label: string, index: number, level: number }) => void\`<br/>选择后触发 | N
onPopupVisibleChange | Function |  | TS 类型：\`(visible: boolean, context: PopupVisibleChangeContext) => void\`<br/>下拉框显示或隐藏时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`import { PopupVisibleChangeContext } from '@Popup'\`<br/> | N
onRemove | Function |  | TS 类型：\`(context: RemoveContext<CascaderOption>) => void\`<br/>多选模式下，选中数据被移除时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`interface RemoveContext<T> { value: CascaderValue<T>; node: TreeNodeModel<T> }\`<br/> | N

### Cascader Events

名称 | 参数 | 描述
-- | -- | --
blur | \`(context: { value: CascaderValue<CascaderOption> } & SelectInputBlurContext )\` | 当输入框失去焦点时触发
change | \`(value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>)\` | 选中值发生变化时触发。TreeNodeModel 从树组件中导出。\`context.node\` 表示触发事件的节点，\`context.source\` 表示触发事件的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`interface CascaderChangeContext<CascaderOption> { node?: TreeNodeModel<CascaderOption>; source: CascaderChangeSource }\`<br/><br/>\`import { TreeNodeModel } from '@Tree'\`<br/><br/>\`type CascaderChangeSource = 'invalid-value' \| 'check' \| 'clear' \| 'uncheck'\`<br/>
change | \`(value: string \| number, selectedOptions: string[])\` | 值发生变更时触发
change | \`(value: string \| number, selectedOptions: CascaderOption[])\` | 值发生变更时触发
clear | \`(context: { e: MouseEvent })\` | 清空按钮点击时触发
close | \`(trigger: CascaderTriggerSource)\` | 关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'\`<br/>
focus | \`(context: { value: CascaderValue<CascaderOption>; e: FocusEvent })\` | 获得焦点时触发
pick | \`(value: string \| number, label: string, index: number, level: number)\` | 选择后触发
pick | \`(context: { value: string \| number, label: string, index: number, level: number })\` | 选择后触发
popup-visible-change | \`(visible: boolean, context: PopupVisibleChangeContext)\` | 下拉框显示或隐藏时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`import { PopupVisibleChangeContext } from '@Popup'\`<br/>
remove | \`(context: RemoveContext<CascaderOption>)\` | 多选模式下，选中数据被移除时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/cascader/type.ts)。<br/>\`interface RemoveContext<T> { value: CascaderValue<T>; node: TreeNodeModel<T> }\`<br/>

`;
module.exports = {
  props,
};

