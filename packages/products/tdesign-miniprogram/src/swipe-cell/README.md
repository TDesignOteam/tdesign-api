:: BASE_DOC ::

## API
### SwipeCell Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | - | 是否禁用滑动 | N
expanded | String | - | 操作项是否呈现为打开态。可选项：left/right | N
left | Array / Slot | - | 左侧滑动操作项。所有行为同 `right`。TS 类型：`Array<SwipeActionItem>` | N
right | Array / Slot | - | 右侧滑动操作项。有两种定义方式，一种是使用数组，二种是使用插槽。`right.text` 表示操作文本，`right.className` 表示操作项类名，`right.style` 表示操作项样式，`right.onClick` 表示点击操作项后执行的回调函数。示例：`[{ text: '删除', style: 'background-color: red', onClick: () => {} }]`。TS 类型：`Array<SwipeActionItem>` `interface SwipeActionItem {text: string; className?: string; style?: string; onClick?: () => void; [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts) | N
style | String | - | 自定义组件样式 | N

### SwipeCell Events

名称 | 参数 | 描述
-- | -- | --
click | `(action: SwipeActionItem, source: SwipeSource)` | 操作项点击时触发（插槽写法组件不触发，业务侧自定义内容和事件）。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts)。<br/>`type SwipeSource = 'left' \| 'right'`<br/>
