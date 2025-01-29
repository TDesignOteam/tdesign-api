:: BASE_DOC ::

## API
### Affix Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
container | String / Function | () => (() => window) | Typescript：`ScrollContainer`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
offsetBottom | Number | 0 | \- | N
offsetTop | Number | 0 | \- | N
zIndex | Number | - | \- | N
onFixedChange | Function |  | Typescript：`(affixed: boolean, context: { top: number }) => void`<br/> | N
