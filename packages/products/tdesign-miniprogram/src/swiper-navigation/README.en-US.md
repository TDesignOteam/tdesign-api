:: BASE_DOC ::

## API
### SwiperNavigation

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
current | Number | 0 | `0.34.0` | N
direction | String | horizontal | `0.34.0`。options: horizontal/vertical | N
min-show-num | Number | - | \- | N
pagination-position | String | bottom | `0.34.0`。options: top-left/top/top-right/bottom-left/bottom/bottom-right | N
show-controls | Boolean | false | `0.32.0` | N
total | Number | 0 | `0.34.0` | N
type | String | - | Typescript：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper-navigation/type.ts) | N
