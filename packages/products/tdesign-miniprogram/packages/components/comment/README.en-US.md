:: BASE_DOC ::

## API

### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
actions | Array | - | Typescript: `Array<CommentActionItem> ` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; placement?: ActionPlacement; disabled?: boolean}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
author | String | - | \- | N
avatar | String / Object | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
content | String | - | \- | N
datetime | String | - | \- | N
folds | Object | - | Typescript: `CommentFold ` `type CommentFoldState = 'collapsed' \| 'partial' \| 'expanded'` `interface CommentFold { state: CommentFoldState; total?: number; step?: number; content?: Partial<Record<CommentFoldState, string \| [string, string]>>}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts) | N
reply | String | - | \- | N

### Comment Events

name | params | description
-- | -- | --
actions | `(detail: { action: CommentActionItem;})` | \-
folds | `(detail: { fold: CommentFold;})` | \-

### Comment Slots

name | Description
-- | --
actions | Typescript: `Array<CommentActionItem> ` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; content?: string; placement?: ActionPlacement; disabled?: boolean}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts)
author | \-
avatar | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/comment/type.ts)
content | \-
datetime | \-
reply | \-
