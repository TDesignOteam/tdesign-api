import path from 'path';

const vitestPath = path.resolve('packages/scripts/vitest/index.js');

interface OneUnitTestParams {
  framework: string;
  component: string;
  apiData: Record<string, unknown>;
  test: Record<string, unknown>;
}
export type { OneUnitTestParams };

/**
 * 单个 API 的单元测试用例生成
 * scripts/vitest 为 ESM 模块，通过动态 import 在 Node 环境运行
 */
export async function generateOneUnitTest(params: OneUnitTestParams) {
  const { getOneUnitTest } = await import(vitestPath);
  const { framework, component, apiData, test } = params;
  const result = getOneUnitTest(framework, component, apiData, test);
  return {
    oneUnitTests: result.oneUnitTests || [],
    hasEvent: !!result.hasEvent,
    importedMounts: result.importedMounts || [],
    importedTestUtils: result.importedTestUtils || [],
  };
}

interface ComponentUnitTestsParams {
  framework: string;
  component: string;
  apiData: Array<Record<string, unknown>>;
  map: Record<string, unknown>;
}
export type { ComponentUnitTestsParams };

/**
 * 整个组件所有 API 的单元测试用例生成
 */
export async function generateComponentUnitTests(params: ComponentUnitTestsParams) {
  const { getComponentUnitTests } = await import(vitestPath);
  const { framework, component, apiData, map } = params;
  const code = getComponentUnitTests(framework, component, apiData, map);
  return code || '';
}
