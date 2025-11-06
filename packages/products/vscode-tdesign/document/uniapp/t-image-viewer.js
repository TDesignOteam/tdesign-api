
const props = `

### ImageViewer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
backgroundColor | String | - | 遮罩的背景颜色 | N
closeBtn | Boolean / TNode | true | 是否展示关闭按钮，值为 \`true\` 显示默认关闭按钮；值为 \`false\` 则不显示关闭按钮；也可以完全自定义关闭按钮。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeBtn | String / Boolean / Object / TNode | false | 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 \`true\` 表示使用默认图标 \`close\`，值为 \`Object\` 类型，表示透传至 \`icon\` ，不传表示不显示图标。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeOnEscKeydown | Boolean | true | 按下 ESC 时是否触发图片预览器关闭事件 | N
closeOnOverlay | Boolean | - | 是否在点击遮罩层时，触发预览关闭 | N
deleteBtn | String / Boolean / Object / TNode | false | 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 \`true\` 表示使用默认图标 \`delete\`，值为 \`Object\` 类型，表示透传至 \`icon\`，不传表示不显示图标。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
deleteBtn | Boolean / TNode | false | 是否显示删除操作，前提需要开启页码。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
draggable | Boolean | undefined | 是否允许拖拽调整位置。\`mode=modal\` 时，默认不允许拖拽；\`mode=modeless\` 时，默认允许拖拽 | N
imageReferrerpolicy | String | - | 图片预览中的 \`<img>\` 标签的原生属性，[MDN 定义](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)。可选项：no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/same-origin/strict-origin/strict-origin-when-cross-origin/unsafe-url | N
imageScale | Object | - |  图片缩放相关配置。\`imageScale.max\` 缩放的最大比例；\`imageScale.min\` 缩放的最小比例；\`imageScale.step\` 缩放的步长速度; \`imageScale.defaultScale\` 默认的缩放比例。TS 类型：\`Partial<ImageScale>\` \`interface ImageScale { max: number; min: number; step: number; defaultScale: number; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts) | N
images | Array | [] | 图片数组。TS 类型：\`Array<string>\` | N
images | Array | [] | 图片数组。\`mainImage\` 表示主图，必传；\`thumbnail\` 表示缩略图，如果不存在，则使用主图显示；\`download\` 是否允许下载图片，默认允许下载。示例: \`['img_url_1', 'img_url_2']\`，\`[{ thumbnail: 'small_image_url', mainImage: 'big_image_url', download: false }]\`。TS 类型：\`Array<string \| File \| ImageInfo>\` \`interface ImageInfo { mainImage: string \| File; thumbnail?: string \| File; download?: boolean; isSvg?: boolean }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts) | N
images | Array | [] | 图片数组。TS 类型：\`Array<string \| ImageInfo>\` \`interface ImageInfo { url: string; align: 'start' \| 'center' \| 'end' }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts) | N
index | Number | 0 | 当前预览图片所在的下标 | N
defaultIndex | Number | 0 | 当前预览图片所在的下标。非受控属性 | N
index | Number | - | 当前预览图片所在的下标 | N
defaultIndex | Number | - | 当前预览图片所在的下标。非受控属性 | N
initialIndex | Number | 0 | 初始化页码。TS 类型：\`Number\` | N
lazy | Boolean | true | 是否开启图片懒加载。开启后会预加载当前图片、相邻图片 | N
maxZoom | Number | 3 | 【开发中】最大放大比例 | N
mode | String | modal | 模态预览（modal）和非模态预览（modeless)。可选项：modal/modeless | N
navigationArrow | Boolean / TNode | true | 切换预览图片的左图标，可自定义。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
showIndex | Boolean | false | 是否显示页码 | N
showOverlay | Boolean | undefined | 是否显示遮罩层。\`mode=modal\` 时，默认显示；\`mode=modeless\` 时，默认不显示 | N
title | String / TNode | - | 预览标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
trigger | String / TNode | - | 触发图片预览的元素，可能是一个预览按钮，可能是一张缩略图，完全自定义。TS 类型：\`TNode \| TNode<{ open: (index?: number) => void }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
viewerScale | Object | - | 限制预览器缩放的最小宽度和最小高度，仅 \`mode=modeless\` 时有效。TS 类型：\`ImageViewerScale\` \`interface ImageViewerScale { minWidth: number; minHeight: number }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts) | N
visible | Boolean | false | 隐藏/显示预览 | N
defaultVisible | Boolean | false | 隐藏/显示预览。非受控属性 | N
zIndex | Number | - | 层级，默认为 3000 | N
onChange | Function |  | TS 类型：\`(index: number) => void\`<br/>翻页时回调 | N
onClose | Function |  | TS 类型：\`(context: { trigger: 'close-btn' \| 'overlay' \| 'esc'; e: MouseEvent \| KeyboardEvent }) => void\`<br/>关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键 | N
onClose | Function |  | TS 类型：\`(trigger: 'overlay' \| 'button', visible: Boolean, index: Number) => void\`<br/>点击操作按钮button或者overlay时触发 | N
onClose | Function |  | TS 类型：\`(context: { trigger: ImageViewerCloseTrigger, visible: boolean, index: number }) => void\`<br/>关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts)。<br/>\`type ImageViewerCloseTrigger = 'image' \| 'overlay' \| 'close-btn'\`<br/> | N
onDelete | Function |  | TS 类型：\`(index: number) => void\`<br/>点击删除操作按钮时触发 | N
onDownload | Function |  | TS 类型：\`(url: string \| File) => void\`<br/>自定义预览图片下载操作，url为图片链接 | N
onIndexChange | Function |  | TS 类型：\`(index: number, context: { trigger: 'prev' \| 'next' \| 'current' }) => void\`<br/>预览图片切换时触发，\`context.prev\` 切换到上一张图片，\`context.next\` 切换到下一张图片 | N
onIndexChange | Function |  | TS 类型：\`(index: number, context: { trigger: 'prev' \| 'next' }) => void\`<br/>预览图片切换时触发，\`context.prev\` 切换到上一张图片，\`context.next\` 切换到下一张图片 | N

### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
change | \`(index: number)\` | 翻页时回调
close | \`(context: { trigger: 'close-btn' \| 'overlay' \| 'esc'; e: MouseEvent \| KeyboardEvent })\` | 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键
close | \`(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)\` | 点击操作按钮button或者overlay时触发
close | \`(context: { trigger: ImageViewerCloseTrigger, visible: boolean, index: number })\` | 关闭时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/image-viewer/type.ts)。<br/>\`type ImageViewerCloseTrigger = 'image' \| 'overlay' \| 'close-btn'\`<br/>
delete | \`(index: number)\` | 点击删除操作按钮时触发
download | \`(url: string \| File)\` | 自定义预览图片下载操作，url为图片链接
index-change | \`(index: number, context: { trigger: 'prev' \| 'next' \| 'current' })\` | 预览图片切换时触发，\`context.prev\` 切换到上一张图片，\`context.next\` 切换到下一张图片
index-change | \`(index: number, context: { trigger: 'prev' \| 'next' })\` | 预览图片切换时触发，\`context.prev\` 切换到上一张图片，\`context.next\` 切换到下一张图片

### ImageViewer Slots

名称 | 描述
-- | --
close-btn | 关闭操作
delete-btn | 删除操作

`;
module.exports = {
  props,
};

