## 命令行

```bash
npm run api:docs Button 'VueNext(PC)'  vitest,finalProject
npm run api:docs Button 'Vue(PC)'  vitest,finalProject
npm run api:docs Button 'React(PC)'  vitest,finalProject
```

## 类名 `{ "className": {} }`

1. 类名检测，校验组件自身：API 值为 true 时，检测是否存在某个类名，，比如：button.block

```json
{"PC":{"className":"t-size-full-width"}}
```

2. 类名检测，校验组件自身：API 为字符串或布尔类型，不同的值对应着完全不同的类名，无序。"枚举值": "类名"

```json
{
  "PC":{
    "className": {
      "underline": "t-link--hover-underline",
      "color": "t-link--hover-color"
    },
    "snapshot": true
  }
}
```
值为 `underline`，则期望存在类名 `t-link--hover-underline`；
值为 `color`，则期望存在类名 `t-link--hover-hover`；


3. 类名检测，校验组件自身： API 为字符串，存在枚举值，类名是枚举值的一部分，且存在，比如 button.variant
```json
{"PC":{"className": "t-button--variant-${item}", "snapshot": true }}
```

值为 `true` 时，存在类名 `.t-link--hover-underline`；值为 `false` 时，类名为 `.t-link--hover-color`


4. 类名检测，校验组件自身：API 为字符串，存在枚举值，类名和枚举值没有相同字符串。按枚举值顺序列举类名。比如：button.size 和 button.shape

```json
{"PC":{
  "className": [
    { "t-button--shape-square": false },
    "t-button--shape-square",
    "t-button--shape-round",
    "t-button--shape-circle"
  ]
}}
```
API 的枚举值依次对应的类名为 `"className"`，其中 `t-button--shape-square` 不允许出现。

5. 类名检测，校验组件子元素：任意属性值和任意子元素类名校验

```json
{
  "PC": {
    "wrapper": "getNormalTableMount",
    "className": [
      {
        "value": "'tdesign-class'",
        "expect": [{"dom": "tbody > tr", "className": { "tdesign-class": true }}]
      },
      {
        "value": "{ 'tdesign-class': true, 'tdesign-class-next': false }",
        "expect": [{ "dom": "tbody > tr", "className": { "tdesign-class": true, "tdesign-class-next": false}}]
      },
      {
        "value": "() => ({ 'tdesign-class': true, 'tdesign-class-next': false })",
        "expect": [
          {"dom": "tbody > tr", "className": { "tdesign-class": true, "tdesign-class-next": false }}
        ]
      }
    ]
  }
}
```

- 值为 `'tdesign-class'` 时，期望子元素 `tbody > tr` 存在类名 `tdesign-class`；
- 值为 `{ 'tdesign-class': true, 'tdesign-class-next': false }` 时，期望子元素 `tbody > tr` 包含类名 `.tdesign-class`，不包含类名 `.tdesign-class-next`；


---

## 属性 `{ "attribute": {} }`

1. 属性检测：检测某个属性的枚举值值是否正确，比如：button.type

```json
{"PC":{"attribute": { "type": ["submit", "reset", "button"] }}}
```

2. 属性检测：检测某个 API 的属性是否允许直接透传，比如：button.href

```json
{"PC":{"attribute": { "href": "https://tdesign.tencent.com/" } }}
```

3. 属性检测：不同的值对应不同元素的不同属性，如：table.rowAttributes

```json
{
  "PC": {
    "attribute": [
      {
        "value": "{ 'data-level': 'level-1' }",
        "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1" }}]
      },
      {
        "value": "[{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]",
        "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1", "data-name": "tdesign" }}]
      },
      {
        "value": "[() => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]]",
        "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1", "data-name": "tdesign" }}]
      }
    ]
  }
}
```

因存在多个值的情况，故而会生成多个 `it` 测试用例。说明：
- 设置值为 `{ 'data-level': 'level-1' }`，期望 DOM `tbody > tr` 包含属性 `"data-level": "level-1"`
- 设置值为 `[{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]`，期望 DOM `tbody > tr` 包含属性 `{ "data-level": "level-1", "data-name": "tdesign" }`

---

## DOM 检测 `{ "dom": {} }`

1. DOM 检测：检测某一个元素是否存在，如：button.loading

```json
{"PC":{ "dom": ".t-loading" }}
```

期望 DOM 元素 `.t-loading` 存在


2. DOM 检测：检测某一批 DOM 是否存在， 如：button.tag

**2.1 检测 API 不同的枚举值对应不同的元素，元素顺序必须和枚举值顺序保持相同**

```json
{"PC":{ "dom": ["button", "a", "div"], "snapshot": true }}
```
当 `type=button/a/div`时，期望依次呈现的 DOM 元素分别是 `["button", "a", "div"]`。

**2.2 DOM 检测：API 不存在枚举值，则直接检测检测 "dom" 数组中的元素是否存在**

```json
{"PC":{ "dom": ["tfoot.t-table__footer", { "tfoot > tr": 2 }]}}
```
用例将会依次检测是否存在元素 `tfoot.t-table__footer`，以及 `tfoot > tr` 元素数量是否为 2


3. DOM 检测：不同的 API 值，对应着不同的 DOM 元素，如：table.fixedRows

```json
{"PC":{ "dom": { "[3, 1]": ".t-table__row--fixed-top" } }}
```
表示当 `table.fixedRows` 值为 `[3, 1]`时，对应 DOM `.t-table__row--fixed-top` 应当存在


```json
{"PC":{ "dom": { "[3, 1]": { ".t-table__row--fixed-top": 3, ".t-table__row--fixed-bottom": 1 } } }}
```
表示当 `table.fixedRows` 值为 `[3, 1]`时，对应 DOM 应当存在，且数量为指定数量


---

## TNode `{ "tnode": {} }`

1. `"tnode": true` 表示测试自定义节点
```json
{"PC": { "tnode": true, "snapshot": true }}
```

2. TNode 本身之外的更多断言

```json
{"PC":{"tnode":{ "dom":[".t-table__first-full-row", "td[colspan=\"2\"]"] }, "wrapper":"getNormalTableMount"}}
```
除了测试自定义节点，还希望新增这些 dom 元素是否存在的断言。其中 `getNormalTableMount` 表示获取组件实例的方法，在 `mount.js` 中定义。

---

## Events `{ "event": {} }`

1. 点击事件

```json
{"PC":{ "event": { "click": { "arguments": [{ "stopPropagation": true, "type": "click" }] } } }}
```

点击自身，触发点击事件，第一个事件参数的属性 `stopPropagation` 必须存在，且属性 `type` 值为 `click`

`expect(fn.mock.calls[0][0].stopPropagation).toBeTruthy();`

```json
{"PC":{ "event": { "click": { "arguments": [[100, 101]] } } }}
```
点击自身，触发点击事件，第一个参数值为 [100, 101]

`expect(fn.mock.calls[0][0]).toBe([100, 101]);`

## 综合示例

1. 同时分别输出 TNode 和 DOM 检测测试用例。`PC."tnode"` 表示一个 `it` 测试用例。`PC."dom"` 表示另一个 `it` 测试用例。

```json
{"PC": { "tnode": { "dom": [".t-loading"] }, "dom": ".t-loading", "wrapper":"getNormalTableMount" }}
```
- `PC."tnode"` 表示检测 TNode 时，新增一个 `expect`，检测 DOM 元素 `.t-loading` 是否存在。
- `PC."dom"` 检测值为 true 时，是否存在 DOM 元素 `.t-loading`。
