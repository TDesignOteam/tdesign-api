
const props = `

### Image Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
alt | String | - | 图片描述 | N
disabled | Boolean | false | 已废弃。禁用状态，图片不响应鼠标事件 | N
error | String / TNode | - | 自定义图片加载失败状态下的显示内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
error | String / TNode | 'default' | 加载失败时显示的内容。值为 \`default\` 则表示使用默认加载失败风格；值为空或者 \`slot\` 表示使用插槽渲染，插槽名称为 \`error\`；值为其他则表示普通文本内容，如“加载失败”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
fallback | String | - | 图片加载失败时，显示当前链接设置的图片地址。如果要使用组件图标或完全自定义加载失败时显示的内容，请更为使用 \`error\` | N
fit | String | fill | 图片填充模式。可选项：contain/cover/fill/none/scale-down | N
gallery | Boolean | false | 是否展示为图集样式 | N
height | String / Number | - | 高度，默认单位为\`px\` | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | String / TNode | - | 自定义加载中状态的图片内容，如：“加载中”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
loading | String / TNode | 'default' | 加载态内容。值为 \`default\` 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
mode | String | scaleToFill | 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
overlayContent | String / TNode | - | 图片上方的浮层内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
overlayTrigger | String | always | 浮层 \`overlayContent\` 出现的时机。可选项：always/hover | N
placeholder | String / TNode | - | 占位元素，展示层级低于 \`loading\` \`error\` 和图片本身，值类型为字符串时表示占位图片地址。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
position | String | center | 等同于原生的 object-position 属性，可选值为 top right bottom left 或 string，可以自定义任何单位，px 或者 百分比 | N
referrerpolicy | String | - | \`<img>\` 标签的原生属性，[MDN 定义](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)。可选项：no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/same-origin/strict-origin/strict-origin-when-cross-origin/unsafe-url | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
showMenuByLongpress | Boolean | false | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单 | N
src | String / File | - | 用于显示图片的链接或原始图片文件对象。TS 类型：\`string \| File\` | N
src | String | - | 图片链接 | N
srcset | Object | - | 图片链接集合，用于支持特殊格式的图片，如 \`.avif\` 和 \`.webp\`。会优先加载 \`srcset\` 中的图片格式，浏览器不支持的情况下，加载 \`src\` 设置的图片地址。TS 类型：\`ImageSrcset\` \`interface ImageSrcset { 'image/avif': string; 'image/webp': string; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image/type.ts) | N
tId | String | - | 图片标签id | N
webp | Boolean | false | 默认不解析 webP 格式，只支持网络资源 | N
width | String / Number | - | 宽度，默认单位为\`px\` | N
onError | Function |  | TS 类型：\`(context: { e: ImageEvent }) => void\`<br/>图片加载失败时触发。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
onLoad | Function |  | TS 类型：\`(context: { e: ImageEvent }) => void\`<br/>图片加载完成时触发。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | \`(context: { e: ImageEvent })\` | 图片加载失败时触发。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
load | \`(context: { e: ImageEvent })\` | 图片加载完成时触发。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)

### Image Slots

名称 | 描述
-- | --
error | 自定义 \`error\` 显示内容
loading | 自定义 \`loading\` 显示内容

### Image External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-load | 加载样式类

`;
module.exports = {
  props,
};

