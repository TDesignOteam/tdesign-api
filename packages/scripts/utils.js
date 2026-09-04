import { kebabCase } from 'lodash-es';
import { CHAT_COMPONENT_MAP, getChatComponentMap } from './config/files-combine.js';
import { getChatConfig, FRAMEWORK_MAP } from './config/index.js';

const CHAT_COMPONENT_NAMES = new Set(
  Object.values(CHAT_COMPONENT_MAP).flatMap((list) => (Array.isArray(list) ? list : [])),
);

function isChatComponentPath(cmp, framework) {
  if (!CHAT_COMPONENT_NAMES.has(cmp)) return false;
  return !framework || Object.keys(getChatComponentMap(framework)).length > 0;
}

function kebabCaseComponent(cmp) {
  return cmp === 'QRCode' ? 'qrcode' : kebabCase(cmp);
}

function getComponentBasePath(cmp, apiBasePath, framework) {
  if (!isChatComponentPath(cmp, framework)) return apiBasePath;

  const chatConfig = framework ? getChatConfig(framework) : null;
  if (!chatConfig) return apiBasePath;

  // 本地路径：直接返回 Chat 包的 apiBasePath
  if (!apiBasePath.startsWith('http')) {
    return chatConfig.apiBasePath;
  }

  // GitHub URL：用主包组件路径 → Chat 包路径做替换
  const current = FRAMEWORK_MAP[framework];
  if (current) {
    return apiBasePath.replace(current.apiBasePath, chatConfig.apiBasePath);
  }

  return apiBasePath;
}

export { kebabCaseComponent, getComponentBasePath, isChatComponentPath };
