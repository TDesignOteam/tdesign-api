import { BASE_PATH_URL } from './const.js';

// Chat 高阶组件在各框架下的独立包配置（与 FRAMEWORK_MAP 并列，统一管理各框架 Chat 路径）
// 注意：仅支持 Chat 独立拆分的框架（CHAT_FRAMEWORKS）才会命中这里
const CHAT_FRAMEWORK_CONFIG = {
  'VueNext(PC)': {
    name: '@tdesign-vue-next/chat',
    apiPath: `${BASE_PATH_URL}/tdesign-vue-next/packages/pro-components/chat`,
    helperPath: `${BASE_PATH_URL}/tdesign-vue-next/packages/tdesign-vue-next-chat/helper`,
    volarPath: `${BASE_PATH_URL}/tdesign-vue-next/packages/tdesign-vue-next-chat/global.d.ts`,
  },
  'React(PC)': {
    name: '@tdesign-react/chat',
    apiPath: `${BASE_PATH_URL}/tdesign-react/packages/pro-components/chat`,
  },
  UniApp: {
    name: '@tdesign/uniapp-chat',
    apiPath: `${BASE_PATH_URL}/tdesign-miniprogram/packages/uniapp-pro-components/chat`,
    volarPath: `${BASE_PATH_URL}/tdesign-miniprogram/packages/tdesign-uniapp-chat/global.d.ts`,
  },
  Miniprogram: {
    name: 'tdesign-miniprogram',
    apiPath: `${BASE_PATH_URL}/tdesign-miniprogram/packages/pro-components/chat`,
  },
};

function getChatFrameworkConfig(framework) {
  return CHAT_FRAMEWORK_CONFIG[framework] || null;
}

export { CHAT_FRAMEWORK_CONFIG, getChatFrameworkConfig };
