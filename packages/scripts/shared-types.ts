/**
 * 跨文件共享的 TypeScript 类型定义
 */

/** API 数据字段 */
export interface ApiData {
  field_name: string;
  field_desc_zh: string;
  field_default_value: string;
  field_type_text: string[];
  field_enum: string;
  field_category_text: string;
  field_category: number;
  field_required: number;
  custom_field_type: string;
  event_input: string;
  event_output: string;
  component: string;
  deprecated: boolean;
  html_attribute: boolean;
  syntactic_sugar: string;
  test_description: string;
  trigger_elements: string;
  platform_framework: string[];
  create_time: string;
  id: number;
  [key: string]: unknown;
}

/** 测试描述 JSON 中的全局配置 */
export interface TestGlobalConfig {
  variables?: string[];
  beforeAll?: string[];
  afterEach?: string[];
  afterAll?: string[];
  imports?: string[];
}

/** 测试描述 JSON 中的单平台描述 */
export interface TestDescription {
  className?: string | string[] | Record<string, string> | ClassNameArrayItem[];
  classNameDom?: string;
  dom?: string | DomInfo[] | Record<string, DomInfo>;
  props?: Record<string, unknown>;
  snapshot?: boolean;
  content?: string;
  wrapper?: string;
  trigger?: string | string[];
  skip?: boolean;
  description?: string;
  attribute?: Record<string, unknown> | AttributeArrayItem[];
  attributeDom?: string;
  event?: EventExpectItem[];
  tnode?: TNodeConfig | TNodeConfig[];
  variables?: string[];
  global?: TestGlobalConfig;
  copyTestToWrapper?: string;
}

/** 测试描述 JSON（包含 PC/Mobile） */
export interface TestDescriptionFull {
  PC?: TestDescription;
  Mobile?: TestDescription;
  preSkip?: boolean;
  skip?: boolean;
  depend?: Record<string, unknown>;
  preDepend?: Record<string, unknown>;
}

/** className 数组项 */
export interface ClassNameArrayItem {
  value: unknown;
  expect: DomClassNameExpect[];
  props?: Record<string, unknown>;
  variables?: string[];
  description?: string;
  snapshot?: boolean;
}

/** DOM 信息 */
export type DomInfo = string | Record<string, number | boolean | DomTextExpect | DomAttributeExpect>;

/** DOM 文本期望 */
export interface DomTextExpect {
  text: string;
  [key: string]: unknown;
}

/** DOM 属性期望 */
export interface DomAttributeExpect {
  attribute: Record<string, unknown>;
  [key: string]: unknown;
}

/** DOM 类名期望 */
export interface DomClassNameExpect {
  dom: string;
  className: Record<string, boolean>;
}

/** 属性数组项 */
export interface AttributeArrayItem {
  value: unknown;
  expect: DomAttributeExpect[];
  props?: Record<string, unknown>;
  description?: string;
}

/** 事件期望项 */
export interface EventExpectItem {
  expect?: EventArgExpect[];
  wrapper?: string;
  [key: string]: unknown;
}

/** 事件参数期望 */
export interface EventArgExpect {
  trigger?: string;
  event?: Record<string, unknown>;
  [key: string]: unknown;
}

/** TNode 配置 */
export interface TNodeConfig {
  trigger?: string;
  dom?: string[];
  params?: unknown[];
  description?: string;
  variables?: string[];
  props?: Record<string, unknown>;
}

/** 事件参数额外配置 */
export interface EventArgumentsExtra {
  fnName?: string;
  calls?: string;
  tnodeProps?: boolean;
}

/** Wrapper 额外数据 */
export interface WrapperExtraData {
  trigger?: string | string[];
  component?: string;
  wrapper?: string;
  onlyDocumentDom?: boolean;
}

/** getFireEventCode 参数 */
export interface FireEventParams {
  dom: string;
  event: string;
  delay?: string | number | boolean;
  component?: string;
}

/** 格式化类型描述结果 */
export interface FormatTypeResult {
  type: string;
  exports: string[];
  imports: string[];
  desc?: unknown[];
  baseName?: string;
}

/** formatTsTypeDesc 返回结果 */
export interface FormatTsTypeDescResult {
  baseName: string;
  exports: string[];
  imports: string[];
}

/** getImportsConfig 参数 */
export interface ImportsConfigParams {
  hasEvent?: boolean;
  importedComponents?: string[];
  importedMounts?: Set<string>;
  needDefaultRender?: boolean;
  importedTestUtils?: string[];
}

/** getMoreEventImports 返回值 */
export interface MoreEventImportsResult {
  importedTestUtils: string[];
  importedMounts: string[];
}

/** getOneUnitTest 返回值 */
export interface OneUnitTestResult {
  oneUnitTests: string[];
  hasEvent: boolean;
  importedMounts: string[];
  importedTestUtils: string[];
}

/** 组件 Map 项 */
export interface ComponentMapItem {
  value: string;
  type?: string;
  label?: string;
}

/** getUnitTestCode 的 configFlag */
export interface ConfigFlag {
  hasEvent: boolean;
  importedComponents: string[];
  importedMounts: Set<string>;
  needDefaultRender: boolean;
  importedTestUtils: string[];
}

/** 小程序属性配置 */
export interface MiniprogramApiMap {
  MP_PROPS?: ApiData;
  MP_EXCLUDE_PROPS?: ApiData;
}
