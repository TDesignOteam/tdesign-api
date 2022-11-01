:: BASE_DOC ::

## API
### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Slot | - | \- | N
extra | String / Slot | - | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts) | N
prefix-icon | String | - | \- | N
style | String | - | \- | N
suffix-icon | String | - | \- | N
theme | String | info | options：info/success/warning/error | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
change | `(value: boolean)` | \-
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'extra' \| 'suffix-icon';`<br/>
