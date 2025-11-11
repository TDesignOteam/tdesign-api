:: BASE_DOC ::

## API
### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | String | slide | options: slide | N
autoplay | Boolean | true | \- | N
current | Number | 0 | `v-model` and `v-model:current` is supported | N
direction | String | horizontal | options: horizontal/vertical | N
duration | Number | 300 | \- | N
height | String / Number | - | \- | N
interval | Number | 5000 | \- | N
loop | Boolean | true | \- | N
navigation | Boolean / Object / Function / Slot / Function | true | Typescript：`SwiperNavigation \| TNode \| Function \| Boolean `。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
nextMargin | String / Number | 0 | \- | N
previousMargin | String / Number | 0 | \- | N
onChange | Function |  | Typescript：`(current: number, context: { source: SwiperChangeSource }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/> | N
onClick | Function |  | Typescript：`(index: number) => void`<br/> | N

### Swiper Events

name | params | description
-- | -- | --
change | `(current: number, context: { source: SwiperChangeSource })` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/>
click | `(index: number)` | \-

### SwiperNavigation

name | type | default | description | required
-- | -- | -- | -- | --
minShowNum | Number | - | \- | N
paginationPosition | String | bottom | options: top-left/top/top-right/bottom-left/bottom/bottom-right/left/right | N
showControls | Boolean | false | \- | N
type | String | - | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts) | N

## API

### Swiper Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | String | slide | options: slide | N
autoplay | Boolean | true | \- | N
current | Number | 0 | `v-model` and `v-model:current` is supported | N
defaultCurrent | Number | 0 | uncontrolled property | N
direction | String | horizontal | options: horizontal/vertical | N
duration | Number | 300 | \- | N
height | String / Number | - | \- | N
interval | Number | 5000 | \- | N
loop | Boolean | true | \- | N
navigation | Boolean / Object / Slot / Function | true | navigation all config, `true` for using default config。Typescript：`SwiperNavigation \| TNode \| Boolean`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
nextMargin | String / Number | 0 | \- | N
previousMargin | String / Number | 0 | \- | N
onChange | Function |  | Typescript：`(current: number, context: { source: SwiperChangeSource }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/> | N
onClick | Function |  | Typescript：`(index: number) => void`<br/> | N

### Swiper Events

name | params | description
-- | -- | --
change | `(current: number, context: { source: SwiperChangeSource })` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/>
click | `(index: number)` | \-

### SwiperNavigation

name | type | default | description | required
-- | -- | -- | -- | --
minShowNum | Number | - | \- | N
paginationPosition | String | bottom | options: top-left/top/top-right/bottom-left/bottom/bottom-right/left/right | N
showControls | Boolean | false | \- | N
type | String | - | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/swiper/type.ts) | N
