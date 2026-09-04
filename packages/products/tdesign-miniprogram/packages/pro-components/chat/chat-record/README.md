:: BASE_DOC ::

## API

### ChatRecord Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-send | Boolean | false | 是否自动发送（预留扩展）  | N
bottom-height | Number | 0 | 底部高度，用于适配键盘弹出时的布局 | N
duration | Number | 60000 | 最大录音时长（ms） | N
lang | String | zh_CN | 识别语言（WechatSI 插件参数） | N

### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 取消录音时触发
error | `(err: any)` | 录音识别错误时触发
recognize | `(detail: { voicePath: string, voiceText: string, duration: number })` | 语音识别完成时触发

### ChatRecord Slots

名称 | 描述
-- | --
speech-input | 语音输入按钮插槽，自定义语音输入按钮区域内容
speech-no-auth | 语音授权按钮插槽，自定义语音授权按钮区域内容
