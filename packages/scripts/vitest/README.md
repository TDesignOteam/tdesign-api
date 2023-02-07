## 设计&开发测试用例

输出测试用例到 DB 和 项目中。

⚠️ 注意：先启动本地 DB 服务，`npm run dev`。

在 vitest/tests 中开发输出测试用例，保存后，执行 `npm run api:test Button 'React(PC)' vitest,finalProject` 进行实时联调。
会自动输出测试用例到项目文件中。

```bash
npm run api:test <component> <framework> vitest,finalProject
```

- 第一个参数：组件名称。示例：Button，大驼峰命名。
- 第二个参数：框架名称，示例：Vue(PC)，可选值：Vue(PC)、VueNext(PC)、React(PC)、Vue(Mobile)、React(Mobile)。
  其中 Vue(PC) 表示 Vue2，VueNext(PC) 表示 Vue3。Vue(Mobile) 表示 Vue3。

加上参数 `watch` 表示改动 vitest/tests 中的文件时，会实时同步测试用例到项目里面。`npm run api:test Button 'React(PC)' vitest,finalProject,watch`

## 从 DB 更新测试用例到项目

注意：会自动拉取远程仓库的 DB 文件中的测试用例，覆盖 `vitest/tests` 中的内容，
如果你此时正在本地 `vitest/tests` 中进行测试用例开发，千万不要执行下面的命令行，否则会被覆盖。

```bash
npm run api:docs Button 'VueNext(PC)'  vitest,finalProject
```

- 第一个参数：组件名称。示例：Button，大驼峰命名。
- 第二个参数：框架名称，示例：Vue(PC)，可选值：Vue(PC)、VueNext(PC)、React(PC)、Vue(Mobile)、React(Mobile)。
  其中 Vue(PC) 表示 Vue2，VueNext(PC) 表示 Vue3。Vue(Mobile) 表示 Vue3。

## API

总述：将测试用例分为 5 大类：类名检测、属性检测、元素检测、TNode 检测以及人机交互检测。

- 以一个 API 为单位，输出测试用例。如 button.disabled 表示一个 API，会一次性输出一个或多个测试用例。如果是多个 API 联合作用，可以只写一个。
- 测试用例尽量保持简洁，方便阅读和排查问题，切勿一个用例测试很多个功能。
- 交互少以 UI 为主的组件，校验重要元素是否存在，并使用 `snapshot: true` 辅助测试即可，无需每个元素都校验。
- 交互多的组件，以 `event` 人机交互测试用例为主。
- 类名校验使用 `className`，内联样式(style)使用属性校验规则 `attribute`，具体参看下方示例。
- `tnode/className/dom` 等规则支持不同规则使用不同的 Props 属性，以数组形式存在，可以搜索 `vitest/tests` 中的文件寻找示例代码。

### 概览

数据结构示例：

```js
{
  // 类名校验 ''/[]/{}
  className: '',
  // 属性校验 ''/{}/[]
  attribute: '',
  // 元素校验 ''/{}/[]
  dom: [],
  // TNode 校验 true/{}
  tnode: true,
  // 人机交互事件校验
  event: [],
  classNameDom: '',
  attributeDom: '',
  wrapper: '',
  props: {},
  trigger: 'click(.t-input)',
  snapshot: true,
  content: 'text',
  variables: [],
  imports: [],
  beforeAll: [],
  afterEach: [],
  afterAll: [],
  skip: true,
}
```

| 名称 | 类型 | 说明 |
| - | - | - |
| className | Object/Array | 【类名校验】校验某个元素是否包含某个或某些类名。元素可能是自身，也可能是子元素。不同的 API 值对应着不同的类名 |
| attribute | Object/Array | 【属性校验】校验某个元素是否包含某个或某些属性。元素可能是自身，也可能是子元素。不同的 API 值对应着不同的 DOM 属性值。包含 DOM 属性 `value` |
| dom | String/Object/Array | 【元素校验】校验某个子元素是否存在。不同的 API 值对应着不同的 DOM 子元素 |
| tnode | Boolean/Object | 校验自定义元素（因框架实现差异大，故而单独定义），方便以最少的定义输出更多的单测用例 |
| event | Object/Array | 【人机交互】触发不同的交互会有不同的行为表现。一次交互可能触发一个事件处理，也可能触发多次事件处理 |
| props | Object | 给组件添加属性 |
| trigger | String | 开启校验的前置条件。主要应用于需要触发某个事件 或者 延迟 N 秒后，才会显示相关元素的场景。如：TreeSelect 点击后才会显示面板；Guide 需要等待 100 毫秒渲染完成后才能开始校验）。示例一：`trigger: 'click(.t-input)'`，示例二：`trigger: 'delay(300)'`|
| wrapper | String | 通用属性。表示当前测试用例基于 `wrapper` 获取到的组件实例，如果不存在则表示使用默认的 `mount()` 或者 `render()` 输出。示例：`getNormalTableMount` |
| snapshot | Boolean | 通用属性。是否输出快照 |
| content | String | 通用属性。组件的直接子元素，示例一：`content: "Text"`，示例二： `content: "<span>TNode</span>"` |
| variables | Array | 整个测试用例全局变量 |
| imports | Array | 额外引入的针对单个组件的函数或变量 |
| beforeAll | Array | 全部单测用例之前执行 |
| afterEach | Array | 每个单测用例之后执行 |
| afterAll | Array | 全部单测用例结束后执行 |
| skip | Boolean | 是否跳过当前测试用例 |

---

### 类名检测 ClassName Tests

数据结构示例：

```js
{ classNameDom: '', className: '', wrapper: '', snapshot: true, content: 'text' }
```

| 名称 | 类型 | 说明 |
| - | - | - |
| classNameDom | String | 子元素 DOM 选择器，当 `className` 存在时有意义。表示 `className` 所有规则应用到组件的子元素 `classNameDom` 上。<br/>若 `classNameDom` 不存在，则表示 `className` 规则应用到组件根元素。 示例：`"classNameDom": ".t-input"`<br/>如果元素不是子元素，而存在于文档中根元素（body）中，使用 `'document.t-popup'` 表示|
| className | String | 检测某个元素是否存在此类名，此时 API 类型须为 Boolean，会一次性输出 3 个 `expect`，分别校验默认值、值为 true、值为 false 等 3 种情况|
| className | String | 字符串中带有 `${item}` 字样，如：`t-button--variant-${item}`。此时 API 必须字符串、存在枚举值，且枚举值是类名名称的一部分。 |
| className | Object | 不同的 API 值，一一映射不同的类名，此时的 API 值和类名没有直接关系。如：`"className": { "underline": "t-link--hover-xxx" }` 表示 API 值为 `underline` 时，元素对应的类名为 `t-link--hover-underline`。 |
| className | Array | `Array<string \| { [key: string]: boolean }>` API 是字符串，存在枚举值，枚举值和类名名称无法通过前面的 `t-xxx-${item}` 来表达。此时，便可使用数组，和枚举值保持顺序。依次列举枚举值对应的类名，示例：API 枚举值为 `small/medium/large`，则 `"className": ["t-size-s", { "t-size-m": false }, "t-size-l"]`，其中 `t-size-m` 不允许存在 |
| className | Array | `Array<{ value: string, expect: { dom: string, className: { [name: string]: boolean } } }>` 表示当 API 值为 `value` 时，期望 `dom` 元素存在或不存在类名 `className`。数组则表示 API 的值可能为多个，为每一个可能的值输出一个 `it` 测试用例。 |

---

### 属性检测 Attribute Tests

数据结构示例：

```js
{ attributeDom: '', attribute: '', wrapper: '', snapshot: true, content: 'text' }
```

| 名称 | 类型 | 说明 |
| - | - | - |
| attributeDom | String | 子元素 DOM 选择器，当 `attribute` 字段存在时有意义。表示 `attribute` 所有规则应用到组件的子元素 `attributeDom` 上。<br/>若 `attributeDom` 不存在，则表示 `attribute` 规则应用到组件根元素。 示例：`"attributeDom": ".t-input"`<br/>如果元素不是子元素，而存在于文档中根元素（body）中，使用 `'document.t-popup'` 表示|
| attribute | Object | API 存在枚举值，校验不同的枚举值对应的不同属性。示例：`{"attribute": { "type": ["submit", "reset", "button"] }}`|
| attribute | Object | API 的值是多少，期望的属性值就是多少。示例：`{"attribute": { "href": "https://tdesign.tencent.com/" }}` |
| attribute | Array | `Array<{ value: string; expect: Array<{ dom: string; attribute: { [name: string]: string } }> }>` 表示当 API 等于 `value` 时，期望 `dom` 包含 `attribute` 中的全部属性。其中 `value` 可以承载任何数据类型的字符串表达式，如函数 `value: "() => { 'data-level': 'level-1' }"`。<br>1) `{ dom: 'document.t-guide__overlay', attribute: { 'style.zIndex': 4998 } }` 表示校验 `.t-guide__overlay` 元素 是否存在内联样式 `style.zIndex`，且值为 `4988`|

---

## 元素检测 DOM Tests

| 名称 | 类型 | 说明 |
| - | - | - |
| dom | String | 检测某个元素是否存在，示例：`{ dom: '.t-loading' }` |
| dom | Object | 不同的 API 值对应着不同 DOM 元素的存在。示例：`{ "dom": { "[3, 1]": ".t-table__row--fixed-top" } }`，表示当 API 值为 `[3,1]` 时，元素 `.t-table__row--fixed-top` 是否存在 |
| dom | `Array<string | object>` | 检测某个元素是否存在，示例：`['tfoot.t-table__footer']`。<br/> 检测某个元素存在 3 个，示例：`[{ ".t-table__row--fixed-top": 3 }]`。<br/> 检测某个元素不存在，示例：`[{ '.t-input': false }]`。检测元素的文本内容，示例：`[{ '.t-input': { text: 'this is textContent' } }]` |
| dom | Array | `Array<{ dom: {}, props: {}, trigger: '', ... }>`。应用于复杂场景，一个 API 需要多个 DOM 测试用例，每个测试用例有不同的规则、不同的组件属性、不同的延迟规则等。可以在 `vitest/tests` 目录中搜索实际应用场景，如：Upload 组件中有示例 |

## TNode Tests

| 名称 | 类型 | 说明 |
| - | - | - |
| tnode | Boolean | `{ tnode: true }` 直接输出测试用例 |
| tnode | Object | `{ dom: string[], trigger: string, params: {} }`，`dom` 表示除自定义元素外，还需要检测哪些元素存在，trigger 表示延迟多少毫秒或者点击什么元素后再开始验证，params 表示 TNode 参数 |
| tnode | Array | `Array<{ props, dom, trigger, params }>`。上述规则的数组形式，输出多个测试用例 |

## 人机交互 Event Tests

数据结构示例：`event: [{ trigger, delay, exist, event }]`

| 名称 | 类型 | 说明 |
| - | - | - |
| trigger | String | `trigger= 'mousenter(.t-input)'` ，鼠标移动到输入框。普通事件名有：`click/mouseenter/mouseleave/blur/focus` 等，模拟事件见下方单独的文档描述。 |
| delay | Boolean/Number | `delay: true` 表示延迟开始校验。`delay: 0` 表示 0 毫秒开始校验，注意和 `delay: true` 有一个 `setTimeout(() => {}, 0)` 的区别。`delay: 300` 延迟 300 毫秒开始校验 |
| event | Array | 类型：`Array<{ [eventHandler: string]: Array<any>}>`。`eventHandler` 为不带 on 的驼峰命名事件。 <br/>1) `event: { change: [] }` 表示校验是否触发 `onChange` 事件；<br/>2) `event: { change: [[1,2], { 'e.type': 'click' }] }` 表示触发的 `onChange` 事件参数第一个参数为 `[1,2]`，第二个参数必须存在属性 `e`，且 `e.type` 值为 `click`；<br/>3) `event: { change: ['length=3'] }` 表示 `onChange` 第一个参数的长度为 3。<br/> 4) `event: { change: 'not' }` 表示不触发 change 事件 |
| exist | Array | 类型：`Array<string \| object>`。<br/> 1) `exist: ['.t-input']` 表示校验元素 `.t-input` 是否存在；<br/>2) `exist: [{ '.t-tree__item': 3 }]` 表示校验元素 `'.t-tree__item'` 是否存在 3 个；<br/>3) `exist: [{ '.t-is-active': false }]` 表示校验元素 `.t-is-active` 是否不存在；<br/>4) `exist: [{ '.t-is-active': { text: 'Custom Text' } }]` 表示校验元素 `.t-is-active` 的文本内容是否为 `Custom Text`。<br/>5) `exist: [{ input: { attribute: { value: '100' } } }]` 表示校验元素的值是否为 `'100'`。<br/>6) `exist: [{ input: { attribute: { type: 'password' } } }]`表示校验元素的属性 `type` 值是否为 `password`。<br/>7) `exist: [{ 'document.t-popup': { className: ['custom-popup-class-name'] } }]` 表示校验文档元素 `.t-popup` 是否存在类名 `'custom-popup-class-name'` |


---

### 延迟 delay

- `delay: true` 表示只要延迟就行，无需关心具体时间，Vue 表现为 nextTick，React 表现为 act(() => {})。注意和 `delay: 0` 有一个 `setTimeout(() => {}, 0)` 的区别
- `delay: 100` 表示延迟 100 毫秒；`delay: 0` 表示延迟 0 毫秒。凡事存在时间，无论值为多少，一定会有 `setTimeout` 延迟。

---

### 模拟事件列表

普通事件名：`click/mouseenter/mouseleave/blur/focus` 等。

| 事件 | 描述 |
| -- | -- |
| mockDelay | 延迟校验，示例：`mockDelay` 或 `mockDelay(300)`|
| simulateInputChange | 输入框输入事件，示例：simulateInputChange('input', 'hello tdesign')，表示在元素 `input` 中输入字符 `hello tdesign` |
| simulateInputEnter | 输入框回车事件，示例：simulateInputEnter('input')，表示触发元素 `input` 回车事件 |
| 'keydown.enter' | 输入框回车事件，示例：`'keydown.enter(input)'`。同 `simulateInputEnter`，区别主要在于 React 单测示例输出代码不同，但功能完全相同。 |
| simulateImageEvent | 图片加载事件，示例: `simulateImageEvent('load')` 或 `simulateImageEvent('error')`，表示加载成功或失败 |
| simulateKeydownEvent | 文档 `document` 键盘事件，示例：`trigger: "simulateKeydownEvent(document, 'ArrowDown')"` |
| getFakeFileList | 获取模拟文件列表，主要用于 Upload 组件，示例：`getFakeFileList('file', 1)` 或 `getFakeFileList('image', 3)` |
| simulateFileChange | 触发文件选择变化，主要用于 Upload 组件，示例：`simulateFileChange('input')` 或 `simulateFileChange('.input', 'file', 2)` |
| simulateDragFileChange | 触发文件拖拽选择变化，主要用于 Upload 组件，示例：`simulateDragFileChange('input', 'dragLeave')` 或 `simulateDragFileChange('input', 'dragEnter', 'image', 3)`。第二个参数可选值有：`dragEnter/dragLeave/dragOver/drop` |

## 1. 类名 `{ "className": {} }`

### 1.2 属性值为 Boolean 类型，校验类名是否存在

类名检测，校验组件自身：API 值为 true 时，检测是否存在某个类名，比如：button.block

```json
{"className":"t-size-full-width", "classNameDom": ".t-input"}
```

`classNameDom` 表示校验哪个子元素包含类名 `t-size-full-width`，如果不存在，则表示校验组件自身。

更复杂的 API 值和子元素校验，可参考 `1.5`。


### 1.2 不同的属性值对应不同的类名

类名检测，校验组件自身：API 为字符串或布尔类型，不同的值对应着完全不同的类名，无序。"枚举值": "类名"

```json
{
  "className": {
    "underline": "t-link--hover-underline",
    "color": "t-link--hover-color"
  },
  "snapshot": true
}
```
值为 `underline`，则期望存在类名 `t-link--hover-underline`；
值为 `color`，则期望存在类名 `t-link--hover-hover`；

### 1.3 属性值存在枚举值，属性值是类名名称的一部分

类名检测，校验组件自身： API 为字符串，存在枚举值，类名是枚举值的一部分，且存在，比如 button.variant

```json
{"className": "t-button--variant-${item}", "snapshot": true }
```

值为 `true` 时，存在类名 `.t-link--hover-underline`；值为 `false` 时，类名为 `.t-link--hover-color`


### 1.4 属性值存在枚举值，类名顺序和属性值依次对应

类名检测，校验组件自身：API 为字符串，存在枚举值，类名和枚举值没有相同字符串。按枚举值顺序列举类名。比如：button.size 和 button.shape

```json
{
  "className": [
    { "t-button--shape-square": false },
    "t-button--shape-square",
    "t-button--shape-round",
    "t-button--shape-circle"
  ]
}
```
API 的枚举值依次对应的类名为 `"className"`，其中 `t-button--shape-square` 不允许出现。

### 1.5 不同的属性值，检测子元素是否存在某些类名

#### 1.5.1 校验某个子元素是否“存在”某些类名

```json
{
  "wrapper": "getNormalTableMount",
  "className": [
    {
      "value": "'tdesign-class'",
      "expect": [{"dom": "tbody > tr", "className": { "tdesign-class": true }}]
    },
  ]
}
```

当属性值为 `'tdesign-class'` 时，期望子元素 `tbody > tr` 存在类名 `tdesign-class`；

其中 `getNormalTableMount` 表示获取组件测试实例的方法，由不同框架在 `mount.js` 文件中支持实现。校验规则基于这个实例执行。


#### 1.5.2 校验某个子元素是否“不存在”某些类名

```json
{
  "wrapper": "getNormalTableMount",
  "className": [
    {
      "value": "{ 'tdesign-class': true, 'tdesign-class-next': false }",
      "expect": [{ "dom": "tbody > tr", "className": { "tdesign-class": true, "tdesign-class-next": false}}]
    },
  ]
}
```

值为 `{ 'tdesign-class': true, 'tdesign-class-next': false }` 时，期望子元素 `tbody > tr` 包含类名 `.tdesign-class`，且不包含类名 `.tdesign-class-next`；

#### 1.5.3 属性值是一个函数时，校验某个子元素的类名存在与否

```json
{
  "wrapper": "getNormalTableMount",
  "className": [
    {
      "value": "() => ({ 'tdesign-class': true, 'tdesign-class-next': false })",
      "expect": [
        {"dom": "tbody > tr", "className": { "tdesign-class": true, "tdesign-class-next": false }}
      ]
    }
  ]
}
```

值为一个函数时，期望子元素 `tbody > tr` 包含类名 `.tdesign-class`，且不包含类名 `.tdesign-class-next`；

---

## 2. 属性 `{ "attribute": {} }`

### 2.1 API 的名称&值 与 DOM 属性名称&值相同

检测某个属性的枚举值值是否正确，比如：button.type

```json
{"attribute": { "type": ["submit", "reset", "button"] }}
```

### 2.2 API 名称和 DOM 属性相同，且值直接透传

检测某个 API 的属性是否允许直接透传，比如：button.href

```json
{"attribute": { "href": "https://tdesign.tencent.com/" }}
```

### 2.3 不同的值对应不同元素的不同属性

如：table.rowAttributes

#### 2.3.1 校验某一个属性是否存在

```json
{
  "attribute": [
    {
      "value": "{ 'data-level': 'level-1' }",
      "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1" }}]
    },
  ]
}
```

当值为 `{ 'data-level': 'level-1' }` 一个对象时，校验元素 `tbody > tr` 是否存在属性 `"data-level": "level-1"`。


#### 2.3.1 校验某一批属性是否存在

```json
{
  "attribute": [
    {
      "value": "[{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]",
      "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1", "data-name": "tdesign" }}]
    },
  ]
}
```

设置值为 `[{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]`，期望 DOM `tbody > tr` 包含属性 `{ "data-level": "level-1", "data-name": "tdesign" }`

#### 2.3.3 属性值为函数，校验某些属性是否存在

```json
{
  "attribute": [
    {
      "value": "[() => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]]",
      "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1", "data-name": "tdesign" }}]
    }
  ]
}
```

设置值一个函数，期望 DOM `tbody > tr` 包含属性 `{ "data-level": "level-1", "data-name": "tdesign" }`

---

## 3. DOM 检测 `{ "dom": {} }`

### 3.1 检测某一个元素是否存在，如：button.loading

```json
{ "dom": ".t-loading" }
```

期望 DOM 元素 `.t-loading` 存在


### 3.2  检测某一批 DOM 是否存在，如：button.tag

#### 3.2.1 检测 API 不同的枚举值对应不同的元素，元素顺序必须和枚举值顺序保持相同

```json
{ "dom": ["button", "a", "div"], "snapshot": true }
```
当 `type=button/a/div`时，期望依次呈现的 DOM 元素分别是 `["button", "a", "div"]`。

#### 3.2.2 API 不存在枚举值，则直接检测检测 "dom" 数组中的元素是否存在

```json
{ "dom": ["tfoot.t-table__footer", { "tfoot > tr": 2 }]}
```
用例将会依次检测是否存在元素 `tfoot.t-table__footer`，以及 `tfoot > tr` 元素数量是否为 2

#### 3.2.3 不同的 API 值，对应着不同的 DOM 元素，如：table.fixedRows

```json
{ "dom": { "[3, 1]": ".t-table__row--fixed-top" } }
```

表示当 `table.fixedRows` 值为 `[3, 1]`时，对应 DOM `.t-table__row--fixed-top` 应当存在

```json
{ "dom": { "[3, 1]": { ".t-table__row--fixed-top": 3, ".t-table__row--fixed-bottom": 1 } } }
```
表示当 `table.fixedRows` 值为 `[3, 1]`时，对应 DOM 应当存在，且数量为指定数量

```json
{"PC": { "dom": { "'this is a tip'": ".t-input__tips" } }}
```
当 API 值为 `'this is a tip'` 时，期望元素 `.t-input__tips` 存在，如 AutoComplete.tips。

---

## 4. TNode `{ "tnode": {} }`

### 4.1 `"tnode": true` 表示测试自定义节点

```json
{ "tnode": true, "snapshot": true }
```

### 4.2 TNode 本身之外的更多断言

```json
{
  "tnode":{
    "dom": [".t-table__first-full-row", "td[colspan=\"3\"]"]
  },
  "wrapper":"getNormalTableMount"
}
```

除了 TNode 本身的校验，还会校验 `"dom"` 中的全部元素是否存在。其中 `getNormalTableMount` 表示获取组件实例的方法，在 `mount.js` 中定义。

### 4.3 触发某个事件，才会显示 TNode 元素

在某些场景下，自定义元素并非默认就显示，而是触发某个条件才会存在。如：Popup/AutoComplete/Select 等组件的面板，在点击后才会显示。

```json
{
  "tnode": {
    "trigger": "focus(.t-input__wrap)",
    "dom": [".t-is-focused", "document.t-popup"],
  },
  "wrapper": "getNormalAutoCompleteMount"
}
```

元素 `.t-input__wrap` 聚焦后，组件才会出现子元素 `.t-is-focused`，且文档（document.querySelector）中才会出现元素 `t-popup`。

注意：TNode 一类用例，默认会全部校验自定义元素 `.custom-node` 是否存在，为固定类名。属于 TNode 校验中的关键词。
如果这个元素不属于组件的子元素，而是存在于 document 中，请给 `"dom"` 添加一个元素 `"dom": ["document.custom-node"]`。

### 4.4 校验 TNode 函数参数

```json
{
  "tnode": {
    "params": [{ "value": "tdesign-vue" }],
  }
}
```

表示 TNode 函数的第一个参数属性 `value` 值为 tdesign-vue`

### 4.5 输出多个 TNode 测试用例

```js
tnode: [
  {
    description: 'children works fine if theme = file',
    props: { theme: 'file', action: 'https://tdesign.test.com/upload/file_success' },
    snapshot: true,
  },
  {
    description: 'children works fine if theme = custom',
    props: { theme: 'custom', action: 'https://tdesign.test.com/upload/file_success' },
    snapshot: true,
  },
  {
    description: 'children works fine if theme = custom & draggable=true',
    props: {
      theme: 'custom',
      draggable: true,
      action: 'https://tdesign.test.com/upload/file_success',
    },
    params: [{ dragActive: false, files: [] }],
    snapshot: true,
  },
]
```

---

## 5. 人机交互 `{ "event": {} }`

### 5.1 点击事件

```json
{ "event": { "click": { "arguments": [{ "stopPropagation": true, "type": "click" }] } } }
```

点击自身，触发点击事件，第一个事件参数的属性 `stopPropagation` 必须存在，且属性 `type` 值为 `click`

`expect(fn.mock.calls[0][0].stopPropagation).toBeTruthy();`

```json
{ "event": { "click": { "arguments": [[100, 101]] } } }
```
点击自身，触发点击事件，第一个参数值为 [100, 101]

`expect(fn.mock.calls[0][0]).toBe([100, 101]);`


### 5.2 其他人机交互事件

`trigger` 事件枚举值：https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L109
React 的测试用例会根据这里面的枚举值自动转化

#### 5.2.1 一次交互触发一次事件

```json
{
  "wrapper": "getNormalAutoCompleteMount",
  "event": [
    {
      "expect": [{ "trigger": "mouseenter", "exist": [".t-input__suffix-icon"] }],
      "props": { "value": "Default Keyword" }
    },
  ]
}
```

校验鼠标移入组件后，元素 `.t-input__suffix-icon` 是否存在。

其中，`props` 表示传递给组件的额外属性参数。


#### 5.2.2 一次交互触发多个事件，同时校验元素是否存在

事件枚举值：https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L109

```json
{
  "wrapper": "getNormalAutoCompleteMount",
  "event": [
    {
      "expect": [
        { "trigger": "mouseenter", "exist": [".t-input__suffix-clear"] },
        {
          "trigger": "click(.t-input__suffix-clear)",
          "event": {
            "clear": [{ "stopPropagation": true, "e.type": "click" }],
            "change": ["''", { "e.type": "click" }]
          }
        }
      ],
      "props": { "value": "'Default Keyword'" }
    }
  ]
}
```

第一步，鼠标移入元素（没有指定子元素则表示组件自身），校验 `"exist"` 中的元素是否全部都存在。

第二步，鼠标点击（`click`）元素 `.t-input__suffix-clear`；
校验是否触发 `clear` 事件，且第一个参数属性包含 `stopPropagation`；
同时校验是否触发 `change` 事件，且第一个参数值为 `''`。

其中，`props` 表示传递给组件的额外属性参数。

---


## 综合示例

1. 同时分别输出 TNode 和 DOM 检测测试用例。`PC."tnode"` 表示一个 `it` 测试用例。`PC."dom"` 表示另一个 `it` 测试用例。

```json
{"PC": { "tnode": { "dom": [".t-loading"] }, "dom": ".t-loading", "wrapper":"getNormalTableMount" }}
```
- `PC."tnode"` 表示检测 TNode 时，新增一个 `expect`，检测 DOM 元素 `.t-loading` 是否存在。
- `PC."dom"` 检测值为 true 时，是否存在 DOM 元素 `.t-loading`。
