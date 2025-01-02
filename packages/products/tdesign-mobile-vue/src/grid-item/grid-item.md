:: BASE_DOC ::

## API


### GridItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
badge | Object | null | 透传至 Badge 属性。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/grid-item/type.ts) | N
description | String / Slot / Function | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
image | String / Object / Slot / Function | - | 图片，可以是图片地址，也可以自定义图片节点，如果传入对象则透传至 image 组件。TS 类型：`string \| object \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
text | String / Slot / Function | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
