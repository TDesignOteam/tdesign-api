:: BASE_DOC ::

## API

### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
attach | String / Function | - | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
body | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
cancelBtn | TNode | - | Typescript：`FooterButton` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
closeBtn | TNode | - | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
closeOnEscKeydown | Boolean | true | trigger drawer close event on `ESC` keydown | N
closeOnOverlayClick | Boolean | true | \- | N
confirmBtn | TNode | - | Typescript：`FooterButton` `type FooterButton = string \| ButtonProps \| TNode \| null `，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/drawer/type.ts) | N
destroyOnClose | Boolean | false | \- | N
drawerClassName | String | - | \- | N
footer | TNode | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
forceRender | Boolean | false | to force render Drawer | N
header | TNode | true | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
lazy | Boolean | false | Enable Drawer lazy loading, the contents of the Drawer are not rendered when enable | N
mode | String | overlay | options: overlay/push | N
placement | String | right | options: left/right/top/bottom | N
preventScrollThrough | Boolean | true | \- | N
showInAttachedElement | Boolean | false | \- | N
showOverlay | Boolean | true | \- | N
size | String | 'small' | \- | N
sizeDraggable | Boolean / Object | false | allow resizing drawer width/height, set `max` or `min` to limit size。Typescript：`boolean \| SizeDragLimit` `interface SizeDragLimit { max: number, min: number }`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/drawer/type.ts) | N
visible | Boolean | false | \- | N
zIndex | Number | - | \- | N
onBeforeClose | Function |  | Typescript：`() => void`<br/> | N
onBeforeOpen | Function |  | Typescript：`() => void`<br/> | N
onCancel | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onClose | Function |  | Typescript：`(context: DrawerCloseContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/drawer/type.ts)。<br/>`type DrawerEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/><br/>`interface DrawerCloseContext { trigger: DrawerEventSource; e: MouseEvent \| KeyboardEvent }`<br/> | N
onCloseBtnClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onConfirm | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onEscKeydown | Function |  | Typescript：`(context: { e: KeyboardEvent }) => void`<br/> | N
onOverlayClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onSizeDragEnd | Function |  | Typescript：`(context: { e: MouseEvent; size: number  }) => void`<br/>trigger on size drag end | N

### DrawerOptions

name | type | default | description | required
-- | -- | -- | -- | --
attach | String / Function | 'body' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
className | String | - | \- | N
style | Object | - | Typescript：`Styles`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
`Omit<DrawerProps, 'attach'>` | \- | - | extends `Omit<DrawerProps, 'attach'>` | N

### DrawerInstance

name | params | return | description
-- | -- | -- | --
destroy | \- | \- | \-
hide | \- | \- | \-
show | \- | \- | \-
update | `(props: DrawerOptions)` | \- | \-

### drawer 或 DrawerPlugin

name | params | default | description
-- | -- | -- | --
options | \- | - | Typescript：`DrawerOptions`
