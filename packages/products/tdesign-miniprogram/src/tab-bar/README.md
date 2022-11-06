:: BASE_DOC ::

## API
### TabBarItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 图标右上角提示信息。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
custom-style | String | - | 自定义组件样式 | N
icon | String / Slot | - | 图标名称 | N
sub-tab-bar | Array | - | 二级菜单。TS 类型：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar/type.ts) | N
value | String / Number | - | 标识符 | N
