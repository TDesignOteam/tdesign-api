export type Classes = Array<string>;

export interface Styles {
  [css: string]: string | number;
}

type TNode = never;

export type ImageEvent = any;

export type PlainObject = { [key: string]: any };

export type OptionData = {
  label?: string;
  value?: string | number;
} & PlainObject;

export type TreeOptionData<T = string | number> = {
  children?: Array<TreeOptionData<T>> | boolean;
  /** option label content */
  label?: string;
  /** option search text */
  text?: string;
  /** option value */
  value?: T;
  /** option node content */
  content?: string;
} & PlainObject;
