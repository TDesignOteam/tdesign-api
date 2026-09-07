:: BASE_DOC ::

## API

### Comment Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actions | TNode | - | 操作。TS 类型：`Array<CommentAction> \| TNode ` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; icon?: TNode; content?: string \| TNode; count?: string \| number; placement?: ActionPlacement; disabled?: boolean}` `type CommentAction = TNode \| CommentActionItem;`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/comment/type.ts) | N
author | TNode | - | 作者。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
avatar | TNode | - | 头像。TS 类型：`string \| AvatarProps \| TNode`，[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/comment/type.ts) | N
children | TNode | - | 子元素内容，同 reply。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
content | TNode | - | 内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
datetime | TNode | - | 时间。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
fold | Object | - | 折叠/展开配置项。TS 类型：`CommentFold ` `type CommentFoldState = 'collapsed' \| 'expanded' \| 'all'` `interface CommentFold { state: CommentFoldState; total?: number; visible?: number; step?: number; text?: Partial<Record<CommentFoldState, string>>;}`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/comment/type.ts) | N
reply | TNode | - | 回复。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
onActions | Function |  | TS 类型：`(context: { action: CommentActionItem \| TNode; e: Event }) => void`<br/>点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
onFold | Function |  | TS 类型：`(context: { fold: CommentFold; e: Event }) => void`<br/>用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置 | N
