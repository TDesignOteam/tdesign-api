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

function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

// 将 API 基础类型映射为 omi propTypes 的构造函数
function getPropTypeValue(api) {
  let types = api.field_type_text;
  // 过滤 TNode 类型，Omi 中 TNode 使用 Function 声明
  types = types.map((t) => (t === 'TNode' ? 'Function' : t)).filter((v) => !!v);
  if (!types.length) return;
  const typeName = types.length <= 1 ? types[0] : `[${types.join(', ')}]`;
  // 复杂类型（多类型、Function/Object/Array）仍需保留，供类型校验使用
  return typeName;
}

function getOneComponentPropTypes(cmp, apiList) {
  if (['TS', 'plugin'].includes(COMPONENTS_MAP[cmp].type)) return;
  const propTypes = [];
  apiList.forEach((api) => {
    if (api.deprecated) return;
    if (api.field_category_text !== 'Props') return;
    if (api.html_attribute) return;
    const typeValue = getPropTypeValue(api);
    if (!typeValue) return;
    // 非受控属性添加前缀 default
    const name = api.support_default_value ? `default${upperFirst(api.field_name)}` : api.field_name;
    propTypes.push(`${name}: ${typeValue},`);
  });
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
