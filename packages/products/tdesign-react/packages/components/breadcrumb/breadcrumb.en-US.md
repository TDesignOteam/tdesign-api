:: BASE_DOC ::

## API

### Breadcrumb Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
ellipsis | TNode | - | Typescript：`string \| TNode<{ items: Array<TdBreadcrumbItemProps>, separator: TdBreadcrumbProps['separator'] }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
itemsAfterCollapse | Number | undefined | \- | N
itemsBeforeCollapse | Number | undefined | \- | N
maxItemWidth | String | undefined | \- | N
maxItems | Number | undefined | \- | N
options | Array | - | Typescript：`Array<TdBreadcrumbItemProps>` | N
separator | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N


### BreadcrumbItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
disabled | Boolean | - | \- | N
href | String | - | \- | N
icon | TElement | - | prefix icon in breadcrumb item。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
maxWidth | String | undefined | \- | N
replace | Boolean | false | \- | N
router | Object | - | Typescript：`any` | N
target | String | _self | options: _blank/_self/_parent/_top | N
to | String / Object | - | Typescript：`string \| Route` `interface Route { path?: string; name?: string; hash?: string; query?: RouteData; params?: RouteData }` `type RouteData = { [key: string]: string \| string[] }`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/breadcrumb/type.ts) | N
tooltipProps | Object | - | Typescript：`TooltipProps`，[Tooltip API Documents](./tooltip?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/breadcrumb/type.ts) | N
onClick | Function |  | Typescript：`(e: MouseEvent) => void`<br/>trigger on click | N
