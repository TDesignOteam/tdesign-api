/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup/index';
import { TNode } from '../common/common';

export interface TdPopconfirmProps {
  /**
   * 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件
   * @default ''
   */
  confirmBtn?: {
    type: StringConstructor;
    optionalTypes: Array<ObjectConstructor>;
    value?: string | ButtonProps;
  };
  /**
   * 确认框内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否在关闭浮层时销毁浮层
   * @default true
   */
  destroyOnClose?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传 Popup 组件属性
   */
  popupProps?: {
    type: ObjectConstructor;
    value?: PopupProps;
  };
  /**
   * 文字提示风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'warning' | 'danger';
  };
  /**
   * 触发元素
   */
  triggerElement?: {
    type: StringConstructor;
    value?: string;
  };
}
