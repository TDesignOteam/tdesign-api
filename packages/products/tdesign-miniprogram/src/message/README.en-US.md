:: BASE_DOC ::

## API
### Message Props

name | type | default | description | required
-- | -- | -- | -- | --
action | String / Slot | - | operation | N
align | String | left | options：left/center。Typescript：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
close-btn | String / Boolean / Slot | undefined | \- | N
content | String / Slot | - | \- | N
duration | Number | 3000 | \- | N
external-classes | Array | - | `['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn']` | N
icon | String / Boolean / Slot | true | Typescript：`boolean \| 'info' \| 'bell'` | N
marquee | Boolean / Object | false | Typescript：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
offset | Array | - | Typescript：`Array<string \| number>` | N
style | String | - | \- | N
theme | String | info | options：info/success/warning/error。Typescript：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N
z-index | Number | 15000 | \- | N

### Message Events

name | params | description
-- | -- | --
action-btn-click | - | \-
close | `(context?: { trigger: 'duration' \| 'close-click' })` | close message event
close-btn-click | - | \-
duration-end | \- | \-
