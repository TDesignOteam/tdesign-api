:: BASE_DOC ::

## API

### Skeleton Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
row-col | Array | [1, 1, 1, { width: '70%' }] | 用于设置行列数量、宽度高度、间距等。【示例一】，`[1, 1, 2]` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，`[1, 1, { width: '100px' }]` 表示自定义第三行的宽度为 `100px`。【示例三】，`[1, 2, [{ width, height }, { width, height, marginLeft }]]` 表示第三行有两列，且自定义宽度、高度和间距。TS 类型：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | 骨架图风格，有基础、头像组合等两大类。可选项：avatar/image/text/paragraph | N
### Skeleton External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-col | 行样式类
t-class-row | 列样式类
