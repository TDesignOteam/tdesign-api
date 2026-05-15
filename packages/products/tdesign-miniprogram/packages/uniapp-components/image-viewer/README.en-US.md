:: BASE_DOC ::

## API

### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
background-color | String | - | \- | N
close-btn | String / Boolean / Object | false | \- | N
delete-btn | String / Boolean / Object | false | \- | N
image-props | Object | - | Typescript: `ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/image-viewer/type.ts) | N
images | Array | [] | Typescript: `Array<string>` | N
initial-index | Number | 0 | Typescript: `Number` | N
lazy | Boolean | true | \- | N
loop | Boolean | true | \- | N
show-index | Boolean | false | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | hide or show image viewer。`v-model:visible` is supported | N
default-visible | Boolean | false | hide or show image viewer。uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
change | `(context: { index: number })` | \-
close | `(context: { trigger: 'overlay' \| 'button', visible: Boolean, index: Number } )` | \-
delete | `(context: { index: number } )` | \-

### ImageViewer Slots

name | Description
-- | --
close-btn | \-
delete-btn | \-
