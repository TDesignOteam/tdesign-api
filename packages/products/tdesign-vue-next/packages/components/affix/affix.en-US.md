:: BASE_DOC ::

## API
### Affix Props

name | type | default | description | required
-- | -- | -- | -- | --
container | String / Function | () => (() => window) | Typescript：`ScrollContainer`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
content | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
offsetBottom | Number | 0 | \- | N
offsetTop | Number | 0 | \- | N
zIndex | Number | - | \- | N
onFixedChange | Function |  | Typescript：`(affixed: boolean, context: { top: number }) => void`<br/> | N

### Affix Events

name | params | description
-- | -- | --
fixed-change | `(affixed: boolean, context: { top: number })` | \-
