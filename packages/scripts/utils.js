import { kebabCase } from 'lodash-es';
import { getChatFrameworkConfig } from './config/chat-config.js';
import { CHAT_COMPONENT_MAP, getChatComponentMap } from './config/files-combine.js';

const CHAT_COMPONENT_NAMES = new Set(
  Object.values(CHAT_COMPONENT_MAP).flatMap((list) => (Array.isArray(list) ? list : [])),
);

function isChatComponentPath(cmp, framework) {
  if (!CHAT_COMPONENT_NAMES.has(cmp)) return false;
  // 未指定框架或支持 Chat 独立拆分的框架，才按 chat 组件处理
  return !framework || Object.keys(getChatComponentMap(framework)).length > 0;
}

function kebabCaseComponent(cmp) {
  return cmp === 'QRCode' ? 'qrcode' : kebabCase(cmp);
}

function getComponentBasePath(cmp, apiBasePath, framework) {
  if (!isChatComponentPath(cmp, framework)) return apiBasePath;
  // 本地文件路径优先使用配置；URL（如 GitHub 文档链接）走字符串替换
  if (framework && !apiBasePath.startsWith('http')) {
    const chatConfig = getChatFrameworkConfig(framework);
    if (chatConfig?.apiPath) return chatConfig.apiPath;
  }
  return apiBasePath
    .replace('packages/components', 'packages/pro-components/chat')
    .replace('packages/uniapp-components', 'packages/uniapp-pro-components/chat');
}

export { kebabCaseComponent, getComponentBasePath, isChatComponentPath };
