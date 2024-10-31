/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTimelineItemProps } from './type';
const props: TdTimelineItemProps = {
  /** 描述内容 */
  content: {
    type: String,
  },
  /** 时间轴颜色，内置 `primary/warning/error/default` 四种色值，可传入 16 进制颜色码或 RGB 颜色值 */
  dotColor: {
    type: String,
    value: 'primary',
  },
  /** 标签文本内容，可完全自定义 */
  label: {
    type: String,
  },
  /** 标签信息相对于时间轴的位置，在 `mode='alternate'` 时生效，优先级高于 `Timeline.labelAlign` */
  labelAlign: {
    type: String,
  },
};

export default props;
