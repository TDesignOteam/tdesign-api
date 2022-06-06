:: BASE_DOC ::

## API

### Popconfirm Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
confirm-btn | String / Object / Slot | '' | 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件 | N
content | String / Slot | - | 确认框内容 | N
destroy-on-close | Boolean | true | 是否在关闭浮层时销毁浮层 | N
popup-props | Object | - | 透传 Popup 组件属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popconfirm/type.ts) | N
theme | String | default | 文字提示风格。可选项：default/warning/danger | N
trigger-element | String / Slot | - | 触发元素 | N

### Popconfirm Events

名称 | 参数 | 描述
-- | -- | --
cancel | `(options: {})` | 点击取消按钮时触发
confirm | `(options: {})` | 点击确认按钮时触发
visible-change | `(visible: boolean, context?: PopconfirmVisibleChangeContext)` | 确认框显示或隐藏时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popconfirm/type.ts)。<br/>`interface PopconfirmVisibleChangeContext { trigger?: TriggerSource; e?: MouseEvent }`<br/><br/>`type TriggerSource = 'cancel' | 'confirm' | 'document' | 'trigger-element-click'`<br/>
