/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDescriptionsProps } from './type';
import { PropType } from 'vue';

export default {
  /** 是否带边框 */
  bordered: Boolean,
  /** 字段名右侧是否携带冒号“：” */
  colon: Boolean,
  /** 一行 DescriptionItem 的数量 */
  columns: {
    type: Number,
    default: 2,
  },
  /** 字段值内容的对齐方式：左对齐、居中对齐 */
  contentAlign: {
    type: String as PropType<TdDescriptionsProps['contentAlign']>,
    default: 'left' as TdDescriptionsProps['contentAlign'],
    validator(val: TdDescriptionsProps['contentAlign']): boolean {
      if (!val) return true;
      return ['left', 'right', 'center'].includes(val);
    },
  },
  /** 描述项的排列方向 */
  itemLayout: {
    type: String as PropType<TdDescriptionsProps['itemLayout']>,
    default: 'horizontal' as TdDescriptionsProps['itemLayout'],
    validator(val: TdDescriptionsProps['itemLayout']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 描述项的列表 */
  items: {
    type: Array as PropType<TdDescriptionsProps['items']>,
  },
  /** 字段标签对齐方式：左对齐、右对齐、居中对齐 */
  labelAlign: {
    type: String as PropType<TdDescriptionsProps['labelAlign']>,
    default: 'left' as TdDescriptionsProps['labelAlign'],
    validator(val: TdDescriptionsProps['labelAlign']): boolean {
      if (!val) return true;
      return ['left', 'right', 'center'].includes(val);
    },
  },
  /** 自定义描述项的标签的类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]` */
  labelClassName: {
    type: [String, Object, Array] as PropType<TdDescriptionsProps['labelClassName']>,
  },
  /** 排列方向 */
  layout: {
    type: String as PropType<TdDescriptionsProps['layout']>,
    default: 'horizontal' as TdDescriptionsProps['layout'],
    validator(val: TdDescriptionsProps['layout']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 组件尺寸 */
  size: {
    type: String as PropType<TdDescriptionsProps['size']>,
    default: 'medium' as TdDescriptionsProps['size'],
    validator(val: TdDescriptionsProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 描述列表的标题 */
  title: {
    type: [String, Function] as PropType<TdDescriptionsProps['title']>,
  },
};
