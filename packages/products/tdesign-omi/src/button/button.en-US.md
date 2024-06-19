:: BASE_DOC ::

## API
### Button Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
block | Boolean | false | make button to be a block-level element | N
children | String / TNode | - | button's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-omi/blob/develop/src/common.ts) | N
content | String / TNode | - | button's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-omi/blob/develop/src/common.ts) | N
disabled | Boolean | undefined | disable the button, make it can not be clicked | N
ghost | Boolean | false | make background-color to be transparent | N
icon | TNode | - | use it to set left icon in button。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-omi/blob/develop/src/common.ts) | N
loading | Boolean | false | set button to be loading state | N
size | String | medium | a button has four size。options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-omi/blob/develop/src/common.ts) | N
suffix | TNode | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-omi/blob/develop/src/common.ts) | N
tag | String | - | HTML Tag Element。options: button/a/div | N
theme | String | - | button theme。options: default/primary/danger/warning/success | N
variant | String | base | variant of button。options: base/outline/dashed/text | N
onClick | Function |  | Typescript：`(e: MouseEvent) => void`<br/>trigger on click | N
