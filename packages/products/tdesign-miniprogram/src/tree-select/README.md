:: BASE_DOC ::

## API

### TreeSelect Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
data | Array | [] | 数据。TS 类型：`Array<DataOption>` | N
disabled | Boolean | false | 是否禁用组件 | N

### TreeSelect Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TreeSelectValue, context: { node: TreeNodeModel<DataOption>; trigger: TreeSelectValueChangeTrigger; e?: MouseEvent | KeyboardEvent })` | 节点选中状态变化时触发，`context.node` 表示当前变化的选项，`context. trigger` 表示触发变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeSelectValueChangeTrigger = 'clear' | 'tag-remove' | 'backspace' | 'check' | 'uncheck'`<br/>
