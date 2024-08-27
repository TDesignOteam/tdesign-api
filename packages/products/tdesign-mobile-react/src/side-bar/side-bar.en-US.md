:: BASE_DOC ::

## API

### SideBar Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TNode | - | children。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
value | String / Number | - | \- | N
defaultValue | String / Number | - | uncontrolled property | N
onChange | Function |  | Typescript：`(value: number \| string) => void`<br/> | N
onClick | Function |  | Typescript：`(value: number \| string, label: string) => void`<br/> | N


### SideBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
badgeProps | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/side-bar/type.ts) | N
disabled | Boolean | false | \- | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
label | String | - | \- | N
value | String / Number | - | \- | N
