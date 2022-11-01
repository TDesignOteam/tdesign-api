:: BASE_DOC ::

## API
### Input Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | left | options：left/center/right | N
borderless | Boolean | false | \- | N
clearable | Boolean | false | \- | N
disabled | Boolean | - | \- | N
error-message | String | - | `deprecated` | N
external-classes | Array | - | `['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg']` | N
format | Function | - | Typescript：`InputFormatType` `type InputFormatType = (value: InputValue) => string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
label | String / Slot | - | \- | N
maxcharacter | Number | - | \- | N
maxlength | Number | - | \- | N
placeholder | String | undefined | \- | N
prefix-icon | String / Slot | - | \- | N
readonly | Boolean | false | \- | N
size | String | small | options：small/medium。Typescript：`'medium' \| 'small'` | N
status | String | default | options：default/success/warning/error | N
style | String | - | \- | N
suffix | String / Slot | - | \- | N
suffix-icon | String / Slot | - | \- | N
tips | String / Slot | - | \- | N
value | String / Number | - | Typescript：`InputValue` `type InputValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`InputValue` `type InputValue = string`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
type | String | text | options：text/number/idcard/digit/safe-password/nickname | N
password | Boolean | false | \- | N
placeholder-style | String | - | required | Y
placeholder-class | String | input-placeholder | \- | N
cursor-spacing | Number | 0 | \- | N
auto-focus | Boolean | false | \- | N
focus | Boolean | false | \- | N
confirm-type | String | done | options：send/search/next/go/done | N
always-embed | Boolean | false | \- | N
confirm-hold | Boolean | false | \- | N
cursor | Number | - | required | Y
selection-start | Number | -1 | \- | N
selection-end | Number | -1 | \- | N
adjust-position | Boolean | true | \- | N
hold-keyboard | Boolean | false | \- | N
safe-password-cert-path | String | - | \- | N
safe-password-length | Number | - | \- | N
safe-password-time-stamp | Number | - | \- | N
safe-password-nonce | String | - | \- | N
safe-password-salt | String | - | \- | N
safe-password-custom-hash | String | - | \- | N
bindinput | Eventhandle | - | required | Y
bindfocus | Eventhandle | - | required | Y
bindblur | Eventhandle | - | required | Y
bindconfirm | Eventhandle | - | required | Y
bindkeyboardheightchange | Eventhandle | - | required | Y
type | 除 safe-password、nickname 外都支持 | - | required | Y
placeholder-style | 需传入对象，格式为 `{ fontSize: number, fontWeight: string, color: string }` | - | required | Y
placeholder-class | 不支持 | - | required | Y

### Input Events

name | params | description
-- | -- | --
blur | `(value: InputValue)` | \-
change | `(value: InputValue, cursor: number, keyCode: number)` | \-
clear | \- | \-
enter | `(value: InputValue)` | \-
focus | `(value: InputValue)` | \-
validate | `(detail: { error?: 'exceed-maximum' \| 'below-minimum' })` | trigger on text length being over max length or max character
