:: BASE_DOC ::

## API
### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
height | Number | - | \- | N
list | Array | [] | required。Typescript：`ListItem[] ` `interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/indexes/type.ts) | Y
sticky | Boolean | true | Typescript：`Boolean` | N
style | String | - | \- | N

### Indexes Events

name | params | description
-- | -- | --
select | `(indexes: { groupIndex: string; childrenIndex: number })` | \-
