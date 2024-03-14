export const API_CATEGORY_PROPS = 1
export const API_CATEGORY_EVENTS = 2
export const API_CATEGORY_FUNCTIONS = 4
export const API_CATEGORY_PLUGINS = 8
export const API_CATEGORY_EXTENDS = 16
export const API_CATEGORY_RETURN = 32
export const API_CATEGORY_T = 64
export const API_CATEGORY_CLASS_API = 128
export const API_CATEGORY_CSS_VAR_API = 256

export const API_CATEGORY_MAP = {
  [API_CATEGORY_PROPS]: {
    placeholder: {
      name: '请输入属性名称，如：name/theme/size/disabled'
    }
  },
  [API_CATEGORY_EVENTS]: {
    placeholder: {
      name: '事件名称录入时统一使用小驼峰命名，且不带on，如：visibleChange',
      inputParams: '事件参数，如：(context: { e: Event, value: string | number })',
      descZh: '请输入事件描述（中文），如：点击确认按钮时触发',
      descEn: 'type event description in English',
      triggerElements: '事件触发元素描述，默认为 MouseEvent<HTMLDivElement>'
    }
  },
  [API_CATEGORY_FUNCTIONS]: {
    placeholder: {
      name: '组件对外暴露的方法名称',
      inputParams: '方法参数，如：(validateRules: RulesObject)',
      outputParams: '方法返回值，如：(validateResult: boolean)',
      descZh: '输入方法描述，如：使用该方法进行表单校验',
      descEn: 'type function description in English'
    }
  },
  [API_CATEGORY_PLUGINS]: {
    placeholder: {
      name: '组件插件名称，如：this.$message.info',
      inputParams: '插件参数，如：(options) => {}',
      outputParams: '插件返回值，如：(options) => Promise<instance: 组件实例>',
      descZh: '插件描述，如：使用该插件弹出信息提醒',
      descEn: 'type plugin description in English'
    }
  },
  [API_CATEGORY_EXTENDS]: {
    placeholder: {
      name: '请输入继承 API 名称'
    },
    desc: 'React.ButtonHTMLAttributes<HTMLButtonElement>'
  },
  [API_CATEGORY_RETURN]: {
    placeholder: {
      name: '请输入插件函数返回值类型'
    },
    desc: 'Promise<MessageInstance>;【interface MessageInstance { close: () => void }】  }'
  },
  [API_CATEGORY_T]: {
    placeholder: {
      name: '请输入泛型参数，示例：<DataOption = TreeOptionData>'
    }
  }
}

export const STRING = 1
export const NUMBER = 2
export const BOOLEAN = 4
export const OBJECT = 8
export const ARRAY = 16
export const FUNCTION = 32
export const TNODE = 64

export const P_VUE_PC = 1
export const P_REACT_PC = 2
export const P_ANGULAR_PC = 4
export const P_VUE_MOBILE = 8
export const P_REACT_MOBILE = 16
export const P_ANGULAR_MOBILE = 32
export const P_MINIPROGRAM = 64
