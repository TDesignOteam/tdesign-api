/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTabBarItemProps } from '../tab-bar/type';
import { PropType } from 'vue';

export default {
  /** 图标右上角提示信息 */
  badgeProps: {
    type: Object as PropType<TdTabBarItemProps['badgeProps']>,
  },
  /** 图标名称。传入对象时透传至 Icon 组件 */
  icon: {
    type: [String, Object, Function] as PropType<TdTabBarItemProps['icon']>,
  },
  /** 二级菜单 */
  subTabBar: {
    type: Array as PropType<TdTabBarItemProps['subTabBar']>,
  },
  /** 标识符 */
  value: {
    type: [String, Number] as PropType<TdTabBarItemProps['value']>,
  },
};
