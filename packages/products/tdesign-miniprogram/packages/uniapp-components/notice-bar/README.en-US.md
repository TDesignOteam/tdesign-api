:: BASE_DOC ::

## API

### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String / Array | - | \- | N
direction | String | horizontal | options: horizontal/vertical | N
interval | Number | 2000 | \- | N
marquee | Boolean / Object | false | Typescript: `boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/notice-bar/type.ts) | N
operation | String | - | \- | N
prefix-icon | String / Boolean / Object | true | \- | N
suffix-icon | String / Object | - | \- | N
theme | String | info | options: info/success/warning/error | N
visible | Boolean | false | `v-model:visible` is supported | N
default-visible | Boolean | false | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
change | `(current: number, source: '' \| 'autoplay' \| 'touch')` | \-
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>

### NoticeBar Slots

name | Description
-- | --
content | \-
operation | \-
prefix-icon | \-
suffix-icon | \-

### NoticeBar External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-operation | \-
t-class-prefix-icon | \-
t-class-suffix-icon | \-
