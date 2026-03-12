:: BASE_DOC ::

## API

### TabBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
bordered | Boolean | true | 是否显示外边框 | N
fixed | Boolean | true | 是否固定在底部 | N
placeholder | Boolean | false | 固定在底部时是否开启占位 | N
safe-area-inset-bottom | Boolean | true | 是否开启底部安全区适配 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | - | 当前选中标签的索引。支持语法糖 `v-model:value`。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | - | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N
z-index | Number | 1 | 标签栏层级 | N

### TabBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### TabBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
badge-props | Object | {} | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
icon | String / Object | - | 图标名称。传入对象时透传至 Icon 组件 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
value | String / Number | - | 标识符 | N

### TabBarItem Slots

名称 | 描述
-- | --
icon | 图标插槽，用于自定义图标区域内容
