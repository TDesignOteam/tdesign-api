:: BASE_DOC ::

## API


### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
background-color | String | - | \- | N
close-btn | String / Boolean / Object / Slot | false | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
delete-btn | String / Boolean / Object / Slot | false | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
images | Array | [] | Typescript：`Array<string>` | N
initial-index | Number | 0 | Typescript：`Number` | N
lazy | Boolean | true | `1.9.4` | N
show-index | Boolean | false | \- | N
using-custom-navbar | Boolean | false | `v1.1.4` | N
visible | Boolean | false | hide or show image viewer | N
default-visible | Boolean | undefined | hide or show image viewer。uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
change | `(index: number)` | \-
close | `(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)` | \-
delete | `(index: number)` | \-
