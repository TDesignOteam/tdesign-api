:: BASE_DOC ::

## API

### List Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
asyncLoading | String / Slot / Function | - | 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
footer | String / Slot / Function | - | 底部。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
header | String / Slot / Function | - | 头部。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
layout | String | horizontal | 排列方式（待设计稿输出）。可选项：horizontal/vertical | N
scroll | Object | - | 懒加载和虚拟滚动。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，`scroll.threshold` 默认为 `100`。TS 类型：`InfinityScroll`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
scroll | Object | - | 懒加载和虚拟滚动。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，`scroll.threshold` 默认为 `100`。TS 类型：`TScroll`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large | N
split | Boolean | false | 是否展示分割线 | N
stripe | Boolean | false | 是否展示斑马纹 | N
onLoadMore | Function |  | TS 类型：`(options: { e: MouseEvent }) => void`<br/>点击加载更多时触发 | N
onScroll | Function |  | TS 类型：`(options: { e: Event \| WheelEvent; scrollTop: number; scrollBottom: number }) => void`<br/>列表滚动时触发，scrollTop 表示顶部滚动距离，scrollBottom 表示底部滚动距离 | N

### List Events

名称 | 参数 | 描述
-- | -- | --
load-more | `(options: { e: MouseEvent })` | 点击加载更多时触发
scroll | `(options: { e: Event \| WheelEvent; scrollTop: number; scrollBottom: number })` | 列表滚动时触发，scrollTop 表示顶部滚动距离，scrollBottom 表示底部滚动距离

### ListInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
scrollTo | `(scrollToParams: ScrollToElementParams)` | \- | 虚拟滚动场景下，支持指定滚动到具体的节点


### ListItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action | String / Slot / Function | - | 操作栏。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
content | String / Slot / Function | - | 内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
default | String / Slot / Function | - | 内容，同 content。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N


### ListItemMeta Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
avatar | String / Slot / Function | - | 已废弃。列表项图片。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
description | String / Slot / Function | - | 列表项内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
image | String / Slot / Function | - | 列表项图片。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
title | String / Slot / Function | - | 列表项标题。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
