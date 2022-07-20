const fs = require('fs');
const kebabCase = require('lodash/kebabCase');
const path = require('path');
const chalk = require('chalk');
const {
  getTdCmpName,
  getEventName,
  getFolderName,
  isTypeApi,
  isPlugin,
  getDefaultValueName,
  getCmpTypeCombineMap,
} = require('../common');
const { FRAMEWORK_MAP, TYPES_COMBINE_MAP } = require('../config');
const { FILE_RIGHTS_DESC } = require('../config/const');
const { fetchApiDataFromOfficialWebsite } = require('./miniprogram');

let currentFramework = '';
let useDefault = '';
let FRAMEWORK_TYPES_COMPONENT_RELATION = {};

function getPropType(cmp, name) {
  return `${getTdCmpName(cmp)}['${name}']`;
}

function isNeedPropType(typeName, api) {
  if (currentFramework === 'Miniprogram') return false;
  const multipleTypeStr = !!(typeName === 'String' && api.field_enum);
  const complicatedApi =    ['Function', 'Object', 'Array'].includes(typeName)
    || api.field_type_text.length > 1;
  return multipleTypeStr || complicatedApi;
}

function getType(cmp, api, name) {
  let type = api.field_type_text;
  type = type
    .map((t) => {
      // 小程序只需要支持插槽，不需要支持 function
      const nodeType = currentFramework === 'Miniprogram' ? '' : 'Function';
      return t === 'TNode' ? nodeType : t;
    })
    .filter(v => !!v);
  const typeName = type.length <= 1 ? type[0] : `[${type.join(', ')}]`;
  return isNeedPropType(typeName, api)
    ? `${typeName} as PropType<${getPropType(cmp, name)}>`
    : typeName;
}

function getDefaultValue(cmp, api, name, isUncontrolApi, useDefault) {
  const type = api.field_type_text.join();
  const value = api.field_default_value;
  let dl = value;
  // 如果 API 显示指明 undefined，则一定返回 default: undefined
  if (dl === 'undefined') return dl;
  if (defaultValueIsUndefined(api)) {
    dl = undefined;
  } else {
    if (currentFramework !== 'Miniprogram') {
      try {
        const tmp = JSON.parse(dl);
        if (['object', 'function'].includes(typeof tmp) && !(tmp instanceof Array)) {
          dl = `() => (${dl})`;
        } else if (tmp instanceof Array) {
          const type = `: ${getPropType(cmp, name)}`;
          dl = `()${type} => ${dl}`;
        } else {
          dl = value;
        }
      } catch (e) {
        dl = value;
      }
    }
    if (type === 'Number') {
      dl = value ? Number(value) : value;
    } else if (type === 'String') {
      // 为字符串添加单引号
      dl = `'${value}'`;
      // 值不为 '' 时，避免连续两个单引号出现
      dl.length !== 2 && (dl = dl.replace(/''/g, '\''));
    }
  }
  if (!isUncontrolApi && currentFramework === 'Miniprogram' && api.syntactic_sugar) {
    return 'null';
  }
  // 受控属性需要 default 为 undefined
  if (
    (['Vue(Mobile)', 'VueNext(PC)', 'Vue(PC)'].indexOf(currentFramework) > -1)
    && !isUncontrolApi
    && api.syntactic_sugar
    && useDefault
  ) {
    return 'undefined';
  }
  return dl;
}

// Number 类型的数据也有可选值
function getEnumValue(api, enumValue) {
  const val = enumValue ? enumValue.trim() : enumValue;
  return api.field_type_text.join('') === 'Number' ? Number(val) : `'${val}'`;
}

// API 有可选值，但是没有设置默认值，则默认值为 undefined
function defaultValueIsUndefined(api) {
  return !!(api.field_enum && !api.field_default_value);
}

function getDefaultWithType(api, dl, valueType) {
  const isMiniprogram = currentFramework === 'Miniprogram';
  // 小程序，默认值为中文的，使用 '' 替换
  if (isMiniprogram && /[^\x00-\xff]/.test(dl)) {
    dl = '\'\'';
  }
  // 小程序的默认值使用 `value` 表示；Vue 的默认值使用 `default` 表示
  const defaultField = isMiniprogram ? 'value:' : 'default:';
  return api.field_enum && !isMiniprogram
    ? `${defaultField} ${dl} as ${valueType}`
    : `${defaultField} ${dl}`;
}

function formatNormalProps(api, cmp, extraParams = {}) {
  const { isUncontrolApi, modelValue } = extraParams;
  let name = api.field_name;
  let oneApiStr = '';
  if (isUncontrolApi) {
    name = getDefaultValueName(api.field_name);
  }
  const isMiniprogram = currentFramework === 'Miniprogram';
  // Boolean 类型，且默认值为 false，则不需要过多的处理（小程序 prop 只能是 Object，不能是 block: Boolean
  if (
    !isMiniprogram
    && api.field_type_text.join() === 'Boolean'
    && (api.field_default_value === 'false' || !api.field_default_value)
  ) {
    if (modelValue) {
      name = 'modelValue';
    }
    const dl = getDefaultValue(cmp, api, name, isUncontrolApi, useDefault);
    const isVueMobile = currentFramework === 'Vue(Mobile)';
    const isVueWeb = ['Vue(PC)', 'VueNext(PC)'].includes(currentFramework);
    if (dl && !isUncontrolApi && api.syntactic_sugar && (isVueMobile || (isVueWeb && useDefault))) {
      const content = ['type: Boolean', 'default: undefined'].map(t => `    ${t},\n`).join('');
      oneApiStr = [`  ${name}: {\n${content}  }`];
    } else {
      oneApiStr = `  ${name}: Boolean`;
    }
  } else {
    const indent = '    ';
    const valueType = getPropType(cmp, name);
    let types = getType(cmp, api, name);
    if (!types) return;
    const content = [];
    // 小程序多个属性类型，使用 type 和 optionalTypes 共同描述属性类型
    if (isMiniprogram && types.split(',').length > 1) {
      types = types.slice(1, types.length - 1).split(',');
      // 小程序没有 Function Props 定义，使用 null 代替
      const optionalTypes = types
        .slice(1)
        .map(v => (v.trim() === 'Function' ? ' null' : v.trim()));
      content.push(`${indent}type: ${types[0].trim()}`);
      optionalTypes.length
        && content.push(`optionalTypes: [${optionalTypes.join()}]`);
    } else {
      const tType = isMiniprogram && 'Function' === types ? 'null' : types;
      content.push(`${indent}type: ${tType}`);
    }
    const dl = getDefaultValue(cmp, api, name, isUncontrolApi, useDefault);
    const defaultTypeContent = getDefaultWithType(api, dl, valueType);
    (dl || dl === 0) && content.push(defaultTypeContent);
    if (api.field_required) {
      content.push('required: true');
    }
    // 小程序没有 validator
    if (api.field_enum && currentFramework !== 'Miniprogram') {
      const enumData = api.field_enum
        .split('/')
        .map((item) => {
          let tmp = getEnumValue(api, item);
          if (typeof tmp === 'string') {
            tmp = tmp.replace(/''/g, '\'');
          }
          return tmp;
        })
        .join(', ');
      const requiredValidate = api.field_required ? '' : 'if (!val) return true;\n';
      const intent = '      ';
      content.push(`validator(val: ${valueType}): boolean {\n${intent}${requiredValidate}${intent}return [${enumData}].includes(val);\n    }`);
    }
    if (modelValue) {
      name = 'modelValue';
    }
    oneApiStr = `  ${name}: {\n${content.join(`,\n${indent}`)},\n  }`;
  }
  return oneApiStr;
}

function formatEventProps(api, cmp) {
  const name = getEventName(api.field_name);
  return `  ${name}: Function as PropType<${getPropType(cmp, name)}>`;
}

// 类型定义可能来自组件基础文件，比如：ForItemProps 类型定义来源于 Form 目录
function getImportPath(body, cmp, framework) {
  let r = '';
  const tdName = getTdCmpName(cmp);
  if (body.indexOf(tdName) !== -1) {
    const parentCmp = FRAMEWORK_TYPES_COMPONENT_RELATION[cmp];
    if (
      framework === 'Vue(PC)'
      || framework === 'VueNext(PC)'
      || framework === 'Vue(Mobile)'
    ) {
      r =        parentCmp && parentCmp !== cmp
        ? `import { ${tdName} } from '../${getFolderName(parentCmp)}/type';\n`
        : `import { ${tdName} } from './type';\n`;
    }
  }
  return r;
}

/**
 * 小程序原生属性处理函数：将从网站格式化后的数据添加到 API
 * @param {Object} miniprogram.MP_PROPS.custom_field_type 继承的原生小程序组件名称，如：button / picker-view
 * @param {Object} miniprogram.MP_EXCLUDE_PROPS.custom_field_type 需要排除的小程序原生属性
 */
function getMiniprogramOriginalApi(miniprogram, cmp) {
  const { MP_PROPS, MP_EXCLUDE_PROPS } = miniprogram;
  const exclude = MP_EXCLUDE_PROPS && MP_EXCLUDE_PROPS.custom_field_type;
  const apis = fetchApiDataFromOfficialWebsite(
    MP_PROPS.custom_field_type,
    exclude,
  );
  const apiArr = [];
  apis.forEach((api) => {
    if (!['Props'].includes(api.field_category_text)) return;
    const propsCode = formatNormalProps(api, cmp);
    propsCode
      && apiArr.push(`  /** ${api.deprecated ? '已废弃。' : ''}${
        api.field_desc_zh
      } */\n${propsCode}`);
  });
  return apiArr;
}

function formatApiToProps(baseData, framework, isUseDefault) {
  const r = {};
  Object.keys(baseData).forEach((cmp) => {
    // 纯TS类型定义，不输出 props 文件
    if (isTypeApi(cmp)) return;
    let propStrs = [];
    const isMiniprogram = currentFramework === 'Miniprogram';
    const miniprogram = {};
    baseData[cmp].forEach((api) => {
      // 小程序原生属性替代属性不放在 props 中
      const MP_PROPS = ['MP_PROPS', 'MP_EXCLUDE_PROPS'];
      MP_PROPS.forEach((prop) => {
        if (api.field_name === prop) {
          miniprogram[prop] = api;
        }
      });
      if (MP_PROPS.includes(api.field_name)) return;
      // html 原生属性，不放在 props 中
      if (api.html_attribute) return;
      const category = api.field_category_text;
      if (!['Props', 'Events'].includes(category)) return;
      if (isMiniprogram && !['Props'].includes(category)) return;
      const propsCode =        category === 'Props'
        ? formatNormalProps(api, cmp)
        : formatEventProps(api, cmp);
      let desc = api.field_desc_zh;
      if (api.html_attribute) {
        desc = `HTML 原生属性。${desc}`;
      }
      const deprecated = api.deprecated ? '已废弃。' : '';
      propsCode && propStrs.push(`  /** ${deprecated}${desc} */\n${propsCode}`);

      // 根据 value，Vue3 添加 props.modelValue
      const isWebVueModelValue = isUseDefault && api.syntactic_sugar === 'v-model' && ['VueNext(PC)'].includes(currentFramework);
      const isMobileVueModelValue = api.syntactic_sugar === 'v-model' && 'Vue(Mobile)' === currentFramework;
      if (isWebVueModelValue || isMobileVueModelValue) {
        const modelValueApi = formatNormalProps(api, cmp, { modelValue: true });
        propStrs.push(modelValueApi);
      }
      // 根据 value 添加非受控属性
      if (api.syntactic_sugar && api.field_category_text !== 'Events') {
        const uncontrolApi = formatNormalProps(api, cmp, { isUncontrolApi: true });
        propStrs.push(`  /** ${deprecated}${desc}，非受控属性 */\n${uncontrolApi}`);
      }
    });

    // 如果存在小程序原生属性，则需要放进 props
    if (miniprogram.MP_PROPS) {
      const mp = getMiniprogramOriginalApi(miniprogram, cmp);
      propStrs = propStrs.concat(mp);
    }

    propStrs.push('};\n');
    let body = '';
    if (isMiniprogram) {
      const name = getTdCmpName(cmp);
      body = [
        `import { ${name} } from './type';`,
        `const props: ${name} = {\n${propStrs.join(',\n')}`,
      ].join('\n');
    } else {
      body = `export default {\n${propStrs.join(',\n')}`;
    }
    // Vue 需要 PropType 进行类型定义
    if (body.indexOf('PropType') !== -1) {
      body = `import { PropType } from 'vue';\n\n${body}`;
    }
    body = getImportPath(body, cmp, framework) + body;
    if (isMiniprogram) {
      body = `${body}\nexport default props;\n`;
    }
    r[cmp] = body;
  });
  return r;
}

// ts 里面有些 TS 类型需要合并输出；props 也需要同目录输出
function getFolderPath(basePath, cmp) {
  const parentCmp = FRAMEWORK_TYPES_COMPONENT_RELATION[cmp];
  const folderName =    cmp === parentCmp || !parentCmp
    ? getFolderName(cmp)
    : getFolderName(parentCmp);
  return path.resolve(basePath, folderName);
}

function getPropsFileName(folder, cmp) {
  const parentCmp = FRAMEWORK_TYPES_COMPONENT_RELATION[cmp];
  const fileName = cmp === parentCmp || !parentCmp ? 'props.ts' : `${kebabCase(cmp)}-props.ts`;
  return path.resolve(folder, fileName);
}

// 根据组件获取 API 类型数据
function getPropsByComponent(baseData, framework, component, isUseDefault) {
  if (
    !['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)', 'Miniprogram'].includes(framework)
  ) return;
  const vueProps = formatApiToProps(baseData, framework, isUseDefault);
  return vueProps[component];
}

function generateVueProps(baseData, framework, isUseDefault) {
  if (
    !['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)', 'Miniprogram'].includes(framework)
  ) return;
  currentFramework = framework;
  useDefault = isUseDefault;
  FRAMEWORK_TYPES_COMPONENT_RELATION = getCmpTypeCombineMap(
    TYPES_COMBINE_MAP,
    framework,
  );
  const vueProps = formatApiToProps(baseData, framework, isUseDefault);
  Object.keys(vueProps).forEach((cmp) => {
    if (!vueProps[cmp] || isPlugin(cmp) || isTypeApi(cmp)) return;
    const basePath = FRAMEWORK_MAP[framework].propsBasePath;
    const folder = getFolderPath(basePath, cmp);
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      const outputPath = getPropsFileName(folder, cmp);
      const data = [FILE_RIGHTS_DESC, vueProps[cmp]].join('\n\n');
      fs.writeFile(outputPath, `/* eslint-disable */\n\n${data}`, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(chalk.green(`vue props: ${outputPath} has been created.`));
      });
    });
  });
}

module.exports = {
  generateVueProps,
  getPropsByComponent,
};
