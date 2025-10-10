:: BASE_DOC ::

## API

### Steps Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
current | String / Number | - | \- | N
default-current | String / Number | undefined | uncontrolled property | N
current-status | String | process | options: default/process/finish/error | N
layout | String | horizontal | options: horizontal/vertical | N
readonly | Boolean | undefined | \- | N
sequence | String | positive | options: positive/reverse | N
theme | String | default | options: default/dot | N

### Steps Events

name | params | description
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | \-

### Steps External Classes

className | Description
-- | --
t-class | \-

### Steps Slots

name | Description
-- | --
\- | \-


### StepItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String | '' | \- | N
extra | String | - | \- | N
icon | String | - | \- | N
status | String | default | options: default/process/finish/error。Typescript：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/step-item/type.ts) | N
sub-step-items | Array | [] | `deprecated`。Typescript：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/step-item/type.ts) | N
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
