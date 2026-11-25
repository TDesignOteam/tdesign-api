/** 生成组件 API 文档、类型和 props。用法见 printHelp。 */
import chalk from 'chalk';
import { pick, has } from 'lodash-es';
import { GLOBAL_COMPONENTS_CONFIG } from '../config/const.js';
import { CHAT_FRAMEWORKS, CHAT_COMPONENT_MAP, getDocsComponentMaps } from '../config/index.js';
import {
  groupByComponent,
  formatArrayToMap,
  getParentComponentNames,
  resolveComponentMergeList,
} from '../core/context.js';
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

const FRAMEWORKS = ['Vue(PC)', 'VueNext(PC)', 'React(PC)', 'Vue(Mobile)', 'React(Mobile)', 'Miniprogram', 'UniApp'];

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
  onlyDocs      只生成 API 文档，不出 type.ts / props.ts
  useDefault    Vue(PC) 受控组件生成 props 时使用。当前组件：${NEED_USE_DEFAULT_OR_USE_VMODEL.join('、')}
  vitest        同时输出测试用例
  isUseUnitTest 同时输出单元测试

示例:
  pnpm api:docs -- Button 'Vue(PC)'
  pnpm api:docs -- Button 'VueNext(PC)' finalProject
  pnpm api:docs -- Select 'Vue(PC)' useDefault,finalProject
  pnpm api:docs -- ALL 'Vue(PC)' onlyDocs
  pnpm api:docs -- ALL 'Vue(PC)'
  pnpm api:docs -- ALL 'Vue(PC)' finalProject
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

// 全量生成：一次遍历所有已登记组件，输出文档；未带 onlyDocs 时同时输出 type.ts / props.ts
if (isAll(component)) {
  if (onlyDocs) {
    generateDocuments();
  } else {
    generateAllComponentsApi();
  }
} else {
  generateComponentApi();
}

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
  const cmpMap = getDocsComponentMaps(framework);
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
 * 输出全部组件：类型定义、props、API 文档（英文 + 中文）
 * 与 generateComponentApi 等价，只是把组件循环放在同一进程内，避免上百次 node 启动。
 * 单个组件失败不影响其他组件，结束后统一退出。
 */
async function generateAllComponentsApi() {
  const r = validateParams(['ALL']);
  if (!r) return;
  console.log(chalk.blue(`\n ----- Framework: ${framework} Starting to Generate All Components API ------ \n`));
  const { frameworkData, cmpMap, globalConfigData, targets } = getParentTargets();
  console.log(chalk.gray(`  共 ${targets.length} 个组件待生成`));

  const failures = [];
  for (let i = 0; i < targets.length; i += 1) {
    const name = targets[i];
    const baseData = pick(frameworkData, resolveComponentMergeList(cmpMap, name));
    const currentUseDefault =
      useDefault || (['VueNext(PC)', 'Vue(Mobile)'].includes(framework) ? true : selfUseDefault);
    try {
      if (!onlyDocs) {
        await generateTypes(baseData, framework);
        generateVueProps(baseData, framework, currentUseDefault);
        if (framework.indexOf('React') !== -1) {
          await generateReactDefaultProps(baseData, framework);
        }
        if (isUseUnitTest) {
          generateUnitTest(baseData, framework);
        }
      }
      generateDocs(baseData, framework, { globalConfigData, component: name });
      generateDocs(baseData, framework, { language: 'en', globalConfigData, component: name });
      if (vitest) {
        await generateVitestUnitCase(baseData, framework, { component: name });
        const currentComponentData = groupByComponent(ALL_API);
        const apiData = pick(currentComponentData, resolveComponentMergeList(cmpMap, name));
        generateTestDescriptionToVitestFile(apiData, { component: name });
      }
      console.log(chalk.gray(`  [${i + 1}/${targets.length}] ${name}`));
    } catch (error) {
      failures.push({ name, message: error?.stack || String(error) });
      console.error(chalk.red(`  [${i + 1}/${targets.length}] ${name} failed`));
    }
  }

  if (!failures.length) {
    console.log(chalk.green(`\n All ${targets.length} components generated.\n`));
    return;
  }
  console.error(chalk.red(`\n ${failures.length}/${targets.length} components failed:\n`));
  failures.forEach((item) =>
    console.error(chalk.red(`x ${item.name}\n${chalk.gray(item.message.split('\n').slice(0, 5).join('\n'))}`)),
  );
  process.exitCode = 1;
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
  const { frameworkData, globalConfigData, targets } = getParentTargets();
  console.log(chalk.gray(`  共 ${targets.length} 个组件待生成`));
  // 合并父组件需要子组件数据参与，baseData 仍需完整；只把输出范围限定为父组件，避免子组件单独建目录
  const baseData = pick(frameworkData, components);
  const currentComponent = isAll(component) ? undefined : component;
  // 生成 API 中文文档
  generateDocs(baseData, framework, {
    globalConfigData,
    component: currentComponent,
    components: targets,
  });
  // generate API English documents
  generateDocs(baseData, framework, {
    language: 'en',
    globalConfigData,
    component: currentComponent,
    components: targets,
  });
}

/**
 * 计算全量生成需要的数据与目标组件（默认生成与 onlyDocs 共用）
 * 只取父级组件：父组件会把子组件（如 AnchorItem、BaseTable）合并进自己的目录，子组件不需也不能单独建目录。
 * 该框架没有 API 数据的组件直接跳过，避免生成空目录。
 */
function getParentTargets() {
  const frameworkMap = formatArrayToMap(map.data, 'platform_framework');
  const frameworkData = groupByComponent(ALL_API, frameworkMap[framework === 'VueNext(PC)' ? 'Vue(PC)' : framework]);
  const cmpMap = getDocsComponentMaps(framework);
  const globalConfigData = pick(frameworkData, GLOBAL_COMPONENTS_CONFIG);
  const candidates = getParentComponentNames(
    map.data.components.map((item) => item.value),
    cmpMap,
  );
  // 该框架有、但组件库中并未实现的组件，由数据里的 platform_framework 标记决定，不在这里写死
  const excluded = [];
  // Chat 系列只属于独立的 AI Chat 组件库（@tdesign-vue-next/chat、@tdesign-react/chat）
  // Vue(PC) 没有 chat 独立包，数据里的 Vue(PC) 只是共用标记，不能在 tdesign-vue/src 下建目录
  if (!CHAT_FRAMEWORKS.includes(framework)) {
    excluded.push(...Object.keys(CHAT_COMPONENT_MAP), ...Object.values(CHAT_COMPONENT_MAP).flat());
  }
  const targets = candidates
    .filter((name) => !excluded.includes(name))
    .filter((name) => resolveComponentMergeList(cmpMap, name).some((key) => frameworkData[key]?.length));
  return { frameworkData, cmpMap, globalConfigData, targets };
}

function validateParams(components) {
  if (!component) {
    console.error(
      chalk.red('\nError: 请输入单个组件名称（前期需要规范每一个组件）\n 如果想生成全量组件的 API，请输入参数 ALL'),
    );
    return false;
  }
  if (!FRAMEWORKS.includes(framework)) {
    console.error(chalk.red(`\n请输入正确的组件库框架名称，可选值有：${FRAMEWORKS.join('、')}\n`));
    printHelp();
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
  return true;
}

// 是否输出全量组件
function isAll(r) {
  return typeof r === 'string' && r.toLocaleLowerCase() === 'all';
}
