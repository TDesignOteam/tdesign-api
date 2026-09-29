/** Vue2 特有全局类型 */

export type TNodeReturnValue = import('vue/types/vnode').ScopedSlotReturnValue;
export type TNode<T = undefined> = T extends undefined
  ? (h: Vue.CreateElement) => TNodeReturnValue
  : (h: Vue.CreateElement, props: T) => TNodeReturnValue;

export type JsxNode = TNodeReturnValue;

export type AttachNodeReturnValue = HTMLElement | Element | Document;
export type AttachNode = CSSSelector | ((triggerNode?: HTMLElement) => AttachNodeReturnValue);

// 与滚动相关的容器类型，因为 document 上没有 scroll 相关属性, 因此排除 document
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;

// 组件 TS 类型，暂定 any
export type ComponentType = any;

export type FormResetEvent = Event;
// export type FormSubmitEvent = SubmitEvent; (for higher typescript version)
export type FormSubmitEvent = Event;

export interface Styles {
  [css: string]: string | number;
}

export interface UploadDisplayDragEvents {
  drop?: (event: DragEvent) => void;
  dragenter?: (event: DragEvent) => void;
  dragover?: (event: DragEvent) => void;
  dragleave?: (event: DragEvent) => void;
}

export type ImageEvent = Event;

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
