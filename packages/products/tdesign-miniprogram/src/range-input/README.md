:: BASE_DOC ::

## API

### RangeInput Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
active-index | Number | 0 | 输入框高亮状态序号 | N
clearable | Boolean | false | 是否可清空 | N
disabled | Boolean / Array | false | 是否禁用范围输入框，值为数组表示可分别控制某一个输入框是否禁用。TS 类型：`boolean | Array<boolean>` | N
format | Array / Function | - | 指定输入框展示值的格式。TS 类型：`InputFormatType | Array<InputFormatType>` | N
input-props | Object / Array | - | 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]`。TS 类型：`InputProps | Array<InputProps>`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N
label | String / Slot | - | 左侧内容 | N
placeholder | String / Array | - | 占位符，示例：'请输入' 或者 ['开始日期', '结束日期']。TS 类型：`string | Array<string>` | N
separator | String / Slot | '-' | 范围分隔符 | N
status | String | - | 输入框状态。可选项：success/warning/error | N
suffix | String / Slot | - | 后置图标前的后置内容 | N
tips | String / Slot | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | N
value | Array | - | 范围输入框的值。TS 类型：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N
default-value | Array | undefined | 范围输入框的值。非受控属性。TS 类型：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N

### RangeInput Events

名称 | 参数 | 描述
-- | -- | --
clear | - | 清空按钮点击时触发
