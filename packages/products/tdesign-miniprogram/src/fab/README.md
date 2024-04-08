:: BASE_DOC ::

## API

### Fab Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
button-props | Object | - | 透传至 Button 组件。TS 类型：`ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
draggable | String / Boolean | false | `true` / `'all'`可拖动<br>`'vertical'`可垂直拖动<br>`'horizontal'`可水平拖动<br>`false`禁止拖动 | N
icon | String | - | 图标 | N
text | String | - | 文本内容 | N

### Fab Events

名称 | 参数 | 描述
-- | -- | --
click | `({e: Event})` | 悬浮按钮点击事件
