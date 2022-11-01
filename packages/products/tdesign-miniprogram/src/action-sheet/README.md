:: BASE_DOC ::

## API
### ActionSheet Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-text | String | - | 设置取消按钮的文本 | N
count | Number | 8 | 设置每页展示菜单的数量，仅当 type=grid 时有效 | N
items | Array | - | 必需。菜单项。TS 类型：`Array<string \| ActionSheetItem>` `interface ActionSheetItem {label: string; color?: string; disabled?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/action-sheet/type.ts) | Y
show-cancel | Boolean | true | 是否显示取消按钮 | N
style | String | - | 自定义组件样式 | N
theme | String | list | 展示类型，列表和表格形式展示。可选项：list/grid | N
visible | Boolean | false | 必需。显示与隐藏 | Y
default-visible | Boolean | undefined | 必需。显示与隐藏。非受控属性 | Y

### ActionSheet Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 点击取消按钮时触发
close | \- | 关闭时触发
selected | `(selected: ActionSheetItem \| string, index: number)` | 选择菜单项时触发
