:: BASE_DOC ::

## API
### Descriptions Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
bordered | Boolean | false | 是否带边框 | N
colon | Boolean | - | 字段名右侧是否携带冒号“：” | N
columns | Number | 2 | 一行 DescriptionItem 的数量 | N
contentAlign | String | left | 字段值内容的对齐方式：左对齐、居中对齐。可选项：left/right/center | N
itemLayout | String | horizontal | 描述项的排列方向。可选项：horizontal/vertical | N
items | Array | - | 描述项的列表。TS 类型：`Array<T>` | N
labelAlign | String | left | 字段标签对齐方式：左对齐、右对齐、居中对齐。可选项：left/right/center | N
labelClassName | String / Object / Array | - | 自定义描述项的标签的类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
layout | String | horizontal | 排列方向。可选项：horizontal/vertical | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
title | String / Slot / Function | - | 描述列表的标题。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N

### DescriptionItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot / Function | - | 描述项内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
label | String / Slot / Function | - | 描述项标签。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
span | Number | 1 | 占用的宽度数量 | N
