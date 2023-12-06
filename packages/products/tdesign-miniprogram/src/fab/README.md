:: BASE_DOC ::

## API
### Fab Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
button-props | Object | - | 透传至 Button 组件 | N
icon | String | - | 图标 | N
movable | Boolean | false | 是否可移动 | N
movable-view-props | Object | - | 移动配置<br /> direction：移动方向，默认all<br /> inertia：是否带有惯性，默认false<br /> x：定义x轴方向的偏移，单位支持px（默认）、rpx，默认靠屏幕右侧16px<br /> y：定义y轴方向的偏移，单位支持px（默认）、rpx，默认靠屏幕底部32px<br /> disabled：是否禁用，默认false。TS 类型：`movableViewProps` `interface movableViewProps { direction?: 'all' \| 'vertical' \| 'horizontal' \| 'none'; inertia?: boolean; x?: number \| string; y?: number \| string; disabled?: boolean; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
style | String | right: 16px; bottom: 32px; | 悬浮按钮的样式，常用于调整位置 | N
text | String | - | 文本内容 | N

### Fab Events

名称 | 参数 | 描述
-- | -- | --
click | `(detail: {e: MouseEvent})` | 悬浮按钮点击事件
move | `(detail: {e: MouseEvent})` | 移动事件
