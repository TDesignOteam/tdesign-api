:: BASE_DOC ::

## API

### Collapse Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
default-expand-all | Boolean | false | \- | N
disabled | Boolean | - | \- | N
expand-icon | Boolean | true | \- | N
expand-mutex | Boolean | false | \- | N
theme | String | default | options: default/card | N
value | Array | - | `v-model:value` is supported。Typescript: `CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/collapse/type.ts) | N
default-value | Array | - | uncontrolled property。Typescript: `CollapseValue` `type CollapseValue = Array<string \| number>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/collapse/type.ts) | N

### Collapse Events

name | params | description
-- | -- | --
change | `(value: CollapseValue, context: { e: MouseEvent })` | \-

### Collapse Slots

name | Description
-- | --
\- | \-


### CollapsePanel Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | \- | N
disabled | Boolean | undefined | \- | N
expand-icon | Boolean | undefined | \- | N
header | String | - | \- | N
header-left-icon | String | - | \- | N
header-right-content | String | - | \- | N
placement | String | bottom | options: bottom/top | N
value | String / Number | - | \- | N

### CollapsePanel Slots

name | Description
-- | --
\- | \-
content | \-
expand-icon | \-
header | \-
header-left-icon | \-
header-right-content | \-

### CollapsePanel External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-header | \-
