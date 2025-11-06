
const props = `

### Picker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
autoClose | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancelBtn | String / Boolean | true | 取消按钮文字。TS 类型：\`boolean \| string\` | N
columns | Array / Function | [] | 必需。配置每一列的选项。TS 类型：\`PickerColumn \| Array<PickerColumn> \| ((item: Array<PickerValue>)  => Array<PickerColumn>)\` \`type PickerColumn = PickerColumnItem[]\` \`interface PickerColumnItem { label: string,value: string,disabled?: boolean}\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | Y
confirmBtn | String / Boolean | true | 确定按钮文字。TS 类型：\`boolean \| string\` | N
footer | TNode | - | 底部内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
header | Boolean / TNode | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
header | Boolean / TNode | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
header | TNode | - | 自定义头部内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
itemHeight | Number | 80 | PickerItem 的子项高度，单位 rpx | N
keys | Object | - | 用来定义 value / label / icon 在 \`options\` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
keys | Object | - | 用来定义 value / label / disabled 在 \`columns \` 中对应的字段别名。TS 类型：\`KeysType\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
option | TNode | - | 自定义选项内容。参数为 \`option: PickerColumnItem, index: number\`。TS 类型：\`(option: PickerColumnItem, index: number) => string \| Record<string, string \| boolean>\` | N
popupProps | Object | {} | 透传 Popup 组件全部属性。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | N
renderLabel | Function | - | 自定义label。TS 类型：\`(item: PickerColumnItem, index: number) => string\` | N
swipeDuration | String / Number | 300 | 快速滑动时惯性滚动的时长，单位 ms，为 0 时表示取消惯性滚动。TS 类型：\`string \| number\` | N
title | String | '' | 标题 | N
usePopup | Boolean | true | 是否使用弹出层包裹 | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Array | - | 选中值。TS 类型：\`Array<PickerValue>\` \`type PickerValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | N
defaultValue | Array | - | 选中值。非受控属性。TS 类型：\`Array<PickerValue>\` \`type PickerValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N
onCancel | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击取消按钮时触发 | N
onChange | Function |  | TS 类型：\`(value: Array<PickerValue>, context: { columns: Array<PickerContext>, e: MouseEvent })  => void\`<br/>选中变化时候触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts)。<br/>\`interface PickerContext{ column: number,index: number }\`<br/> | N
onChange | Function |  | TS 类型：\`(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> ) => void\`<br/>选中变化时候触发，即确认变化时触发 | N
onClose | Function |  | TS 类型：\`(trigger: TriggerSource) => void\`<br/>关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts)。<br/>\`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'\`<br/> | N
onConfirm | Function |  | TS 类型：\`(value: Array<PickerValue>, context: { index: number[], e: MouseEvent, label: string[] }) => void\`<br/>点击确认按钮时触发 | N
onConfirm | Function |  | TS 类型：\`(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> ) => void\`<br/>点击确认按钮时触发 | N
onPick | Function |  | TS 类型：\`(value: Array<PickerValue>,context: PickerContext) => void\`<br/>任何一列选中都会触发，不同的列参数不同。\`context.column\` 表示第几列变化，\`context.index\` 表示变化那一列的选中项下标 | N
onPick | Function |  | TS 类型：\`(value: Array<PickerValue>, label: string, column: number, index: number) => void\`<br/>任何一列选中都会触发，不同的列参数不同。\`column\` 表示第几列变化，\`index\` 表示变化那一列的选中项下标 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | \`(context: { e: MouseEvent })\` | 点击取消按钮时触发
change | \`(value: Array<PickerValue>, context: { columns: Array<PickerContext>, e: MouseEvent }) \` | 选中变化时候触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts)。<br/>\`interface PickerContext{ column: number,index: number }\`<br/>
change | \`(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> )\` | 选中变化时候触发，即确认变化时触发
close | \`(trigger: TriggerSource)\` | 关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/picker/type.ts)。<br/>\`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'\`<br/>
confirm | \`(value: Array<PickerValue>, context: { index: number[], e: MouseEvent, label: string[] })\` | 点击确认按钮时触发
confirm | \`(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> )\` | 点击确认按钮时触发
pick | \`(value: Array<PickerValue>,context: PickerContext)\` | 任何一列选中都会触发，不同的列参数不同。\`context.column\` 表示第几列变化，\`context.index\` 表示变化那一列的选中项下标
pick | \`(value: Array<PickerValue>, label: string, column: number, index: number)\` | 任何一列选中都会触发，不同的列参数不同。\`column\` 表示第几列变化，\`index\` 表示变化那一列的选中项下标

### Picker Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容
content | 中间内容，介于头部跟内容之间

`;
module.exports = {
  props,
};

