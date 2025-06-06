:: BASE_DOC ::

## API

### Loading Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attach | String / Function | '' | 挂载元素，默认挂载到组件本身所在的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
content | String / Slot / Function | - | 子元素。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
default | String / Slot / Function | - | 子元素，同 content。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
fullscreen | Boolean | false | 是否显示为全屏加载 | N
indicator | Boolean / Slot / Function | true | 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
inheritColor | Boolean | false | 是否继承父元素颜色 | N
loading | Boolean | true | 是否处于加载状态 | N
preventScrollThrough | Boolean | true | 防止滚动穿透，全屏加载模式有效 | N
showOverlay | Boolean | true | 是否需要遮罩层，遮罩层对包裹元素才有效 | N
size | String | medium | 尺寸，示例：small/medium/large/12px/56px/0.3em | N
text | String / Slot / Function | - | 加载提示文案。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
zIndex | Number | - | 消息通知层级，样式默认为 3500 | N

### LoadingPlugin

同时也支持 `this.$loading`。

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
options | Function | - | 必需。TS 类型：`boolean \| TdLoadingProps`
context | \- | - | 要继承的应用的上下文。。TS 类型：`AppContext`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)

插件返回值：`LoadingInstance【interface LoadingInstance { hide: () => void }】`
