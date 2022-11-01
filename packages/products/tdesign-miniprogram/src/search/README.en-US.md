:: BASE_DOC ::

## API
### Search Props

name | type | default | description | required
-- | -- | -- | -- | --
action | String / Slot | '' | \- | N
autocomplete-options | Array | - | autocomplete words list。Typescript：`Array<AutocompleteOption>` `type AutocompleteOption = string \| { label: string; group?: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/search/type.ts) | N
autofocus | Boolean | false | auto focus as default | N
center | Boolean | false | \- | N
clearable | Boolean | true | \- | N
disabled | Boolean | - | \- | N
external-classes | Array | - | `['t-class', 't-class-input', 't-class-input-container', 't-class-cancel','t-class-left','t-class-right']` | N
filter | Function | - | Typescript：`(keyword: string, option: any) => boolean \| Promise<boolean>` | N
focus | Boolean | false | \- | N
label | String / Slot | '' | \- | N
placeholder | String | '' | \- | N
prefix-icon | String / Slot | 'search' | \- | N
readonly | Boolean | false | \- | N
shape | String | 'square' | options：square/round | N
style | String | - | \- | N
suffix | String / Slot | '' | \- | N
suffix-icon | String / Slot | - | \- | N
value | String | - | \- | N
default-value | String | undefined | uncontrolled property | N

### Search Events

name | params | description
-- | -- | --
action-click | - | \-
blur | `(detail: { value: string })` | \-
change | `({ value: string; trigger: 'input-change' \| 'option-click' })` | \-
clear | - | \-
focus | `(detail: { value: string })` | \-
search | `(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent })` | \-
