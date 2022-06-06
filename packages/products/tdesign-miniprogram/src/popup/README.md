:: BASE_DOC ::

## API

### Popup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | - | 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮 | N
close-on-overlay-click | Boolean | true | 点击遮罩层是否关闭 | N
content | String / Slot | - | 浮层里面的内容 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名。`['t-class', 't-class-overlay', 't-class-content']` | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/center | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
transition-props | Object | - | 动画效果定义。TS 类型：`TdTransitionProps` `interface PopupVisibleChangeContext { trigger: 'close-btn' | 'overlay' }`，[Transition API Documents](./transition?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts) | N
visible | Boolean | false | 是否显示浮层。TS 类型：`boolean` | N
default-visible | Boolean | undefined | 是否显示浮层。非受控属性。TS 类型：`boolean` | N
z-index | Number | - | 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 | N

### Popup Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' | 'overlay'`<br/>
