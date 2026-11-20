:: BASE_DOC ::

## API

### Masonry Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | Slot / Function | - | 瀑布流内容，每个带 key 的子元素为一项，适用于静态内容。（与 `items` + `renderItem` 为两种互斥的使用方式）。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
gap | Number / Object | 0 | 间距，可传入固定数值或按容器宽度断点配置（如 `{ 0: 8, 640: 12, 1024: 16 }`）。TS 类型：`number \| Record<number, number>` | N
items | Array | - | 瀑布流数据源数组，配合 `renderItem` 使用，除 `key` 外不限制数据项的字段和内容。TS 类型：`MasonryItem[]` `interface MasonryItem { key: string \| number; [prop: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/masonry/type.ts) | N
renderItem | Function | - | 自定义渲染每一个瀑布流 item 的函数，接收数据项和索引，返回要展示的节点，配合 `items` 使用。TS 类型：`(item: MasonryItem, index: number) => TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
strategy | String | shortest | 数据排布策略，可选值 `shortest`（最短列优先，将新项放入当前累计高度最小的列）、`sequential`（按序轮流，新项按固定顺序轮流放入各列）。可选项：shortest/sequential | N
type | String | fixed-width | 瀑布流类型，可选值 `fixed-width`（固定宽度和自适应高度）、`fixed-both`（固定宽度和高度）、`fixed-height`（自适应宽度和固定高度）、`free-size`（动态宽高）。可选项：fixed-width/fixed-both/fixed-height/free-size | N
onLayoutChange | Function |  | TS 类型：`(items: MasonryItemLayout[]) => void`<br/>布局发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/masonry/type.ts)。<br/>`interface MasonryItemLayout { key: string \| number; index: number; column: number; x: number; y: number; width: number; height: number }`<br/> | N

### Masonry Events

名称 | 参数 | 描述
-- | -- | --
layout-change | `(items: MasonryItemLayout[])` | 布局发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/masonry/type.ts)。<br/>`interface MasonryItemLayout { key: string \| number; index: number; column: number; x: number; y: number; width: number; height: number }`<br/>
