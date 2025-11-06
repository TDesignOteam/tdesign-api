const pick = require('lodash/pick');
const find = require('lodash/find');
const camelCase = require('lodash/camelCase');
const lowerFirst = require('lodash/lowerFirst');
const { kebabCaseComponent } = require('../utils');

const map = require('../map.json');
const { TDESIGN_GLOBALS, TYPES_COMBINE_MAP } = require('../config/const');
const { fetchApiDataFromOfficialWebsite } = require('../types/miniprogram');
const {
  getApiTitles,
  getEventName,
  isPlugin,
  isTypeApi,
  getTdCmpName,
  getVueEventEmitName,
  getDefaultValueName,
  getInstanceName,
  getFolderName,
  getCmpTypeCombineMap,
  getComponentsMap,
  getGlobalConfigName,
} = require('../common');
const languageConfig = require('../config/language/description');

const COMPONENTS_MAP = getComponentsMap(map.data.components);

const IMPORT_COMPONENT_PATH = map.data.components.map(cmp => `@${cmp.value}`);

// LANGUAGE 会发生变化
let LANGUAGE = 'zh';
let currentFramework = '';

const API_DOC_BLOCKS = {
  'Vue(PC)': ['Props', 'Events', 'Functions'],
  'VueNext(PC)': ['Props', 'Events', 'Functions'],
  'React(PC)': ['Props', 'Functions'],
  'Vue(Mobile)': ['Props', 'Events', 'Functions'],
  'React(Mobile)': ['Props', 'Functions'],
  Miniprogram: ['Props', 'Events', 'Functions', 'Slots', 'External Classes', 'CSS Variables'],
  UniApp: ['Props', 'Events', 'Functions', 'Slots', 'External Classes', 'CSS Variables'],
};

// 通用属性
const COMMON_PROPS = ['externalClasses', 'style', 'customStyle'];

function categoryOrder(res) {
  const CATEGORY_ORDER = ['Props', 'Events', 'Functions', 'Slots', 'External Classes'];
  return Object.fromEntries(
    CATEGORY_ORDER.filter((key) => key in res).map((key) => [
      key,
      res[key],
    ])
  );;
}
// category: props / events / functions / extends / return
function groupByFieldCategory(framework, componentApi) {
  const result = {};
  const isMini = framework === 'Miniprogram';
  const isUniApp = framework === 'UniApp';
  componentApi.forEach((apiOriginal) => {
    const api = { ...apiOriginal };
    const isSlot = (isMini || isUniApp) ? api.field_type_text.includes('TNode') : false;
    const isExtend = api.field_category_text === 'Extends';
    const isFunction = (isPlugin(api.component)) && api.field_category_text === 'Functions';
    if (isExtend) {
      const { baseName } = moveTsTypeToDesc(api.field_name);
      api.field_name = baseName.replace('Td', '');
      // 为避免特殊字符 <T> 和 markdown 冲突，添加 `` 符号
      if (api.field_name[0] !== '`') {
        api.field_name = `\`${api.field_name}\``;
      }
      const curLanguage = languageConfig[LANGUAGE];
      if (/PlainObject/.test(api.field_name)) {
        api.field_desc_zh = curLanguage.PlainObjectText.replace(/\${component}/g, api.component);
        api.field_desc_en = curLanguage.PlainObjectText.replace(/\${component}/g, api.component);
      } else {
        api.field_desc_zh = curLanguage.extendsText.replace(/\${fieldName}/g, api.field_name.replace('Td', ''));
        api.field_desc_en = curLanguage.extendsText.replace(/\${fieldName}/g, api.field_name.replace('Td', ''));
      }
    }
    const category = (isExtend || isFunction) ? 'Props' : api.field_category_text;
    (result[category] ??= []).push(api);
    // 支持属性同名插槽输出到小程序端组件 API 文档
    if (isSlot) {
      const newAPi = { ...api };
      const desc = '自定义' + ' `' + kebabCaseComponent(newAPi.field_name) +'` ' + '显示内容';
      const onlyTNode = newAPi.field_type_text.length === 1 && newAPi.field_type_text[0] === 'TNode';
      newAPi.field_desc_zh = onlyTNode ? newAPi.field_desc_zh : desc
      newAPi.field_category = 512;
      newAPi.field_category_text = 'Slots';
      (result['Slots'] ??= []).push(newAPi);
    };
  })
  return categoryOrder(result);
};

function sortSlotsArrExceptFirst(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  // 去重：以 | 之前的内容为 key，后者覆盖前者
  const uniqueMap = new Map();
  for (const item of arr) {
    const [key] = item.split('|').map(part => part.trim());
    uniqueMap.set(key, item);
  }
  const uniqueArr = Array.from(uniqueMap.values());

  const firstItem = uniqueArr[0];
  const restItems = uniqueArr.slice(1).sort();
  return [firstItem, ...restItems];
}

function shouldShowLink(arr, isMiniOrUni, isSlots) {
  const isNonEmpty = arr.length > 0;
  const isNotSingleTNode = arr.length !== 1 || arr[0] !== 'TNode';

  if (!isMiniOrUni) {
    return isNonEmpty;
  }
  return isNonEmpty && isNotSingleTNode && !isSlots;
}

function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch(e) {
    return {};
  }
}

function formatDesc(
  api,
  { isUncontrol, current: config, framework, category },
) {
  const desc = [];
  const isMiniprogram = framework === 'Miniprogram';
  const isUniApp = framework === 'UniApp';
  const curLanguage = languageConfig[LANGUAGE];
  // 是否已废弃
  if (api.deprecated) {
    desc.push(curLanguage.deprecated);
  }
  // 版本号
  if (api.version) {
    const version = parseJSON(api.version);
    version[framework] && desc.push(`\`${version[framework]}\``);
  }
  // html原生属性
  if (api.html_attribute) {
    desc.push(curLanguage.htmlAttributeText);
  }
  // 是否必需
  if (api.field_required === 'Y') {
    desc.push(curLanguage.requiredText);
  }
  // 根据不同的语言输出不同的 API 文档，如 field_desc_zh
  if (api.field_desc_zh) {
    desc.push(api[curLanguage.descriptionField]);
  }
  // 语法糖
  if ((framework.indexOf('Vue') !== -1 ||  framework === 'UniApp') && api.syntactic_sugar && !isUncontrol) {
    if (api.syntactic_sugar === 'v-model') {
      desc.push(curLanguage.vmodelSugarText[framework].replace('name', api.field_name));
    } else if (api.syntactic_sugar === 'sync') {
      desc.push(curLanguage.syntaxSugarText[framework].replace('name', api.field_name));
    }
  }
  // 非受控属性
  if (isUncontrol) {
    desc.push(curLanguage.uncontrolledText);
  }
  // 可选值
  if (api.field_enum) {
    desc.push(`${curLanguage.optionsText}${api.field_enum}`);
  }
  if (api.custom_field_type) {
    let customFieldType = api.custom_field_type;
    const { interfaceDesc } = moveTsTypeToDesc(customFieldType);
    const isComplicatedType = !!interfaceDesc.length;
    const filters = TDESIGN_GLOBALS.filter(global => customFieldType.indexOf(global) !== -1);
    let importDocPath = '';
    if (isComplicatedType) {
      // 保留 【xxx】中的内容
      // eslint-disable-next-line prefer-destructuring
      // customFieldType = customFieldType.split('【')[0];
      customFieldType = customFieldType.split('【')
        .map(item => item.replace('】', ''));
      // 处理：import { PopupProps } from '@Popup' 等引用，更为相关组件文档链接
      let importIndex = -1;
      customFieldType.forEach((item, index) => {
        // if (item.indexOf('@Popup') !== -1) {
        //   console.log(`${item} 更为相关组件文档跳转路径`);
        // }
        const importComponent = item.match(/'@\w+'/g);
        if (!importComponent) return;
        const name = importComponent[0].slice(1, -1);
        if (IMPORT_COMPONENT_PATH.includes(name)) {
          const component = name.slice(1);
          importDocPath = `，[${component} API Documents](./${kebabCaseComponent(component)}?tab=api)`;
          importIndex = index;
        }
      });
      // importIndex 引入放在最后
      importIndex >= 0 && customFieldType.splice(importIndex, 1);
      customFieldType = customFieldType.join('` `');
    }
    if (((isMiniprogram || isUniApp) && customFieldType.indexOf('TNode') === -1) || !(isMiniprogram || isUniApp)) {
      // tsTypeText 中文"TS 类型"
      const language = languageConfig[LANGUAGE];
      const tsLabel = api.field_name === 'externalClasses' ? '' : `${language.tsTypeText}：`;
      desc.push(`${tsLabel}\`${customFieldType}\`${importDocPath}`);
    }
    // 有使用了通用类型，就显示定义链接
    if (shouldShowLink(filters, isMiniprogram || isUniApp, category === 'Slots')) {
      const text = languageConfig[LANGUAGE].commonDefineText;
      desc.push(`[${text}](${config.commonTypePath})`);
    }
    if (isComplicatedType) {
      const text = languageConfig[LANGUAGE].detailDefineText;
      desc.push(`[${text}](${config.componentPath}${getTsTypeFileName(api.component, config)})`);
    }
  }
  return desc;
}

function getTsTypeFileName(cmp, config) {
  const rMap = getCmpTypeCombineMap(TYPES_COMBINE_MAP, currentFramework);
  const parentName = rMap[cmp] || cmp;
  const fileName = {
    USE_FILE_NAME: getTdCmpName(parentName),
    USE_TYPE_NAME: 'type',
  }[config.tsBaseFileName] || 'index';
  return `${[getFolderName(parentName), fileName].join('/')}.ts`;
}

function formatToVueApi(api, params) {
  const { isUncontrol, framework, current: config } = params;
  const r = { ...api };
  const isMiniprogram = ['Miniprogram'].includes(params.framework);
  const isUniApp = ['UniApp'].includes(params.framework);
  let desc = [];
  let interfaceDescription = [];
  // 是否存在复杂的类型定义
  let hasComplicatedType = false;
  if (r.field_category_text === 'Events') {
    r.field_name = getVueEventEmitName(api.field_name);
  }
  // 格式化 event_input
  if (api.event_input) {
    const { baseName, interfaceDesc } = moveTsTypeToDesc(api.event_input);
    r.event_input = baseName ? `\`${baseName}\`` : '';
    interfaceDescription = interfaceDescription.concat(interfaceDesc);
    interfaceDesc.length && (hasComplicatedType = true);
    // 记录 event 输入类型的基本字符串，后面用于检测是否包含通用全局类型
    if (!r._eventTypeBases) r._eventTypeBases = [];
    r._eventTypeBases.push(baseName || api.event_input);
  }
  // 格式化 event_output
  if (api.event_output) {
    const { baseName, interfaceDesc } = moveTsTypeToDesc(api.event_output);
    r.event_output = baseName ? `\`${baseName}\`` : '';
    interfaceDescription = interfaceDescription.concat(interfaceDesc);
    interfaceDesc.length && (hasComplicatedType = true);
    // 记录 event 输出类型的基本字符串
    if (!r._eventTypeBases) r._eventTypeBases = [];
    r._eventTypeBases.push(baseName || api.event_output);
  }
  // 如果有复杂类型定义就添加超链接指向具体的 TS 类型定义链接地址
  if (hasComplicatedType) {
    const v = `(${config.componentPath}${getTsTypeFileName(api.component, config)})`;
    // TS 类型定义
    const text = languageConfig[LANGUAGE];
    desc = desc.concat(`[${text.detailDefineText}]${v}`);
  }
  // 如果事件的输入/输出中包含通用类型，则也显示「查看通用类型定义」链接
  if (r._eventTypeBases && r._eventTypeBases.length) {
    const eventBasesStr = r._eventTypeBases.join(' ');
    const filters = TDESIGN_GLOBALS.filter(global => eventBasesStr.indexOf(global) !== -1);
    if (filters.length) {
      const text = languageConfig[LANGUAGE].commonDefineText;
      desc.push(`[${text}](${config.commonTypePath})`);
    }
  }
  r.field_required = r.field_required ? 'Y' : 'N';
  r.field_default_value = r.field_default_value || '-';
  // 非受控属性名称
  if (isUncontrol) {
    r.field_name = getDefaultValueName(api.field_name);
    if (isMiniprogram) {
      r.field_default_value = 'undefined';
    }
  }
  let type = r.field_type_text;
  const i = type.indexOf('TNode');
  if (i >= 0) {
    if (!r.custom_field_type) {
      r.custom_field_type = type
        .map(item => (item === 'TNode' ? item : lowerFirst(item)))
        .join(' | ');
    }
    let tmp = type.concat();
    if (['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)'].includes(params.framework))  {
      tmp.splice(i, 1, 'Slot', 'Function');
    } else if (isMiniprogram || isUniApp) {
      tmp.splice(i, 1); // 小程序端插槽部分独立输出
    } else if (params.framework.indexOf('React') !== -1) {
      tmp = type.join() === 'TNode' ? ['TElement'] : ['TNode'];
    }
    type = tmp;
  }
  r.field_type_text = type.join(' / ');
  const moreDesc = formatDesc(r, params);
  desc = moreDesc.concat(desc);
  const tmp = interfaceDescription.length
    ? `<br/>${interfaceDescription.join('<br/><br/>')}<br/>`
    : '';
  desc = desc.concat(tmp);
  r.field_desc_zh = desc.filter(v => !!v).join('。');
  // 小程序的属性一般显示为中划线
  if (['Miniprogram', 'UniApp'].includes(params.framework)) {
    r.field_name = kebabCaseComponent(r.field_name);
  }
  return r;
}

function formatComponentName(cmp, category, framework) {
  if (isPlugin(cmp)) {
    const pluginName = cmp.replace(/\$(\w+)/, (a, b) => `${b}Plugin`);
    if (framework.indexOf('React') !== -1) {
      // 处理函数名驼峰变小写问题
      const [comName, method = ''] = cmp.split('.');
      const lowerCaseComName = comName.substr(1).toLocaleLowerCase();
      const methodStr = method ? `.${method}` : method;
      return `${lowerCaseComName + methodStr} 或 ${pluginName}`;
    }
    if (framework.indexOf('Vue') !== -1) return pluginName;
  }
  if (isTypeApi(cmp)) {
    return getTdCmpName(cmp);
  }
  if (category === 'Functions') {
    return `${getInstanceName(cmp)} 组件实例方法`;
  }
  return [cmp, category].join(' ');
}

function moveTsTypeToDesc(str) {
  // 匹配【】中的全部数据，数据为自定义 TS 类型，也可能是从外部文件引入的类型
  const regExp = /【.*?】/g;
  const baseName = str.replace(regExp, '');
  let interfaceDesc = str.match(regExp) || [];
  interfaceDesc = interfaceDesc.map(str => str.replace(/【|】/g, '`'));
  return { baseName, interfaceDesc };
}

function formatEventToProps(api) {
  const name = getEventName(api.field_name);
  let { baseName } = moveTsTypeToDesc(api.event_input);
  baseName = baseName.replace(/`/g, '');
  // tsTypeText 中文"TS 类型"
  const language = languageConfig[LANGUAGE];
  const desc = [`${language.tsTypeText}：\`${baseName || '()'} => void\`<br/>`, api.field_desc_zh].filter(v => !!v).join('');
  return [name, 'Function', undefined, desc, 'N'].join(' | ');
}

function getOneApi(newApi, current, docTitleType, framework) {
  if (!current || (['Miniprogram', 'UniApp'].includes(framework) && docTitleType === 'Props' && newApi.field_type_text === '')) return;
  const f = pick(newApi, current.titleMap[LANGUAGE][docTitleType].fields);
  // eslint-disable-next-line no-useless-escape
  const oneApi = Object.values(f).map(item => item || '\\-')
    .join(' | ');
  return oneApi;
}

/**
 * 小程序原生属性处理函数：将从网站格式化后的数据添加到 API
 * @param {Object} miniprogram.MP_PROPS.custom_field_type 继承的原生小程序组件名称，如：button / picker-view
 * @param {Object} miniprogram.MP_EXCLUDE_PROPS.custom_field_type 需要排除的小程序原生属性
 */
// function getMiniprogramOriginalApi(miniprogram, current, docTitleType) {
//   const { MP_PROPS, MP_EXCLUDE_PROPS } = miniprogram;
//   const exclude = MP_EXCLUDE_PROPS && MP_EXCLUDE_PROPS.custom_field_type;
//   const apis = fetchApiDataFromOfficialWebsite(MP_PROPS.custom_field_type, exclude);
//   const framework = 'Miniprogram';
//   const apiArr = [];
//   apis.forEach((apiData) => {
//     const newApi = formatToVueApi(apiData, { current, framework });
//     const oneApi = getOneApi(newApi, current, docTitleType, framework);
//     apiArr.push(oneApi);
//   });
//   return apiArr;
// }

function addCommonProperties({
  framework,
  category,
  cmp,
  md,
  languageInfo,
}) {
  // 部分组件无包裹元素不需要添加 className、style
  const filterComponents = ['Popup', 'Tooltip','ConfigProvider'];
  // add className and style to React components。COMPONENTS_MAP[cmp].type 值不存在则表示当前对象为组件
  if (['React(PC)', 'React(Mobile)'].includes(framework) && !COMPONENTS_MAP[cmp].type && !filterComponents.includes(cmp)) {
    md[category].apis = md[category].apis.concat([
      `className | String | - | ${languageInfo.classNameText} | N`,
      `style | Object | - | ${languageInfo.styleText}，${languageInfo.tsTypeText}：\`React.CSSProperties\` | N`,
    ]);
  } else if (framework === 'Miniprogram' && !COMPONENTS_MAP[cmp].type && category === 'Props') {
    md[category].apis.push(...[
      `style | Object | - | ${languageInfo.styleText} | N`,
      `custom-style | Object | - | ${languageInfo.styleText}，${languageInfo.customStyleText} | N`,
    ]);
  } else if (framework === 'UniApp' && !COMPONENTS_MAP[cmp].type && category === 'Props') {
    md[category].apis.push(...[
      `custom-style | Object | - | ${languageInfo.customStyleTextInUniApp} | N`,
    ]);
  }
}

/**
 * 输出 API 文档
 * @param {Object} componentMap 组件 API
 * @param {Object} current 当前框架所有配置
 * @param {String} framework 当前框架
 */
function getVueApiDocs(componentMap, current, framework, globalConfigData, language) {
  currentFramework = framework;
  const result = {};
  const isMiniprogram = framework === 'Miniprogram';
  const UniApp = framework === 'UniApp';
  if (language) {
    LANGUAGE = language;
  }
  // tsTypeText 中文"TS 类型"
  const languageInfo = languageConfig[LANGUAGE];
  Object.keys(componentMap).forEach((cmp) => {
    const md = {};
    let componentConfig = {};
    if (globalConfigData) {
      componentConfig = globalConfigData[getGlobalConfigName(cmp)];
    }
    // API 分类：Props / Events / Functions
    const fieldCategoryMap = groupByFieldCategory(framework, componentMap[cmp]);
    Object.keys(fieldCategoryMap).forEach((category) => {
      const apiName = formatComponentName(cmp, category, framework);
      const blankLine = /(Events|InstanceFunctions|Props|Slots|External Classes)/.test(apiName) ? '\n' : '';
      md[category] = {
        title: `${blankLine}### ${apiName}\n`,
        apis: [],
      };
      const extraInfoForPlugin = [];
      // `MessagePlugin.success` to `this.$message.success`
      if (['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)'].includes(framework) && apiName.indexOf('Plugin') !== -1) {
        const names = apiName.split('.');
        extraInfoForPlugin.push(`同时也支持 \`this.$${[camelCase(names[0]), names[1]].filter(v => v).join('.')}\`。`.replace('Plugin', ''));
      }
      // if (['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Vue(Mobile)', 'React(Mobile)'].includes(framework) && apiName.indexOf('Plugin') !== -1) {
      //   extraInfoForPlugin.push('这是一个插件函数，参数形式为顺序参数（形如：(a, b, c)），而非对象参数（形如：({ a, b, c })）。顺序参数如下，');
      //   // md[category].apis.push(`${str}。参数形式为顺序参数（形如：(a, b, c)），而非对象参数（形如：({ a, b, c })）。顺序参数如下，`);
      // }
      extraInfoForPlugin.length && md[category].apis.push(`${extraInfoForPlugin.join('')}\n`);
      let docTitleType = category;
      const isCmpPlugin = isPlugin(cmp);
      if (isCmpPlugin) {
        docTitleType = 'Plugins';
      }
      if (docTitleType === '<T>') return;
      const titleFields = current.titleMap[LANGUAGE][docTitleType].titles;
      const mdTitles = getApiTitles(titleFields);
      md[category].apis.push(mdTitles);

      // 添加通用属性：className/style/customStyle...
      addCommonProperties({ framework, category, cmp, md, languageInfo });

      // 具体 API 内容
      const apis = fieldCategoryMap[category];
      const miniprogram = {};
      apis.forEach((api) => {
        // 小程序原生属性
        const MP_PROPS = ['MP_PROPS', 'MP_EXCLUDE_PROPS'];
        MP_PROPS.forEach((prop) => {
          if (api.field_name === prop) {
            miniprogram[prop] = api;
          }
        });
        if (MP_PROPS.includes(api.field_name)) return;

        // 存在对应的组件全局配置，则使用对应 xxxConfig 中对应 API 的默认值，代替原有默认值
        if (componentConfig) {
          const configAPI = find(componentConfig, item => item.field_name === api.field_name);
          if (configAPI && configAPI.field_default_value) {
            api.field_default_value = configAPI.field_default_value;
          }
        }

        // start
        const newApi = formatToVueApi(api, { current, framework, category });
        const oneApi = getOneApi(newApi, current, docTitleType, framework);
        const isMiniprogram = framework === 'Miniprogram';
        const shouldPushApi = !isMiniprogram || (isMiniprogram && !COMMON_PROPS.includes(api.field_name));
        if (oneApi && shouldPushApi) {
          md[category].apis.push(oneApi);
        }
        // 添加非受控属性 API 文档
        if (api.support_default_value && api.field_category_text !== 'Events') {
          const newSugarApi = formatToVueApi(api, { current, framework, category, isUncontrol: 'uncontrol' });
          const oneSugarApi = getOneApi(newSugarApi, current, docTitleType, framework);
          md[category].apis.push(oneSugarApi);
        }
        // API 规范：事件同时也需要作为 props
        if (category === 'Events' && !isMiniprogram && !UniApp) {
          const eventApi = formatEventToProps(newApi);
          md.Props && md.Props.apis.push(eventApi);
        }
        // 插件返回值也需要放在文档中
        if (category === 'Return') {
          md.Props && md.Props.apis.push(`\n插件返回值：\`${api.field_name}\``);
        }
      });
    });

    // 整理数据到一个数组
    let docs = [];
    Object.keys(md).forEach((category) => {
    const item = md[category];
      if (API_DOC_BLOCKS[framework].includes(category)) {
        docs = docs.concat(
          item.title,
          category === 'Slots' ? sortSlotsArrExceptFirst(item.apis) : item.apis
        );
      }
    });
    result[cmp] = docs.join('\n').replace(/`[^`]+`/g, (str) => str.replace(/\|/g, '\\|'));
    // 小程序，事件参数只需要描述 DetailType，因此去除 e: MouseEvent
    if (framework === 'Miniprogram') {
      result[cmp] = result[cmp].replace(/ e: (MouseEvent|Event|ImageEvent)[ ,]/g, '')
        .replace(/`\(context: {}\)`/g, '-')
        .replace(/, context: {}/g, '')
        .replace(/`\(context: {/g, '`(detail: {');
    }
  });
  return result;
}

module.exports = getVueApiDocs;

