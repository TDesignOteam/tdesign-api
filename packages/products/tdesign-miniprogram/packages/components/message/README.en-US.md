:: BASE_DOC ::

## API


### Message Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
action | String | - | `deprecated`。operation | N
align | String | left | options: left/center。Typescript：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts) | N
close-btn | String / Boolean / Object | false | \- | N
content | String | - | \- | N
duration | Number | 3000 | \- | N
gap | String / Number / Boolean | 12 | \- | N
icon | String / Boolean / Object | true | \- | N
link | String / Object | - | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| MessageMarquee` `interface MessageMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts) | N
offset | Array | - | Typescript：`Array<string \| number>` | N
single | Boolean | true | \- | N
theme | String | info | options: info/success/warning/error。Typescript：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts) | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N
z-index | Number | 15000 | \- | N

### Message Events

name | params | description
-- | -- | --
action-btn-click | - | \-
close-btn-click | - | \-
duration-end | \- | \-
link-click | - | \-

### Message Slots

name | Description
-- | --
\- | \-
action | `deprecated`。operation
close-btn | \-
content | \-
icon | \-
link | \-

### Message External Classes

className | Description
-- | --
t-class | \-
t-class-close-btn | \-
t-class-content | \-
t-class-icon | \-
t-class-link | \-
