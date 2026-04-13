:: BASE_DOC ::

## API

### Link Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets) | N
content | String / TNode | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
disabled | Boolean | undefined | make link to be disabled | N
download | String / Boolean | - | Causes the browser to treat the linked URL as a download | N
hover | String | underline | hover link style。options: color/underline | N
href | String | - | \- | N
prefixIcon | TNode | - | Typescript: `TNode`。[see more ts definition](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
suffixIcon | TNode | - | Typescript: `TNode`。[see more ts definition](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
target | String | - | target is an attribute of `<a>` | N
onClick | Function |  | Typescript: `(e: MouseEvent) => void`<br/>click event, it won't trigger when it's disabled | N
