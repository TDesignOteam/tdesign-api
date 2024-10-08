const shell = require('shelljs');
const { camelCase } = require('lodash');

// 小程序的 props 类型定义特殊
function getMiniprogramType(type, tsType, required) {
  const MP_PROP_TYPES = {
    string: 'StringConstructor',
    number: 'NumberConstructor',
    boolean: 'BooleanConstructor',
    Array: 'ArrayConstructor',
    Object: 'ObjectConstructor',
    any: 'null',
  };
  const types = [];
  ['string', 'number', 'boolean', 'Object', 'Array', 'any'].forEach((val) => {
    const reg = new RegExp(val, 'i');
    if (reg.test(type)) {
      types.push(MP_PROP_TYPES[val]);
    }
  });
  const valueStr = ['function', 'Function', 'any'].includes(tsType) ? 'null' : tsType;

  const isRequired = required ? `required?: boolean;` : '';

  return `{
    ${`type: ${types.length > 1 ? 'null' : types[0]};`}
    value?: ${valueStr};
    ${isRequired}
  }`;
}

function upperFirst(str) {
  return str[0].toLocaleUpperCase() + str.slice(1);
}

function analysisAPIHtml(html) {
  const result = [];
  let index = 0;
  let isStart = false;
  let isTrStart = false;
  let isChildren = false;
  let oneData = [];
  let stack = 0;
  const KEYWORD_BODY_START = '<tbody>';
  // const KEYWORD_BODY_END = '</tbody>';
  const KEYWORD_TR_START = '<tr';
  const KEYWORD_TR_END = '</tr>';
  const KEYWORD_CHILDREN = '<tr class="children-table"';
  for (let i = 0, len = html.length; i < len; i++) {
    if (html.slice(i, i + KEYWORD_BODY_START.length) === KEYWORD_BODY_START) {
      !isStart && (isStart = true);
    }
    if (html.slice(i, i + KEYWORD_CHILDREN.length) === KEYWORD_CHILDREN) {
      isChildren = true;
    }

    const current = html[i];
    if (isStart && isTrStart) {
      oneData.push(current);
    }

    if (isStart) {
      if (html.slice(i, i + KEYWORD_TR_START.length) === KEYWORD_TR_START) {
        isTrStart = true;
        stack += 1;
      } else if (html.slice(i, i + KEYWORD_TR_END.length) === KEYWORD_TR_END) {
        stack -= 1;
        // console.log(isStart, isTrStart, index, oneData.join(''));
        if (isChildren) {
          result[index - 1].children instanceof Array
            ? (result[index - 1].children = result[index - 1].children.concat([oneData.join('')]))
            : (result[index - 1].children = [oneData.join('')]);
        } else {
          result[index] = { word: oneData.join(''), children: [] };
          index += 1;
        }
        oneData = [];
        isTrStart = false;
        if (stack === 0) {
          isChildren = false;
        }
      }
    }
  }
  return result;
}

const MP_DOCS_BASE_URL = 'https://developers.weixin.qq.com/miniprogram/dev/';

function getChildrenEnumData(data) {
  const arr = [];
  data.forEach((item, index) => {
    if (index === 0) return;
    let words = item.match(/(?<=<td).*?(?=<\/td)/g);
    if (!words) return;
    words = words.map(t => t.replace('>', ''));
    // console.log(words);
    arr.push({
      value: words[0],
      desc: words[1],
    });
  });
  return arr;
}

function replaceMpUrl(str) {
  if (!str) return '';
  return str.replace(/<a href="..\//g, `<a href="${MP_DOCS_BASE_URL}`)
    .replace(/&quot;/g, '"');
}

// 解析小程序 API
function getAPIData(mainApiTable, component, exclude, mpApiurl) {
  const trData = analysisAPIHtml(mainApiTable);
  const arr = [];
  const excludeApi = exclude ? exclude.split(',').map(v => v.trim()) : [];
  trData.forEach((item) => {
    let words = item.word.match(/(?<=<td).*?(?=<\/td)/g);
    if (!words) return;
    words = words.map(t => t.replace('>', ''));
    console.log(words);
    const [, apiName, type, defaultValue, required, desc] = words;
    if (excludeApi.includes(apiName.trim())) return;
    const mainDesc = replaceMpUrl(desc);
    const childrenData = getChildrenEnumData(item.children);
    const enumDesc = childrenData.map(o => `\`${o.value}\` ${o.desc}`);
    const apiObj = {
      component,
      field_name: camelCase(apiName),
      field_category_text: type === 'eventhandle' ? 'Events' : 'Props',
      field_type_text: [upperFirst(type)],
      field_default_value: defaultValue,
      field_required: required === '否' ? 0 : 1,
      field_enum: childrenData.map(t => t.value).join('/'),
      field_desc_zh: enumDesc.length
        ? [
          mainDesc,
          `具体释义：<br />${replaceMpUrl(enumDesc.join('；<br />'))}。<br />[小程序官方文档](${mpApiurl})`,
        ].join('。<br />')
        : mainDesc,
    };
    arr.push(apiObj);
  });
  return arr;
}

const officialApiMap = {};

/**
 * 从官网拉取 API 数据，用于自动生成 props/ts/wxml 等文件或代码
 * @param {string} cmp 组件名称
 * @param {string} exclude 需要过滤的 API，各 API 之间使用逗号隔开
 * @returns {Array<object>} 组件 API 信息
 */
function fetchApiDataFromOfficialWebsite(cmp = 'button', exclude) {
  if (!cmp) {
    console.error('Miniprogram: component name can not be empty.');
    return;
  }
  if (officialApiMap[cmp]) return officialApiMap[cmp];
  const componentName = cmp.toLocaleLowerCase();
  const mpApiurl = `https://developers.weixin.qq.com/miniprogram/dev/component/${componentName}.html`;
  const shellData = shell.exec(`curl ${mpApiurl}`);
  const pageData = shellData.stdout;
  const apiPageTables = pageData.match(/<table class="have-children-table".*?<h2 id="/);
  const apiData = getAPIData(apiPageTables[0], cmp, exclude, mpApiurl);
  // console.log('~~~~~~', apiData, '~~~~~~');
  officialApiMap[cmp] = apiData;
  return apiData;
}

// fetchApiDataFromOfficialWebsite();

module.exports = {
  getMiniprogramType,
  fetchApiDataFromOfficialWebsite,
};
