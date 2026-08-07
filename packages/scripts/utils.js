import { kebabCase } from 'lodash-es';
import { CHAT_COMPONENT_MAP } from './config/const.js';
import { CHAT_FRAMEWORK_CONFIG } from './config/index.js';

const CHAT_COMPONENT_NAMES = new Set(
  Object.values(CHAT_COMPONENT_MAP).flatMap((list) => (Array.isArray(list) ? list : [])),
);

function isChatComponentPath(cmp) {
  if (CHAT_COMPONENT_NAMES.has(cmp)) return true;
  for (const key of Object.keys(CHAT_COMPONENT_MAP)) {
    if (kebabCaseComponent(key) === cmp) return true;
  }
  return false;
}

function kebabCaseComponent(cmp) {
  return cmp === 'QRCode' ? 'qrcode' : kebabCase(cmp);
}

function getComponentBasePath(cmp, apiBasePath, framework) {
  if (!isChatComponentPath(cmp)) return apiBasePath;
  // 本地文件路径优先使用配置；URL（如 GitHub 文档链接）走字符串替换
  if (framework && !apiBasePath.startsWith('http')) {
    const chatConfig = CHAT_FRAMEWORK_CONFIG[framework];
    if (chatConfig?.apiPath) return chatConfig.apiPath;
  }
  return apiBasePath
    .replace('packages/components', 'packages/pro-components/chat')
    .replace('packages/uniapp-components', 'packages/uniapp-pro-components/chat');
}

export { kebabCaseComponent, getComponentBasePath, isChatComponentPath };
