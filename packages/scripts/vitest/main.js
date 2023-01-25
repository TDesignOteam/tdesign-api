const pick = require('lodash/pick');
const { parseJSON, formatArrayToMap, groupByComponent, getApiComponentMapByFrameWork, getParentByChildComponent } = require('./utils');
const { getImportsConfig, getImportsCode, getMoreEventImports, getSimulateEvents, getVariableImports } = require('./generate-import');
const { generateClassNameUnitCase } = require('./generate-class-name');
const { generateTNodeElement } = require('./generate-tnode');
const { generateAttributeUnitCase } = require('./generate-attribute');
const { generateDomUnitCase } = require('./generate-dom');
const { generateEventUnitCase } = require('./generate-event');
const { copyUnitTestsToOtherWrapper } = require('./copy');
const { COMPONENT_API_MD_MAP } = require('../config/files-combine');
const map = require('../map.json');

const componentMap = map.data.components;

const generateFunctionsMap = {
  // 元素类名测试
  className: generateClassNameUnitCase,
  // 元素属性测试
  attribute: generateAttributeUnitCase,
  // 检测 DOM 元素是否存在
  dom: generateDomUnitCase,
  // TNode 测试
  tnode: generateTNodeElement,
  // 事件
  event: generateEventUnitCase,
};

function getBaseData(framework, component, apiData, map) {
  const frameworkMap = formatArrayToMap(map, 'platform_framework');
  const frameworkData = groupByComponent(apiData, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
  const baseData = pick(frameworkData, cmpMap[component] || [component]);
  return baseData;
}


/**
 * 获取一个 it 单位测试用例
 * @param {Object} testDescription 测试用例描述 JSON
 * @param {Object} oneApiData 一个 API 的全部数据
 * @param {String} framework 框架名称
 * @param {String} component 组件名称
 * @returns 
 */
function getOneUnitTest(framework, component, oneApiData, test) {
  let oneUnitTests = [];
  let hasEvent = false;
  const importedMounts = [];
  const importedTestUtils = [];
  Object.keys(test).forEach((key) => {
    // 空对象无效，返回
    if (!test[key] || typeof test[key] === 'object' && !Object.keys(test[key]).length) return;
    if (generateFunctionsMap[key]) {
      const oneApiTestCase = generateFunctionsMap[key](test, oneApiData, framework, component)
      if (oneApiTestCase && oneApiTestCase.length) {
        oneUnitTests = oneUnitTests.concat([oneApiTestCase.join('\n')]);
        if (key === 'event') {
          hasEvent = true;
          const imports = getMoreEventImports(framework, test[key], test.wrapper, test.trigger);
          importedTestUtils.push(...imports.importedTestUtils);
          if (imports.importedMounts && imports.importedMounts.length) {
            importedMounts.push(...imports.importedMounts);
          }
        }
        if (key === 'tnode' && typeof test[key] === 'object') {
          // if (test[key].trigger) {}
          const list = getSimulateEvents(test[key].trigger);
          if (list && list.length) {
            importedTestUtils.push(...list);
          }
        }
        // 同样的测试用例复用到其他实例
        if (test.copyTestToWrapper) {
          const { copyCode, wrappers } = copyUnitTestsToOtherWrapper(oneApiTestCase, test, framework);
          if (copyCode) {
            oneUnitTests = oneUnitTests.concat(copyCode);
            wrappers.forEach((wrapper) => {
              importedMounts.push(wrapper);
            });
          }
        }
      }
    }
  });

  importedTestUtils.push(...getVariableImports(test));
  return { oneUnitTests, hasEvent, importedMounts, importedTestUtils };
}

function getUnitTestCode(baseData, framework) {
  let tests = [];
  const configFlag = {
    hasEvent: false,
    importedComponents: [],
    importedMounts: new Set(),
    needDefaultRender: false,
    importedTestUtils: [],
  };
  // 一个组件可能由多个子组件拼凑而成
  Object.entries(baseData).forEach(([componentOri, oneComponentApi]) => {
    if (!oneComponentApi) return;

    let component = componentOri;
    const typeInfo = componentMap.find(item => item.value === componentOri);
    // 如果是 TS 类型，而非一个组件，则直接使用根组件输出用例。只要 type 存在，就不是组件
    if (typeInfo.type) {
      const combineMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
      component = getParentByChildComponent(combineMap, componentOri);
    }

    let oneComponentTests = [];
    oneComponentApi.forEach((oneApiData) => {
      if (!oneApiData.test_description) return;
      const jsonError = `${oneApiData.field_name}: ${oneApiData.test_description} is not a valid JSON.`;
      const testDescription = parseJSON(oneApiData.test_description, jsonError);
      if (!testDescription.PC || framework.indexOf('PC') === -1) return;

      // 存在 Web 框架的单测用例，再输出
      // console.log(testDescription.PC);
      const { oneUnitTests, hasEvent, importedMounts, importedTestUtils } = getOneUnitTest(framework, component, oneApiData, testDescription.PC);
      if (oneUnitTests && oneUnitTests.length) {
        oneComponentTests = oneComponentTests.concat(oneUnitTests);
        configFlag.hasEvent = hasEvent || configFlag.hasEvent;
        importedMounts.forEach((oneMount) => {
          configFlag.importedMounts.add(oneMount);
        });
      }
      if (importedTestUtils && importedTestUtils.length) {
        configFlag.importedTestUtils = configFlag.importedTestUtils.concat(importedTestUtils);
      }

      if (testDescription.PC.wrapper) {
        configFlag.importedMounts.add(testDescription.PC.wrapper);
      } else {
        configFlag.needDefaultRender = true;
      }
      if (testDescription.Mobile && testDescription.Mobile.wrapper) {
        configFlag.importedMounts.add(testDescription.Mobile.wrapper);
      }
    });

    if (oneComponentTests.length) {
      oneComponentTests.unshift(`describe('${component} Component', () => {`);
      oneComponentTests.push('});\n');
      tests = tests.concat(oneComponentTests);
      configFlag.importedComponents.push(component);
    }
  });

  const importConfig = getImportsConfig(configFlag, tests);
  const importCodes = getImportsCode(importConfig, framework);
  const cases = [importCodes].concat(tests).join('\n\n');
  return cases;
}

function getComponentUnitTests(framework, component, apiData, map) {
  const baseData = getBaseData(framework, component, apiData, map);
  return getUnitTestCode(baseData, framework)
}

module.exports = {
  getUnitTestCode,
  getOneUnitTest,
  getComponentUnitTests,
};
