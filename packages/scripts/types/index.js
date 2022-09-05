/**
 * 自动生成 type.d.ts
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const upperFirst = require('lodash/upperFirst');
const camelcase = require('lodash/camelCase');
const { FILE_RIGHTS_DESC, GLOBAL_TYPES, REACT_EVENTS, REACT_TYPES } = require('../config/const');
const { FRAMEWORK_MAP, TYPES_COMBINE_MAP } = require('../config');
const generateGlobals = require('./global');
const formatTNode = require('./t-node');
const { getMiniprogramType, fetchApiDataFromOfficialWebsite } = require('./miniprogram');
const map = require('../map.json');
const prettier = require('prettier');
const prettierConfig = require('../config/prettier');
const {
  isPlugin,
  getTdCmpName,
  getEventName,
  getFolderName,
  getDefaultValueName,
  isComponentFunction,
  getInstanceName,
  getApiComponentMapByFrameWork,
} = require('../common');

const components = map.data.components.filter(item => !item.type).map(item => item.value);

const COMPONENTS_MAP = getComponentsMap(map.data.components);

const indent = '  ';

function getComponentsMap(components) {
  const map = {};
  components.forEach((item) => {
    map[item.value] = item;
  });
  return map;
}

function getComment(api) {
  const desc = api.field_desc_zh;
  let defaultValue = api.field_default_value;
  let dft = '';
  // 字符串类型，默认为空字符串
  const defaultEmptyString = api.field_type_text.join() === 'String' && !defaultValue && !api.field_enum;
  if (defaultEmptyString) {
    defaultValue = '\'\'';
  }
  if (![undefined, 'undefined', ''].includes(defaultValue)) {
    dft = defaultValue;
    dft = `\n   * @default ${dft}`;
  }
  // 标注已废弃属性
  if (api.deprecated) {
    dft += '\n   * @deprecated';
  }
  return [desc, dft];
}

function formatComment([desc, defaultValue], plugin, isUncontrol) {
  if (plugin) return;
  const un = isUncontrol ? '，非受控属性' : '';
  return `
  /**
   * ${desc}${un}${defaultValue}
   */
`;
}

function formatOneType(api, oneType) {
  const type = oneType.toLocaleLowerCase();
  let r = type;
  if (type === 'string' && api.field_enum) {
    r = api.field_enum.split('/')
    .map(val => `'${val.trim()}'`.replace(/''/g, '\''))
    .join(' | ');
  }
  return r;
}

function getPropsApiType(api, framework) {
  let type = '';
  const csType = api.custom_field_type;
  const baseType = api.field_type_text;
  const hasTNodes = baseType.includes('TNode');
  if (hasTNodes) {
    type = formatTNode(framework, baseType, csType);
  } else {
    if (csType) {
      const { baseName } = formatTsTypeDesc(csType);
      type = baseName;
    } else {
      type = baseType.map(item => formatOneType(api, item, framework)).join(' | ');
    }
  }
  return {
    type,
    export: [],
    imports: [],
  };
}

function getEventsApiType(api) {
  let r = {
    type: '()',
    exports: [],
    imports: [],
  };
  if (api.event_input) {
    const { baseName, exports, imports } = formatTsTypeDesc(api.event_input);
    r = {
      type: baseName ? `${baseName}` : '()',
      exports,
      imports,
    };
  }
  if (api.event_output) {
    const { baseName, exports, imports } = formatTsTypeDesc(api.event_output);
    r = {
      type: `${r.type || '()'} => ${baseName || 'void'}`,
      exports: r.exports.concat(exports),
      imports: r.imports.concat(imports),
    };
  } else {
    r.type = `${r.type} => void`;
  }
  return r;
}

function getFileName(framework, cmp) {
  const fileName = FRAMEWORK_MAP[framework].tsBaseFileName;
  return {
    USE_FILE_NAME: getTdCmpName(cmp),
    USE_TYPE_NAME: 'type',
  }[fileName] || 'index';
}

function formatType(api, framework) {
  // MP_PROPS 表示需要透传小程序原生属性，原生属性从小程序官网自动拉取
  if (api.field_name === 'MP_PROPS') return;
  const map = {
    Props: getPropsApiType,
    Functions: getEventsApiType,
  };
  if (framework !== 'Miniprogram') {
    map.Events = getEventsApiType;
  }
  const func = map[api.field_category_text];
  if (typeof func === 'function') {
    return func(api, framework);
  }
  return api.type;
}

// 获取插件参数
function getPluginDesc(api, type) {
  if (!api.field_name || api.field_name === '-') return;
  const t = type || api.field_type_text.join(' | ').toLocaleLowerCase();
  // return [comment, indent, name, required, type];
  return ['', '', api.field_name, api.field_required ? '' : '?', type || t];
}

function formatApi(api, framework, plugin) {
  const name = {
    Props: api.field_name,
    Events: getEventName(api.field_name),
    Functions: api.field_name,
  }[api.field_category_text];
  if (!name) return;
  let exportsApi = [];
  let importsApi = [];
  const rType = formatType(api, framework);
  if (!rType) return;
  const { type, exports, imports } = rType;
  exportsApi = exportsApi.concat(exports);
  importsApi = importsApi.concat(imports);
  // 是否必传无需体现在 TS 类型定义中
  const required = api.field_required ? '' : '?';
  const comment = getComment(api);
  // 计算导入和导出内容
  const csType = api.custom_field_type;
  let r = '';
  if (csType) {
    r = formatTsTypeDesc(csType);
    exportsApi = exportsApi.concat(r.exports);
    importsApi = importsApi.concat(r.imports);
  }
  return {
    exports: exportsApi.filter(k => !!k),
    imports: importsApi.filter(k => !!k),
    desc: plugin
      ? getPluginDesc(api, r.baseName)
      : [comment, indent, name, required, type],
  };
}

function getPluginName(cmp) {
  return isPlugin(cmp)
    ? `${upperFirst(camelcase(cmp.substr(1)))}Method`
    : `${cmp}Props`;
}

function getInterfaceInfo(name, extendApis, TApis = []) {
  const et = extendApis.length ? ` extends ${extendApis}` : '';
  const t = TApis.length ? TApis.join('') : '';
  return `export interface ${name}${t}${et} {`;
}

function formatTsTypeDesc(str) {
  let baseName = '';
  const exports = [];
  const imports = [];
  if (!str) {
    return { baseName, exports, imports };
  }
  // 匹配【】中的全部数据，数据为自定义 TS 类型，也可能是从外部文件引入的类型
  const regExp = /(?<=【).*?(?=】)/g;
  const r = str.match(regExp);
  if (r) {
    r.forEach((item) => {
      if (item.trim().substr(0, 6) === 'import') {
        imports.push(`${item};`);
      } else {
        exports.push(`export ${item};`);
      }
    });
    baseName = str.replace(/【.*?】/g, '');
  } else {
    baseName = str;
  }
  return { baseName, exports, imports };
}

function initApi(apiData) {
  const api = { ...apiData };
  if (api.field_category_text === 'Events') {
    delete api.field_default_value;
  }
  return api;
}


function formatCommonTypeImports(str, types) {
  let arr = [];
  const result = types.filter((item) => {
    const reg = new RegExp(`[\\s|<]${item}`);
    return reg.test(str);
  });
  if (!result.length) return [];
  arr = [...new Set(result)];
  return arr;
}

// 按需引入，存储需要从 common 或公共库等路径下引入的类型定义
function getGlobalsImports(str, framework) {
  const current = FRAMEWORK_MAP[framework];
  const map = {
    // 从全局通用类型文件中引入数据类型，如： import { XXX } from 'common.ts';
    common: {
      path: current.commonRelativePath,
      types: formatCommonTypeImports(str, GLOBAL_TYPES),
    },
  };
  // 从框架中引入数据类型，如： import { MouseEvent } from 'react';
  if (framework === 'React(PC)' || framework === 'React(Mobile)') {
    map.react = {
      path: 'react',
      types: formatCommonTypeImports(str, REACT_TYPES),
    };
  }
  const r = Object.keys(map).filter(key => map[key].types.length)
    .map(key => `import { ${map[key].types.join(', ')} } from '${map[key].path}';`);
  return r;
}

function replaceInputEvent(str, newApi) {
  if (!str) return;
  // React 里面使用 FormEvent，而非 InputEvent
  let newStr = str.replace(/InputEvent/g, 'FormEvent');
  const reg = new RegExp(`(${REACT_EVENTS.join('|')})`, 'g');
  // 处理字段 trigger_elements，可能存在多个事件替换的情况
  const triggerElements = newApi.trigger_elements.split('/');
  newStr = newStr.replace(reg, (val) => {
    const r = triggerElements.filter(el => el && el.indexOf(val) !== -1);
    return (r[0] || `${val}<HTMLDivElement>`);
  });
  return newStr;
}

// 根据框架预处理 API
function handleApiByFramework(api, framework) {
  const newApi = { ...api };
  // 某些组件的 API 定义在 Vue 中没有那么细，需要忽略
  if (framework.indexOf('Vue') !== -1 && newApi.custom_field_type) {
    // Vue 需要忽略的 TS 类型定义
    const VUE_IGNORE_TYPES = ['CSSProperties'];
    const filters = VUE_IGNORE_TYPES.filter(item => newApi.custom_field_type.indexOf(item) !== -1);
    if (filters.length) {
      newApi.custom_field_type = '';
    }
  }
  // replace InputEvent to FormInput in React
  if (framework.indexOf('React') !== -1) {
    newApi.event_input = replaceInputEvent(newApi.event_input, newApi);
    newApi.event_output = replaceInputEvent(newApi.event_output, newApi);
  }
  return newApi;
}

/**
 *
 * @param {Array<string>} imports
 * @Radio => ../../radio
 * @Select => ../../src/select
 * ...
 * @return {Array<string>} imports
 */
function formatAliasImportsPath(imports, framework) {
  const current = FRAMEWORK_MAP[framework];
  return imports.filter(v => !!v).map((item) => {
    if (item.indexOf('@icon') !== -1) {
      return item.replace('@icon', current.iconPath);
    }
    const cmp = item.match(/'@(\w+)'/);
    if (!cmp || !cmp[1]) return item;
    if (components.includes(cmp[1])) {
      return item.replace(/'@(\w+)'/, (a, b) => {
        const name = getFolderName(b);
        let relativePath = current.componentRelativiePath + name;
        if (framework === 'Miniprogram') {
          relativePath = `${relativePath}/index`;
        }
        return `'${relativePath}'`;
      });
    }
    return item;
  });
}

// 处理 @TdTypes / @Button 一类依赖 imports
function formatImportsPath(imports, framework) {
  let newImports = imports.concat();
  if (['React(PC)', 'Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)', 'React(Mobile)', 'Miniprogram'].includes(framework)) {
    newImports = formatAliasImportsPath(imports, framework);
  }
  newImports = newImports.map(item => item && item.replace(/(?<='@TdTypes\/).*(?=')/, (cmp) => {
    const name = upperFirst(camelcase(cmp));
    return `${cmp}/${getFileName(framework, name)}`;
  }).replace(/@TdTypes\//, '../'));
  return newImports;
}

/**
 * 小程序原生属性处理函数：将从网站格式化后的数据添加到 API
 * @param {Object} miniprogram.MP_PROPS.custom_field_type 继承的原生小程序组件名称，如：button / picker-view
 * @param {Object} miniprogram.MP_EXCLUDE_PROPS.custom_field_type 需要排除的小程序原生属性
 */
function getMiniprogramOriginalApi(miniprogram) {
  const { MP_PROPS, MP_EXCLUDE_PROPS } = miniprogram;
  const exclude = MP_EXCLUDE_PROPS && MP_EXCLUDE_PROPS.custom_field_type;
  const apis = fetchApiDataFromOfficialWebsite(MP_PROPS.custom_field_type, exclude);
  const framework = 'Miniprogram';
  const apiArr = [];
  apis.forEach((apiData) => {
    // 通用 API 处理
    const r = formatApi(apiData, framework) || {};
    if (r.desc instanceof Array && r.desc.length) {
      const [comment, indent, name, required, type] = r.desc;
      const rType = getMiniprogramType(apiData.field_type_text, type);
      const apiContext = [formatComment(comment), indent, name, required, ': ', rType]
        .filter(v => !!v).join('');
      apiArr.push(`${apiContext};`);
    }
  });
  return apiArr;
}

function getTypeScriptDesc(componentMap, framework) {
  const result = {};
  Object.keys(componentMap).forEach((cmp) => {
    // 当前组件主体内容
    let body = [];
    const extendApis = [];
    // 当前组件还需要额外 exports 的内容
    let exports = [];
    // 当前组件还需要引入的 API
    let imports = [];
    // 泛型
    const tApis = [];
    // 组件实例方法
    const instanceFunctions = [];
    let returnName;
    const apis = componentMap[cmp];
    const isPluginFunctions = isPlugin(cmp);
    const miniprogram = {};
    apis.forEach((apiData) => {
      const MP_PROPS = ['MP_PROPS', 'MP_EXCLUDE_PROPS'];
      MP_PROPS.forEach((prop) => {
        if (apiData.field_name === prop) {
          miniprogram[prop] = apiData;
        }
      });
      if (MP_PROPS.includes(apiData.field_name)) return;
      const api = initApi(apiData);
      // HTML 原生属性不输出到 TS 文件
      if (api.html_attribute) return;
      // 特殊 API 和 普通 API 分开处理：'Return', 'Extends', '<T>'等属于特殊 API
      if (['Return', 'Extends', '<T>'].includes(api.field_category_text)) {
        const r = formatTsTypeDesc(api.field_name);
        exports = exports.concat(r.exports);
        imports = imports.concat(r.imports);
        if (api.field_category_text === 'Return') {
          returnName = r.baseName;
        } else if (api.field_category_text === 'Extends') {
          extendApis.push(r.baseName);
        } else if (api.field_category_text === '<T>') {
          tApis.push(r.baseName);
        }
      } else {
        const plugin = isPluginFunctions;
        // 先根据框架预处理 API 描述，而后再进行通用 API 处理
        const newApi = handleApiByFramework(api, framework);
        // 通用 API 处理
        const r = formatApi(newApi, framework, plugin) || {};
        if (r.desc instanceof Array && r.desc.length) {
          const [comment, indent, name, required, type] = r.desc;
          // 小程序 TS 类型特殊，需单独处理
          const rType = framework === 'Miniprogram' && !COMPONENTS_MAP[api.component].type
            ? getMiniprogramType(api.field_type_text, type)
            : type;
          const apiContext = [formatComment(comment, plugin), indent, name, required, ': ', rType]
            .filter(v => !!v).join('');
          // 小程序中，纯 TNode 类型，表示没有 props，仅需支持插槽
          if (type) {
            // API 是否为组件实例方法
            const isInstanceFuncs = isComponentFunction(cmp, api.field_category_text);
            if (isInstanceFuncs) {
              instanceFunctions.push(`${apiContext};`);
            } else {
              body = body.concat(`${apiContext}${plugin ? '' : ';'}`);
            }
          }
          // 添加非受控属性 ts 定义
          if (api.syntactic_sugar && api.field_category_text !== 'Events') {
            const ds = [
              formatComment(comment, plugin, 'uncontrol'),
              indent,
              getDefaultValueName(name),
              required,
              ': ',
              rType,
            ].filter(v => !!v).join('');
            body = body.concat(`${ds};`);
          }
          // Vue3 添加 modelValue
          if (['VueNext(PC)', 'Vue(Mobile)'].includes(framework) && api.syntactic_sugar === 'v-model' && api.field_category_text !== 'Events') {
            const ds = [
              formatComment(comment, plugin),
              indent,
              'modelValue',
              required,
              ': ',
              rType,
            ].filter(v => !!v).join('');
            body = body.concat(`${ds};`);
          }
        }
        exports = exports.concat(r.exports);
        imports = imports.concat(r.imports);
      }
    });

    // 添加小程序组件原生属性
    if (miniprogram.MP_PROPS) {
      const mp = getMiniprogramOriginalApi(miniprogram);
      body = body.concat(mp);
    }

    const TdName = getTdCmpName(cmp);

    if (isPluginFunctions) {
      exports = exports.concat(`export type ${getPluginName(cmp)} = (${body.join(', ')}) => ${returnName || 'void'};`);
      body = [];
    } else {
      body.unshift(getInterfaceInfo(TdName, extendApis, tApis));
      body.push('\n}');
    }
    if (instanceFunctions.length) {
      body = body.concat([
        '\n\n/** 组件实例方法 */\n',
        getInterfaceInfo(getInstanceName(cmp), [], tApis),
        instanceFunctions.join(''),
        '\n}',
      ]);
    }
    // 处理 @TdTypes 一类引入
    imports = formatImportsPath(imports, framework);
    result[cmp] = {
      imports,
      body: body.join(''),
      exports,
    };
  });
  return result;
}

function combineTsFile(componentMap, framework) {
  const ts = getTypeScriptDesc(componentMap, framework);
  const rMap = getApiComponentMapByFrameWork(TYPES_COMBINE_MAP, framework);
  Object.keys(rMap).forEach((cmp) => {
    let current = ts[cmp];
    const list  = rMap[cmp];
    // 组件本身和子组件都没有 API，则可以认为当前组件为空，不用输出文档
    const r = list.filter(item => ts[item]);
    const isApiEmpty = !r.length;
    if (isApiEmpty) return;
    if (!current) {
      current = { imports: [], body: '', exports: [] };
    }
    list.forEach((innerCmp) => {
      // type 为 import / body / export。其中 body 数据类型为 string，import 和 export 数据类型为 Array
      Object.keys(current).forEach((type) => {
        current[type] = typeof current[type] === 'string'
          ? [current[type]]
          : current[type];
        if (ts[innerCmp]) {
          current[type] = [...new Set(current[type].concat(ts[innerCmp][type]))];
        }
      });
    });
    ts[cmp] = current;
    list.forEach((item) => {
      if (item === cmp) return;
      delete ts[item];
    });
  });
  // 合并 imports / boyd / exports
  Object.keys(ts).forEach((cmp) => {
    const bodyDesc = typeof ts[cmp].body === 'string' ? ts[cmp].body : ts[cmp].body.filter(v => !!v).join('\n\n');
    const exportDesc = ts[cmp].exports.filter(v => !!v).join('\n\n');
    if (['React(PC)', 'Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)', 'Miniprogram', 'React(Mobile)'].includes(framework)) {
      ts[cmp].imports = ts[cmp].imports.concat(getGlobalsImports(bodyDesc + exportDesc, framework));
    }
    const r = [
      `${ts[cmp].imports.filter(v => !!v).join('\n')}`,
      bodyDesc,
      exportDesc,
    ].filter(v => !!v);
    const str = `${r.join('\n\n')}\n`;
    // ts[cmp] = str;
    try {
      ts[cmp] = prettier.format(str, prettierConfig);
    } catch (e) {
      console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
      console.warn(e);
    }
  });
  return ts;
}

// 根据组件获取 API 类型数据
function getTypesByComponent(baseData, framework, component) {
  const apiTypes = combineTsFile(baseData, framework);
  return [FILE_RIGHTS_DESC, apiTypes[component]].join('\n\n');
}

// 输出 API 内容到具体文件路径
function generateTypes(baseData, framework) {
  const keys = Object.keys(FRAMEWORK_MAP);
  if (!keys.includes(framework)) {
    console.error(`framework isn't in ${keys}`);
    return;
  }
  // 输出全局类型定义文件
  generateGlobals(framework);

  const basePath = FRAMEWORK_MAP[framework].tsBasePath;

  // 输出 TS 类型定义文件
  const apiTypes = combineTsFile(baseData, framework);
  Object.keys(apiTypes).forEach((cmp) => {
    let folder = '';
    const folderName = getFolderName(cmp);
    folder = path.resolve(
      basePath,
      folderName,
    );
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      const name = getFileName(framework, cmp);
      const outputPath = path.resolve(folder, `${name}.ts`);
      const data = [FILE_RIGHTS_DESC, apiTypes[cmp]].join('\n\n');
      fs.writeFile(outputPath, `/* eslint-disable */\n\n${data}`, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(chalk.green(`interface file: ${outputPath} has been created.`));
      });
    });
  });
}

module.exports = {
  generateTypes,
  getTypesByComponent,
};
