import type { PlainObject, Styles } from '@common/js/common';

// 从 common 子仓库再导出，避免与本地类型重复定义
export type {
  OptionData,
  PlainObject,
  Styles,
} from '@common/js/common';

export {
  ALL_REG,
  ARROW_DOWN_REG,
  ARROW_LEFT_REG,
  ARROW_RIGHT_REG,
  ARROW_UP_REG,
  CHECKED_CODE_REG,
  CLEAR_REG,
  EKeyboardDirection,
  ENTER_REG,
  ESCAPE_REG,
  SHIFT_REG,
  SPACE_REG,
  THEME_MODE,
} from '@common/js/common';
import { Component, VNode, WeElement } from 'omi';

// ---- Omi-specific types (no equivalent in _common) ----

export type TElement<T = undefined> = T extends undefined ? WeElement : (props: T) => WeElement;
export type TNode<T = any> = VNode<T> | ((props: T) => VNode) | object | string | number | boolean | null;

export type AttachNodeReturnValue = HTMLElement | Element | Document;
export type AttachNode = CSSSelector | ((triggerNode?: HTMLElement) => AttachNodeReturnValue);

// 与滚动相关的容器类型，因为 document 上没有 scroll 相关属性, 因此排除 document
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;

// 组件 TS 类型，暂定 any，可能调整为 () => JSX.Element
export type ComponentType = any;

export type ExtendedElement = (HTMLElement | SVGAElement | HTMLInputElement) & {
  receiveProps: Function;
  update: Function;
  queuedUpdate: Function;
  store?: unknown;
  className?: string;
  props: Record<string, unknown>;
  splitText?: Function;
  prevProps?: Record<string, unknown> & {
    ref?: { current?: unknown } | Function;
  };
  attributes: NamedNodeMap;
  _component?: Component;
  _listeners: Record<string, Function>;
} & Record<string, unknown>;

export interface StyledProps {
  className?: string;
  style?: Styles;
  // shadowDom内部根节点的class
  innerClass?: string;
  // shadowDom内部根节点的style
  innerStyle?: Styles;
}

export type TreeOptionData<T = string | number> = {
  children?: Array<TreeOptionData<T>> | boolean;
  /** option label content */
  label?: string | TNode;
  /** option search text */
  text?: string;
  /** option value */
  value?: T;
  /** option node content */
  content?: string | TNode;
} & PlainObject;