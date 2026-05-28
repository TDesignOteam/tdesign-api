import { pick } from 'lodash-es';
import { COMPONENT_API_MD_MAP } from '../config/files-combine.ts';
import map from '../map.json' with { type: 'json' };
import { copyUnitTestsToOtherWrapper } from './copy.ts';
import { generateAttributeUnitCase } from './generate-attribute.ts';
import { generateClassNameUnitCase } from './generate-class-name.ts';
import { generateDomUnitCase } from './generate-dom.ts';
import { generateEventUnitCase } from './generate-event.ts';
import {
  getImportsConfig,
  getImportsCode,
  getMoreEventImports,
  getSimulateEvents,
  getVariableImports,
} from './generate-import.ts';
import { generateTNodeElement } from './generate-tnode.ts';
import {
  parseJSON,
  formatArrayToMap,
  groupByComponent,
  getApiComponentMapByFrameWork,
  getParentByChildComponent,
} from './utils.ts';
import type { ApiData, TestDescription, TestDescriptionFull, ConfigFlag, OneUnitTestResult, MoreEventImportsResult, TNodeConfig } from '../shared-types.ts';

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

function getBaseData(framework: string, component: string, apiData: ApiData[], map: Record<string, unknown>) {
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
function getOneUnitTest(framework: string, component: string, oneApiData: ApiData, test: TestDescription): OneUnitTestResult {
  let oneUnitTests = [];
  let hasEvent = false;
  const importedMounts = [];
  const importedTestUtils = [];
  Object.keys(test).forEach((key) => {
    // 空对象无效，返回
    if (!test[key] || (typeof test[key] === 'object' && !Object.keys(test[key]).length)) return;
    if (generateFunctionsMap[key]) {
      const oneApiTestCase = generateFunctionsMap[key](test, oneApiData, framework, component);
      if (oneApiTestCase && oneApiTestCase.length) {
        oneUnitTests = oneUnitTests.concat([oneApiTestCase.join('\n')]);
        if (key === 'event') {
          hasEvent = true;
          const imports = getMoreEventImports(framework, test[key], test.wrapper, test.trigger);
          importedTestUtils.push(...(imports.importedTestUtils || []));
          if (imports.importedMounts && imports.importedMounts.length) {
            importedMounts.push(...imports.importedMounts);
          }
        }
        if (key === 'tnode' && typeof test[key] === 'object') {
          // if (test[key].trigger) {}
          const tnodeData = test[key] as TNodeConfig | TNodeConfig[];
          const tnodeTrigger = Array.isArray(tnodeData) ? tnodeData[0]?.trigger : tnodeData?.trigger;
          const list = getSimulateEvents(tnodeTrigger);
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

function getUnitTestCode(baseData: Record<string, ApiData[]>, framework: string) {
  let tests: string[] = [];
  const configFlag: ConfigFlag = {
    hasEvent: false,
    importedComponents: [],
    importedMounts: new Set<string>(),
    needDefaultRender: false,
    importedTestUtils: [],
  };
  const customImported = [];
  // 一个组件可能由多个子组件拼凑而成
  Object.entries(baseData).forEach(([componentOri, oneComponentApi]) => {
    if (!oneComponentApi) return;

    let component = componentOri;
    const typeInfo = componentMap.find((item) => item.value === componentOri);
    // 如果是 TS 类型，而非一个组件，则直接使用根组件输出用例。只要 type 存在，就不是组件
    if (typeInfo.type) {
      const combineMap = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, framework);
      component = getParentByChildComponent(combineMap, componentOri);
    }

    const global = {
      variables: [],
      beforeAll: [],
      afterEach: [],
      afterAll: [],
    };
    let oneComponentTests = [];
    oneComponentApi.forEach((oneApiData) => {
      if (!oneApiData.test_description) return;
      const jsonError = `${oneApiData.field_name}: ${oneApiData.test_description} is not a valid JSON.`;
      const testDescription = parseJSON(oneApiData.test_description, jsonError) as unknown as TestDescriptionFull;
      const hasPC = testDescription.PC && framework.indexOf('PC') !== -1;
      const hasMobile = testDescription.Mobile && framework.indexOf('Mobile') !== -1;
      if (!hasPC && !hasMobile) return;

      let finalDescription: TestDescription = {} as TestDescription;
      if (hasPC) {
        finalDescription = testDescription.PC;
      }
      if (hasMobile) {
        finalDescription = testDescription.Mobile;
      }

      if (finalDescription.global) {
        Object.keys(global).forEach((item) => {
          if (!finalDescription.global[item]) return;
          global[item].push(...finalDescription.global[item]);
        });
      }

      // 存在 Web 框架的单测用例，再输出
      const { oneUnitTests, hasEvent, importedMounts, importedTestUtils } = getOneUnitTest(
        framework,
        component,
        oneApiData,
        finalDescription,
      );
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
      if (finalDescription.wrapper) {
        configFlag.importedMounts.add(finalDescription.wrapper);
      } else {
        configFlag.needDefaultRender = true;
      }
      if (testDescription.Mobile && testDescription.Mobile.wrapper) {
        configFlag.importedMounts.add(testDescription.Mobile.wrapper);
      }
      customImported.push(...(finalDescription.global?.imports || []));
    });

    if (oneComponentTests.length) {
      addGlobalCode(global, oneComponentTests);
      oneComponentTests.unshift(`describe('${component} Component', () => {`);
      oneComponentTests.push('});\n');
      tests = tests.concat(oneComponentTests);
      configFlag.importedComponents.push(component);
    }
  });

  const importConfig = getImportsConfig(configFlag, tests);
  const importCodes = getImportsCode(importConfig, framework, customImported);
  const cases = [importCodes].concat(tests).join('\n\n');
  return cases;
}

function getComponentUnitTests(framework, component, apiData, map) {
  const baseData = getBaseData(framework, component, apiData, map);
  return getUnitTestCode(baseData, framework);
}

function addGlobalCode(global, oneComponentTests) {
  if (global) {
    if (global.afterAll.length) {
      oneComponentTests.unshift('afterAll(() => {', global.afterAll.join('\n'), '});');
    }
    if (global.afterEach.length) {
      oneComponentTests.unshift('afterEach(() => {', global.afterEach.join('\n'), '});');
    }
    if (global.beforeAll.length) {
      oneComponentTests.unshift('beforeAll(() => {', global.beforeAll.join('\n'), '});');
    }
    if (global.variables.length) {
      oneComponentTests.unshift(...global.variables);
    }
  }
}

export { getUnitTestCode, getOneUnitTest, getComponentUnitTests };
