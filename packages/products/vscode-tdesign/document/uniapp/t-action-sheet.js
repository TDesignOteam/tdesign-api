
const props = `

### ActionSheet Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | center | 水平对齐方式。可选项：center/left | N
cancelText | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
description | String | - | 动作面板描述文字 | N
items | Array | - | 必需。菜单项。TS 类型：\`Array<string \| ActionSheetItem>\` \`interface ActionSheetItem { label: string; color?: string; disabled?: boolean; icon?: string; suffixIcon?: string }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/action-sheet/type.ts) | Y
items | Array | - | 菜单项。TS 类型：\`Array<string \| ActionSheetItem>\` \`interface ActionSheetItem { label: string; color?: string; disabled?: boolean; icon?: TNode; badge?: BadgeProps }\`，[Badge API Documents](./badge?tab=api)。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/action-sheet/type.ts) | N
popupProps | Object | {} | 透传 Popup 组件全部属性。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/action-sheet/type.ts) | N
showCancel | Boolean | true | 是否显示取消按钮 | N
showOverlay | Boolean | true | 是否显示遮罩层 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 显示与隐藏 | N
defaultVisible | Boolean | false | 显示与隐藏。非受控属性 | N
onCancel | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击取消按钮时触发 | N
onCancel | Function |  | TS 类型：\`() => void\`<br/>点击取消按钮时触发 | N
onClose | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>关闭时触发 | N
onClose | Function |  | TS 类型：\`(trigger: ActionSheetTriggerSource) => void\`<br/>关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/action-sheet/type.ts)。<br/>\`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' \`<br/> | N
onSelected | Function |  | TS 类型：\`(selected: ActionSheetItem \| string, index: number) => void\`<br/>选择菜单项时触发 | N
onSelected | Function |  | TS 类型：\`(selected: ActionSheetItem \| string, index: number) => void\`<br/>选择菜单项时触发 | N

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \`(context: { e: MouseEvent })\` | 点击取消按钮时触发
cancel | \- | 点击取消按钮时触发
close | \`(context: { e: MouseEvent })\` | 关闭时触发
close | \`(trigger: ActionSheetTriggerSource)\` | 关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/action-sheet/type.ts)。<br/>\`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' \`<br/>
selected | \`(selected: ActionSheetItem \| string, index: number)\` | 选择菜单项时触发
selected | \`(selected: ActionSheetItem \| string, index: number)\` | 选择菜单项时触发

### ActionSheet Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### ActionSheet External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-cancel | 取消样式类
t-class-content | 内容样式类

`;
module.exports = {
  props,
};

