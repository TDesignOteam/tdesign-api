/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCommentProps } from './type';
import { PropType } from 'vue';

export default {
  /** 操作 */
  actions: {
    type: [Array, Function] as PropType<TdCommentProps['actions']>,
  },
  /** 作者 */
  author: {
    type: [String, Function] as PropType<TdCommentProps['author']>,
  },
  /** 头像 */
  avatar: {
    type: [String, Object, Function] as PropType<TdCommentProps['avatar']>,
  },
  /** 内容 */
  content: {
    type: [String, Function] as PropType<TdCommentProps['content']>,
  },
  /** 时间 */
  datetime: {
    type: [String, Function] as PropType<TdCommentProps['datetime']>,
  },
  /** 折叠/展开配置项 */
  fold: {
    type: Object as PropType<TdCommentProps['fold']>,
    default: undefined as TdCommentProps['fold'],
  },
  modelValue: {
    type: Object as PropType<TdCommentProps['fold']>,
    default: undefined as TdCommentProps['fold'],
  },
  /** 折叠/展开配置项，非受控属性 */
  defaultFold: {
    type: Object as PropType<TdCommentProps['defaultFold']>,
  },
  /** 回复 */
  reply: {
    type: [String, Function] as PropType<TdCommentProps['reply']>,
  },
  /** 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项 */
  onActions: Function as PropType<TdCommentProps['onActions']>,
  /** 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置 */
  onFold: Function as PropType<TdCommentProps['onFold']>,
};
