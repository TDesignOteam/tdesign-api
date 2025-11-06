
const props = `

### Slider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
colors | Array | [] | 已废弃。颜色，[已选择, 未选择]。TS 类型：\`Array<string>\` | N
disabled | Boolean | undefined | 是否禁用组件 | N
disabledColor | Array | [] | 已废弃。禁用状态滑动条的颜色，[已选, 未选]。TS 类型：\`Array<string>\` | N
inputNumberProps | Boolean / Object | false | 用于控制数字输入框组件，值为 false 表示不显示数字输入框；值为 true 表示呈现默认数字输入框；值类型为 Object 表示透传属性到数字输入框组件。TS 类型：\`boolean \| InputNumberProps\`，[InputNumber API Documents](./input-number?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/slider/type.ts) | N
label | String / Boolean / TNode | true | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 \`\${value}%\` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 \`value\` 标识滑块值，参数 \`position=start\` 表示范围滑块的起始值，参数 \`position=end\` 表示范围滑块的终点值。TS 类型：\`string \| boolean \| TNode<{ value: SliderValue; position?: 'start' \| 'end' }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String / Boolean / Function | false | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 \`\${value}%\` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 \`value\` 标识滑块值，参数 \`position=start\` 表示范围滑块的起始值，参数 \`position=end\` 表示范围滑块的终点值。TS 类型：\`string \| boolean\` | N
label | String / Boolean / TNode | false | 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 \`\${value}%\` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 \`value\` 标识滑块值，参数 \`position=start\` 表示范围滑块的起始值，参数 \`position=end\` 表示范围滑块的终点值。TS 类型：\`string \| boolean \| TNode<{ value: SliderValue; position?: 'start' \| 'end' }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
layout | String | horizontal | 滑块布局方向。可选项：vertical/horizontal | N
marks | Object / Array | - | 刻度标记，示例：[0, 10, 40, 200] 或者 \`{ 10: (val) => val + '%', 50: (h) => <button>50</button> }\`。TS 类型：\`Array<number> \| SliderMarks\` \`interface SliderMarks { [mark: number]: string \| TNode<{ value: number }> }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/slider/type.ts) | N
marks | Object / Array | {} | 刻度标记，示例：\`[0, 10, 40, 200]\` 或者 \`{ 5:  '5¥', 10: '10%' }\`。TS 类型：\`Record<number, string> \| Array<number>\` | N
max | Number | 100 | 滑块范围最大值 | N
min | Number | 0 | 滑块范围最小值 | N
range | Boolean | false | 双游标滑块 | N
showExtremeValue | Boolean | false | 是否边界值 | N
showStep | Boolean | false | 控制步长刻度值显示 | N
step | Number | 1 | 步长 | N
theme | String | default | 滑块风格。可选项：default/capsule | N
tooltipProps | Object | - | 透传提示组件属性。TS 类型：\`TooltipProps\`，[Tooltip API Documents](./tooltip?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/slider/type.ts) | N
value | Number / Array | 0 | 滑块值。TS 类型：\`SliderValue\` \`type SliderValue = number \| Array<number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/slider/type.ts) | N
defaultValue | Number / Array | 0 | 滑块值。非受控属性。TS 类型：\`SliderValue\` \`type SliderValue = number \| Array<number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/slider/type.ts) | N
vertical | Boolean | false | 是否是垂直的滑块（渲染垂直滑块时，默认高度为400rpx，可通过修改\`--td-slider-bar-height\`来自定义高度） | N
vertical | Boolean | false | 是否是垂直的滑块（渲染垂直滑块时，默认高度为200px，可通过修改\`--td-slider-bar-height\`来自定义高度） | N
onChange | Function |  | TS 类型：\`(value: SliderValue) => void\`<br/>滑块值变化时触发 | N
onChangeEnd | Function |  | TS 类型：\`(value: SliderValue) => void\`<br/>松开拖动\`mouseup\` 或点击滑块条时触发，适合不希望在拖动滑块过程频繁触发回调的场景实用 | N
onDragend | Function |  | TS 类型：\`(value: SliderValue, e: TouchEvent) => void\`<br/>结束拖动时触发 | N
onDragend | Function |  | TS 类型：\`(value: SliderValue, context: {e: TouchEvent}) => void\`<br/>结束拖动时触发 | N
onDragstart | Function |  | TS 类型：\`(e: TouchEvent) => void\`<br/>开始拖动时触发 | N
onDragstart | Function |  | TS 类型：\`(context: {e: TouchEvent}) => void\`<br/>开始拖动时触发 | N

### Slider Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: SliderValue)\` | 滑块值变化时触发
change-end | \`(value: SliderValue)\` | 松开拖动\`mouseup\` 或点击滑块条时触发，适合不希望在拖动滑块过程频繁触发回调的场景实用
dragend | \`(value: SliderValue, e: TouchEvent)\` | 结束拖动时触发
dragend | \`(value: SliderValue, context: {e: TouchEvent})\` | 结束拖动时触发
dragstart | \`(e: TouchEvent)\` | 开始拖动时触发
dragstart | \`(context: {e: TouchEvent})\` | 开始拖动时触发

### Slider External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-bar | 滑道底部样式类
t-class-bar-active | 滑道激活态样式类
t-class-bar-disabled | 滑道禁用态样式类
t-class-cursor | 游标样式类

`;
module.exports = {
  props,
};

