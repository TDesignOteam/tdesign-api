:: BASE_DOC ::

## API

### SwiperNavigation

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
placement | String | inside | 导航器位置，位于主体的内侧或是外侧。可选项：inside/outside | N
showSlideBtn | String | always | 何时显示导航器的翻页按钮：始终显示、悬浮显示、永不显示。可选项：always/hover/never | N
size | String | medium | 导航器尺寸。可选项：small/medium/large | N
type | String | - | 导航器类型，点状(dots)、点条状(dots-bar)、条状(bars)、分式(fraction)等。TS 类型：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'bars' \| 'fraction'`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/swiper/type.ts) | N
