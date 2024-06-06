:: BASE_DOC ::

## API

### Input Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
align | String | left | text align type。options: left/center/right | N
allowInputOverMax | Boolean | false | allow to continue input on value length is over `maxlength` or `maxcharacter` | N
autoWidth | Boolean | false | input width is fit to input content | N
autocomplete | String | undefined | attribute of input element, [see here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | N
autofocus | Boolean | false | autofocus on first rendered | N
borderless | Boolean | false | input without border | N
clearable | Boolean | false | show clear icon, clicked to clear input value | N
disabled | Boolean | undefined | make input to be disabled | N
format | Function | - | input value formatter, `type=number` does not work. if you need to format number, `InputNumber` Component might be better。Typescript：`InputFormatType` `type InputFormatType = (value: InputValue) => string`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/input/type.ts) | N
inputClass | String / Object / Array | - | add className to the element with `t-input` class。Typescript：`ClassName`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
label | TNode | - | text on the left of input。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
maxcharacter | Number | - | \- | N
maxlength | Number | - | \- | N
name | String | - | \- | N
placeholder | String | undefined | \- | N
prefixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
readonly | Boolean | false | \- | N
showClearIconOnEmpty | Boolean | false | show clear icon on empty input value | N
showLimitNumber | Boolean | false | show limit number text on the right | N
size | String | medium | make input to be different size。options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
spellCheck | Boolean | false | attribute of input element, [see here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) | N
status | String | undefined | options: default/success/warning/error | N
suffix | TNode | - | suffix content before suffixIcon。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
suffixIcon | TElement | - | suffix icon of input。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
tips | TNode | - | tips on the bottom of input, different `status` can make tips to be different color。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
type | String | text | type attribute of input element. if you are using `type=number`, `InputNumber` Component might be better。options: text/number/url/tel/password/search/submit/hidden | N
value | String / Number | - | input value。Typescript：`T` `type InputValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/input/type.ts) | N
onBlur | Function |  | Typescript：`(value: T, context: { e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: T, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' }) => void`<br/>trigger on input value changed | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onCompositionend | Function |  | Typescript：`(value: string, context: { e: CompositionEvent }) => void`<br/>trigger on compositionend | N
onCompositionstart | Function |  | Typescript：`(value: string, context: { e: CompositionEvent }) => void`<br/>trigger on compositionstart | N
onEnter | Function |  | Typescript：`(value: T, context: { e: KeyboardEvent }) => void`<br/> | N
onFocus | Function |  | Typescript：`(value: T, context: { e: FocusEvent }) => void`<br/> | N
onKeydown | Function |  | Typescript：`(value: T, context: { e: KeyboardEvent }) => void`<br/> | N
onKeypress | Function |  | Typescript：`(value: T, context: { e: KeyboardEvent }) => void`<br/> | N
onKeyup | Function |  | Typescript：`(value: T, context: { e: KeyboardEvent }) => void`<br/> | N
onMouseenter | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on mouseenter | N
onMouseleave | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on mouseleave | N
onPaste | Function |  | Typescript：`(context: { e: ClipboardEvent; pasteValue: string }) => void`<br/> | N
onValidate | Function |  | Typescript：`(context: { error?: 'exceed-maximum' \| 'below-minimum' }) => void`<br/>trigger on text length being over max length or max character | N
onWheel | Function |  | Typescript：`(context: { e: WheelEvent }) => void`<br/>trigger on mouse wheel | N


### InputGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
separate | Boolean | - | need separate between multiple inputs | N
