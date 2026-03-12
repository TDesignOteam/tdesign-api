:: BASE_DOC ::

## API

### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
check-strictly | Boolean | false | \- | N
close-btn | Boolean | true | \- | N
keys | Object | - | Typescript: `CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/cascader/type.ts) | N
options | Array | [] | Typescript: `Array<CascaderOption>` | N
placeholder | String | - | \- | N
popup-props | Object | {} | popup properties。Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/cascader/type.ts) | N
sub-titles | Array | [] | Typescript: `Array<string>` | N
theme | String | step | options: step/tab | N
title | String | - | \- | N
value | String / Number | - | `v-model:value` is supported | N
default-value | String / Number | - | uncontrolled property | N
visible | Boolean | false | \- | N

### Cascader Events

name | params | description
-- | -- | --
change | `(context: { value: string \| number, selectedOptions: string[] })` | \-
close | `(context: { trigger: CascaderTriggerSource })` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(context: { value: string \| number, label: string, index: number, level: number })` | \-

### Cascader Slots

name | Description
-- | --
close-btn | \-
header | \-
middle-content | \-
title | \-
