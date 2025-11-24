:: BASE_DOC ::

## API

### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
checkStrictly | Boolean | false | \- | N
closeBtn | TNode | true | Typescript: `boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
header | TElement | - | Typescript: `TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
keys | Object | - | Typescript: `CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/cascader/type.ts) | N
lazy | Boolean | false | \- | N
load | Function | - | loading subtree data (only effective when the node's children value is true)。Typescript: `(node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>` | N
loadCompleted | Boolean | false | \- | N
middleContent | TElement | - | Typescript: `TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
options | Array | [] | Typescript: `Array<CascaderOption>` | N
overlayProps | Object | {} | Typescript: `OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/cascader/type.ts) | N
placeholder | String | 选择选项 | \- | N
scroll | \- | - | Lazy loading and virtual scrolling. To maximize the benefits of the component, when the amount of data is less than the threshold `scroll.threshold`, regardless of whether the virtual scrolling configuration exists, virtual scrolling will not be enabled within the component. `scroll.threshold` defaults to `100`。Typescript: `TScroll`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
subTitles | Array | [] | Typescript: `Array<string>` | N
theme | String | step | options: step/tab | N
title | TNode | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
value | String / Number | - | \- | N
defaultValue | String / Number | - | uncontrolled property | N
visible | Boolean | false | \- | N
onChange | Function |  | Typescript: `(value: string \| number, selectedOptions: CascaderOption[]) => void`<br/> | N
onClose | Function |  | Typescript: `(trigger: CascaderTriggerSource) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/> | N
onPick | Function |  | Typescript: `(context: { value: string \| number, label: string, index: number, level: number }) => void`<br/> | N
