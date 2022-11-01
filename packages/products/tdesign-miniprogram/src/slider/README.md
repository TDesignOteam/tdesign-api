:: BASE_DOC ::

## API
### Slider Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
colors | Array | ['#0052D9', 'rgba(220, 220, 220, 1)'] | 颜色，[已选择, 未选择]。TS 类型：`Array<string>` | N
disabled | Boolean | false | 是否禁用组件 | N
disabled-color | Array | ['#bbd3fb', '#dcdcdc'] | 禁用状态滑动条的颜色，[已选, 未选]。TS 类型：`Array<string>` | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、滑道底部、滑道激活态、滑道禁用态、游标 等元素类名。`['t-class', 't-class-bar', 't-class-bar-active', 't-class-bar-disabled', 't-class-cursor']` | N
label | String / Boolean / Slot | false | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值 | N
marks | Object / Array | {} | 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`。TS 类型：`Record<number, string> \| Array<number>` | N
max | Number | 100 | 滑块范围最大值 | N
min | Number | 0 | 滑块范围最小值 | N
range | Boolean | false | 双游标滑块 | N
show-extreme-value | Boolean | false | 是否边界值 | N
step | Number | 1 | 步长 | N
style | String | - | 自定义组件样式 | N
value | Number / Array | 0 | 滑块值。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | 滑块值。非受控属性。TS 类型：`SliderValue` `type SliderValue = number \| Array<number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N

### Slider Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: SliderValue)` | 滑块值变化时触发
dragend | \- | 结束拖动时触发
dragstart | \- | 开始拖动时触发
