:: BASE_DOC ::

## API

### Comment Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
actions | Array | - | 操作。TS 类型：`Array<CommentActionItem>` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; icon?: string \| object; placement?: ActionPlacement; disabled?: boolean}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
author | String | - | 作者 | N
avatar | String / Object | - | 头像。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
content | String | - | 内容 | N
datetime | String | - | 时间 | N
folds | Object | - | 折叠/展开配置项。支持语法糖 `v-model:folds`。TS 类型：`CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string, string]>>}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts) | N
reply | String | - | 回复 | N

### Comment Events

名称 | 参数 | 描述
-- | -- | --
actions | `(context: { action: CommentActionItem; e: Event })` | 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项
folds | `(context: { fold: CommentFold; e: Event })` | 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置

### Comment Slots

名称 | 描述
-- | --
actions | 自定义 `actions` 显示内容。TS 类型：`Array<CommentActionItem>` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; icon?: string \| object; placement?: ActionPlacement; disabled?: boolean}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
author | 自定义 `author` 显示内容
avatar | 自定义 `avatar` 显示内容。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/comment/type.ts)
content | 自定义 `content` 显示内容
datetime | 自定义 `datetime` 显示内容
reply | 自定义 `reply` 显示内容
