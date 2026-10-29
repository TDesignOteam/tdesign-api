/** 生成组件 API 文档、类型和 props。用法见 printHelp。 */
import chalk from 'chalk';
import { pick, has } from 'lodash-es';
import { GLOBAL_COMPONENTS_CONFIG } from '../config/const.js';
import {
  COMPONENT_API_MD_MAP,
  MOBILE_COMPONENT_API_MD_MAP,
  MINIPROGRAM_COMPONENT_API_MD_MAP,
  MOBILE_FRAMES,
  getChatComponentMap,
} from '../config/index.js';
import { groupByComponent, formatArrayToMap, getApiComponentMapByFrameWork, resolveComponentMergeList } from '../core/context.js';
import apiJson from '../core/data.js';
import { scriptArgs } from '../core/utils.js';
import { generateDocs } from '../docs/index.js';
import map from '../map.json' with { type: 'json' };
import { generateTypes } from '../types/index.js';
import { generateReactDefaultProps } from '../types/react-default-props.js';
import { generateVueProps } from '../types/vue-props.js';
import { generateUnitTest } from '../unit/index.js';
import { NEED_USE_DEFAULT_OR_USE_VMODEL } from '../vitest/const/vue2-use-default.js';
import { generateVitestUnitCase } from '../vitest/generate-vitest-unit-case.js';
import { generateTestDescriptionToVitestFile } from '../vitest/tests/core/utils.js';

const FRAMEWORKS = [
  'Vue(PC)',
  'VueNext(PC)',
  'React(PC)',
  'Angular(PC)',
  'Vue(Mobile)',
  'React(Mobile)',
  'Angular(Mobile)',
  'Miniprogram',
  'UniApp',
];

const { data: ALL_API } = apiJson;

function printHelp() {
  console.info(`用法:
  pnpm api:docs -- <component> '<framework>' [flags]

一次只生成一个组件和一个框架。多个组合请分别执行。

  component     组件名，例如 Button。全量文档为 ALL
  framework     ${FRAMEWORKS.join(' | ')}
  flags         可省略。多项用逗号连接

flags:
  finalProject  写入同级组件库。默认写入本仓库 packages/products
  onlyDocs      只生成 API 文档。component 为 ALL 时必须带上，且不要带 useDefault
  useDefault    Vue(PC) 受控组件生成 props 时使用。当前组件：${NEED_USE_DEFAULT_OR_USE_VMODEL.join('、')}
  vitest        同时输出测试用例
  isUseUnitTest 同时输出单元测试

示例:
  pnpm api:docs -- Button 'Vue(PC)'
  pnpm api:docs -- Button 'VueNext(PC)' finalProject
  pnpm api:docs -- Select 'Vue(PC)' useDefault,finalProject
  pnpm api:docs -- ALL 'Vue(PC)' onlyDocs
`);
}

const args = scriptArgs();
if (args.includes('-h') || args.includes('--help')) {
  printHelp();
  process.exit(0);
}

const [component, framework, allParams] = args;
if (!component || !framework) {
  printHelp();
  process.exit(1);
}

const { useDefault, onlyDocs, isUseUnitTest, vitest } = parseParams(allParams);

let selfUseDefault = useDefault;

if (isAll(component)) {
  console.warn(chalk.yellow('\nWarn: 全量生成由于改动过大，目前限制为只能生成文档，如需生成TS文件，请单独生成组件\n'));
}

// 全量组件，改动较大，限制为暂时只能生成文档，不能生成 TS 文件
if (isAll(component) && onlyDocs) {
  generateDocuments();
}

// if (component && !isAll(component)) {
generateComponentApi();
// }

/**
 * 解析参数字符串
 * onlyDocs 输出纯文档，不包含任何 API 定义
 * useDefault 是否使用 hook useDefault/useVModel 处理受控和非受控（部分 Vue2 组件使用的是 mapProps）
 * finalProject 是否在当前项目目录下生成对应生成相关文件，默认输出到各框架项目目录中
 * isUseUnitTest 是否输出单测用例
 *
 * @param {String} str 参数字符串
 */
function parseParams(str) {
  if (!str) return {};
  return {
    onlyDocs: str.includes('onlyDocs'),
    useDefault: str.includes('useDefault'),
    finalProject: str.includes('finalProject'),
    isUseUnitTest: str.includes('isUseUnitTest'),
    vitest: str.includes('vitest'),
  };
}

/**
 * 输出单个组件的全部文件：TS 定义、Props 定义、API 文档（英文 + 中文）
 * 一般用于单个组件开发（由于全量组件一次性生成风险过高，不再支持全量输出所有组件。如果真的到必要的时候再打开）
 */
async function generateComponentApi() {
  const components = map.data.components.map((item) => item.value);
  const r = validateParams(components);
  if (!r || isAll(component)) return;
  console.log(chalk.blue(`\n ----- Framework: ${framework} Starting to Generate Component API ------ \n`));
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getApiComponentMapByFrameWork(
    framework === 'Miniprogram' || framework === 'UniApp'
      ? Object.assign({}, COMPONENT_API_MD_MAP, MOBILE_COMPONENT_API_MD_MAP, MINIPROGRAM_COMPONENT_API_MD_MAP, getChatComponentMap(framework))
      : MOBILE_FRAMES.includes(framework)
        ? Object.assign({}, COMPONENT_API_MD_MAP, MOBILE_COMPONENT_API_MD_MAP, getChatComponentMap(framework))
        : Object.assign({}, COMPONENT_API_MD_MAP, getChatComponentMap(framework)),
    framework,
  );
  const mergeList = resolveComponentMergeList(cmpMap, component);
  const baseData = pick(frameworkData, mergeList);
  const globalConfigData = pick(frameworkData, GLOBAL_COMPONENTS_CONFIG);

  if (!onlyDocs) {
    // 生成 API 类型定义文件
    await generateTypes(baseData, framework);
    if (['VueNext(PC)', 'Vue(Mobile)'].includes(framework)) {
      selfUseDefault = true;
    }

    // 生成 props 文件
    generateVueProps(baseData, framework, selfUseDefault);
    // 生成 React defaultProps 文件
    if (framework.indexOf('React') !== -1) {
      await generateReactDefaultProps(baseData, framework);
    }
    // 生成 props 单元测试文件
    if (isUseUnitTest) {
      generateUnitTest(baseData, framework);
    }
  }
  const currentComponent = isAll(component) ? undefined : component;
  // 生成 API 中文文档
  generateDocs(baseData, framework, {
    globalConfigData,
    component: currentComponent,
  });
  // generate API English documents
  generateDocs(baseData, framework, {
    language: 'en',
    globalConfigData,
    component: currentComponent,
  });

  // 统一输出 vitest 通用测试用例
  if (vitest) {
    await generateVitestUnitCase(baseData, framework, {
      component: currentComponent,
    });
    // 输出测试用例数据到 vitest/tests
    const currentComponentData = groupByComponent(ALL_API);
    const apiData = pick(currentComponentData, resolveComponentMergeList(cmpMap, component));
    generateTestDescriptionToVitestFile(apiData, { component });
  }
}

/**
 * 仅输出全部组件的 API 文档（英文 + 中文）
 * 一般用于统一更新文档描述，集体输出
 */
function generateDocuments() {
  const components = map.data.components.map((item) => item.value);
  const r = validateParams(components);
  if (!r || !isAll(component)) return;
  console.log(
    chalk.blue(`\n ----- Framework: ${framework} Starting to Generate All Components API Documents ------ \n`),
  );
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const baseData = frameworkData;
  const globalConfigData = pick(frameworkData, GLOBAL_COMPONENTS_CONFIG);
  const currentComponent = isAll(component) ? undefined : component;
  // 生成 API 中文文档
  generateDocs(baseData, framework, {
    globalConfigData,
    component: currentComponent,
  });
  // generate API English documents
  generateDocs(baseData, framework, {
    language: 'en',
    globalConfigData,
    component: currentComponent,
  });
}

function validateParams(components) {
  if (!component) {
    console.error(
      chalk.red(
        '\nError: 请输入单个组件名称（前期需要规范每一个组件）\n 如果想生成全量组件的 API 类型定义，请输入参数 ALL',
      ),
    );
    return false;
  }
  if (isAll(component)) {
    return true;
  }
  if (!components.includes(component)) {
    console.log(chalk.green(JSON.stringify(components)));
    console.error(
      chalk.red(`\nError: 组件 ${component} 不存在。如果在上述组件中没有找到想要的组件，需要新增组件，请联系 PMC\n`),
    );
    return false;
  }

  if (!FRAMEWORKS.includes(framework)) {
    console.error(chalk.red(`\n请输入正确的组件库框架名称，可选值有：${FRAMEWORKS.join('、')}\n`));
    printHelp();
    return false;
  }
  return true;
}

// 是否输出全量组件
function isAll(r) {
  return typeof r === 'string' && r.toLocaleLowerCase() === 'all';
}
