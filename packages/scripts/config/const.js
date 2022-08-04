// const dayjs = require('dayjs');
const path = require('path');
const VUE_TITILE_MAP = require('./language/api-docs-title');

const MESSAGE_LIST = ['Message', 'MessageOptions', '$Message', '$Message.info', '$Message.error', '$Message.warning', '$Message.success', '$Message.loading', '$Message.question', '$Message.close', '$Message.closeAll', '$Message.config'];
const NOTIFICATION_LIST = ['Notification', 'NotificationOptions', '$Notification', '$Notification.info', '$Notification.warning', '$Notification.error', '$Notification.success', '$Notification.close', '$Notification.closeAll'];
const TABLE_LIST = ['Table', 'TableCol', 'BaseTable', 'BaseTableCol', 'PrimaryTable', 'PrimaryTableCol', 'EnhancedTable', 'EnhancedTableCol', 'TableRowState', 'TableColumnFilter', 'TableScroll', 'TableColumnController', 'TableEditableCellConfig', 'TableTreeConfig'];

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
  'AnchorConfig',
  'MessageConfig',
].sort((a, b) => a.localeCompare(b) > 0);

const GLOBAL_CONFIG_PROVIDER = ['GlobalConfigProvider'].concat(GLOBAL_COMPONENTS_CONFIG);
const mobileFrames = ['Vue(Mobile)', 'React(Mobile)', 'Miniprogram'];

// 输出 API 文档时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const COMPONENT_API_MD_MAP = {
  Avatar: ['Avatar', 'AvatarGroup'],
  Checkbox: ['Checkbox', 'CheckboxGroup'],
  Radio: ['Radio', 'RadioGroup'],
  Anchor: ['Anchor', 'AnchorItem', 'AnchorTarget'],
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
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: ['Grid', 'Row', 'Col', 'GridItem'],
  Icon: ['IconSVG', 'Iconfont'],
  Select: ['Select', 'Option', 'OptionGroup'],
  Tag: ['Tag', 'CheckTag'],
  Collapse: ['Collapse', 'CollapsePanel'],
  Dropdown: {
    list: ['Dropdown', 'DropdownItem'],
    includes: ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Angular(PC)'],
  },
  DropdownMenu: ['DropdownMenu', 'DropdownItem'],
  Dialog: ['Dialog', 'DialogOptions', 'DialogInstance', '$Dialog', '$Dialog.confirm', '$Dialog.alert'],
  Tree: ['Tree', 'TreeNodeState', 'TreeNodeModel'],
  Table: TABLE_LIST,
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
  Picker: ['Picker', 'PickerItem'],
  TimePicker: ['TimePicker', 'TimeRangePicker', 'TimePickerPanel', 'TimeRangePickerPanel'],
  DateTimePicker: ['DateTimePicker'],
  DatePicker: ['DatePicker', 'DateRangePicker', 'DatePickerPanel', 'DateRangePickerPanel'],
  Swiper: ['Swiper', 'SwiperItem', 'SwiperNavigation'],
  StickyTool: ['StickyTool', 'StickyItem'],
  ConfigProvider: GLOBAL_CONFIG_PROVIDER,
  RangeInput: ['RangeInput', 'RangeInputPopup'],
  Watermark: ['Watermark', 'WatermarkText', 'WatermarkImage'],
  TimeLine: ['TimeLine', 'TimeLineItem'],
};

// 输出 TS 类型文件时，哪些需要文件需要合并输出，数据内容为组件/插件名称
const TYPES_COMBINE_MAP = {
  Avatar: ['Avatar', 'AvatarGroup'],
  Checkbox: {
    list: ['Checkbox', 'CheckboxGroup'],
  },
  Radio: {
    list: ['Radio', 'RadioGroup'],
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
  },
  TabBar: {
    list: ['TabBar', 'TabBarItem'],
  },
  Pagination: {
    list: ['Pagination', 'PaginationMini'],
  },
  Tag: {
    list: ['Tag', 'CheckTag'],
  },
  Collapse: {
    list: ['Collapse', 'CollapsePanel'],
  },
  // Web 侧是 Grid + Row + Col，移动端和小程序是 Grid + GridItem
  Grid: {
    list: ['Grid', 'Row', 'Col', 'GridItem'],
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
    includes: mobileFrames,
  },
  Dialog: {
    list: ['Dialog', 'DialogOptions', 'DialogInstance', '$Dialog', '$Dialog.confirm', '$Dialog.alert'],
  },
  Tree: {
    list: ['Tree', 'TreeNodeState', 'TreeNodeModel'],
  },
  Breadcrumb: {
    list: ['Breadcrumb', 'BreadcrumbItem'],
  },
  Steps: {
    list: ['Steps', 'StepItem'],
  },
  Calendar: {
    list: ['Calendar', 'CalendarController', 'CalendarCell'],
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
  Watermark: {
    list: ['Watermark', 'WatermarkText', 'WatermarkImage'],
  },
  TimeLine: {
    list: ['TimeLine', 'TimeLineItem'],
  },
};

// common 数据类型，用于引入具体的组件类型定义文件中
const GLOBAL_TYPES = [
  'TNode',
  'TNodeReturnValue',
  'TElement',
  'TreeOptionData',
  'OptionData',
  'SizeEnum',
  'HorizontalAlignEnum',
  'VerticalAlignEnum',
  'ClassName',
  'Classes',
  'CSSSelector',
  'Styles',
  'AttachNode',
  'ScrollContainer',
  'FormResetEvent',
  'FormSubmitEvent',
  'KeysType',
  'HTMLElementAttributes',
  'ComponentType',
  'TScroll',
];

// InputEvent is not included in SyntheticEvent, but SyntheticEvent includes FormEvent
// FormEvent comes from onChange/onInput/onInvalid/onReset/onSubmit .etc.
const REACT_EVENTS = ['MouseEvent', 'KeyboardEvent', 'ClipboardEvent', 'FocusEvent', 'WheelEvent', 'FormEvent', 'TransitionEvent', 'ChangeEvent', 'DragEvent', 'CompositionEvent'];
const REACT_TYPES = ['CSSProperties'].concat(REACT_EVENTS);

const [component, framework, allParams] = process.argv.slice(2);
// const { finalProject } = parseParams(allParams);
const finalProject = allParams && allParams.includes('finalProject');

module.exports = {
  GLOBAL_TYPES,
  REACT_EVENTS,
  REACT_TYPES,
  FILE_RIGHTS_DESC: [
    '/**',
    '该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC',
    '*/'].join('\n * '),
  TNode: 'TNode',
  // 这里配置好之后，可以在 API 文档中显示「查看通用类型定义」
  TDESIGN_GLOBALS: ['TNode', 'Styles',  'ClassName', 'CSSSelector', 'AttachNode', 'OptionData', 'TreeOptionData', 'SizeEnum', 'HorizontalAlignEnum', 'VerticalAlignEnum', 'KeysType', 'ComponentType', 'TScroll'],
  // 真实路径，默认为当前项目，finalProject 值为 true，则表示直接输出到项目中，方便快速测试类型定义
  BASE_PATH_URL: finalProject
    ? path.resolve(process.cwd(), '../')
    : path.resolve(process.cwd(), './packages/products'),
  BASE_PATH_URL_LOCAL: path.resolve(process.cwd(), '../'),
  // 开发或者测试路径
  // BASE_PATH_URL: '.',
  VUE_TITILE_MAP,
  COMPONENT_API_MD_MAP,
  TYPES_COMBINE_MAP,
};
