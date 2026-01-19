:: BASE_DOC ::

## API

### Cascader Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
check-strictly | Boolean | false | \- | N
close-btn | Boolean | true | \- | N
keys | Object | - | Typescript: `CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts) | N
options | Array | [] | Typescript: `Array<CascaderOption>` | N
placeholder | String | 选择选项 | \- | N
sub-titles | Array | [] | Typescript: `Array<string>` | N
theme | String | step | options: step/tab | N
title | String | - | \- | N
value | String / Number | null | \- | N
default-value | String / Number | undefined | uncontrolled property | N
visible | Boolean | false | \- | N

### Cascader Events

name | params | description
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`
close | `(trigger: CascaderTriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, label: string, index: number, level: number)` | `1.0.1`

### Cascader Slots

name | Description
-- | --
close-btn | \-
header | `1.9.1`
middle-content | `1.12.2`
title | \-
