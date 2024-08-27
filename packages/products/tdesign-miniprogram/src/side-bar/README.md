:: BASE_DOC ::

## API

### SideBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
value | String / Number | - | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N

### SideBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: number \| string, label: string)` | 选项值发生变化时触发
click | `(value: number \| string, label: string)` | 点击选项时触发


### SideBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | - | 透传至 Badge 组件。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/side-bar/type.ts) | N
disabled | Boolean | false | 是否禁用 | N
icon | String / Object | - | `1.0.0-rc.1`。图标，传对象则透传至 Icon | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N
