:: BASE_DOC ::

## API
### CheckboxGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用组件 | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | [] | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
style | String | - | 自定义组件样式 | N
value | Array | [] | 选中值。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N

### CheckboxGroup Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: CheckboxGroupValue, context: CheckboxGroupChangeContext)` | 值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/>
