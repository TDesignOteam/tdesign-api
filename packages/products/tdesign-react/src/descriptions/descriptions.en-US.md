:: BASE_DOC ::

## API
### Descriptions Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
bordered | Boolean | false | set description list with grey border | N
colon | Boolean | - | set label with ":" on the right | N
columns | Number | 2 | count of DescriptionItem in one row | N
contentAlign | String | left | options：left/center | N
labelAlign | String | right | options：left/right/top | N
layout | String | horizontal | layout direction。options：horizontal/vertical | N
size | String | medium | a descriptions has three size。options：small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N

### DescriptionItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
label | TNode | - | label of description item。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
span | Number | 1 | width count | N
