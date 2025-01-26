:: BASE_DOC ::

## API

### Loading Props

name | type | default | description | required
-- | -- | -- | -- | --
attach | String / Function | '' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
content | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
delay | Number | 0 | \- | N
fullscreen | Boolean | false | \- | N
indicator | Boolean / Slot / Function | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
inheritColor | Boolean | false | \- | N
loading | Boolean | true | \- | N
preventScrollThrough | Boolean | true | \- | N
showOverlay | Boolean | true | \- | N
size | String | medium | \- | N
text | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
zIndex | Number | - | \- | N

### LoadingPlugin

同时也支持 `this.$loading`。

name | params | default | description
-- | -- | -- | --
options | Function | - | required。Typescript：`boolean \| TdLoadingProps`

插件返回值：`LoadingInstance【interface LoadingInstance { hide: () => void }】`
