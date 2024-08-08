/**
 * React 需要单独生成 defaultProps
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const map = require('../map.json');
const { lowerFirst, upperFirst } = require('lodash');
const prettier = require('prettier');
const prettierConfig = require('../config/prettier');
const { FRAMEWORK_MAP, TYPES_COMBINE_MAP, MOBILE_TYPES_COMBINE_MAP, MINIPROGRAM_TYPES_COMBINE_MAP, MOBILE_FRAMES } = require('../config');
const reactDefaultValuePropsConfig = require('../config/reac-default-props');
const { FILE_RIGHTS_DESC } = require('../config/const');
const {
  getFolderName,
  getCmpTypeCombineMap,
} = require('../common');

const CONFIG = reactDefaultValuePropsConfig;

const COMPONENTS_MAP = getComponentsMap(map.data.components);

function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

function getDefaultValue(api) {
  const defaultValue = api.field_default_value;
  // 如果 API 平台显示设置了默认值为 undefined，则必须立即返回 undefined。这种一般属于优先级之类的 API
  if (defaultValue === 'undefined') return defaultValue;
  if (defaultValue === '') return;
  if (defaultValue === '\'\'') return defaultValue;
  // 输出 Number 类型的默认值
  if (api.field_type_text.includes('Number') && !isNaN(defaultValue)) return Number(defaultValue);
  // 处理字符串类型
  if (typeof defaultValue === 'string') {
    try {
      JSON.parse(defaultValue);
      return defaultValue;
    } catch (e) {
      return `'${defaultValue}'`.replace(/''/g, '\'');
    }
  }
  return defaultValue;
}

function getOneComponentProps(cmp, tsTypeName, apiList) {
  if (['TS', 'plugin'].includes(COMPONENTS_MAP[cmp].type)) return;
  // 计算单个组件的默认值
  let defaultProps = [];
  const properties = [];
  apiList.forEach((api) => {
    const defaultPropsValue = getDefaultValue(api);
    if (api.field_category_text === 'Props' && defaultPropsValue !== undefined) {
      // 受控属性，直接输出；非受控属性添加前缀 `default`
      const name = api.support_default_value ? `default${upperFirst(api.field_name)}` : api.field_name;
      defaultProps.push(`${name}: ${defaultPropsValue},`);
      properties.push(name);
    }
  });
  let finalTsType = tsTypeName;
  if (CONFIG.needPickRequiredType.includes(cmp)) {
    finalTsType = `Pick<${tsTypeName}, ${properties.map(t => `'${t}'`).join(' | ')}>`;
  }
  defaultProps.unshift(`export const ${lowerFirst(cmp)}DefaultProps: ${finalTsType} = {`);
  defaultProps.push('};');
  // 如果中间的内容为空，则情况当前默认 Props
  if (defaultProps.length === 2) {
    defaultProps = [];
  }
  return defaultProps.join('');
}

function getTsTypeName(cmp) {
  return `Td${cmp}Props`;
}

function generateReactDefaultProps(baseData, framework) {
  const relationMap = getCmpTypeCombineMap(
    framework === 'Miniprogram' ? Object.assign(TYPES_COMBINE_MAP, MOBILE_TYPES_COMBINE_MAP, MINIPROGRAM_TYPES_COMBINE_MAP) : (MOBILE_FRAMES.includes(framework)? Object.assign(TYPES_COMBINE_MAP, MOBILE_TYPES_COMBINE_MAP): TYPES_COMBINE_MAP),
    framework
  );

  // checkbox 和 checkboxGroup 等组件，组合输出
  const finalApiDefaultProps = {};
  const importsMap = {};
  Object.keys(baseData).forEach((cmp) => {
    if (['TS', 'plugin'].includes(COMPONENTS_MAP[cmp].type)) return;
    const apiList = baseData[cmp];
    const tsTypeName = getTsTypeName(cmp);
    const props = getOneComponentProps(cmp, tsTypeName, apiList);
    if (!props) return;
    const parentCmp = relationMap[cmp] || cmp;
    if (!finalApiDefaultProps[parentCmp]) {
      finalApiDefaultProps[parentCmp] = [props];
    } else {
      finalApiDefaultProps[parentCmp].push(props);
    }
    // 合并组件输出时，也会同步合并引入的数据 TS 类型命名
    if (!importsMap[parentCmp]) {
      importsMap[parentCmp] = [tsTypeName];
    } else {
      importsMap[parentCmp].push(tsTypeName);
    }
  });

  // 输出组合 defaultProps 到文件
  // console.log(finalApiDefaultProps);
  Object.keys(finalApiDefaultProps).forEach((parentCmp) => {
    const importsString = `import { ${importsMap[parentCmp].join(', ')} } from './type';\n\n`;
    let apiStr = importsString + finalApiDefaultProps[parentCmp].join('\n\n');

    try {
      apiStr = prettier.format(apiStr, prettierConfig);
    } catch (e) {
      console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
      console.warn(e);
    }

    const basePath = FRAMEWORK_MAP[framework].propsBasePath;
    const folder = path.resolve(basePath, getFolderName(parentCmp));
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      const outputPath = path.resolve(folder, 'defaultProps.ts');
      const data = [FILE_RIGHTS_DESC, apiStr].join('\n\n');
      fs.writeFile(outputPath, data, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(chalk.green(`React defaultProps: ${outputPath} has been created.`));
      });
    });
  });
}

module.exports = {
  generateReactDefaultProps,
};
