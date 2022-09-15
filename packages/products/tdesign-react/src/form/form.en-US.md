:: BASE_DOC ::

## API
### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
for | String | - | \- | N
help | TNode | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
initialData | String / Number / Object / Array | - | Typescript：`InitialData` `type InitialData = any`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
label | TNode | '' | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
labelAlign | String | - | options：left/right/top | N
labelWidth | String / Number | - | \- | N
name | String / Number / Array | - | Typescript：`NamePath` `type NamePath = string | number | Array<string | number>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
requiredMark | Boolean | undefined | \- | N
rules | Array | - | Typescript：`Array<FormRule>` | N
showErrorMessage | Boolean | undefined | \- | N
status | String | - | Typescript：`'error' | 'warning' | 'success' | 'validating'` | N
statusIcon | TNode | undefined | Typescript：`boolean | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
successBorder | Boolean | false | \- | N
tips | TNode | - | Typescript：`string | TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
