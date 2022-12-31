## 命令行

```bash
npm run api:docs Button 'VueNext(PC)'  vitest,finalProject
npm run api:docs Button 'Vue(PC)'  vitest,finalProject
npm run api:docs Button 'React(PC)'  vitest,finalProject
```

## 1. 类名 `{ "className": {} }`

### 1.2 属性值为 Boolean 类型，校验类名是否存在

类名检测，校验组件自身：API 值为 true 时，检测是否存在某个类名，比如：button.block

```json
{"className":"t-size-full-width", "classNameDom": ".t-input"}
```

`classNameDom` 表示校验哪个子元素包含类名 `t-size-full-width`，如果不存在，则表示校验组件自身。

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

### 1.5 复杂校验：检测子元素是否存在某些类名

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

事件枚举值：https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
Vue 的测试用例会根据这里面的枚举值自动转化

#### 5.2.1 一次交互触发一次事件

```json
{
  "wrapper": "getNormalAutoCompleteMount",
  "event": [
    {
      "expect": [{ "trigger": "mouseEnter", "exist": [".t-input__suffix-icon"] }],
      "props": { "value": "Default Keyword" }
    },
  ]
}
```

校验鼠标移入组件后，元素 `.t-input__suffix-icon` 是否存在。

其中，`props` 表示传递给组件的额外属性参数。


#### 5.2.2 一次交互触发多个事件，同时校验元素是否存在**

事件枚举值：https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js

```json
{
  "wrapper": "getNormalAutoCompleteMount",
  "event": [
    {
      "expect": [
        { "trigger": "mouseEnter", "exist": [".t-input__suffix-clear"] },
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
