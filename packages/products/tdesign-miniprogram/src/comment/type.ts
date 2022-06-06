/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { AvatarProps } from '../avatar/index';
import { TNode } from '../common/common';

export interface TdCommentProps {
  /**
   * 操作
   */
  actions?: {
    type: ArrayConstructor;
    value?: Array<TNode>;
  };
  /**
   * 作者
   */
  author?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 头像
   */
  avatar?: {
    type: StringConstructor;
    optionalTypes: Array<ObjectConstructor>;
    value?: string | AvatarProps;
  };
  /**
   * 内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 时间
   */
  datetime?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 引用
   */
  quote?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 回复
   */
  reply?: {
    type: StringConstructor;
    value?: string;
  };
}
