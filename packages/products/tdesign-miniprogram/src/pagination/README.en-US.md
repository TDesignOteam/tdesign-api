:: BASE_DOC ::

## API

### Pagination Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
disabled | Boolean | - | \- | N
folded-max-page-btn | Number | 5 | \- | N
max-page-btn | Number | 10 | \- | N
page-size | Number | 10 | each page count | N
default-page-size | Number | undefined | each page count。uncontrolled property | N
page-size-options | Array | [5, 10, 20, 50] | Typescript：`Array<number \| { label: string; value: number }>` | N
show-first-and-last-page-btn | Boolean | false | \- | N
show-jumper | Boolean | false | \- | N
show-page-number | Boolean | true | \- | N
show-page-size | Boolean | true | \- | N
show-previous-and-next-btn | Boolean | true | \- | N
size | String | medium | options: small/medium | N
theme | String | default | options: default/simple | N
total | Number | 0 | \- | N
total-content | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N

### Pagination Events

name | params | description
-- | -- | --
change | `(pageInfo: PageInfo)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pagination/type.ts)。<br/>`interface PageInfo { current: number; previous: number; pageSize: number }`<br/>
current-change | `(current: number, pageInfo: PageInfo)` | \-
page-size-change | `(pageSize: number, pageInfo: PageInfo)` | \-
