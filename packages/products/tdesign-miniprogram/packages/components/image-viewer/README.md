:: BASE_DOC ::

## API


### ImageViewer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
background-color | String | - | 遮罩的背景颜色 | N
close-btn | String / Boolean / Object | false | 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标 | N
delete-btn | String / Boolean / Object | false | 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 初始化页码。TS 类型：`Number` | N
lazy | Boolean | true | `1.9.4`。是否开启图片懒加载。开启后会预加载当前图片、相邻图片 | N
show-index | Boolean | false | 是否显示页码 | N
using-custom-navbar | Boolean | false | `v1.1.4`。是否使用了自定义导航栏 | N
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 | N

### ImageViewer Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: number)` | 翻页时回调
close | `(trigger: 'overlay' \| 'button', visible: Boolean, index: Number)` | 点击操作按钮button或者overlay时触发
delete | `(index: number)` | 点击删除操作按钮时触发

### ImageViewer Slots

名称 | 描述
-- | --
close-btn | 关闭操作
delete-btn | 删除操作
