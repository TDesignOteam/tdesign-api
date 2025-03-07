:: BASE_DOC ::

## API

### Guide Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
backButtonProps | Object | - | Typescript：`ButtonProps` | N
current | Number | - | \- | N
defaultCurrent | Number | - | uncontrolled property | N
finishButtonProps | Object | - | Typescript：`ButtonProps` | N
hideBack | Boolean | false | \- | N
hideCounter | Boolean | false | \- | N
hideSkip | Boolean | false | \- | N
highlightPadding | Number | 8 | \- | N
mode | String | popover | options: popover/dialog | N
nextButtonProps | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/guide/type.ts) | N
showOverlay | Boolean | true | \- | N
skipButtonProps | Object | - | Typescript：`ButtonProps` | N
steps | Array | - | Typescript：`Array<GuideStep>` | N
zIndex | Number | 999999 | \- | N
onBack | Function |  | Typescript：`(context: { e: MouseEvent, current: number, total: number  }) => void`<br/> | N
onChange | Function |  | Typescript：`(current: number, context?: { e: MouseEvent,  total: number }) => void`<br/> | N
onFinish | Function |  | Typescript：`(context: { e: MouseEvent, current: number, total: number  }) => void`<br/> | N
onNextStepClick | Function |  | Typescript：`(context: { e: MouseEvent, next: number, current: number, total: number  }) => void`<br/> | N
onSkip | Function |  | Typescript：`(context: { e: MouseEvent, current: number, total: number  }) => void`<br/> | N
