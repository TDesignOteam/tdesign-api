:: BASE_DOC ::

## API

### Image Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
error | String | 'default' | 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” | N
height | String / Number | - | 高度，默认单位为`px` | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | String | 'default' | 加载态内容。值为 `default` 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中” | N
mode | String | scaleToFill | 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
show-menu-by-longpress | Boolean | false | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单 | N
src | String | - | 图片链接 | N
t-id | String | - | 图片标签id | N
webp | Boolean | false | 默认不解析 webP 格式，只支持网络资源 | N
width | String / Number | - | 宽度，默认单位为`px` | N

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | `(context: { e: ImageEvent })` | 图片加载失败时触发。[通用类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts)
load | `(context: { e: ImageEvent })` | 图片加载完成时触发。[通用类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts)

### Image Slots

名称 | 描述
-- | --
error | 自定义 `error` 显示内容
loading | 自定义 `loading` 显示内容

### Image External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-load | 加载样式类
