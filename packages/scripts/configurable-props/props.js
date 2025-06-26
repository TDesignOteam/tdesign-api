const fs = require('fs');
const pick = require('lodash/pick');
const path = require('path');
const chalk = require('chalk');
const { isPlugin, getCmpTypeCombineMap, getFolderName } = require('../common');
const map = require('../map.json');
const { FRAMEWORK_MAP, TYPES_COMBINE_MAP } = require('../config');
const { kebabCaseComponent } = require('../utils');

let FRAMEWORK_TYPES_COMPONENT_RELATION = {};

function moveTsTypeToDesc(str) {
  // 匹配【】中的全部数据，数据为自定义 TS 类型，也可能是从外部文件引入的类型
  const regExp = /【.*?】/g;
  const baseName = str.replace(regExp, '');
  let interfaceDesc = str.match(regExp) || [];
  interfaceDesc = interfaceDesc.map(str => str.replace(/【|】/g, '`'));
  return { baseName, interfaceDesc };
}

// category: props / events / functions / extends / return
function groupByFieldCategory(componentApi) {
  const result = {};
  componentApi.forEach((apiOriginal) => {
    const api = { ...apiOriginal };
    const isExtend = api.field_category_text === 'Extends';
    const isFunction = (isPlugin(api.component)) && api.field_category_text === 'Functions';
    if (isExtend) {
      const { baseName } = moveTsTypeToDesc(api.field_name);
      api.field_name = baseName.replace('Td', '');
      // 为避免特殊字符 <T> 和 markdown 冲突，添加 `` 符号
      if (api.field_name[0] !== '`') {
        api.field_name = `\`${api.field_name}\``;
      }
      api.field_desc_zh = `继承 ${api.field_name.replace('Td', '')} 中的全部 API`;
    }
    const category = (isExtend || isFunction) ? 'Props' : api.field_category_text;
    if (result[category]) {
      result[category].push(api);
    } else {
      result[category] = [api];
    }
  });
  return result;
}

const titleConfig = {
  Props: {
    fields: ['field_name', 'field_type_text', 'field_default_value', 'field_enum'],
    output: ['name', 'type', 'defaultValue', 'options'],
  },
};

function getOneApiInfo(api, category) {
  const f = pick(api, titleConfig[category].fields);
  const result = {};
  Object.keys(f).forEach((item, index) => {
    const resultKey = titleConfig[category].output[index];
    if (resultKey === 'type') {
      // 类型包括 Boolean 的，强制设置为 Boolean
      const typeStr = f[item].includes('Boolean') ? 'Boolean' : f[item][0];
      result[resultKey] = typeStr;
    } else if (resultKey === 'options') {
      if (f[item].split('/').length > 1) {
        result[resultKey] = f[item].split('/').map(typeStr => ({ label: typeStr.trim(), value: typeStr.trim() }));
        result.type = 'enum';
      } else {
        result[resultKey] = [];
      }
    } else if (resultKey === 'defaultValue') {
      // 默认值为 true/false 的强制处理 type = Boolean
      if (['true', 'false'].includes(f[item])) {
        result.type = 'Boolean';
      }
      if (result.type === 'Boolean') {
        result.defaultValue = f[item] === 'true';
      } else {
        result.defaultValue = f[item];
      }
    } else {
      result[resultKey] = f[item];
    }
  });
  return result;
}

function getApiInfos(baseData) {
  const result = {};
  // 获取非plugin组件列表，以获取组件label
  const filterApiList = map.data.components.filter(item => item.type === undefined);
  Object.keys(baseData).forEach((cmp) => {
    const isCmp = filterApiList.find(item => item.value === cmp);
    if (!isCmp) return;
    const info = {};
    info.name = cmp;
    const fieldCategoryMap = groupByFieldCategory(baseData[cmp]);
    Object.keys(fieldCategoryMap).forEach((category) => {
      if (category !== 'Props') return;
      let p = '';
      switch (category) {
        case 'Props':
          p = 'props';
          break;
        default:
          break;
      }
      info[p] = [];
      const apis = fieldCategoryMap[category];
      apis.forEach((api) => {
        // HTML 原生属性不做展示
        if ((api.html_attribute)) return;
        // 只展示 Boolean 或枚举类型
        if (api.field_type_text.includes('Boolean') || (api.field_type_text.includes('String') && api.field_default_value && api.field_enum.split('/').length > 1)) {
          const oneApiInfo = getOneApiInfo(api, category);
          oneApiInfo && info[p].push(oneApiInfo);
        }
      });
    });
    result[cmp] = info;
  });
  return result;
}

// ts 里面有些 TS 类型需要合并输出；props 也需要同目录输出
function getFolderPath(basePath, cmp) {
  const parentCmp = FRAMEWORK_TYPES_COMPONENT_RELATION[cmp];
  const folderName =    cmp === parentCmp || !parentCmp
    ? getFolderName(cmp)
    : getFolderName(parentCmp);
  return path.resolve(basePath, folderName);
}

function writeFile(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) return console.error(err);
    console.log(chalk.green(`generate configurable json: ${path} has been created.`));
  });
}

function getCmpName(cmpName) {
  // 以下目录包含多个实现组件
  const comps = [
    {
      name: 'table',
      components: ['BaseTable', 'PrimaryTable', 'EnhancedTable'],
    },
    {
      name: 'datepicker',
      components: ['DatePicker', 'DateRangePicker'],
    },
  ];
  const targetCmp = comps.find(({ components }) => components.includes(cmpName));
  if (targetCmp) {
   
    return {
      cmpStr: targetCmp.name,
      fileNameStr: `${kebabCaseComponent(cmpName)}-props.json`,
    };
  }
  return {};
}

function generateProps(baseData, framework) {
  const current = FRAMEWORK_MAP[framework];
  FRAMEWORK_TYPES_COMPONENT_RELATION = getCmpTypeCombineMap(
    TYPES_COMBINE_MAP,
    framework,
  );
  const apiInfos = getApiInfos(baseData, current);
  const basePath = current.propsBasePath;
  // 输出至 examples 目录
  const outputPath = path.resolve(current.usageDemoBasePath);
  Object.keys(apiInfos).forEach((cmp) => {
    const folder = getFolderPath(basePath, kebabCaseComponent(cmp));
    // 如果组件不存在不进行输出
    if (!fs.existsSync(folder) && !getCmpName(cmp).cmpStr) return;
    const cmpStr = getCmpName(cmp).cmpStr ? getCmpName(cmp).cmpStr : kebabCaseComponent(cmp);
    const fileNameStr = getCmpName(cmp).cmpStr ? `${kebabCaseComponent(cmp)}-props.json` : 'props.json';
    const usage = path.resolve(outputPath.replace('$compName', cmpStr));
    const jsonPath = path.resolve(usage, fileNameStr);
    if (!fs.existsSync(usage)) {
      fs.mkdir(usage, { recursive: true }, (err) => {
        if (err) {
          return console.error(err);
        }
        writeFile(jsonPath, JSON.stringify(apiInfos[cmp].props, null, 2));
      });
    } else {
      writeFile(jsonPath, JSON.stringify(apiInfos[cmp].props, null, 2));
    }
  });
}


module.exports = {
  generateProps,
};
