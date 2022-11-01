:: BASE_DOC ::

## API
### ImageViewer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
background-color | String / Number | rgba(0, 0, 0, .6) | 遮罩的背景颜色 | N
close-btn | Boolean / Slot | true | 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮 | N
delete-btn | Boolean | false | 是否显示删除操作 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 初始化页码。TS 类型：`Number` | N
max-zoom | Number | 3 | 最大放大比例。TS 类型：`Number` | N
show-index | Boolean | false | 是否显示页码 | N
style | String | - | 自定义组件样式 | N
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 | N

### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
close | `(detail: { trigger: 'close-btn' \| 'overlay' \| 'esc';\| KeyboardEvent })` | 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键
index-change | `(index: number, context: { trigger: 'prev' \| 'next' })` | 预览图片切换时触发，`context.prev` 切换到上一张图片，`context.next` 切换到下一张图片
