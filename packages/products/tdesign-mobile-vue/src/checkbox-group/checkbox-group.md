:: BASE_DOC ::

## API

### CheckboxGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
borderless | Boolean | false | 是否开启无边框模式 | N
disabled | Boolean | undefined | 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled | N
keys | Object | - | 用来定义 value / label / disabled 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | - | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj extends TdCheckboxProps { text?: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/checkbox/type.ts) | N
readonly | Boolean | undefined | 只读状态 | N
value | Array | [] | 选中值。支持语法糖 `v-model` 或 `v-model:value`。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/checkbox/type.ts) | N
defaultValue | Array | [] | 选中值。非受控属性。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/checkbox/type.ts) | N
onChange | Function |  | TS 类型：`(value: T, context: CheckboxGroupChangeContext) => void`<br/>值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/> | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: T, context: CheckboxGroupChangeContext)` | 值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/>
