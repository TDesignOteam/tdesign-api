:: BASE_DOC ::

## API


### SideBar Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TElement | - | children。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
defaultValue | String / Number | undefined | \- | N
value | String / Number | - | \- | N
onChange | Function |  | Typescript：`(value: number \| string) => void`<br/> | N
onClick | Function |  | Typescript：`(value: number \| string, label: string) => void`<br/> | N


### SideBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
badgeProps | \- | - | Typescript：`BadgeProps` | N
disabled | Boolean | false | \- | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
label | String | - | \- | N
value | String / Number | - | \- | N
