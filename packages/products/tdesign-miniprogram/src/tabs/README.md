:: BASE_DOC ::

## API

### Tabs Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。（单位：秒）。TS 类型：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
bottom-line-mode | String | fixed | 激活下划线的模式。可选项：fixed/auto/full | N
middle | Slot | - | 中间内容，介于头部和内容之间。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
show-bottom-line | Boolean | true | 是否展示底部激活线条 | N
space-evenly | Boolean | true | 选项卡头部空间是否均分 | N
split | Boolean | true | `1.1.10`。是否展示分割线 | N
sticky | Boolean | false | 是否开启粘性布局 | N
sticky-props | Object | - | 透传至 Sticky 组件。TS 类型：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
swipeable | Boolean | true | 是否可以滑动切换 | N
theme | String | line | 标签的样式。可选项：line/tag/card | N
value | String / Number | - | 激活的选项卡值。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | 激活的选项卡值。非受控属性。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TabValue, label: string)` | 激活的选项卡发生变化时触发
click | `(value: TabValue, label: string)` | 点击选项卡时触发
scroll | `(scrollTop: number, isFixed: boolean)` | 页面滚动时触发

### Tabs External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-active | 激活态样式类
t-class-content | 内容样式类
t-class-item | 选项样式类
t-class-track | 滚动条样式类


### TabPanel Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | - | 透传至 Badge 组件 | N
disabled | Boolean | false | 是否禁用当前选项卡 | N
icon | String / Object | - | `1.0.0-rc.1`。图标，传对象则透传至 Icon | N
label | String | - | 选项卡名称 | N
lazy | Boolean | false | 是否启用选项卡懒加载 | N
panel | String / Slot | - | 用于自定义选项卡面板内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
value | String / Number | - | 选项卡的值，唯一标识。TS 类型：`TabValue`，[Tabs API Documents](./tabs?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-panel/type.ts) | N
