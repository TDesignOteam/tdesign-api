:: BASE_DOC ::

## API
### Image Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
error | String / Slot | 'default' | 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” | N
external-classes | Array | - | 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名。`['t-class', 't-class-load']` | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | String / Slot | 'default' | 加载态内容。值为 `default` 则表示使用默认加载中风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `loading`；值为其他则表示普通文本内容，如“加载中” | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
show-menu-by-longpress | Boolean | false | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。 | N
src | String | - | 图片链接 | N
style | String | - | 自定义组件样式 | N
mode | 只支持 scaleToFill/aspectFit/aspectFill/widthFix/heightFix，其余暂未支持，表现为居中 | - | 必需 | Y
webp | 无需指定，默认支持 | - | 必需 | Y

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | \- | 图片加载失败时触发
load | \- | 图片加载完成时触发
