:: BASE_DOC ::

## API
### Tabs Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。TS 类型：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名。`['t-class', 't-class-item', 't-class-active', 't-class-track']` | N
placement | String | top | 选项卡位置。可选项：left/top | N
show-bottom-line | Boolean | true | 是否展示底部激活线条 | N
sticky | Boolean | false | 是否开启粘性布局 | N
sticky-props | Object | - | 透传至 Sticky 组件。TS 类型：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
style | String | - | 自定义组件样式 | N
swipeable | Boolean | true | 是否可以滑动切换 | N
value | String / Number | - | 激活的选项卡值。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | 激活的选项卡值。非受控属性。TS 类型：`TabValue` `type TabValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TabValue)` | 激活的选项卡发生变化时触发

### TabPanel Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
destroy-on-hide | Boolean | true | 选项卡内容隐藏时是否销毁 | N
disabled | Boolean | false | 是否禁用当前选项卡 | N
label | String | - | 选项卡名称 | N
panel | String / Slot | - | 用于自定义选项卡面板内容 | N
style | String | - | 自定义组件样式 | N
value | String / Number | - | 选项卡的值，唯一标识。TS 类型：`TabValue` | N
