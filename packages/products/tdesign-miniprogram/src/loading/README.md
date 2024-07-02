:: BASE_DOC ::

## API

### Loading Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
duration | Number | 800 | 加载动画执行完成一次的时间，单位：毫秒 | N
indicator | Boolean / Slot | true | 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
inherit-color | Boolean | false | 是否继承父元素颜色 | N
layout | String | horizontal | 对齐方式。可选项：horizontal/vertical | N
loading | Boolean | true | 是否处于加载状态 | N
pause | Boolean | false | 是否暂停动画 | N
progress | Number | - | 加载进度 | N
reverse | Boolean | - | 加载动画是否反向 | N
size | String | '40rpx' | 尺寸，示例：40rpx/20px | N
text | String / Slot | - | 加载提示文案。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | circular | 加载组件类型。可选项：circular/spinner/dots | N
### Loading External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 指示符样式类
t-class-text | 文本样式类
