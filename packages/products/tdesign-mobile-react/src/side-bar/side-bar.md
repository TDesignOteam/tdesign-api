:: BASE_DOC ::

## API

### SideBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
children | TNode | - | 侧边导航内容。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
value | String / Number | - | 选项值 | N
defaultValue | String / Number | - | 选项值。非受控属性 | N
onChange | Function |  | TS 类型：`(value: number \| string) => void`<br/>选项值发生变化时触发 | N
onClick | Function |  | TS 类型：`(value: number \| string, label: string) => void`<br/>点击选项时触发 | N


### SideBarItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
badgeProps | Object | - | 透传至 Badge 组件。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/side-bar/type.ts) | N
disabled | Boolean | false | 是否禁用 | N
icon | TElement | - | 图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
label | String | - | 展示的标签 | N
value | String / Number | - | 当前选项的值 | N
