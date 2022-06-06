:: BASE_DOC ::

## API

### ImageViewer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
background-color | String / Number | rgba(0, 0, 0, .6) | 遮罩的背景颜色 | N
close-btn | Boolean / Slot | true | 是否展示关闭按钮 | N
delete-btn | Boolean / Slot | true | 是否展示删除按钮 | N
images | Array | [] | 图片数组。TS 类型：`Array<string>` | N
initial-index | Number | 0 | 默认展示第几项 | N
show-index | Boolean | false | 是否显示页码 | N
visible | Boolean | false | 隐藏/显示预览 | N
default-visible | Boolean | undefined | 隐藏/显示预览。非受控属性 | N
