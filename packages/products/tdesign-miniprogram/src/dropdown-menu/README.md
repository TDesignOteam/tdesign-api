:: BASE_DOC ::

## API

### DropdownMenu Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
arrow-icon | String / Object | 'caret-down-small' | 自定义箭头图标 | N
close-on-click-overlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
duration | String / Number | 200 | 动画时长 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
z-index | Number | 11600 | 菜单栏 z-index 层级 | N

### DropdownMenu Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 菜单关闭时触发
open | \- | 菜单展开时触发
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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
disabled | Boolean | false | 是否禁用操作项 | N
footer | Slot | - | 底部。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | 选项分栏（1-3） | N
options-layout | String | columns | 已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用 | N
value | String / Number / Array | undefined | 选中值。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: DropdownValue)` | 值改变时触发
close | \- | 关闭时触发
confirm | `(value: DropdownValue)` | 点击确认时触发
reset | \- | 点击重置时触发
### DropdownItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-column | 菜单列样式类
t-class-column-item | 菜单列选项样式类
t-class-column-item-label | 菜单列选项标签样式类
t-class-content | 内容样式类
t-class-footer | 底部样式类
