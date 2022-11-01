:: BASE_DOC ::

## API
### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
disabled | Boolean | false | \- | N
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | [] | Typescript：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; checkAll?: true }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
style | String | - | \- | N
value | Array | [] | Typescript：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts) | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(value: CheckboxGroupValue, context: CheckboxGroupChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/>
