:: BASE_DOC ::

## API

### ChatRecord Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
adapter | Object | - | 语音识别适配器（Adapter）。不传时按平台自动选择内置适配器。 微信小程序使用 WechatSIAdapter（依赖 WechatSI 插件），H5 使用 WebSpeechAdapter（依赖浏览器 Web Speech API），APP / 其他小程序 → NoopSpeechAdapter（占位，提示需自定义）。TS 类型：`Adapter` `type AdapterStartOptions = { duration: number; lang: string;}` `type AdapterStopResult = {tempFilePath: string;  duration: number;result: string;}` `type AdapterPartialResult = {result: string}` `type AdapterEventType = 'start' \| 'partial' \| 'stop' \| 'error'` `type Adapter = {    checkAuth(): Promise<boolean>;    requestAuth(): Promise<boolean>;    start(opts: AdapterStartOptions): Promise<void>;     stop(): Promise<void>;    on<E extends AdapterEventType>(event: E, cb: AdapterEventMap[E]): void;    off<E extends AdapterEventType>(event: E, cb?: AdapterEventMap[E]): void;   destroy(): void; }` `type AdapterEventMap = {  start: () => void;partial: (payload: AdapterPartialResult) => void;stop: (payload: AdapterStopResult) => void;error: (err: unknown) => void;}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-record/type.ts) | N
auto-send | Boolean | false | 是否自动发送（预留扩展）  | N
bottom-height | Number | 0 | 底部高度，用于适配键盘弹出时的布局 | N
duration | Number | 60000 | 最大录音时长（ms） | N
lang | String | zh_CN | 识别语言（WechatSI 插件参数） | N

### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 取消录音时触发
error | `(err: any)` | 录音识别错误时触发
recognize | `(context: { voicePath: string, voiceText: string, duration: number })` | 语音识别完成时触发

### ChatRecord Slots

名称 | 描述
-- | --
speech-input | 语音输入按钮插槽，自定义语音输入按钮区域内容
speech-no-auth | 语音授权按钮插槽，自定义语音授权按钮区域内容
