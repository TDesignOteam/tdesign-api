:: BASE_DOC ::

## API

### Tooltip Props

name | type | default | description | required
-- | -- | -- | -- | --
delay | Number / Array | - | delay to show or hide popover。Typescript：`number \| Array<number>` | N
destroyOnClose | Boolean | true | \- | N
duration | Number | - | \- | N
placement | String | top | Typescript：`PopupPlacement`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tooltip/type.ts) | N
showArrow | Boolean | true | \- | N
theme | String | default | options: default/primary/success/danger/warning/light | N
`Omit<PopupProps, 'placement'> ` | \- | - | extends `Omit<PopupProps, 'placement'> ` | N


### TooltipLite Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TNode | - | trigger element。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | tip content。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placement | String | top | options: top/bottom/mouse | N
showArrow | Boolean | true | \- | N
showShadow | Boolean | true | \- | N
theme | String | default | options: light/default | N
triggerElement | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
