:: BASE_DOC ::

## API

### Popup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close-btn | Boolean / Slot | - | 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
close-on-overlay-click | Boolean | true | 点击遮罩层是否关闭 | N
content | String / Slot | - | 浮层里面的内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
default-visible | Boolean | - | 是否显示浮层。非受控属性。TS 类型：`boolean` | N
duration | Number | 240 | 动画过渡时间 | N
overlay-props | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts) | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
visible | Boolean | false | 是否显示浮层。TS 类型：`boolean` | N
z-index | Number | 11500 | 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500 | N

### Popup Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' \| 'overlay'`<br/>
### Popup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
