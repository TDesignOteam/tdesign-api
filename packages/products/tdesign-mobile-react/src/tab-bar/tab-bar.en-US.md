:: BASE_DOC ::

## API


### TabBar Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
bordered | Boolean | true | \- | N
children | TNode | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
fixed | Boolean | true | \- | N
safeAreaInsetBottom | Boolean | true | \- | N
shape | String | 'normal' | options: normal/round | N
split | Boolean | true | \- | N
theme | String | 'normal' | options: normal/tag | N
value | String / Number / Array | undefined | Typescript：`string \| number \| Array<string \| number>` | N
defaultValue | String / Number / Array | undefined | uncontrolled property。Typescript：`string \| number \| Array<string \| number>` | N
onChange | Function |  | Typescript：`(value: string \| number) => void`<br/> | N


### TabBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
badgeProps | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/tab-bar/type.ts) | N
children | TNode | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
subTabBar | Array | - | Typescript：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/tab-bar/type.ts) | N
value | String / Number | - | \- | N
