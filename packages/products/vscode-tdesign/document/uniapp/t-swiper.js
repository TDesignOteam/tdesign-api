
const props = `

### Swiper Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
animation | String | slide | 轮播切换动画效果类型。可选项：slide | N
animation | String | slide | 轮播切换动画效果类型：滑动、淡入淡出等。可选项：slide/fade | N
autoplay | Boolean | true | 是否自动播放 | N
cardScale | Number | 210/332 | 卡片模式下非当前展示轮播图的缩放比例 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
defaultCurrent | Number | 0 | 当前轮播在哪一项（下标）。非受控属性 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
displayMultipleItems | Number | 1 | 同时显示的滑块数量 | N
duration | Number | 300 | 滑动动画时长 | N
easingFunction | String | default | 指定 swiper 切换缓动动画类型。可选项：default/linear/easeInCubic/easeOutCubic/easeInOutCubic | N
height | Number | - | 当使用垂直方向滚动时的高度 | N
height | String / Number | 192 | 轮播的高度；默认单位 \`px\` | N
height | String / Number | - | 轮播的高度 | N
height | String / Number | - | 当使用垂直方向滚动时的高度 | N
imageProps | Object | - | 透传至 Image 组件 | N
interval | Number | 5000 | 轮播间隔时间 | N
list | Array | - | 图片列表。TS 类型：\`string[] \| SwiperList[]\` \`interface SwiperList { value: string, ariaLabel: string }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts) | N
loop | Boolean | true | 是否循环播放 | N
navigation | Object / TNode | - | 导航器全部配置。TS 类型：\`SwiperNavigation \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
navigation | Boolean / Object / TNode | true | 导航器全部配置，true 的话使用默认配置。TS 类型：\`SwiperNavProps \| boolean\`，[SwiperNav API Documents](./swiper-nav?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts) | N
nextMargin | String / Number | 0 | 后边距，可用于露出后一项的一小部分。默认单位 \`px\` | N
nextMargin | String / Number | 0 | 【开发中】后边距，可用于露出后一项的一小部分。默认单位 \`px\` | N
paginationPosition | String | bottom | 页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right | N
previousMargin | String / Number | 0 | 前边距，可用于露出前一项的一小部分。默认单位 \`px\` | N
previousMargin | String / Number | 0 | 【开发中】前边距，可用于露出前一项的一小部分。默认单位 \`px\` | N
snapToEdge | Boolean | false | 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 | N
stopOnHover | Boolean | true | 是否悬浮时停止轮播 | N
theme | String | light | 深色模式和浅色模式。可选项：light/dark | N
trigger | String | hover | 触发切换的方式：悬浮、点击等。可选项：hover/click | N
type | String | default | 样式类型：默认样式、卡片样式。可选项：default/card | N
onAnimationfinish | Function |  | TS 类型：\`(current: number, source: SwiperChangeSource) => void\`<br/>轮播切换时触发 | N
onChange | Function |  | TS 类型：\`(current: number, context: { source: SwiperChangeSource }) => void\`<br/>轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/> | N
onChange | Function |  | TS 类型：\`(current: number, context: { source: SwiperChangeSource }) => void\`<br/>轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'click' \| 'hover'\`<br/> | N
onChange | Function |  | TS 类型：\`(current: number, source: SwiperChangeSource) => void\`<br/>轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/> | N
onChange | Function |  | TS 类型：\`(current: number, context: { source: SwiperChangeSource }) => void\`<br/>轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/> | N
onClick | Function |  | TS 类型：\`(index: number) => void\`<br/>点击轮播项时触发 | N
onImageLoad | Function |  | TS 类型：\`(index: number) => void\`<br/>图片加载时触发 | N

### Swiper Events

名称 | 参数 | 描述
-- | -- | --
animationfinish | \`(current: number, source: SwiperChangeSource)\` | 轮播切换时触发
change | \`(current: number, context: { source: SwiperChangeSource })\` | 轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/>
change | \`(current: number, context: { source: SwiperChangeSource })\` | 轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'click' \| 'hover'\`<br/>
change | \`(current: number, source: SwiperChangeSource)\` | 轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/>
change | \`(current: number, context: { source: SwiperChangeSource })\` | 轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts)。<br/>\`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'\`<br/>
click | \`(index: number)\` | 点击轮播项时触发
image-load | \`(index: number)\` | 图片加载时触发

### Swiper Slots

名称 | 描述
-- | --
navigation | 导航器全部配置

### Swiper External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-image | 当前图片样式类
t-class-nav | 导航样式类
t-class-next-image | 下一图片样式类
t-class-prev-image | 上一图片样式类

### SwiperNavigation

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
current | Number | 0 | 当前轮播在哪一项（下标） | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
minShowNum | Number | - | 小于这个数字不会显示导航器 | N
paginationPosition | String | bottom | 页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right/left/right | N
placement | String | inside | 导航器位置，位于主体的内侧或是外侧。可选项：inside/outside | N
placement | String | inside | 导航器位置，位于主体的内侧或是外侧。可选项：inside/outside | N
showControls | Boolean | false | 是否显示两侧的控制按钮 | N
showSlideBtn | String | always | 何时显示导航器的翻页按钮：始终显示、悬浮显示、永不显示。可选项：always/hover/never | N
size | String | medium | 导航器尺寸。可选项：small/medium/large | N
total | Number | 0 | 总共的项数 | N
type | String | - | 导航器类型，点状(dots)、点条状(dots-bar)、条状(bars)、分式(fraction)等。TS 类型：\`SwiperNavigationType\` \`type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'bars' \| 'fraction'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts) | N
type | String | - | 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等。TS 类型：\`SwiperNavigationType\` \`type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/swiper/type.ts) | N

`;
module.exports = {
  props,
};

