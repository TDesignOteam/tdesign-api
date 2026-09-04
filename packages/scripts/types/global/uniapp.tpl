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

/**
 * 邮箱校验选项
 */
export interface IsEmailOptions {
  /**
   * 是否允许显示名称格式，如 `Display Name <email>`
   * @default false
   */
  allow_display_name?: boolean;
  /**
   * 是否要求必须包含显示名称格式
   * @default false
   */
  require_display_name?: boolean;
  /**
   * 是否允许本地部分使用 UTF8 字符
   * @default true
   */
  allow_utf8_local_part?: boolean;
  /**
   * 是否要求域名包含顶级域名
   * @default true
   */
  require_tld?: boolean;
  /**
   * 是否忽略邮箱最大长度限制
   * @default false
   */
  ignore_max_length?: boolean;
  /**
   * 是否允许 IP 地址作为域名部分
   * @default false
   */
  allow_ip_domain?: boolean;
  /**
   * 是否启用特定域名的额外校验（如 GMail 规则）
   * @default false
   */
  domain_specific_validation?: boolean;
  /**
   * 是否允许下划线
   * @default false
   */
  allow_underscores?: boolean;
  /**
   * 域名黑名单
   */
  host_blacklist?: Array<string | RegExp>;
  /**
   * 域名白名单
   */
  host_whitelist?: Array<string | RegExp>;
  /**
   * 拒绝包含指定字符的邮箱名
   */
  blacklisted_chars?: string;
}

/**
 * URL 校验选项
 */
export interface IsURLOptions {
  /**
   * 允许的协议
   * @default ['http','https','ftp']
   */
  protocols?: string[];
  /**
   * 是否要求顶级域名
   * @default true
   */
  require_tld?: boolean;
  /**
   * 是否要求协议
   * @default false
   */
  require_protocol?: boolean;
  /**
   * 是否要求主机名
   * @default true
   */
  require_host?: boolean;
  /**
   * 是否要求端口
   * @default false
   */
  require_port?: boolean;
  /**
   * 是否要求有效协议
   * @default true
   */
  require_valid_protocol?: boolean;
  /**
   * 是否允许下划线
   * @default false
   */
  allow_underscores?: boolean;
  /**
   * 主机名白名单
   */
  host_whitelist?: Array<string | RegExp>;
  /**
   * 主机名黑名单
   */
  host_blacklist?: Array<string | RegExp>;
  /**
   * 是否允许末尾的点
   * @default false
   */
  allow_trailing_dot?: boolean;
  /**
   * 是否允许协议相对 URL
   * @default false
   */
  allow_protocol_relative_urls?: boolean;
  /**
   * 是否禁止认证信息
   * @default false
   */
  disallow_auth?: boolean;
  /**
   * 是否允许片段（hash）
   * @default true
   */
  allow_fragments?: boolean;
  /**
   * 是否允许查询参数
   * @default true
   */
  allow_query_components?: boolean;
  /**
   * 是否校验长度
   * @default true
   */
  validate_length?: boolean;
  /**
   * 最大允许长度
   * @default 2084
   */
  max_allowed_length?: number | false;
}

