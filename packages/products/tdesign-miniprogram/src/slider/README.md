:: BASE_DOC ::

## API

### Slider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
colors | Array | [] | 已废弃。颜色，[已选择, 未选择]。TS 类型：`Array<string>` | N
disabled | Boolean | undefined | 是否禁用组件 | N
disabled-color | Array | [] | 已废弃。禁用状态滑动条的颜色，[已选, 未选]。TS 类型：`Array<string>` | N
label | String / Boolean | false | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值。TS 类型：`string \| boolean` | N
marks | Object / Array | {} | 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`。TS 类型：`Record<number, string> \| Array<number>` | N
max | Number | 100 | 滑块范围最大值 | N
min | Number | 0 | 滑块范围最小值 | N
range | Boolean | false | 双游标滑块 | N
show-extreme-value | Boolean | false | 是否边界值 | N
step | Number | 1 | 步长 | N
theme | String | default | `0.30.0`。滑块风格。可选项：default/capsule | N
value | Number / Array | 0 | 滑块值。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | 滑块值。非受控属性。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
vertical | Boolean | false | 是否是垂直的滑块（渲染垂直滑块时，默认高度为400rpx，可通过修改`--td-slider-bar-height`来自定义高度） | N

### Slider Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SliderValue)` | 滑块值变化时触发
dragend | \- | 结束拖动时触发
dragstart | \- | 开始拖动时触发
### Slider External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-bar | 滑道底部样式类
t-class-bar-active | 滑道激活态样式类
t-class-bar-disabled | 滑道禁用态样式类
t-class-cursor | 游标样式类
