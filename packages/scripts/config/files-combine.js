/**
 * 由于配置会被应用在 Web 环境，故而代码中不能包含 Node 环境特有的依赖和代码
 *
 * 本文件是各端父子组件关系的唯一数据源：
 * - 文档（README.md / xxx.md）用 COMPONENT_API_MD_MAP 系列表
 * - 类型（type.ts / props.ts）用 TYPES_COMBINE_MAP 系列表
 *
 * 各端叠加哪些表，见下方 FRAMEWORK_MAP_TAGS：
 * - Web 端（Vue(PC) / React(PC) / VueNext(PC)）：通用表，VueNext / React 再加 Chat 表
 * - H5 端（Vue(Mobile) / React(Mobile)）：通用表 + H5 表
 * - 小程序 / UniApp：通用表 + 小程序表 + Chat 表
 *
 * 叠加顺序即优先级：后面的表会覆盖（对象写法）或追加（数组写法）前面的同名父子关系，
 * 最终由 resolveComponentMaps 按框架用 includes / excludes 过滤。
 * 各端差异只写在配置表里，调用方不要再写 if (framework === 'xxx') 分支。
 */

export const GLOBAL_COMPONENTS_CONFIG = [
  'ActionSheetConfig',
  'AlertConfig',
  'AnchorConfig',
  'AttachmentsConfig',
  'AutoCompleteConfig',
  'CalendarConfig',
  'CascaderConfig',
  'ChatActionbarConfig',
  'ChatSenderConfig',
  'ChatThinkingConfig',
  'ColorPickerConfig',
  'CommentConfig',
  'DatePickerConfig',
  'DateTimePickerConfig',
  'DescriptionsConfig',
  'DialogConfig',
  'DrawerConfig',
  'DropdownMenuConfig',
  'EmptyConfig',
  'FormConfig',
  'GuideConfig',
  'ImageConfig',
  'QRCodeConfig',
  'ImageViewerConfig',
  'InputConfig',
  'ListConfig',
  'LoadingConfig',
  'MessageConfig',
  'PaginationConfig',
  'PickerConfig',
  'PopconfirmConfig',
  'PullDownRefreshConfig',
  'RateConfig',
  'SelectConfig',
  'StepsConfig',
  'TabBarConfig',
  'TagConfig',
  'TableConfig',
  'TimePickerConfig',
  'TreeConfig',
  'TreeSelectConfig',
  'TransferConfig',
  'TypographyConfig',
  'UploadConfig',
  'UploadConfigDragger',
  'UploadConfigFile',
  'UploadConfigFileList',
  'UploadConfigImage',
  'UploadConfigProgress',
].sort((a, b) => a.localeCompare(b));

const MESSAGE_LIST = [
  'Message',
  'MessageOptions',
  '$Message',
  '$Message.info',
  '$Message.error',
  '$Message.warning',
  '$Message.success',
  '$Message.loading',
  '$Message.question',
  '$Message.close',
  '$Message.closeAll',
  '$Message.config',
];
const NOTIFICATION_LIST = [
  'Notification',
  'NotificationOptions',
  '$Notification',
  '$Notification.info',
  '$Notification.warning',
  '$Notification.error',
  '$Notification.success',
  '$Notification.close',
  '$Notification.closeAll',
  '$Notification.config',
];
const TABLE_LIST = [
  'Table',
  'TableCol',
  'BaseTable',
  'BaseTableCol',
  'PrimaryTable',
  'PrimaryTableCol',
  'EnhancedTable',
  'EnhancedTableCol',
  'TableRowState',
  'TableColumnFilter',
  'TableColumnController',
  'TableEditableCellConfig',
  'TableTreeConfig',
];
const GLOBAL_CONFIG_PROVIDER = ['ConfigProvider', 'GlobalConfigProvider'].concat(GLOBAL_COMPONENTS_CONFIG);

// 框架分组：配置表用这些分组写 includes / excludes，业务代码按分组判断端的差异
// Web 端：Vue(PC)、VueNext(PC)、React(PC)
const WEB_FRAMES = ['Vue(PC)', 'VueNext(PC)', 'React(PC)'];
// H5 端：Vue(Mobile)、React(Mobile)
const H5_FRAMES = ['Vue(Mobile)', 'React(Mobile)'];
// 小程序端：Miniprogram、UniApp
export const MINIPROGRAM_FRAMES = ['Miniprogram', 'UniApp'];
// 移动端：Vue(Mobile)、React(Mobile)、Miniprogram、UniApp
export const MOBILE_FRAMES = H5_FRAMES.concat(MINIPROGRAM_FRAMES);

// 配置表分层：文档和类型各有通用 / H5 / 小程序三张表，Chat 表两边共用
const COMMON_MAP_TAG = 'common';
const MOBILE_MAP_TAG = 'mobile';
const MINIPROGRAM_MAP_TAG = 'miniprogram';
const CHAT_MAP_TAG = 'chat';

// 只叠加通用表 + Chat 表。单元测试、代码提示、configurable、在线预览属于按单个组件取数，
// 一直只用这两张表，不带 H5 / 小程序侧的父子覆盖
export const BASE_MAP_TAGS = [COMMON_MAP_TAG, CHAT_MAP_TAG];

// 各端叠加哪几张表，顺序即叠加顺序。带独立 chat 包的框架才真正叠加 Chat 表
// H5 表只归 H5，小程序表只归小程序，两张表互不叠加，因此表内几乎不需要 excludes
const FRAMEWORK_MAP_TAGS = {
  'Vue(PC)': [COMMON_MAP_TAG],
  'VueNext(PC)': [COMMON_MAP_TAG, CHAT_MAP_TAG],
  'React(PC)': [COMMON_MAP_TAG, CHAT_MAP_TAG],
  'Vue(Mobile)': [COMMON_MAP_TAG, MOBILE_MAP_TAG],
  'React(Mobile)': [COMMON_MAP_TAG, MOBILE_MAP_TAG],
  Miniprogram: [COMMON_MAP_TAG, MINIPROGRAM_MAP_TAG, CHAT_MAP_TAG],
  UniApp: [COMMON_MAP_TAG, MINIPROGRAM_MAP_TAG, CHAT_MAP_TAG],
};

// 输出 API 文档时，哪些文件需要合并输出，数组内容为组件 / 插件名称。
// 通用表对所有框架生效，个别端不适用时用 excludes 排除
export const COMPONENT_API_MD_MAP = {
  Avatar: ['Avatar', 'AvatarGroup'],
  Checkbox: ['Checkbox', 'CheckboxGroup'],
  Cell: ['Cell', 'CellGroup'],
  Radio: ['Radio', 'RadioGroup'],
  Anchor: ['Anchor', 'AnchorItem', 'AnchorTarget'],
  Descriptions: ['Descriptions', 'DescriptionsItem'],
  Tabs: ['Tabs', 'TabPanel'],
  TabBar: ['TabBar', 'TabBarItem'],
  Pagination: ['Pagination', 'PaginationMini'],
  Form: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
  Breadcrumb: ['Breadcrumb', 'BreadcrumbItem'],
  Message: MESSAGE_LIST,
  Notification: NOTIFICATION_LIST,
  // 只有 Web 端满足这组父子关系，合并输出到 layout 目录
  Layout: {
    list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
    includes: WEB_FRAMES,
  },
  // 小程序没有 layout 目录，col / row 才是真实组件。BASE_MAP_TAGS 流程（单测 / 代码提示等）
  // 不叠加小程序表，靠这里的 includes 才能拿到 Col
  Col: {
    list: ['Col', 'Row'],
    includes: MINIPROGRAM_FRAMES,
  },
  // Web 侧是 Grid + Row + Col；H5 和小程序侧是 Grid + GridItem，分别写在各自的表里
  Grid: [
    {
      list: ['Grid', 'Row', 'Col'],
      includes: WEB_FRAMES,
    },
  ],
  Icon: ['Icon', 'IconSVG', 'IconFont'],
  Select: ['Select', 'Option', 'OptionGroup', 'TScroll'],
  Tag: ['Tag', 'CheckTag', 'CheckTagGroup'],
  Collapse: ['Collapse', 'CollapsePanel'],
  Dropdown: {
    list: ['Dropdown', 'DropdownItem', 'DropdownMenu'],
    includes: WEB_FRAMES,
  },
  Dialog: ['DialogCard', 'Dialog', 'DialogOptions', 'DialogInstance', '$Dialog', '$Dialog.confirm', '$Dialog.alert'],
  Drawer: ['Drawer', 'DrawerOptions', 'DrawerInstance', '$Drawer'],
  // 只有文档需要 TScroll，类型定义不需要
  Table: TABLE_LIST.concat('TScroll'),
  Tree: ['Tree', 'TreeNodeState', 'TreeNodeModel', 'TScroll'],
  Breadcrumb: ['Breadcrumb', 'BreadcrumbItem'],
  Steps: ['Steps', 'StepItem'],
  Calendar: ['Calendar', 'CalendarController', 'CalendarCell'],
  Menu: ['Menu', 'HeadMenu', 'Submenu', 'MenuItem', 'MenuGroup'],
  Loading: ['Loading', '$Loading'],
  Upload: {
    list: ['Upload', 'UploadFile'],
    excludes: MINIPROGRAM_FRAMES,
  },
  List: ['List', 'ListItem', 'ListItemMeta'],
  Picker: {
    list: ['Picker', 'PickerItem'],
    includes: MINIPROGRAM_FRAMES,
  },
  TimePicker: ['TimePicker', 'TimeRangePicker', 'TimePickerPanel', 'TimeRangePickerPanel'],
  DateTimePicker: ['DateTimePicker'],
  DatePicker: ['DatePicker', 'DateRangePicker', 'DatePickerPanel', 'DateRangePickerPanel'],
  Swiper: {
    list: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
  },
  StickyTool: ['StickyTool', 'StickyItem'],
  ConfigProvider: GLOBAL_CONFIG_PROVIDER,
  RangeInput: ['RangeInput', 'RangeInputPopup'],
  Input: ['Input', 'InputGroup'],
  Watermark: ['Watermark', 'WatermarkText', 'WatermarkImage'],
  Timeline: ['Timeline', 'TimelineItem'],
  Guide: ['Guide', 'GuideStep'],
  Tooltip: ['Tooltip', 'TooltipLite'],
  SideBar: ['SideBar', 'SideBarItem'],
  Indexes: {
    list: ['Indexes', 'IndexesAnchor'],
  },
  Popup: ['Popup', '$Popup'],
  // 小程序和 UniApp 的源码里没有 typography 目录（typography 只是官网 typography.md 的展示页，
  // 与 paragraph.md 内容完全相同），paragraph 才是真实组件，text / title 属于 paragraph
  Typography: {
    list: ['Typography', 'Text', 'Title', 'Paragraph', 'TypographyEllipsis', 'TypographyCopyable'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Toast: {
    list: ['Toast', 'ToastOptions'],
    includes: H5_FRAMES,
  },
  ColorPicker: {
    list: ['ColorPicker', 'ColorPickerPanel'],
    includes: WEB_FRAMES,
  },
  Split: {
    list: ['Split', 'SplitPanel'],
  },
  Scrollbar: ['Scrollbar', 'ScrollbarValues'],
};

// 支持 Chat 独立拆分（独立包 pro-components/chat）的框架。
// 仅这些框架的 Chat 组件走 CHAT_COMPONENT_MAP 拆分逻辑；
// 其余框架（如 Vue(PC)、Vue(Mobile)）没有独立 chat 包，仍按常规组件在各自框架目录中输出。
export const CHAT_FRAMEWORKS = ['VueNext(PC)', 'React(PC)', 'Miniprogram', 'UniApp'];

// 高阶组件 — Chat 系列独立拆分（key 为 PascalCase，经 kebabCase 转为输出目录名）
export const CHAT_COMPONENT_MAP = {
  Attachments: ['Attachments'],
  ChatActionbar: ['ChatActionbar', 'ChatAction'], // vue-chat: ChatAction 改名 ChatActionbar,保留 ChatAction 用于兼容，后续版本将移除
  ChatContent: ['ChatContent'],
  ChatInput: ['ChatInput'], // vue-chat: 后续版本将移除
  ChatItem: ['ChatItem'], // vue-chat: 后续版本将移除
  ChatList: ['ChatList', 'Chat'], // vue-chat: Chat 改名 ChatList, 保留 Chat 用于兼容，后续版本将移除
  ChatLoading: ['ChatLoading'],
  ChatMarkdown: ['ChatMarkdown'],
  ChatMessage: ['ChatMessage'],
  ChatReasoning: ['ChatReasoning'], // vue-chat: 后续版本将移除
  ChatSender: ['ChatSender'],
  ChatThinking: ['ChatThinking'],
  Chatbot: ['Chatbot'],
  ChatEngine: ['useChat', 'useAgentToolcall', 'useAgentState'],
  ChatRecord: ['ChatRecord'],
};

// H5 特殊组件：只叠加给 Vue(Mobile) / React(Mobile)，同名项会覆盖通用表，因此不需要 excludes
export const MOBILE_COMPONENT_API_MD_MAP = {
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
  },
  Layout: {
    list: ['Layout', 'Row', 'Col'],
  },
  // 与通用表的 Grid 拼接：Web 端用 Row / Col，H5 端用 GridItem
  Grid: {
    list: ['Grid', 'GridItem'],
  },
  // H5 的 List 没有 ListItem / ListItemMeta
  List: ['List'],
};

// 小程序特殊组件（文档侧）。本表只叠加给 Miniprogram / UniApp，因此不需要再写 includes
export const MINIPROGRAM_COMPONENT_API_MD_MAP = {
  // 小程序的 Swiper 用 SwiperNav，没有 SwiperItem / SwiperNavigation
  Swiper: {
    list: ['Swiper', 'SwiperNav'],
  },
  // 小程序没有 typography 目录（typography 只是官网 typography.md 的展示页，与 paragraph.md 内容相同），
  // paragraph 才是真实组件，text / title 属于 paragraph
  Paragraph: {
    list: ['Paragraph', 'Text', 'Title'],
  },
  // 小程序是 Grid + GridItem
  Grid: {
    list: ['Grid', 'GridItem'],
  },
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
  },
  // 小程序的 List 没有 ListItem / ListItemMeta
  List: ['List'],
};

// 输出 TS 类型文件时，哪些文件需要合并输出，数组内容为组件 / 插件名称。
// 与文档表基本对应，只是没有仅文档需要的类型（如 TScroll / ScrollbarValues）
export const TYPES_COMBINE_MAP = {
  Avatar: {
    list: ['Avatar', 'AvatarGroup'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Checkbox: {
    list: ['Checkbox', 'CheckboxGroup'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Cell: {
    list: ['Cell', 'CellGroup'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Radio: {
    list: ['Radio', 'RadioGroup'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Message: {
    list: MESSAGE_LIST,
  },
  Notification: {
    list: NOTIFICATION_LIST,
  },
  Form: {
    list: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Select: {
    list: ['Select', 'Option', 'OptionGroup'],
  },
  Tabs: {
    list: ['Tabs', 'TabPanel'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Split: {
    list: ['Split', 'SplitPanel'],
  },
  ColorPicker: {
    list: ['ColorPicker', 'ColorPickerPanel'],
    excludes: MINIPROGRAM_FRAMES,
  },
  TabBar: {
    list: ['TabBar', 'TabBarItem'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Pagination: {
    list: ['Pagination', 'PaginationMini'],
  },
  Tag: {
    list: ['Tag', 'CheckTag', 'CheckTagGroup'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Collapse: {
    list: ['Collapse', 'CollapsePanel'],
    excludes: MINIPROGRAM_FRAMES,
  },
  // Web 侧是 Grid + Row + Col；H5 侧的 Grid + GridItem 见 H5 类型表
  Grid: [
    {
      list: ['Grid', 'Row', 'Col'],
      includes: WEB_FRAMES,
    },
  ],
  // Web 侧是 Layout + Header + Aside + Content + Footer；H5 侧 Layout + Row + Col 见 H5 类型表
  Layout: {
    list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
    includes: WEB_FRAMES,
  },
  Dropdown: {
    list: ['Dropdown', 'DropdownItem', 'DropdownMenu'],
    includes: WEB_FRAMES,
  },
  Dialog: {
    list: ['DialogCard', 'Dialog', 'DialogOptions', 'DialogInstance', '$Dialog', '$Dialog.confirm', '$Dialog.alert'],
  },
  Drawer: {
    list: ['Drawer', 'DrawerOptions', 'DrawerInstance', '$Drawer'],
  },
  Tree: {
    list: ['Tree', 'TreeNodeState', 'TreeNodeModel'],
  },
  Breadcrumb: {
    list: ['Breadcrumb', 'BreadcrumbItem'],
  },
  Steps: {
    list: ['Steps', 'StepItem'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Calendar: {
    list: ['Calendar', 'CalendarController', 'CalendarCell'],
  },
  Descriptions: {
    list: ['Descriptions', 'DescriptionsItem'],
  },
  Menu: {
    list: ['Menu', 'HeadMenu', 'Submenu', 'MenuItem', 'MenuGroup'],
  },
  Loading: {
    list: ['Loading', '$Loading'],
  },
  Upload: {
    list: ['Upload', 'UploadFile'],
    excludes: MINIPROGRAM_FRAMES,
  },
  List: {
    list: ['List', 'ListItem', 'ListItemMeta'],
  },
  Picker: {
    list: ['Picker', 'PickerItem'],
    excludes: MINIPROGRAM_FRAMES,
  },
  TimePicker: {
    list: ['TimePicker', 'TimeRangePicker', 'TimePickerPanel', 'TimeRangePickerPanel'],
  },
  DateTimePicker: {
    list: ['DateTimePicker'],
  },
  DatePicker: {
    list: ['DatePicker', 'DateRangePicker', 'DatePickerPanel', 'DateRangePickerPanel'],
  },
  Swiper: {
    list: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
    // 小程序 / UniApp 用的是 Swiper + SwiperNav 两个独立组件（没有 SwiperItem / SwiperNavigation 类型），
    // 类型各自输出，不合并到 Swiper
    excludes: MINIPROGRAM_FRAMES,
  },
  Table: {
    list: TABLE_LIST,
  },
  Icon: {
    list: ['Icon', 'IconFont', 'IconSVG'],
  },
  Anchor: {
    list: ['AnchorTarget', 'AnchorItem'],
  },
  StickyTool: {
    list: ['StickyTool', 'StickyItem'],
  },
  ConfigProvider: {
    list: GLOBAL_CONFIG_PROVIDER,
  },
  RangeInput: {
    list: ['RangeInput', 'RangeInputPopup'],
  },
  Input: {
    list: ['Input', 'InputGroup'],
  },
  Watermark: {
    list: ['Watermark', 'WatermarkText', 'WatermarkImage'],
  },
  Timeline: {
    list: ['Timeline', 'TimelineItem'],
  },
  Guide: {
    list: ['Guide', 'GuideStep'],
  },
  Tooltip: {
    list: ['Tooltip', 'TooltipLite'],
  },
  SideBar: {
    list: ['SideBar', 'SideBarItem'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Indexes: {
    list: ['Indexes', 'IndexesAnchor'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Typography: {
    list: ['Typography', 'Text', 'Title', 'Paragraph', 'TypographyEllipsis', 'TypographyCopyable'],
    excludes: MINIPROGRAM_FRAMES,
  },
  Toast: {
    list: ['Toast', 'ToastOptions'],
    includes: H5_FRAMES,
  },
};

// H5 类型表：只叠加给 Vue(Mobile) / React(Mobile)，因此不需要 excludes
export const MOBILE_TYPES_COMBINE_MAP = {
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
  },
  Layout: {
    list: ['Layout', 'Row', 'Col'],
  },
  Grid: {
    list: ['Grid', 'GridItem'],
  },
  // H5 的 List 没有 ListItem / ListItemMeta
  List: ['List'],
};

// 小程序类型表：Miniprogram / UniApp 专用
export const MINIPROGRAM_TYPES_COMBINE_MAP = {
  // 小程序的 List 没有 ListItem / ListItemMeta，覆盖掉通用表的三件套
  List: ['List'],
  // 小程序 / UniApp 的 FormItem 是独立组件，FormRule / FormErrorMessage 不是独立组件，
  // 跟 Form 合并后不单独输出（FormItem 的独立输出在 types/index.js 里单独处理）
  Form: {
    list: ['Form', 'FormList', 'FormRule', 'FormErrorMessage'],
  },
};

// 根据框架返回 Chat 组件拆分映射：仅支持拆分框架返回 CHAT_COMPONENT_MAP，其余返回空对象
export function getChatComponentMap(framework) {
  return CHAT_FRAMEWORKS.includes(framework) ? CHAT_COMPONENT_MAP : {};
}

// tag 到具体配置表的映射：文档和类型各取各的，Chat 表两边共用同一份
// 下面这些方法是对外唯一入口，调用方不要再自己拼 if (framework === ...)
const MERGE_CONFIG_SOURCES = {
  [COMMON_MAP_TAG]: { docs: COMPONENT_API_MD_MAP, types: TYPES_COMBINE_MAP },
  [MOBILE_MAP_TAG]: { docs: MOBILE_COMPONENT_API_MD_MAP, types: MOBILE_TYPES_COMBINE_MAP },
  [MINIPROGRAM_MAP_TAG]: { docs: MINIPROGRAM_COMPONENT_API_MD_MAP, types: MINIPROGRAM_TYPES_COMBINE_MAP },
  [CHAT_MAP_TAG]: { docs: CHAT_COMPONENT_MAP, types: CHAT_COMPONENT_MAP },
};

/**
 * 取某个框架需要叠加的配置表列表
 * @param {string} framework 框架名称
 * @param {'docs'|'types'} kind 输出文档（md）还是类型（type.ts）
 * @param {string[]} [tags] 指定叠加哪几张表，默认取该框架的完整组合（FRAMEWORK_MAP_TAGS）
 * @returns {object[]} 配置表列表
 */
export function getMergeConfigSources(framework, kind = 'docs', tags) {
  const finalTags = tags && tags.length ? tags : FRAMEWORK_MAP_TAGS[framework] || [COMMON_MAP_TAG];
  return (
    finalTags
      // Chat 表只对带独立 chat 包的框架生效（Vue(PC) / H5 没有 chat 包）
      .filter((tag) => tag !== CHAT_MAP_TAG || !framework || CHAT_FRAMEWORKS.includes(framework))
      .map((tag) => MERGE_CONFIG_SOURCES[tag]?.[kind])
      .filter((map) => map && Object.keys(map).length)
  );
}

/**
 * 输出文档时，当前框架的完整父子关系配置表（已叠加、未按框架筛选）
 * @param {string} framework 框架名称
 * @param {string[]} [tags] 指定叠加哪几张表，默认取该框架的完整组合
 * @returns {object} 父子关系配置表
 */
export function getDocsCombineMap(framework, tags) {
  return mergeComponentMaps(...getMergeConfigSources(framework, 'docs', tags));
}

/**
 * 输出类型时，当前框架的完整父子关系配置表（已叠加、未按框架筛选）
 * @param {string} framework 框架名称
 * @param {string[]} [tags] 指定叠加哪几张表，默认取该框架的完整组合
 * @returns {object} 父子关系配置表
 */
export function getTypesCombineMap(framework, tags) {
  return mergeComponentMaps(...getMergeConfigSources(framework, 'types', tags));
}

// 判断某条父子关系配置是否在当前框架生效：
// 没有 includes 也没有 excludes，则所有框架生效；
// 有 includes，仅 includes 内的框架生效；
// 有 excludes，excludes 内的框架不生效；
// 未传 framework（如前端页面不区分框架）时视为全部生效。
export function isMergeConfigApplied(config, framework) {
  if (!framework) return true;
  return (
    (!config.includes && !config.excludes) ||
    (config.includes && config.includes.includes(framework)) ||
    (config.excludes && !config.excludes.includes(framework))
  );
}

// 把一条配置统一成带 list / includes / excludes 的对象数组，支持三种写法：
// 1. ['List', 'ListItem']         所有框架生效
// 2. { list: [], includes: [] }   单条配置
// 3. [{ list: [], includes: [] }] 同一父组件在不同端的多套配置（如 Grid 在 Web 用 Row/Col、在 H5 用 GridItem）
export function normalizeMergeConfigs(item, parentComponent) {
  if (item instanceof Array) {
    if (item.every((v) => typeof v === 'string')) return [{ list: item }];
    return item.filter((v) => v && typeof v === 'object').map((config) => ({ ...config }));
  }
  if (item && typeof item === 'object') return [{ ...item }];
  console.warn(`组件 ${parentComponent} 的父子关系配置结构不对，只能是 Array 或者 Object 类型`);
  return [];
}

/**
 * 按框架把配置表筛选成「父组件 -> 子组件列表」
 * @param {object} map 父子关系配置表
 * @param {string} [framework] 框架名称，不传则不做框架筛选
 * @returns {Record<string, string[]>}
 */
export function resolveComponentMaps(map, framework) {
  const rMap = {};
  Object.keys(map || {}).forEach((parentComponent) => {
    if (!parentComponent) return;
    const configs = normalizeMergeConfigs(map[parentComponent], parentComponent);
    const merged = [
      ...new Set(
        configs.filter((config) => isMergeConfigApplied(config, framework)).flatMap((config) => config.list || []),
      ),
    ];
    if (merged.length) rMap[parentComponent] = merged;
  });
  return rMap;
}

/**
 * 输出文档用：当前框架的「父组件 -> 子组件列表」
 * @param {string} framework 框架名称
 * @param {string[]} [tags] 指定叠加哪几张表，默认取该框架的完整组合
 */
export function getDocsComponentMaps(framework, tags) {
  return resolveComponentMaps(getDocsCombineMap(framework, tags), framework);
}

/**
 * 输出类型用：当前框架的「父组件 -> 子组件列表」
 * @param {string} framework 框架名称
 * @param {string[]} [tags] 指定叠加哪几张表，默认取该框架的完整组合
 */
export function getTypesComponentMaps(framework, tags) {
  return resolveComponentMaps(getTypesCombineMap(framework, tags), framework);
}

// 合并多张配置表：
// 对象写法沿用 Object.assign 的覆盖语义（如小程序表里的 Swiper 覆盖通用表的 Swiper）；
// 数组写法表示同一父组件在不同端的多套配置（如 Grid 在 Web 用 Row/Col、在 H5 用 GridItem），
// 需要拼接起来交给 resolveComponentMaps 逐条筛选，否则后一张表会整体覆盖前一张的配置。
const isConfigList = (value) => Array.isArray(value) && value.some((v) => v && typeof v === 'object');

export function mergeComponentMaps(...maps) {
  const merged = {};
  maps.forEach((map) => {
    Object.keys(map || {}).forEach((key) => {
      const incoming = map[key];
      const existing = merged[key];
      if (existing === undefined) {
        merged[key] = incoming;
        return;
      }
      if (isConfigList(existing) || isConfigList(incoming)) {
        merged[key] = [].concat(
          isConfigList(existing) ? existing : [existing],
          isConfigList(incoming) ? incoming : [incoming],
        );
        return;
      }
      merged[key] = incoming;
    });
  });
  return merged;
}

export default {
  COMPONENT_API_MD_MAP,
  MOBILE_COMPONENT_API_MD_MAP,
  MINIPROGRAM_COMPONENT_API_MD_MAP,
  CHAT_COMPONENT_MAP,
  CHAT_FRAMEWORKS,
  TYPES_COMBINE_MAP,
  MOBILE_TYPES_COMBINE_MAP,
  MINIPROGRAM_TYPES_COMBINE_MAP,
  GLOBAL_COMPONENTS_CONFIG,
  MOBILE_FRAMES,
  MINIPROGRAM_FRAMES,
  BASE_MAP_TAGS,
  getChatComponentMap,
  getMergeConfigSources,
  getDocsCombineMap,
  getTypesCombineMap,
  getDocsComponentMaps,
  getTypesComponentMaps,
  isMergeConfigApplied,
  normalizeMergeConfigs,
  resolveComponentMaps,
  mergeComponentMaps,
};
