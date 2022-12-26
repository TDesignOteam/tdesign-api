##

```bash
npm run api:docs Button 'VueNext(PC)'  vitest,finalProject
npm run api:docs Button 'Vue(PC)'  vitest,finalProject
npm run api:docs Button 'React(PC)'  vitest,finalProject
```

## 测试类名

1. 检测是否存在某个类名，比如：button.block

```json
{"PC":{"className":"t-size-full-width"}}
```

2. 检测某个 API 类名和属性值是否相同，且存在，比如 button.variant
```json
{"PC":{"className": "t-button--variant-${item}", "snapshot": true }}
```

3. 检测某个 API 不同的值对应完全不同的类名，比如：button.size 和 button.shape
```json
{"PC":{"className": [{ "t-button--shape-square": false }, "t-button--shape-square", "t-button--shape-round", "t-button--shape-circle" ]}}
```

## 测试属性

1. 检测某个属性的枚举值值是否正确，比如：button.type

```json
{"PC":{"attribute": { "type": ["submit", "reset", "button"] }}}
```

2. 检测某个 API 的属性是否允许直接透传，比如：button.href

```json
{"PC":{"attribute": { "href": "https://tdesign.tencent.com/" }, "snapshot": true }}
```

## 测试自定义元素 TNode

```json
{"PC": { "tnode": true, "snapshot": true }}
```

其中，snapshot: true 表示是否生成当前测试用例快照
