/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdInputProps {
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 文本内容位置，居左/居中/居右
   * @default left
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'center' | 'right';
  };
  /**
   * 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入
   * @default false
   */
  allowInputOverMax?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default false
   */
  alwaysEmbed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * (即将废弃，请直接使用 focus )自动聚焦，拉起键盘
   * @default false
   */
  autoFocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否开启无边框模式
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 清空图标触发方式，仅在输入框有值时有效
   * @default always
   */
  clearTrigger?: {
    type: StringConstructor;
    value?: 'always' | 'focus';
  };
  /**
   * 是否可清空，默认不启动。值为 `true` 表示使用默认清空按钮，值为 `Object` 表示透传至 `icon`
   * @default false
   */
  clearable?: {
    type: null;
    value?: boolean | object;
  };
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   * @default false
   */
  confirmHold?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
   * @default done
   */
  confirmType?: {
    type: StringConstructor;
    value?: 'send' | 'search' | 'next' | 'go' | 'done';
  };
  /**
   * 指定 focus 时的光标位置
   * @default -1
   */
  cursor: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制
   * @default #0052d9
   */
  cursorColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   * @default 0
   */
  cursorSpacing?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否禁用输入框
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 获取焦点
   * @default false
   */
  focus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 指定输入框展示值的格式
   */
  format?: {
    type: undefined;
    value?: InputFormatType;
  };
  /**
   * focus时，点击页面的时候不收起键盘
   * @default false
   */
  holdKeyboard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 左侧文本
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 标题输入框布局方式
   * @default horizontal
   */
  layout?: {
    type: StringConstructor;
    value?: 'vertical' | 'horizontal';
  };
  /**
   * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用
   */
  maxcharacter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用
   * @default -1
   */
  maxlength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 占位符
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定 placeholder 的样式类
   * @default input-placeholder
   */
  placeholderClass?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定 placeholder 的样式
   * @default ''
   */
  placeholderStyle: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 组件前置图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`
   */
  prefixIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 只读状态
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 安全键盘加密公钥的路径，只支持包内路径
   * @default ''
   */
  safePasswordCertPath?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 安全键盘计算 hash 的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))`
   * @default ''
   */
  safePasswordCustomHash?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 安全键盘输入密码长度
   */
  safePasswordLength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 安全键盘加密盐值
   * @default ''
   */
  safePasswordNonce?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 安全键盘计算 hash 盐值，若指定custom-hash 则无效
   * @default ''
   */
  safePasswordSalt?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 安全键盘加密时间戳
   */
  safePasswordTimeStamp?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用
   * @default -1
   */
  selectionEnd?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
   * @default -1
   */
  selectionStart?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 输入框状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: 'default' | 'success' | 'warning' | 'error';
  };
  /**
   * 后置图标前的后置内容
   */
  suffix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 后置文本内容。值为字符串则表示图标名称，值为 `Object` 类型，表示透传至 `icon`
   */
  suffixIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框类型
   * @default text
   */
  type?: {
    type: StringConstructor;
    value?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'password' | 'nickname';
  };
  /**
   * 输入框的值
   */
  value?: {
    type: null;
    value?: InputValue;
  };
}

export type InputFormatType = (value: InputValue) => string;

export type InputValue = string | number;
