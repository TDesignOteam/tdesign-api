/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDialogProps } from './type';
import { PropType } from 'vue';

export default {
  /** 对话框挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  attach: {
    type: [String, Function] as PropType<TdDialogProps['attach']>,
  },
  /** 按下 ESC 时是否触发对话框关闭事件 */
  closeOnEscKeydown: {
    type: Boolean,
    default: undefined,
  },
  /** 点击蒙层时是否触发关闭事件 */
  closeOnOverlayClick: {
    type: Boolean,
    default: undefined,
  },
  /** 是否在按下回车键时，触发确认事件 */
  confirmOnEnter: Boolean,
  /** 是否在关闭弹框的时候销毁子元素 */
  destroyOnClose: Boolean,
  /** 对话框是否可以拖拽（仅在非模态对话框时有效） */
  draggable: Boolean,
  /** 对话框类型，有 3 种：模态对话框、非模态对话框、全屏对话框。弹出「模态对话框」时，只能操作对话框里面的内容，不能操作其他内容。弹出「非模态对话框」时，则可以操作页面内所有内容。「普通对话框」是指没有脱离文档流的对话框，可以在这个基础上开发更多的插件 */
  mode: {
    type: String as PropType<TdDialogProps['mode']>,
    default: 'modal' as TdDialogProps['mode'],
    validator(val: TdDialogProps['mode']): boolean {
      if (!val) return true;
      return ['modal', 'modeless', 'full-screen'].includes(val);
    },
  },
  /** 对话框位置，内置两种：垂直水平居中显示 和 靠近顶部（top:20%）显示。默认情况，为避免贴顶或贴底，顶部和底部距离最小为 `48px`，可通过调整 `top` 覆盖默认大小 */
  placement: {
    type: String as PropType<TdDialogProps['placement']>,
    default: 'top' as TdDialogProps['placement'],
    validator(val: TdDialogProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'center'].includes(val);
    },
  },
  /** 防止滚动穿透 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative */
  showInAttachedElement: Boolean,
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 用于弹框具体窗口顶部的距离，优先级大于 placement */
  top: {
    type: [String, Number] as PropType<TdDialogProps['top']>,
  },
  /** 控制对话框是否显示 */
  visible: Boolean,
  /** 对话框宽度，示例：320, '500px', '80%' */
  width: {
    type: [String, Number] as PropType<TdDialogProps['width']>,
  },
  /** 对话框层级，Web 侧样式默认为 2500，移动端和小程序样式默认为 1500 */
  zIndex: {
    type: Number,
  },
  /** 关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发 */
  onClose: Function as PropType<TdDialogProps['onClose']>,
  /** 对话框消失动画效果结束后触发 */
  onClosed: Function as PropType<TdDialogProps['onClosed']>,
  /** 按下 ESC 时触发事件 */
  onEscKeydown: Function as PropType<TdDialogProps['onEscKeydown']>,
  /** 对话框弹出动画效果结束后触发 */
  onOpened: Function as PropType<TdDialogProps['onOpened']>,
  /** 如果蒙层存在，点击蒙层时触发 */
  onOverlayClick: Function as PropType<TdDialogProps['onOverlayClick']>,
};
