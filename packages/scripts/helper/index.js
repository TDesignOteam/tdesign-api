/**
 * 1. 自动生成代码提示文件 web-types.json tags.json attributes.json
 *
 * 命名行示例：npm run api:helper 'Vue(PC)'
 * 命名行示例：npm run api:helper 'VueNext(PC)'
 * 命名行示例：npm run api:helper 'Vue(Mobile)'
 *
 */
const fs = require('fs');
const path = require('path');
const { groupByComponent, formatArrayToMap, isComponent, componentsMap, getApiComponentMapByFrameWork } = require('../common');
const { getParentByChildComponent } = require('../vitest/utils');
const map = require('../map.json');
const { data: ALL_API } = require('../api.json');
const { FRAMEWORK_MAP, COMPONENT_API_MD_MAP } = require('../config');
const { kebabCaseComponent } = require('../utils');

const uniq = require('lodash/uniq');
const chalk = require('chalk');
const prettier = require('prettier');
const prettierConfig = require('../config/prettier');
const { formatType } = require('../types');
 /**
  * framework 参数可选值：Vue(PC)/VueNext(PC)/Vue(Mobile)
  */
const [framework] = process.argv.slice(2);

const PREFIX = 't';

// 支持同名组件，如 TTable 和 TPrimaryTable 等效
const aliasComponents = {
  ['PrimaryTable']: 'Table',
  ['BaseTable']: 'Table',
  ['Radio']: 'RadioButton',
  ['IconSVG']: 'Icon',
};

start();

function start() {
  if (!['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)'].includes(framework)) {
    return console.log(chalk.blue(`不支持向当前框架生成代码提示文件（仅支持的框架：'Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)'）`));
  }
  console.log(chalk.blue(`\n ----- 代码提示文件相关文件自动生成开始（框架：${framework}） ------ \n`));
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  // Vue2 和 Vue3 同为 Vue，API 相同
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  if (['Vue(PC)', 'VueNext(PC)'].includes(framework)) {
    // Typography 是空定义组件，特殊处理
   frameworkData['Typography'] = [];
 }
  // 生成代码提示文件
  generateHelper(frameworkData, framework);
}

function generateHelper(baseData, framework) {
  const { webTypes, tags, attributes, volar } = getHelperData(baseData, framework);
  write(framework, 'tags.json', tags);
  write(framework, 'attributes.json', attributes);
  write(framework, 'web-types.json', webTypes);
  writeVolar(framework, volar);
}

function getHelperData(baseData, framework) {
  const current = FRAMEWORK_MAP[framework];
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const tags = {};
  const attributes = {};
  const vueComponents = [];
  const volar = [];
  

  for (const key in baseData) {
    if (!isComponent(key)) {
      continue;
    }

    volar.push(key);
    if (aliasComponents[key]) {
      volar.push(aliasComponents[key]);
    }
    let componentName = `${PREFIX}-${kebabCaseComponent(key)}`;
    if (['Text', 'Title', 'Paragraph'].includes(key)){
      componentName = `${PREFIX}-${kebabCaseComponent('Typography'+key)}`;
    }
    if ('IconSVG' === key) {
      componentName = kebabCaseComponent('Icon');
    }
    if ('IconFont' === key) {
      componentName = kebabCaseComponent(key);
    }

    const aliasComponentName = aliasComponents[key] ? `${PREFIX}-${kebabCaseComponent(aliasComponents[key])}` : '';
    const props = [];
    const propsList = [];
    const slotsList = [];
    const eventsList = [];
    const parentComponent = getParentByChildComponent(cmpMap,key);
    const componentDocsName = parentComponent || key;
    const componentDocs = `${current.docsPath}${kebabCaseComponent(componentDocsName)}`;
    const description = `${componentsMap[key].value}\n\n${componentsMap[key].label}`;

    for (let i = 0; i < baseData[key].length; i++) {
      const api = baseData[key][i];
      if (/（暂未实现）/.test(api.field_name)) {
        continue;
      }

      const prop = kebabCaseComponent(api.field_name);
      const attributeKey = `${componentName}/${prop}`; 
      const apiDocs = `${componentDocs}?tab=api#${key.toLowerCase()}`;
      const apiDescription = `${api.field_desc_en ? `${api.field_desc_en}\n\n` : ''}${api.field_desc_zh || ''}`;
      const rType = formatType(api,framework);
      switch (api.field_category_text) {
        
        case 'Props':
          props.push(prop);
          const attributesData = {
            type: api.field_type_text.join('|') || undefined,
            options: api.field_enum ? api.field_enum.split('/') : undefined,
            description: `${apiDescription}\n\n${api.field_default_value ? `default: ${api.field_default_value}\n\n` : ''}[docs](${apiDocs}-props)`,
          };
          attributes[attributeKey] = attributesData;
          if (aliasComponentName) {
            attributes[`${aliasComponentName}/${prop}`] = attributesData;
          }
          propsList.push({
            name: prop,
            description: apiDescription,
            'doc-url': `${apiDocs}-props`,
            type: rType ? rType.type : api.field_type_text,
            default: api.field_default_value || undefined,
            'attribute-value': api.field_enum
              ? { type: /^string$/i.test(api.field_type_text.join('')) ? 'enum' : 'of-match' }
              : undefined,
            values: api.field_enum ? api.field_enum.split('/').map(name => ({ name })) : undefined,
          });
          // vue slots types
          if (api.field_type_text.indexOf('TNode') !== -1) {
            const slotApiDescription = `${apiDescription}${api.custom_field_type ? `类型和参数：${api.custom_field_type}` : ''}`;
            slotsList.push({
              name: api.field_name,
              description: slotApiDescription,
              'doc-url': `${apiDocs}-props`,
            });
            if (api.field_name !== prop) {
              slotsList.push({
                name: prop,
                description: slotApiDescription,
                'doc-url': `${apiDocs}-props`,
              });
            }
          }
          break;
        case 'Events':
          props.push(prop);
          const attributesData1 = {
            type: 'event',
            description: `${apiDescription}\n\n[docs](${apiDocs}-events)`,
          };
          attributes[attributeKey] = attributesData1;
          if (aliasComponentName) {
            attributes[`${aliasComponentName}/${prop}`] = attributesData1;
          }
          eventsList.push({
            name: prop,
            description: apiDescription,
            'doc-url': `${apiDocs}-events`,
          });
          break
        default:
          break;
      }
    }

    tags[componentName] = {
      attributes: props,
      description: `${description}\n\n[docs](${componentDocs})`
    }

    const componentWebTypesData = {
      name: componentName,
      source: { symbol: key },
      description,
      'doc-url': componentDocs,
      props: propsList,
      js: eventsList.length ? { events: eventsList } : undefined,
      slots: slotsList,
    };
    vueComponents.push(componentWebTypesData);

    const moreNewComponent = aliasComponentName;
    if (moreNewComponent) {
      vueComponents.push({ ...componentWebTypesData, name: moreNewComponent });
      tags[moreNewComponent] = tags[componentName];
    }
  }

  return {
    tags,
    attributes,
    webTypes: {
      $schema: 'http://json.schemastore.org/web-types',
      framework: 'vue',
      name: current.name,
      'js-types-syntax': 'typescript',
      'description-markup': 'markdown',
      contributions: {
        html: {
          'vue-components': vueComponents,
        },
      },
    },
    volar: uniq(volar).sort((a, b) => a.localeCompare(b))
  }
}

function write(framework, name, data) {
  const current = FRAMEWORK_MAP[framework];
  const fileName = path.resolve(current.helperPath, name);
  const buffer = JSON.stringify(data, null, 2);

  writeFileRecursive(fileName, buffer);
}

function writeVolar(framework, data) {
  const current = FRAMEWORK_MAP[framework];
  const readerGlobalComponents= data.map((item)=> {
    if (item === 'IconSVG'){
      return `Icon: typeof import('${current.iconPath}')['Icon'];`
    }
    if (item === 'IconFont'){
      return `${item}: typeof import('${current.iconPath}')['${item}'];`
    }
    if (['Text', 'Title', 'Paragraph'].includes(item)){
      return `TTypography${item}: typeof import('${current.name}')['${item}'];`
    }
    return `T${item}: typeof import('${current.name}')['${item}'];`
    
  }
)
  const declareModule = framework == 'Vue(PC)' ? '@vue/runtime-core': 'vue';
  const volarTemplate=`
  /**
   * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
   * https://github.com/TDesignOteam/tdesign-api
   * eslint-disable
   * */
  declare module '${declareModule}' {
    export interface GlobalComponents {
      ${readerGlobalComponents.join('\n')}
    }
  }
  
  export {};
  
  `
  writeFileRecursive(current.volarPath, prettier.format(volarTemplate, prettierConfig));
}

function writeFileRecursive(name, buffer) {
  const lastPath = name.substring(0, name.lastIndexOf('/'));

  fs.mkdir(lastPath, { recursive: true }, () => {
    fs.writeFileSync(name, buffer);
    console.log(chalk.green(`vue props: ${name} has been created.`));
  });
}
