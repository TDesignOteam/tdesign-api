export type Classes = Array<string>;

export interface Styles {
  [css: string]: string | number;
}

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

export type FormResetEvent = Event;

export type FormSubmitEvent = Event;

/**
 * 移除 on 前缀并可选地去掉可选修饰符
 * @param T - 原始类型
 * @param MakeRequired - 是否将属性变为必需（默认 false）
 */
export type TransformEventHandlers<
  T,
  MakeRequired extends boolean = false
> = MakeRequired extends true
  ? {
    [K in keyof T as K extends `on${infer Event}`
      ? Uncapitalize<Event>
      : never
    ]-?: T[K]
  }
  : {
    [K in keyof T as K extends `on${infer Event}`
      ? Uncapitalize<Event>
      : never
    ]: T[K]
  };


type WrapWithContext<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => infer R
    ? (context: { [K in keyof P]: P[K] }) => R
    : never;


export type WrapParamsWithContext<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? WrapWithContext<T[K]>
    : T[K];
};


// 提取非 on 开头的属性
export type ExtractNonOnProps<T> = {
  [K in keyof T as K extends `on${string}` ? never : K]: T[K]
};

export interface IsEmailOptions {
  allow_display_name?: boolean;
  require_display_name?: boolean;
  allow_utf8_local_part?: boolean;
  require_tld?: boolean;
  allow_ip_dot?: boolean;
  domain_specific_validation?: boolean;
  host_blacklist?: string[];
  ignore_max_length?: boolean;
}

export interface IsURLOptions {
  protocols?: string[];
  require_tld?: boolean;
  require_protocol?: boolean;
  require_host?: boolean;
  require_port?: boolean;
  require_valid_protocol?: boolean;
  allow_underscores?: boolean;
  host_whitelist?: (string | RegExp)[];
  host_blacklist?: (string | RegExp)[];
  allow_trailing_dot?: boolean;
  allow_protocol_relative_urls?: boolean;
  disallow_auth?: boolean;
  validate_length?: boolean;
}