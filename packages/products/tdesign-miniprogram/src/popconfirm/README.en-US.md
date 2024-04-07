:: BASE_DOC ::

## API

### Popconfirm Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
confirm-btn | String / Object / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
destroy-on-close | Boolean | true | \- | N
popup-props | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popconfirm/type.ts) | N
theme | String | default | options: default/warning/danger | N
trigger-element | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N

### Popconfirm Events

name | params | description
-- | -- | --
cancel | `(options: {})` | \-
confirm | `(options: {})` | \-
visible-change | `(visible: boolean, context?: PopconfirmVisibleChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popconfirm/type.ts)。<br/>`interface PopconfirmVisibleChangeContext { trigger?: TriggerSource; e?: MouseEvent }`<br/><br/>`type TriggerSource = 'cancel' \| 'confirm' \| 'document' \| 'trigger-element-click'`<br/>
