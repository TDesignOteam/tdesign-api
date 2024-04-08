:: BASE_DOC ::

## API

### SwiperNav Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
current | Number | 0 | `0.34.0`。当前轮播在哪一项（下标） | N
direction | String | horizontal | `0.34.0`。轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
min-show-num | Number | 2 | 小于这个数字不会显示导航器 | N
pagination-position | String | bottom | `0.34.0`。页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right | N
show-controls | Boolean | false | `0.32.0`。是否显示两侧的控制按钮 | N
total | Number | 0 | `0.34.0`。总共的项数 | N
type | String | dots | 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等。TS 类型：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper-nav/type.ts) | N
### SwiperNav External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
