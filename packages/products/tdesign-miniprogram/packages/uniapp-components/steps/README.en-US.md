:: BASE_DOC ::

## API

### Steps Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
current | String / Number | - | `v-model:current` is supported | N
default-current | String / Number | - | uncontrolled property | N
current-status | String | process | options: default/process/finish/error | N
layout | String | horizontal | options: horizontal/vertical | N
readonly | Boolean | undefined | \- | N
sequence | String | positive | options: positive/reverse | N
theme | String | default | options: default/dot | N

### Steps Events

name | params | description
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | \-

### Steps Slots

name | Description
-- | --
\- | \-

### Steps External Classes

className | Description
-- | --
t-class | \-


### StepItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | '' | \- | N
extra | String | - | \- | N
icon | String | - | \- | N
status | String | default | options: default/process/finish/error。Typescript: `StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/step-item/type.ts) | N
sub-step-items | Array | [] | `deprecated`。Typescript: `SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/step-item/type.ts) | N
title | String | '' | \- | N

### StepItem Slots

name | Description
-- | --
\- | \-
content | \-
extra | \-
icon | \-
title | \-

### StepItem External Classes

className | Description
-- | --
t-class | class name of root node
t-class-content | \-
t-class-description | \-
t-class-extra | \-
t-class-title | \-
