/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdInputProps } from './type';
const props: TdInputProps = {
  /** 键盘弹起时，是否自动上推页面 */
  adjust-position: {
    type: Boolean,
    value: true,
  },
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String,
    value: 'left',
  },
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  always-embed: {
    type: Boolean,
    value: false,
  },
  /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 */
  auto-focus: {
    type: Boolean,
    value: false,
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 清空图标触发方式，仅在输入框有值时有效 */
  clear-trigger: {
    type: String,
    value: 'always',
  },
  /** 是否可清空，默认不启动。值为 `true` 表示使用默认清除空按钮，值为 `Object` 表示透传至 `icon` */
  clearable: {
    type: null,
    value: false,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirm-hold: {
    type: Boolean,
    value: false,
  },
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirm-type: {
    type: String,
    value: 'done',
  },
  /** 指定 focus 时的光标位置 */
  cursor: {
    type: Number,
    required: true,
  },
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursor-spacing: {
    type: Number,
    value: 0,
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 获取焦点 */
  focus: {
    type: Boolean,
    value: false,
  },
  /** 【暂不支持】指定输入框展示值的格式 */
  format: {
    type: null,
  },
  /** focus时，点击页面的时候不收起键盘 */
  hold-keyboard: {
    type: Boolean,
    value: false,
  },
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 标题输入框布局方式 */
  layout: {
    type: String,
    value: 'horizontal',
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
    value: -1,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: undefined,
  },
  /** 指定 placeholder 的样式类 */
  placeholder-class	: {
    type: String,
    value: 'input-placeholder',
  },
  /** 指定 placeholder 的样式 */
  placeholder-style: {
    type: String,
    value: '',
    required: true,
  },
  /** 组件前置图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  prefixIcon: {
    type: null,
  },
  /** 【开发中】只读状态 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 安全键盘加密公钥的路径，只支持包内路径 */
  safe-password-cert-path: {
    type: String,
    value: '',
  },
  /** 安全键盘计算 hash 的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` */
  safe-password-custom-hash: {
    type: String,
    value: '',
  },
  /** 安全键盘输入密码长度 */
  safe-password-length: {
    type: Number,
  },
  /** 安全键盘加密盐值 */
  safe-password-nonce: {
    type: String,
    value: '',
  },
  /** 安全键盘计算 hash 盐值，若指定custom-hash 则无效 */
  safe-password-salt: {
    type: String,
    value: '',
  },
  /** 安全键盘加密时间戳 */
  safe-password-time-stamp: {
    type: Number,
  },
  /** 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 */
  selection-end: {
    type: Number,
    value: -1,
  },
  /** 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 */
  selection-start: {
    type: Number,
    value: -1,
  },
  /** 输入框状态 */
  status: {
    type: String,
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: String,
  },
  /** 后置文本内容。值为字符串则表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 */
  suffixIcon: {
    type: null,
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: String,
  },
  /** 输入框类型 */
  type: {
    type: String,
    value: 'text',
  },
  /** 输入框的值 */
  value: {
    type: null,
  },
};

export default props;
