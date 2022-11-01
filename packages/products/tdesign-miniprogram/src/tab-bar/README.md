:: BASE_DOC ::

## API
### TabBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | true | 是否显示外边框 | N
external-classes | Array | - | 组件类名，用于设置外层元素类名。`['t-class']` | N
fixed | Boolean | true | 是否固定在底部 | N
safe-area-inset-bottom | Boolean | true | 是否为 iPhoneX 留出底部安全距离 | N
split | Boolean | true | 是否需要分割线 | N
style | String | - | 自定义组件样式 | N
value | String / Number / Array | null | 当前选中标签的索引。TS 类型：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | 当前选中标签的索引。非受控属性。TS 类型：`string \| number \| Array<string \| number>` | N

### TabBar Events

名称 | 参数 | 描述
-- | -- | --
change | \- | 选中标签切换时触发

### TabBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
icon | String / Slot | - | 图标名称 | N
style | String | - | 自定义组件样式 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
value | String / Number | - | 标识符 | N
