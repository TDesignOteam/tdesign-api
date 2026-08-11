/**
 * 由于配置会被应用在 Web 环境，故而代码中不能包含 Node 环境特有的依赖和代码
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
export const MOBILE_FRAMES = ['Vue(Mobile)', 'React(Mobile)', 'Miniprogram', 'UniApp'];

// 输出 API 文档时，哪些需要文件需要合并输出，数据内容为组件/插件名称
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
  Layout: {
    list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
    // includes 以下框架满足此组件父子关系，其他的框架则不使用此关系
    // includes 以下框架将 'Layout', 'Header', 'Aside', 'Content', 'Footer' 等组件的 API 文档，合并输出到目录 layout
    // 也可以使用 excludes 用于排除某些框架使用该父子组件关系
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  Col: {
    list: ['Col', 'Row'],
    includes: ['Miniprogram', 'UniApp'],
  },
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: [
    {
      list: ['Grid', 'Row', 'Col'],
      includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
  ],
  Icon: ['Icon', 'IconSVG', 'IconFont'],
  Select: ['Select', 'Option', 'OptionGroup', 'TScroll'],
  Tag: ['Tag', 'CheckTag', 'CheckTagGroup'],
  Collapse: ['Collapse', 'CollapsePanel'],
  Dropdown: {
    list: ['Dropdown', 'DropdownItem', 'DropdownMenu'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
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
    excludes: ['Miniprogram', 'UniApp'],
  },
  List: ['List', 'ListItem', 'ListItemMeta'],
  Picker: {
    list: ['Picker', 'PickerItem'],
    includes: ['Miniprogram', 'UniApp'],
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
  Typography: ['Typography', 'Text', 'Title', 'Paragraph', 'TypographyEllipsis', 'TypographyCopyable'],
  Toast: {
    list: ['Toast', 'ToastOptions'],
    includes: ['Vue(Mobile)', 'React(Mobile)'],
  },
  ColorPicker: {
    list: ['ColorPicker', 'ColorPickerPanel'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
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

// H5 特殊组件
export const MOBILE_COMPONENT_API_MD_MAP = {
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
  },
  Layout: {
    list: ['Layout', 'Row', 'Col'],
  },
  Grid: {
    list: ['Grid', 'GridItem'],
  },
  List: ['List'],
};

// 小程序 特殊组件
export const MINIPROGRAM_COMPONENT_API_MD_MAP = {
  Swiper: {
    list: ['Swiper', 'SwiperNav'],
    includes: ['Miniprogram', 'UniApp'],
  },
  Paragraph: {
    list: ['Paragraph', 'Text', 'Title'],
    includes: ['Miniprogram', 'UniApp'],
  },
};

// 输出 TS 类型文件时，哪些需要文件需要合并输出，数据内容为组件/插件名称
export const TYPES_COMBINE_MAP = {
  Avatar: {
    list: ['Avatar', 'AvatarGroup'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Checkbox: {
    list: ['Checkbox', 'CheckboxGroup'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Cell: {
    list: ['Cell', 'CellGroup'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Radio: {
    list: ['Radio', 'RadioGroup'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Message: {
    list: MESSAGE_LIST,
  },
  Notification: {
    list: NOTIFICATION_LIST,
  },
  Form: {
    list: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Select: {
    list: ['Select', 'Option', 'OptionGroup'],
  },
  Tabs: {
    list: ['Tabs', 'TabPanel'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  TabBar: {
    list: ['TabBar', 'TabBarItem'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Pagination: {
    list: ['Pagination', 'PaginationMini'],
  },
  Tag: {
    list: ['Tag', 'CheckTag', 'CheckTagGroup'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Collapse: {
    list: ['Collapse', 'CollapsePanel'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: [
    {
      list: ['Grid', 'Row', 'Col'],
      includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
    },
  ],
  // Web 侧是 Layout + Header + Aside + Content + Footer，移动端 Layout + Row + Col
  Layout: {
    list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
    // includes 以下框架满足此组件父子关系
    // includes 以下框架将 'Layout', 'Header', 'Aside', 'Content', 'Footer' 等组件的 API 文档，合并输出到目录 layout
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  Dropdown: {
    list: ['Dropdown', 'DropdownItem', 'DropdownMenu'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
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
    excludes: ['Miniprogram', 'UniApp'],
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
    excludes: ['Miniprogram', 'UniApp'],
  },
  List: {
    list: ['List', 'ListItem', 'ListItemMeta'],
  },
  Picker: {
    list: ['Picker', 'PickerItem'],
    excludes: ['Miniprogram', 'UniApp'],
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
    excludes: ['Miniprogram', 'UniApp'],
  },
  Indexes: {
    list: ['Indexes', 'IndexesAnchor'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Typography: {
    list: ['Typography', 'Text', 'Title', 'Paragraph', 'TypographyEllipsis', 'TypographyCopyable'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Toast: {
    list: ['Toast', 'ToastOptions'],
    includes: ['Vue(Mobile)', 'React(Mobile)'],
  },
};

export const MOBILE_TYPES_COMBINE_MAP = {
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
    excludes: ['Miniprogram'],
  },
  Layout: {
    list: ['Layout', 'Row', 'Col'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  Grid: {
    list: ['Grid', 'GridItem'],
    excludes: ['Miniprogram', 'UniApp'],
  },
  List: ['List'],
};

export const MINIPROGRAM_TYPES_COMBINE_MAP = {
  Swiper: {
    list: ['Swiper', 'SwiperNav'],
    excludes: ['Miniprogram'],
  },
  Form: {
    list: ['Form', 'FormList', 'FormRule', 'FormErrorMessage'],
    includes: ['Miniprogram', 'UniApp'],
  },
};

// 根据框架返回 Chat 组件拆分映射：仅支持拆分框架返回 CHAT_COMPONENT_MAP，其余返回空对象
export function getChatComponentMap(framework) {
  return CHAT_FRAMEWORKS.includes(framework) ? CHAT_COMPONENT_MAP : {};
}

export default {
  COMPONENT_API_MD_MAP,
  MOBILE_COMPONENT_API_MD_MAP,
  CHAT_COMPONENT_MAP,
  CHAT_FRAMEWORKS,
  getChatComponentMap,
  TYPES_COMBINE_MAP,
  MOBILE_TYPES_COMBINE_MAP,
  GLOBAL_COMPONENTS_CONFIG,
  MINIPROGRAM_COMPONENT_API_MD_MAP,
  MINIPROGRAM_TYPES_COMBINE_MAP,
  MOBILE_FRAMES,
};
