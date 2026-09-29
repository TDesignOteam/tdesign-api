:: BASE_DOC ::

## API

### Guide Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
back-button-props | Object | - | Typescript: `ButtonProps` | N
counter | String / Function | - | Typescript: `string \| ((params: { total: number; current: number }) => string)` | N
current | Number | - | `v-model:current` is supported | N
default-current | Number | - | uncontrolled property | N
finish-button-props | Object | - | Typescript: `ButtonProps` | N
hide-back | Boolean | false | \- | N
hide-counter | Boolean | false | \- | N
hide-skip | Boolean | false | \- | N
highlight-padding | Number | 16 | \- | N
mode | String | popover | options: popover/dialog | N
next-button-props | Object | - | Typescript: `ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/guide/type.ts) | N
show-overlay | Boolean | true | \- | N
skip-button-props | Object | - | Typescript: `ButtonProps` | N
steps | Array | - | Typescript: `Array<GuideStep>` | N
using-custom-navbar | Boolean | false | \- | N
z-index | Number | 999999 | \- | N

### Guide Events

name | params | description
-- | -- | --
back | `(context: { e: MouseEvent, current: number, total: number  })` | \-
change | `(current: number, context?: { e: MouseEvent,  total: number })` | \-
finish | `(context: { e: MouseEvent, current: number, total: number  })` | \-
next-step-click | `(context: { e: MouseEvent, next: number, current: number, total: number  })` | \-
skip | `(context: { e: MouseEvent, current: number, total: number  })` | \-

### Guide External Classes

className | Description
-- | --
t-class | \-
t-class-back | \-
t-class-body | \-
t-class-finish | \-
t-class-footer | \-
t-class-next | \-
t-class-popover | \-
t-class-reference | \-
t-class-skip | \-
t-class-title | \-
t-class-tooltip | \-

### GuideStep

name | type | default | description | required
-- | -- | -- | -- | --
back-button-props | Object | - | Typescript: `ButtonProps` | N
body | String | - | \- | N
element | Function | - | required。Typescript: `StepElement` `type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/guide/type.ts) | Y
finish-button-props | Object | - | Typescript: `ButtonProps` | N
highlight-padding | Number | - | \- | N
mode | String | - | options: popover/dialog | N
next-button-props | Object | - | Typescript: `ButtonProps` | N
offset | Array | - | this api is in discussing. do not use it。Typescript: `Array<string \| number>` | N
placement | String | 'top' | Typescript: `StepPopoverPlacement ` `type StepPopoverPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\|'center'`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/guide/type.ts) | N
show-overlay | Boolean | true | \- | N
skip-button-props | Object | - | Typescript: `ButtonProps` | N
title | String | - | title of current step | N
