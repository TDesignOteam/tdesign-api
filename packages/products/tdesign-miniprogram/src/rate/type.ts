/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdRateProps {
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']
   * @default '#ED7B2F'
   */
  color?: {
    type: null;
    value?: string | Array<string>;
  };
  /**
   * 评分的数量
   * @default 5
   */
  count?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否禁用评分
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 评分图标的间距
   * @default 8
   */
  gap?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 自定义评分图标，[选中图标，未选中图标]
   */
  icon?: {
    type: null;
    value?: string | string[];
  };
  /**
   * 定义图标前缀
   */
  iconPrefix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选择评分弹框的位置
   * @default top
   */
  placement?: {
    type: StringConstructor;
    value?: 'top' | 'bottom';
  };
  /**
   * 是否显示对应的辅助文字
   * @default false
   */
  showText?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 评分图标的大小
   * @default 24px
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']
   * @default []
   */
  texts?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 选择评分的值
   * @default 0
   */
  value?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 选择评分的值，非受控属性
   * @default 0
   */
  defaultValue?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 已废弃。形状类型，有描边类型和填充类型两种
   * @default outline
   */
  variant?: {
    type: StringConstructor;
    value?: 'outline' | 'filled';
  };
}
