:: BASE_DOC ::

## API
### SwipeCell Props

name | type | default | description | required
-- | -- | -- | -- | --
disabled | Boolean | - | \- | N
expanded | String | - | options：left/right | N
left | Array / Slot | - | Typescript：`Array<SwipeActionItem>` | N
right | Array / Slot | - | Typescript：`Array<SwipeActionItem>` `interface SwipeActionItem {text: string; className?: string; style?: string; onClick?: () => void; [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts) | N
style | String | - | \- | N

### SwipeCell Events

name | params | description
-- | -- | --
click | `(action: SwipeActionItem, source: SwipeSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swipe-cell/type.ts)。<br/>`type SwipeSource = 'left' \| 'right'`<br/>
