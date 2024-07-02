:: BASE_DOC ::

## API

### Form Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
colon | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
error-message | Object | - | Typescript：`FormErrorMessage` | N
form-controlled-components | Array | - | Typescript：`Array<string>` | N
label-align | String | right | options: left/right/top | N
label-width | String / Number | '100px' | \- | N
layout | String | vertical | options: vertical/inline | N
prevent-submit-default | Boolean | true | \- | N
required-mark | Boolean | undefined | \- | N
reset-type | String | empty | options: empty/initial | N
rules | Object | - | Typescript：`FormRules<FormData>` `type FormRules<T extends Data = any> = { [field in keyof T]?: Array<FormRule> }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
scroll-to-first-error | String | - | options: ''/smooth/auto | N
show-error-message | Boolean | true | \- | N
status-icon | Boolean / Slot | undefined | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
submit-with-warning-message | Boolean | false | \- | N

### Form Events

name | params | description
-- | -- | --
reset | `(detail: { e?: FormResetEvent })` | \-
submit | `(context: SubmitContext<FormData>)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts)。<br/>`interface SubmitContext<T extends Data = Data> { e?: FormSubmitEvent; validateResult: FormValidateResult<T>; firstError?: string; fields?: any }`<br/><br/>`type FormValidateResult<T> = boolean \| ValidateResultObj<T>`<br/><br/>`type ValidateResultObj<T> = { [key in keyof T]: boolean \| ValidateResultList }`<br/><br/>`type ValidateResultList = Array<AllValidateResult>`<br/><br/>`type AllValidateResult = CustomValidateObj \| ValidateResultType`<br/><br/>`interface ValidateResultType extends FormRule { result: boolean }`<br/><br/>`type ValidateResult<T> = { [key in keyof T]: boolean \| ErrorList }`<br/><br/>`type ErrorList = Array<FormRule>`<br/>

### FormInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
clear-validate | `(fields?: Array<keyof FormData>)` | \- | required
reset | `(params?: FormResetParams<FormData>)` | \- | required。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts)。<br/>`interface FormResetParams<FormData> { type?: 'initial' \| 'empty'; fields?: Array<keyof FormData> }`<br/>


### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
for | String | - | \- | N
help | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label-align | String | - | options: left/right/top | N
label-width | String / Number | - | \- | N
name | String | - | \- | N
required-mark | Boolean | undefined | \- | N
rules | Array | - | Typescript：`Array<FormRule>` | N
show-error-message | Boolean | undefined | \- | N
status | String | - | Typescript：`'error' \| 'warning' \| 'success' \| 'validating'` | N
status-icon | Boolean / Slot | undefined | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
success-border | Boolean | false | \- | N
tips | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N

### FormRule

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
boolean | Boolean | - | \- | N
date | Boolean / Object | - | Typescript：`boolean \| IsDateOptions` `interface IsDateOptions { format: string; strictMode: boolean; delimiters: string[] }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
email | Boolean / Object | - | Typescript：`boolean \| IsEmailOptions` `import { IsEmailOptions } from 'validator/es/lib/isEmail'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
enum | Array | - | Typescript：`Array<string>` | N
idcard | Boolean | - | \- | N
len | Number / Boolean | - | \- | N
max | Number / Boolean | - | \- | N
message | String | - | \- | N
min | Number / Boolean | - | \- | N
number | Boolean | - | \- | N
pattern | Object | - | Typescript：`RegExp` | N
required | Boolean | - | \- | N
telnumber | Boolean | - | \- | N
trigger | String | change | Typescript：`ValidateTriggerType` | N
type | String | error | options: error/warning | N
url | Boolean / Object | - | Typescript：`boolean \| IsURLOptions` `import { IsURLOptions } from 'validator/es/lib/isURL'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
validator | Function | - | Typescript：`CustomValidator` `type CustomValidator = (val: ValueType) => CustomValidateResolveType \| Promise<CustomValidateResolveType>` `type CustomValidateResolveType = boolean \| CustomValidateObj` `interface CustomValidateObj { result: boolean; message: string; type?: 'error' \| 'warning' \| 'success' }` `type ValueType = any`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
whitespace | Boolean | - | \- | N

### FormErrorMessage

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
boolean | String | - | \- | N
date | String | - | \- | N
enum | String | - | \- | N
idcard | String | - | \- | N
len | String | - | \- | N
max | String | - | \- | N
min | String | - | \- | N
number | String | - | \- | N
pattern | String | - | \- | N
required | String | - | \- | N
telnumber | String | - | \- | N
url | String | - | \- | N
validator | String | - | \- | N
