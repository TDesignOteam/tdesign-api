:: BASE_DOC ::

## API
### Empty Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | Slot / Function | - | 操作区域。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
description | String / Slot / Function | - | 描述文字。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
image | String / Slot / Function | - | 图片地址。TS 类型：`string \| ImageProps \| TNode `，[Image API Documents](./image?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/empty/type.ts) | N
imageStyle | Object | - | 透传图片样式表。TS 类型：`Styles`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
title | String / Slot / Function | - | 错误标题。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
type | String | empty | 组件类型，如：空数据/成功/失败/网络错误/建设中。可选项：empty/success/fail/network-error/maintenance | N
