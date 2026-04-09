:: BASE_DOC ::

## API

### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
current | String / Number | - | `v-model:current` is supported | N
default-current | String / Number | - | uncontrolled property | N
index-list | Array | - | Typescript: `Array<string \| number>` | N
list | Array | [] | `deprecated`。Typescript: `ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/indexes/type.ts) | N
show-full-index | Boolean | false | `0.9.0`。Typescript: `Boolean` | N
sticky | Boolean | true | Typescript: `Boolean` | N
sticky-offset | Number | 0 | \- | N

### Indexes Events

name | params | description
-- | -- | --
change | `(index: string \| number)` | \-
select | `(index: string \| number)` | \-

### Indexes Slots

name | Description
-- | --
\- | \-


### IndexesAnchor Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
index | String / Number | - | \- | N

### IndexesAnchor Slots

name | Description
-- | --
\- | \-

### IndexesAnchor External Classes

className | Description
-- | --
t-class | class name of root node
t-class-sidebar | \-
t-class-sidebar-item | \-
