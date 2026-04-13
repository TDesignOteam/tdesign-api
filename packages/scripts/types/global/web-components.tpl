import { Component, VNode, WeElement } from 'omi';

export type TElement<T = undefined> = T extends undefined ? WeElement : (props: T) => WeElement;
export type TNode<T = any> = VNode<T> | ((props: T) => VNode) | object | string | number | boolean | null;

export type AttachNodeReturnValue = HTMLElement | Element | Document;
export type AttachNode = CSSSelector | ((triggerNode?: HTMLElement) => AttachNodeReturnValue);

// 与滚动相关的容器类型，因为 document 上没有 scroll 相关属性, 因此排除 document
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;

// 组件 TS 类型，暂定 any，可能调整为 () => JSX.Element
export type ComponentType = any;

export type Styles = Record<string, string | number>;

export interface StyledProps {
  className?: string;
  style?: Styles;
  // shadowDom内部根节点的class
  innerClass?: string;
  // shadowDom内部根节点的style
  innerStyle?: Styles;
}

/**
 * 通用全局类型
 * */
export type PlainObject = { [key: string]: any };

export type OptionData = {
  label?: string;
  value?: string | number;
} & PlainObject;

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