:: BASE_DOC ::

## API

### Transfer Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
checkbox-props | Object | - | Typescript: `CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts) | N
checked | Array | [] | `v-model:checked` is supported。Typescript: `Array<TransferValue>` | N
data | Array | [] | Typescript: `Array<T>` | N
direction | String | both | options: left/right/both | N
disabled | Boolean / Array | - | Typescript: `boolean \| Array<boolean>` | N
empty | String / Array | '' | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts) | N
footer | Array | - | \- | N
operation | Array | - | \- | N
pagination | Object / Array | - | Typescript: `PaginationProps \| Array<PaginationProps>`，[Pagination API Documents](./pagination?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts) | N
search | Boolean / Object / Array | false | Typescript: `SearchOption \| Array<SearchOption>` `type SearchOption = boolean \| InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts) | N
show-check-all | Boolean / Array | true | Typescript: `boolean \| Array<boolean>` | N
target-sort | String | original | options: original/push/unshift | N
title | Array | [] | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts) | N
value | Array | [] | `v-model:value` is supported。Typescript: `Array<TransferValue>` | N
default-value | Array | [] | uncontrolled property。Typescript: `Array<TransferValue>` | N

### Transfer Events

name | params | description
-- | -- | --
change | `(targetValue: Array<TransferValue>, context: TargetParams)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface TargetParams { type: TransferListType; movedValue: Array<TransferValue> }`<br/>
checked-change | `(options: CheckedOptions)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface CheckedOptions { checked: Array<TransferValue>; sourceChecked: Array<TransferValue>; targetChecked: Array<TransferValue>; type: TransferListType }`<br/>
page-change | `(page: PageInfo, context: { type: TransferListType })` | \-
scroll | `(options: { e: Event; bottomDistance: number; type: TransferListType })` | \-
search | `(options: SearchContext)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface SearchContext { query: string; type: TransferListType; trigger: 'input' \| 'enter';  e: InputEvent \| KeyboardEvent }`<br/>

### Transfer Slots

name | Description
-- | --
change | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface TargetParams { type: TransferListType; movedValue: Array<TransferValue> }`<br/>
checked-change | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface CheckedOptions { checked: Array<TransferValue>; sourceChecked: Array<TransferValue>; targetChecked: Array<TransferValue>; type: TransferListType }`<br/>
empty | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)
footer | \-
operation | \-
scroll | \-
search | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)。<br/>`interface SearchContext { query: string; type: TransferListType; trigger: 'input' \| 'enter';  e: InputEvent \| KeyboardEvent }`<br/>
title | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)
transfer-item | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/transfer/type.ts)
