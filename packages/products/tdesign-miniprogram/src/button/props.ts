/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdButtonProps } from './type';
const props: TdButtonProps = {
  /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 */
  appParameter: {
    type: String,
    value: '',
  },
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    value: false,
  },
  /** 按钮内容 */
  content: {
    type: String,
  },
  /** 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取 */
  customDataset: {
    type: null,
  },
  /** 禁用状态。优先级：Button.disabled > Form.disabled */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 是否为幽灵按钮（镂空按钮） */
  ghost: {
    type: Boolean,
    value: false,
  },
  /** 指定按钮按下去的样式类，按钮不为加载或禁用状态时有效。当 `hover-class="none"` 时，没有点击态效果 */
  hoverClass: {
    type: String,
    value: '',
  },
  /** 按住后多久出现点击态，单位毫秒 */
  hoverStartTime: {
    type: Number,
    value: 20,
  },
  /** 手指松开后点击态保留时间，单位毫秒 */
  hoverStayTime: {
    type: Number,
    value: 70,
  },
  /** 指定是否阻止本节点的祖先节点出现点击态 */
  hoverStopPropagation: {
    type: Boolean,
    value: false,
  },
  /** 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  icon: {
    type: null,
  },
  /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  lang: {
    type: String,
  },
  /** 是否显示为加载状态 */
  loading: {
    type: Boolean,
    value: false,
  },
  /** 透传 Loading 组件全部属性 */
  loadingProps: {
    type: Object,
  },
  /** 微信开放能力。<br />具体释义：<br />`contact` 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html">具体说明</a> （*小程序插件中不能使用*）；<br />`share` 触发用户转发，使用前建议先阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引">使用指引</a>；<br />`getPhoneNumber` 获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html">具体说明</a> （*小程序插件中不能使用*）；<br />`getUserInfo` 获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息 （*小程序插件中不能使用*）；<br />`launchApp` 打开APP，可以通过 app-parameter 属性设定向 APP 传的参数<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html">具体说明</a>；<br />`openSetting` 打开授权设置页；<br />`feedback` 打开“意见反馈”页面，用户可提交反馈内容并上传<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html">日志</a>，开发者可以登录<a href="https://mp.weixin.qq.com/">小程序管理后台</a>后进入左侧菜单“客服反馈”页面获取到反馈内容；<br />`chooseAvatar` 获取用户头像，可以从 bindchooseavatar 回调中获取到头像信息；<br />`agreePrivacyAuthorization`用户同意隐私协议按钮。用户点击一次此按钮后，所有隐私接口可以正常调用。可通过`bindagreeprivacyauthorization`监听用户同意隐私协议事件。隐私合规开发指南详情可见《<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html">小程序隐私协议开发指南</a>》。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  openType: {
    type: String,
  },
  /** 原生按钮属性，当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示，open-type="getPhoneNumber" 或 open-type="getRealtimePhoneNumber" 时有效 */
  phoneNumberNoQuotaToast: {
    type: Boolean,
    value: true,
  },
  /** 会话内消息卡片图片，open-type="contact"时有效 */
  sendMessageImg: {
    type: String,
    value: '截图',
  },
  /** 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 */
  sendMessagePath: {
    type: String,
    value: '当前分享路径',
  },
  /** 会话内消息卡片标题，open-type="contact"时有效 */
  sendMessageTitle: {
    type: String,
    value: '当前标题',
  },
  /** 会话来源，open-type="contact"时有效 */
  sessionFrom: {
    type: String,
    value: '',
  },
  /** 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形 */
  shape: {
    type: String,
    value: 'rectangle',
  },
  /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 */
  showMessageCard: {
    type: Boolean,
    value: false,
  },
  /** 组件尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 按钮标签id */
  tId: {
    type: String,
    value: '',
  },
  /** 组件风格，依次为品牌色、危险色 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 同小程序的 formType */
  type: {
    type: String,
  },
  /** 按钮形式，基础、线框、虚线、文字 */
  variant: {
    type: String,
    value: 'base',
  },
};

export default props;
