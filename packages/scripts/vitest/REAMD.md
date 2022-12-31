## 命令行

```bash
npm run api:docs Button 'VueNext(PC)'  vitest,finalProject
npm run api:docs Button 'Vue(PC)'  vitest,finalProject
npm run api:docs Button 'React(PC)'  vitest,finalProject
```

## API

总述：将测试用例分为 5 大类：类名检测、属性检测、元素检测、TNode 检测以及人机交互检测。

以一个 API 为单位，输出测试用例。如 button.disabled 表示一个 API，会一次性输出一个或多个测试用例。

### 概览

| 名称 | 类型 | 说明 |
| - | - | - |
| className | Object/Array | 【类名校验】校验某个元素是否包含某个或某些类名。元素可能是自身，也可能是子元素。不同的 API 值对应着不同的类名 |
| attribute | Object/Array | 【属性校验】校验某个元素是否包含某个或某些属性。元素可能是自身，也可能是子元素。不同的 API 值对应着不同的 DOM 属性值。包含 DOM 属性 `value` |
| dom | String/Object/Array | 【元素校验】校验某个子元素是否存在。不同的 API 值对应着不同的 DOM 子元素 |
| tnode | Boolean/Object | 校验自定义元素（因框架实现差异大，故而单独定义），方便以最少的定义输出更多的单测用例 |
| event | Object/Array | 【人机交互】触发不同的交互会有不同的行为表现。一次交互可能触发一个事件处理，也可能触发多次事件处理 |

### 类名 className

| 名称 | 类型 | 说明 |
| - | - | - |
| classNameDom | String | 子元素 DOM 选择器，当 `className` 存在时有意义。表示 `className` 所有规则应用到组件的子元素 `classNameDom` 上。若 `classNameDom` 不存在，则表示 `className` 规则应用到组件本身。 示例：`"classNameDom": ".t-input"`|
| className | String | 检测某个元素是否存在此类名，此时 API 类型须为 Boolean，会一次性输出 3 个 `expect`，分别校验默认值、值为 true、值为 false 等 3 种情况|
| className | String | 字符串中带有 `${item}` 字样，如：`t-button--variant-${item}`。此时 API 必须字符串、存在枚举值，且枚举值是类名名称的一部分。 |
| className | Object | 不同的 API 值，一一映射不同的类名，此时的 API 值和类名没有直接关系。如：`"className": { "underline": "t-link--hover-xxx" }` 表示 API 值为 `underline` 时，元素对应的类名为 `t-link--hover-underline`。 |
| className | Array | `Array<string \| { [key: string]: boolean }>` API 是字符串，存在枚举值，枚举值和类名名称无法通过前面的 `t-xxx-${item}` 来表达。此时，便可使用数组，和枚举值保持顺序。依次列举枚举值对应的类名，示例：API 枚举值为 `small/medium/large`，则 `"className": ["t-size-s", { "t-size-m": false }, "t-size-l"]`，其中 `t-size-m` 不允许存在 |
| className | Array | `Array<{ value: string, expect: { dom: string, className: { [name: string]: boolean } } }>` 表示当 API 值为 `value` 时，期望 `dom` 元素存在或不存在类名 `className`。数组则表示 API 的值可能为多个，为每一个可能的值输出一个 `it` 测试用例。 |
| wrapper | String | 表示当前测试用例基于 `wrapper` 获取到的组件实例，如果不存在则表示使用默认的 `mount()` 或者 `render()` 输出。示例：`getNormalTableMount` |
| snapshot | Boolean | 是否输出快照 |
| content | String | 组件的直接子元素，示例一：`content: "Text"`，示例二： `content: "<span>TNode</span>"` |

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
当 API 值为 `'this is a tip'` 时，期望元素 `.t-input__tips` 存在，如 AutoComplete.tips。注意字符串需要加上单引号。

---

## 4. TNode `{ "tnode": {} }`

### 4.1 `"tnode": true` 表示测试自定义节点

```json
{ "tnode": true, "snapshot": true }
```

### 4.2 TNode 本身之外的更多断言

```json
{"tnode":{
  "dom": [".t-table__first-full-row", "td[colspan=\"3\"]"] },
  "wrapper":"getNormalTableMount"
}
```

除了 TNode 本身的校验，还会校验 `"dom"` 中的全部元素是否存在。其中 `getNormalTableMount` 表示获取组件实例的方法，在 `mount.js` 中定义。

### 4.3 触发某个事件，才会显示 TNode 元素

在某些场景下，自定义元素并非默认就显示，而是触发某个条件才会存在。如：Popup/AutoComplete/Select 等组件的面板，在点击后才会显示。

```json
{"tnode": {
  "trigger": "focus(.t-input__wrap)",
  "dom": [".t-is-focused", "document.t-popup"],
  "wrapper": "getNormalAutoCompleteMount"
}}
```

元素 `.t-input__wrap` 聚焦后，组件才会出现子元素 `.t-is-focused`，且文档（document.querySelector）中才会出现元素 `t-popup`。

注意：TNode 一类用例，默认会全部校验自定义元素 `.custom-node` 是否存在，为固定类名。属于 TNode 校验中的关键词。
如果这个元素不属于组件的子元素，而是存在于 document 中，请给 `"dom"` 添加一个元素 `"dom": ["document.custom-node"]`。

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


#### 5.2.2 一次交互触发多个事件，同时校验元素是否存在**

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
            "clear": [{ "stopPropagation": true }],
            "change": ["''", { "stopPropagation": true }]
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
