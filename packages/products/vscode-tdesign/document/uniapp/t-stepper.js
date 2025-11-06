
const props = `

### Stepper Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
disableInput | Boolean | false | 禁用输入框 | N
disabled | Boolean | undefined | 禁用全部操作 | N
inputWidth | Number | - | 输入框宽度，默认单位 \`px\` | N
inputWidth | Number | - | 输入框宽度 | N
integer | Boolean | true | 是否整型 | N
max | Number | 100 | 最大值 | N
min | Number | 0 | 最小值 | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
step | Number | 1 | 步长 | N
theme | String | normal | 组件风格。可选项：normal/filled/outline | N
value | String / Number | 0 | 值 | N
defaultValue | String / Number | 0 | 值。非受控属性 | N
onBlur | Function |  | TS 类型：\`(value: string \| number) => void\`<br/>输入框失去焦点时触发 | N
onBlur | Function |  | TS 类型：\`({ type: string \| number }) => void\`<br/>输入框失去焦点时触发 | N
onChange | Function |  | TS 类型：\`(value: string \| number) => void\`<br/>数值发生变更时触发 | N
onChange | Function |  | TS 类型：\`({ value: string \| number }) => void\`<br/>数值发生变更时触发 | N
onFocus | Function |  | TS 类型：\`(value: string \| number) => void\`<br/>输入框聚焦时触发 | N
onFocus | Function |  | TS 类型：\`({ value: string \| number })) => void\`<br/>输入框聚焦时触发 | N
onOverlimit | Function |  | TS 类型：\`(type: 'minus' \| 'plus') => void\`<br/>数值超出限制时触发 | N
onOverlimit | Function |  | TS 类型：\`({type: 'minus' \| 'plus'}) => void\`<br/>数值超出限制时触发 | N

### Stepper Events

名称 | 参数 | 描述
-- | -- | --
blur | \`(value: string \| number)\` | 输入框失去焦点时触发
blur | \`({ type: string \| number })\` | 输入框失去焦点时触发
change | \`(value: string \| number)\` | 数值发生变更时触发
change | \`({ value: string \| number })\` | 数值发生变更时触发
focus | \`(value: string \| number)\` | 输入框聚焦时触发
focus | \`({ value: string \| number }))\` | 输入框聚焦时触发
overlimit | \`(type: 'minus' \| 'plus')\` | 数值超出限制时触发
overlimit | \`({type: 'minus' \| 'plus'})\` | 数值超出限制时触发

### Stepper External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-input | 输入框样式类
t-class-minus | 左侧递减号样式类
t-class-plus | 右侧递增号样式类

`;
module.exports = {
  props,
};

