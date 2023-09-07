/**
 * 由于配置会被应用在 Web 环境，故而代码中不能包含 Node 环境特有的依赖和代码
 */

 const GLOBAL_COMPONENTS_CONFIG = [
  'InputConfig',
  'PaginationConfig',
  'CalendarConfig',
  'CascaderConfig',
  'ColorPickerConfig',
  'TransferConfig',
  'TimePickerConfig',
  'DatePickerConfig',
  'DialogConfig',
  'DrawerConfig',
  'PopconfirmConfig',
  'TableConfig',
  'SelectConfig',
  'TreeConfig',
  'TreeSelectConfig',
  'ListConfig',
  'UploadConfig',
  'UploadConfigProgress',
  'UploadConfigDragger',
  'UploadConfigFileList',
  'UploadConfigImage',
  'UploadConfigFile',
  'FormConfig',
  'TagConfig',
  'StepsConfig',
  'AlertConfig',
  'DescriptionsConfig',
  'AnchorConfig',
  'MessageConfig',
  'ImageConfig',
  'ImageViewerConfig',
  'GuideConfig',
].sort((a, b) => a.localeCompare(b) > 0);

const MESSAGE_LIST = ['Message', 'MessageOptions', '$Message', '$Message.info', '$Message.error', '$Message.warning', '$Message.success', '$Message.loading', '$Message.question', '$Message.close', '$Message.closeAll', '$Message.config'];
const NOTIFICATION_LIST = ['Notification', 'NotificationOptions', '$Notification', '$Notification.info', '$Notification.warning', '$Notification.error', '$Notification.success', '$Notification.close', '$Notification.closeAll', '$Notification.config'];
const TABLE_LIST = ['Table', 'TableCol', 'BaseTable', 'BaseTableCol', 'PrimaryTable', 'PrimaryTableCol', 'EnhancedTable', 'EnhancedTableCol', 'TableRowState', 'TableColumnFilter', 'TableColumnController', 'TableEditableCellConfig', 'TableTreeConfig'];
const GLOBAL_CONFIG_PROVIDER = ['GlobalConfigProvider'].concat(GLOBAL_COMPONENTS_CONFIG);
const mobileFrames = ['Vue(Mobile)', 'React(Mobile)', 'Miniprogram'];

// 输出 API 文档时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const COMPONENT_API_MD_MAP = {
  Avatar: ['Avatar', 'AvatarGroup'],
  Checkbox: ['Checkbox', 'CheckboxGroup'],
  Cell: {
    list: ['Cell', 'CellGroup'],
    excludes: ['Miniprogram'],
  },
  Radio: ['Radio', 'RadioGroup'],
  Anchor: ['Anchor', 'AnchorItem', 'AnchorTarget'],
  Descriptions: ['Descriptions', 'DescriptionItem'],
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
    includes: mobileFrames
  },
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: ['Grid', 'Row', 'Col', 'GridItem'],
  Icon: ['IconSVG', 'Iconfont'],
  Select: ['Select', 'Option', 'OptionGroup', 'TScroll'],
  Tag: ['Tag', 'CheckTag'],
  Collapse: ['Collapse', 'CollapsePanel'],
  Dropdown: {
    list: ['Dropdown', 'DropdownItem'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
    excludes: ['Miniprogram']
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
    excludes: ['Miniprogram'],
  },
  List: ['List', 'ListItem', 'ListItemMeta'],
  Picker: {
    list: ['Picker', 'PickerItem'],
    includes: ['Miniprogram']
  },
  TimePicker: ['TimePicker', 'TimeRangePicker', 'TimePickerPanel', 'TimeRangePickerPanel'],
  DateTimePicker: ['DateTimePicker'],
  DatePicker: ['DatePicker', 'DateRangePicker', 'DatePickerPanel', 'DateRangePickerPanel'],
  Swiper: {
    list: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
    excludes: ['Miniprogram']
  },
  Swiper: {
    list: ['Swiper', 'SwiperNav'],
    includes: ['Miniprogram']
  },
  StickyTool: ['StickyTool', 'StickyItem'],
  ConfigProvider: GLOBAL_CONFIG_PROVIDER,
  RangeInput: ['RangeInput', 'RangeInputPopup'],
  Input: ['Input', 'InputGroup'],
  Watermark: ['Watermark', 'WatermarkText', 'WatermarkImage'],
  Timeline: ['Timeline', 'TimelineItem'],
  Guide:['Guide', 'GuideStep'],
  Tooltip:['Tooltip', 'TooltipLite'],
  SideBar: ['SideBar', 'SideBarItem'],
  Indexes: {
    list: ['Indexes', 'IndexesAnchor'],
    excludes: ['Miniprogram']
  },
  Popup: ['Popup','$Popup']
};

// 输出 TS 类型文件时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const TYPES_COMBINE_MAP = {
  Avatar: {
    list: ['Avatar', 'AvatarGroup'],
    excludes: ['Miniprogram']
  },
  Checkbox: {
    list: ['Checkbox', 'CheckboxGroup'],
    excludes: ['Miniprogram']
  },
  Cell: {
    list: ['Cell', 'CellGroup'],
    excludes: ['Miniprogram']
  },
  Radio: {
    list: ['Radio', 'RadioGroup'],
    excludes: ['Miniprogram'],
  },
  Message: {
    list: MESSAGE_LIST,
  },
  Notification: {
    list: NOTIFICATION_LIST,
  },
  Form: {
    list: ['Form', 'FormItem', 'FormList', 'FormRule', 'FormErrorMessage'],
  },
  Select: {
    list: ['Select', 'Option', 'OptionGroup'],
  },
  Tabs: {
    list: ['Tabs', 'TabPanel'],
    excludes: ['Miniprogram']
  },
  TabBar: {
    list: ['TabBar', 'TabBarItem'],
    excludes: ['Miniprogram']
  },
  Pagination: {
    list: ['Pagination', 'PaginationMini'],
  },
  Tag: {
    list: ['Tag', 'CheckTag'],
    excludes: ['Miniprogram']
  },
  Collapse: {
    list: ['Collapse', 'CollapsePanel'],
    excludes: ['Miniprogram']
  },
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: {
    list: ['Grid', 'Row', 'Col', 'GridItem'],
    excludes: ['Miniprogram']
  },
  Layout: {
    list: ['Layout', 'Header', 'Aside', 'Content', 'Footer'],
    // includes 以下框架满足此组件父子关系
    // includes 以下框架将 'Layout', 'Header', 'Aside', 'Content', 'Footer' 等组件的 API 文档，合并输出到目录 layout
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  Dropdown: {
    list: ['Dropdown', 'DropdownItem'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  DropdownMenu: {
    list: ['DropdownMenu', 'DropdownItem'],
    excludes: ['Miniprogram']
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
    excludes: ['Miniprogram']
  },
  Calendar: {
    list: ['Calendar', 'CalendarController', 'CalendarCell'],
  },
  Descriptions: {
    list: ['Descriptions', 'DescriptionItem'],
  },
  Menu: {
    list: ['Menu', 'HeadMenu', 'Submenu', 'MenuItem', 'MenuGroup'],
  },
  Loading: {
    list: ['Loading', '$Loading'],
  },
  Upload: {
    list: ['Upload', 'UploadFile'],
    excludes: ['Miniprogram'],
  },
  List: {
    list: ['List', 'ListItem', 'ListItemMeta'],
  },
  Picker: {
    list: ['Picker', 'PickerItem'],
    excludes: ['Miniprogram']
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
    excludes: ['Miniprogram']
  },
  Table: {
    list: TABLE_LIST,
  },
  Icon: {
    list: ['Iconfont', 'IconSVG'],
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
    list:  ['SideBar', 'SideBarItem']
  },
  Indexes: {
    list: ['Indexes', 'IndexesAnchor'],
    excludes: ['Miniprogram']
  },
};

exports.GLOBAL_COMPONENTS_CONFIG = GLOBAL_COMPONENTS_CONFIG;
exports.COMPONENT_API_MD_MAP = COMPONENT_API_MD_MAP;
exports.TYPES_COMBINE_MAP = TYPES_COMBINE_MAP;

exports.default = {
  COMPONENT_API_MD_MAP,
  TYPES_COMBINE_MAP,
  GLOBAL_COMPONENTS_CONFIG,
};

module.exports = {
  COMPONENT_API_MD_MAP,
  TYPES_COMBINE_MAP,
  GLOBAL_COMPONENTS_CONFIG,
};

Object.defineProperty(exports, '__esModule', { value: true })
