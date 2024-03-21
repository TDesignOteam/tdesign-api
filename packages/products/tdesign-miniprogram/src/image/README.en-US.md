:: BASE_DOC ::

## API

### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
error | String / Slot | 'default' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
fallback | String | - | display `fallback` image on `src` loading failed. you can also use `error` to define more complex error content | N
height | String / Number | - | \- | N
lazy | Boolean | false | \- | N
loading | String / Slot | 'default' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
referrerpolicy | String | - | attribute of `<img>`, [MDN Definition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)。options: no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/same-origin/strict-origin/strict-origin-when-cross-origin/unsafe-url | N
shape | String | square | options: circle/round/square | N
show-menu-by-longpress | Boolean | false | \- | N
src | String / Object | - | src attribute of `<img>`. image File can also be loaded。Typescript：`string \| File` | N
t-id | String | - | `1.2.10`。image tag id | N
webp | Boolean | false | \- | N
width | String / Number | - | \- | N

### Image Events

name | params | description
-- | -- | --
error | - | trigger on image load failed
load | - | trigger on image loaded
