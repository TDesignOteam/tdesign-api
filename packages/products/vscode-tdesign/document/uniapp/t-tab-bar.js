
const props = `

### TabBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
bordered | Boolean | true | 是否显示外边框 | N
children | String / TNode | - | 标签栏内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
fixed | Boolean | true | 是否固定在底部 | N
safeAreaInsetBottom | Boolean | true | 是否开启底部安全区适配 | N
shape | String | normal | 标签栏的形状。可选项：normal/round | N
split | Boolean | true | 是否需要分割线 | N
theme | String | normal | 选项风格。可选项：normal/tag | N
value | String / Number / Array | - | 当前选中标签的索引。TS 类型：\`string \| number \| Array<string \| number>\` | N
defaultValue | String / Number / Array | - | 当前选中标签的索引。非受控属性。TS 类型：\`string \| number \| Array<string \| number>\` | N
onChange | Function |  | TS 类型：\`(value: string \| number) => void\`<br/>选中标签切换时触发 | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: string \| number)\` | 选中标签切换时触发

### TabBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### TabBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
badgeProps | Object | - | 图标右上角提示信息。TS 类型：\`BadgeProps\`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tab-bar/type.ts) | N
children | String / TNode | - | 标签内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object / TNode | - | 图标名称。传入对象时透传至 Icon 组件。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | TNode | - | 图标名称。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
subTabBar | Array | - | 二级菜单。TS 类型：\`SubTabBarItem[] \` \`interface SubTabBarItem { value: string; label: string }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tab-bar/type.ts) | N
value | String / Number | - | 标识符 | N

### TabBarItem Slots

名称 | 描述
-- | --
icon | 图标插槽，用于自定义图标区域内容

`;
module.exports = {
  props,
};

