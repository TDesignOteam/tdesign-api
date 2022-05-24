const yaml = require('js-yaml');
const path = require('path');
const { FRAMEWORK_MAP } = require('../config');
const kebabCase = require('lodash/kebabCase');
const includes = require('lodash/includes');
const {
  getTestImportSegment: getVueTestImportSegment,
  getTNodeSegment: getVueTNodeSegment,
  getDisabledSegment: getVueDisabledSegment,
  getDefaultSegment: getVueDefaultSegment,
} = require('./segment/vue');
const {
  getTestImportSegment: getVue2TestImportSegment,
  getTNodeSegment: getVue2TNodeSegment,
  getDisabledSegment: getVue2DisabledSegment,
  getDefaultSegment: getVue2DefaultSegment,
} = require('./segment/vue2');
const {
  getTestImportSegment: getReactTestImportSegment,
  getTNodeSegment: getReactTNodeSegment,
  getDisabledSegment: getReactDisabledSegment,
  getDefaultSegment: getReactDefaultSegment,
} = require('./segment/react');

/**
 * 自动生成的单测文件的路径位置
 * @param {*} framework - 框架名称 
 * @param {*} componentName - 组件名称
 * @param {*} testName - 单测文件名称
 * @returns 
 */
function getUnitTestFilePath(
  framework,
  componentName,
  testName = 'props.test'
) {
  // React follow component directory
  if (['React(PC)'].includes(framework)) {
    return path.resolve(
      FRAMEWORK_MAP[framework].apiBasePath,
      `../src/${kebabCase(componentName)}/__tests__/${testName}.tsx`,
    );
  }
  return path.resolve(
    FRAMEWORK_MAP[framework].apiBasePath,
    `../test/unit/${kebabCase(componentName)}/${testName}.js`,
  );
};

/**
 * 框架所支持的生成单测案例方法
 * @param {*} framework - 框架名称
 * @returns 
 */
function getGenSegmentFuncMap(framework) {
  // Vue 支持的生成单测能力（PC与Mobile一致）
  const vueGenSegmentFuncMap = {
    getTestImportSegment: getVueTestImportSegment,
    getTNodeSegment: getVueTNodeSegment,
    getDisabledSegment: getVueDisabledSegment,
    getDefaultSegment: getVueDefaultSegment,
  };

  // Vue2 支持的生成单测能力
  const vue2GenSegmentFuncMap = {
    getTestImportSegment: getVue2TestImportSegment,
    getTNodeSegment: getVue2TNodeSegment,
    getDisabledSegment: getVue2DisabledSegment,
    getDefaultSegment: getVue2DefaultSegment,
  };

  // React 支持的生成单测能力
  const reactGenSegmentFuncMap = {
    getTestImportSegment: getReactTestImportSegment,
    getTNodeSegment: getReactTNodeSegment,
    getDisabledSegment: getReactDisabledSegment,
    getDefaultSegment: getReactDefaultSegment,
  };

  // 当前能够生成单元测试的框架配置
  const frameworkGenSegmentFuncMap = {
    'Vue(Mobile)': vueGenSegmentFuncMap,
    'Vue(PC)': vue2GenSegmentFuncMap,
    'VueNext(PC)': vueGenSegmentFuncMap,
    'React(PC)': reactGenSegmentFuncMap,
  };

  return frameworkGenSegmentFuncMap[framework];
};

/**
 * 生成组件单测案例
 * @param {*} framework - 框架名称
 * @param {*} componentName - 组件名称
 * @param {*} componentInfo - 组件API信息
 * @returns 
 */
function generateComponentUnitTest(
  framework,
  componentName,
  componentInfo,
) {
  const {
    getTestImportSegment,
    getTNodeSegment,
    getDisabledSegment,
    getDefaultSegment,
  } = getGenSegmentFuncMap(framework);
  const propsTest = [];
  const skipProps = [];
  const rawPropsMap = new Map();
  const dependPropsMap = new Map();
  let preDependProp = {};
  // 预处理
  componentInfo.forEach((p) => {
    if (p.field_category === 1) { // props
      if (p.test_description) {
        const propsDoc = yaml.load(p.test_description);
        // 预设，所有的case都带上
        if (propsDoc.skip) {
          skipProps.push(p.field_name);
        }
        if (propsDoc.depend) {
          dependPropsMap.set(p.field_name, settings.depend);
        }
        if (propsDoc.preDepend) {
          preDependProp = Object.assign(preDependProp, propsDoc.preDepend);
        }
        if (propsDoc.preSkip) {
          skipProps.push(...componentInfo.map(x => x.field_name));
        }
        const settings = propsDoc[framework];
        if (settings) {
          if (settings.skip) {
            skipProps.push(p.field_name);
          }
          if (settings.raw) {
            rawPropsMap.set(p.field_name, settings.raw);
            return;
          }
          if (settings.depend) {
            dependPropsMap.set(p.field_name, settings.depend);
          }
        }
      }
    }
  });

  componentInfo.forEach((p) => {
    if (p.field_category === 1) { // props
      let porpsObj = {};
      if (includes(skipProps, p.field_name)) {
        return;
      }
      if (rawPropsMap.get(p.field_name)) {
        propsTest.push(rawPropsMap.get(p.field_name));
        return;
      }

      if (preDependProp) {
        porpsObj = Object.assign(porpsObj, preDependProp);
      }

      if (dependPropsMap.get(p.field_name)) {
        porpsObj = Object.assign(porpsObj, dependPropsMap.get(p.field_name));
      }


      let values = [];
      if (p.field_enum.length > 0) {
        // 处理枚举值
        values = values.concat(p.field_enum.split('/'));
      } else {
        values.push(p.field_default_value);
      }
      // 指定生成案例
      if (
        p.field_name === 'disabled'
        && getDisabledSegment
      ) {
        const disabledSegment = getDisabledSegment(componentName, p);
        if (disabledSegment) {
          propsTest.push(disabledSegment);
        }
      }
      if (
        p.field_type_text.includes('TNode')
        && getTNodeSegment
      ) {
        const tnodeSegment = getTNodeSegment(componentName, p);
        if (tnodeSegment) {
          propsTest.push(getTNodeSegment(componentName, p));
        }
      }
      // 默认生成案例
      if (getDefaultSegment) {
        values.forEach((val) => {
          porpsObj[p.field_name] = getPropValue(val, p.field_type_text);
          const defaultSegment = getDefaultSegment(componentName, p, porpsObj);
          if (defaultSegment) {
            propsTest.push(defaultSegment)
          }
        });
        return;
      }
    }
  });
  const propsUnitTest = `
describe('${componentName}', () => {
  describe(':props', () => {
    ${propsTest.join('')}
  });
});`;
  return propsTest.length > 0 ? getTestImportSegment(componentName) + propsUnitTest : '';
};

function getPropValue(value, valueTypes) {
  const boolStr = ['false', 'true'];
  const valueType = typeof value;
  if (boolStr.includes(value)) {
    return Boolean(value);
  }
  if (valueType === 'string') {
    return `${value}`;
  }
  if (!valueTypes.includes(valueType)) {
    console.warn(`warning: ${value} is ${valueType}, not in ${JSON.stringify(valueTypes)}`);
  }
  return value;
};

module.exports = {
  getUnitTestFilePath,
  getGenSegmentFuncMap,
  generateComponentUnitTest,
};
