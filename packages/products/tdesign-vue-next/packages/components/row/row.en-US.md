:: BASE_DOC ::

## API


### Row Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | top | options: start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | Typescript: `number \|  GutterObject \| Array<GutterObject \| number>` `interface GutterObject { xs?: number; sm?: number; md?: number; lg?: number, xl?: number; xxl?: number; } `。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/row/type.ts) | N
justify | String | start | options: start/end/center/space-around/space-between | N
tag | String | div | \- | N
