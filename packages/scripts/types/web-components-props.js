/**
 * WebComponents（Omi）需要单独生成 propTypes.ts，供 static propTypes 使用
 */
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { lowerFirst, upperFirst } from 'lodash-es';
import prettier from 'prettier';
import { getFolderName, getCmpTypeCombineMap } from '../common.js';
import { FILE_RIGHTS_DESC } from '../config/const.js';
import {
  FRAMEWORK_MAP,
  TYPES_COMBINE_MAP,
  MOBILE_TYPES_COMBINE_MAP,
  MINIPROGRAM_TYPES_COMBINE_MAP,
  MOBILE_FRAMES,
  getChatComponentMap,
} from '../config/index.js';
import prettierConfig from '../config/prettier.js';
import map from '../map.json' with { type: 'json' };
import { getComponentBasePath } from '../utils.js';

const COMPONENTS_MAP = getComponentsMap(map.data.components);

// Omi propTypes 中 TNode 可接受的全部构造函数
// TNode<T> = VNode<T> | ((props: T) => VNode) | object | string | number | boolean | null
const T_NODE_TYPES = ['Function', 'Object', 'String', 'Number'];
// TElement<T> = WeElement | ((props: T) => WeElement)
const T_ELEMENT_TYPES = ['Object', 'Function'];

function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

// 将 API 基础类型映射为 omi propTypes 的构造函数
function getPropTypeValue(api) {
  const rawTypes = api.field_type_text;
  // 将 TNode/TElement 展开为对应的 Omi 构造函数列表
  // TNode/TElement 展开结果置于最前，保证 `children` 等插槽类属性类型顺序与 Omi 组件手写保持一致
  const expanded = rawTypes.flatMap((t) => {
    if (t === 'TNode') return T_NODE_TYPES;
    if (t === 'TElement') return T_ELEMENT_TYPES;
    return [];
  });
  const original = rawTypes.filter((t) => t !== 'TNode' && t !== 'TElement');
  const types = [...expanded, ...original].filter((v) => !!v);
  // 去重并保持首次出现顺序
  const uniqueTypes = [...new Set(types)];
  if (!uniqueTypes.length) return;
  return uniqueTypes.length <= 1 ? uniqueTypes[0] : `[${uniqueTypes.join(', ')}]`;
}

// 将 Events 类别的事件名转换为 propTypes 的 key（click -> onClick）
function getEventPropName(fieldName) {
  return `on${upperFirst(fieldName)}`;
}

function getOneComponentPropTypes(cmp, apiList) {
  if (['TS', 'plugin'].includes(COMPONENTS_MAP[cmp].type)) return;
  const propTypes = [];
  apiList.forEach((api) => {
    if (api.deprecated) return;
    if (api.html_attribute) return;
    const { field_category_text: category } = api;
    // 仅处理 Props 和 Events
    if (!['Props', 'Events'].includes(category)) return;
    // Events 类型没有 field_type_text，统一映射为 Function
    if (category === 'Events') {
      const eventName = getEventPropName(api.field_name);
      propTypes.push(`${eventName}: Function,`);
      return;
    }
    const typeValue = getPropTypeValue(api);
    if (!typeValue) return;
    // 非受控属性添加前缀 default
    const name = api.support_default_value ? `default${upperFirst(api.field_name)}` : api.field_name;
    propTypes.push(`${name}: ${typeValue},`);
  });
  // StyledProps 通用属性（所有 WebComponents 组件继承 StyledProps）
  propTypes.push('innerStyle: String,');
  if (!propTypes.length) return;
  const propTypesStr = `export const ${lowerFirst(cmp)}PropTypes = {\n${propTypes.map((p) => `  ${p}`).join('\n')}\n};`;
  return propTypesStr;
}

async function generateWebComponentsPropTypes(baseData, framework) {
  const relationMap = getCmpTypeCombineMap(
    framework === 'Miniprogram'
      ? Object.assign({}, TYPES_COMBINE_MAP, MOBILE_TYPES_COMBINE_MAP, MINIPROGRAM_TYPES_COMBINE_MAP, getChatComponentMap(framework))
      : MOBILE_FRAMES.includes(framework)
        ? Object.assign({}, TYPES_COMBINE_MAP, MOBILE_TYPES_COMBINE_MAP, getChatComponentMap(framework))
        : Object.assign({}, TYPES_COMBINE_MAP, getChatComponentMap(framework)),
    framework,
  );

  const finalApiPropTypes = {};
  Object.keys(baseData).forEach((cmp) => {
    if (['TS', 'plugin'].includes(COMPONENTS_MAP[cmp].type)) return;
    const apiList = baseData[cmp];
    const props = getOneComponentPropTypes(cmp, apiList);
    if (!props) return;
    const parentCmp = relationMap[cmp] || cmp;
    if (!finalApiPropTypes[parentCmp]) {
      finalApiPropTypes[parentCmp] = [props];
    } else {
      finalApiPropTypes[parentCmp].push(props);
    }
  });

  for (const parentCmp of Object.keys(finalApiPropTypes)) {
    const apiStr = finalApiPropTypes[parentCmp].join('\n\n');
    let formattedStr = apiStr;
    try {
      formattedStr = await prettier.format(apiStr, prettierConfig);
    } catch (e) {
      console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
      console.warn(e);
    }

    const basePath = getComponentBasePath(parentCmp, FRAMEWORK_MAP[framework].propsBasePath, framework);
    const folder = path.resolve(basePath, getFolderName(parentCmp));
    fs.mkdirSync(folder, { recursive: true });
    const outputPath = path.resolve(folder, 'propTypes.ts');
    const data = [FILE_RIGHTS_DESC, formattedStr].join('\n\n');
    fs.writeFileSync(outputPath, `/* eslint-disable */\n\n${data}`);
    console.log(chalk.green(`WebComponents propTypes: ${outputPath} has been created.`));
  }
}

export { generateWebComponentsPropTypes };
