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
const { groupByComponent, formatArrayToMap, isComponent, componentsMap } = require('../common');
const map = require('../map.json');
const { data: ALL_API } = require('../api.json');
const { FRAMEWORK_MAP } = require('../config');
const kebabCase = require('lodash/kebabCase');
const chalk = require('chalk');
 /**
  * framework 参数可选值：Vue(PC)/VueNext(PC)/Vue(Mobile)
  */
const [framework] = process.argv.slice(2);

start();
 
function start() {
  if (!['Vue(PC)', 'VueNext(PC)', 'Vue(Mobile)'].includes(framework)) {
    return console.log(chalk.blue(`不支持向当前框架生成代码提示文件（框架：${framework}）`));
  }
  console.log(chalk.blue(`\n ----- 代码提示文件相关文件自动生成开始（框架：${framework}） ------ \n`));
  // [ labe, value ] => { label: value }
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  // Vue2 和 Vue3 同为 Vue，API 相同
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  // 生成代码提示文件
  generateHelper(frameworkData, framework);
}

function generateHelper(baseData, framework) {
  const { webTypes, tags, attributes } = getHelperData(baseData, framework);

  write(framework, 'tags.json', tags);
  write(framework, 'attributes.json', attributes);
  write(framework, 'web-types.json', webTypes);
}

function getHelperData(baseData, framework) {
  const current = FRAMEWORK_MAP[framework];
  const tags = {};
  const attributes = {};
  const vueComponents = [];

  for (const key in baseData) {
    if (!isComponent(key)) {
      continue;
    }
    const componentName = `t-${kebabCase(key)}`;
    const props = [];
    const propsList = [];
    const slotsList = [];
    const eventsList = [];
    const componentDocs = `${current.docsPath}${kebabCase(key)}`;
    const description = `${componentsMap[key].value}\n\n${componentsMap[key].label}`;

    for (let i = 0; i < baseData[key].length; i++) {
      const api = baseData[key][i];
      if (/（暂未实现）/.test(api.field_name)) {
        continue;
      }

      const prop = kebabCase(api.field_name);
      const attributeKey = `${componentName}/${prop}`;
      const apiDocs = `${componentDocs}?tab=api#${key.toLowerCase()}`;
      const apiDescription = `${api.field_desc_en ? `${api.field_desc_en}\n\n` : ''}${api.field_desc_zh || ''}`;

      switch (api.field_category_text) {
        case 'Props':
          props.push(prop);
          attributes[attributeKey] = {
            type: api.field_type_text.join('|') || undefined,
            options: api.field_enum ? api.field_enum.split('/') : undefined,
            description: `${apiDescription}\n\n${api.field_default_value ? `default: ${api.field_default_value}\n\n` : ''}[docs](${apiDocs}-props)`,
          }
          propsList.push({
            name: prop,
            description: apiDescription,
            'doc-url': `${apiDocs}-props`,
            type: api.field_type_text,
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
          attributes[attributeKey] = {
            type: 'event',
            description: `${apiDescription}\n\n[docs](${apiDocs}-events)`,
          }
          eventsList.push({
            name: prop,
            description: apiDescription,
            'doc-url': `${apiDocs}-events`,
          })
          break
        default:
          break;
      }
    }

    tags[componentName] = {
      attributes: props,
      description: `${description}\n\n[docs](${componentDocs})`
    }
    vueComponents.push({
      name: componentName,
      source: { symbol: key },
      description,
      'doc-url': componentDocs,
      props: propsList,
      js: eventsList.length ? { events: eventsList } : undefined,
      slots: slotsList,
    })
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
    }
  }
}

function write(framework, name, data) {
  const current = FRAMEWORK_MAP[framework];
  const fileName = path.resolve(current.helperPath, name);
  const buffer = JSON.stringify(data, null, 2);

  writeFileRecursive(fileName, buffer);
}

function writeFileRecursive(name, buffer) {
  const lastPath = name.substring(0, name.lastIndexOf('/'));

  fs.mkdir(lastPath, { recursive: true }, () => {
    fs.writeFileSync(name, buffer);
    console.log(chalk.green(`vue props: ${name} has been created.`));
  });
}
