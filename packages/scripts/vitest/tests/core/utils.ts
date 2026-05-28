import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import chalk from 'chalk';
import prettier from 'prettier';
import prettierConfig from '../../../config/prettier.ts';
import { kebabCaseComponent } from '../../../utils.ts';
import { parseJSON } from '../../utils.ts';
import type { ApiData } from '../../../shared-types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 将 api.json 中的 testDescription 字段输出到 vitest/tests 中，方便本地开发
async function generateTestDescriptionToVitestFile(baseData: Record<string, ApiData[]>, { component }: { component: string }) {
  const tests: Record<string, Record<string, unknown>> = {};
  // 一个组件可能由多个子组件拼凑而成
  Object.entries(baseData).forEach(([childComponent, oneComponentApi]) => {
    if (!oneComponentApi) return;
    tests[childComponent] = {};
    oneComponentApi.forEach((oneApiData) => {
      const uniqueKey = [oneApiData.field_name, oneApiData.id].join('_');
      tests[childComponent][uniqueKey] = {
        field_name: oneApiData.field_name,
        id: oneApiData.id,
      };
      const parsedDesc = parseJSON(oneApiData.test_description, '');
      tests[childComponent][uniqueKey] = {
        ...(tests[childComponent][uniqueKey] as Record<string, unknown>),
        ...(typeof parsedDesc === 'object' && parsedDesc !== null ? parsedDesc : {}),
      };
    });
  });
  const outputPath = path.resolve(__dirname, `../${kebabCaseComponent(component)}.js`);
  const data = 'export default ' + JSON.stringify(tests) + ';';
  const codeData = await prettier.format(data, {
    ...prettierConfig,
    printWidth: 100,
  });
  fs.writeFileSync(outputPath, codeData);
  console.log(chalk.green(`unit test cases file: ${outputPath} has been created.`));
}

function uploadOneApi(id, testDescription) {
  const url = '127.0.0.1:16001';
  return axios.request({
    method: 'put',
    url: `http://${url}/cmp/api`,
    data: {
      id,
      test_description: testDescription,
    },
  });
}

async function readTestsFile(component) {
  const filePath = path.resolve(__dirname, `../${kebabCaseComponent(component)}.js`);
  try {
    const module = await import(`file://${filePath}`);
    return module.default;
  } catch (e) {
    console.log(chalk.red(`${filePath} import error.`));
    throw e;
  }
}

// 上传本地测试用例 vitest/tests 到 DB 文件
function uploadVitestFileDataToDB(component) {
  return new Promise<void>((resolve, reject) => {
    readTestsFile(component).then((componentTests) => {
      const promiseList = [];
      Object.entries(componentTests).forEach(([key, childComponentItem]) => {
        Object.entries(childComponentItem).forEach(([apiName, apiData]) => {
          const current = { ...apiData };
          const id = current.id;
          delete current.id;
          delete current.field_name;
          promiseList.push(uploadOneApi(id, Object.keys(current).length ? JSON.stringify(current) : null));
        });
      });
      Promise.all(promiseList).then(
        () => {
          resolve();
        },
        () => {
          console.log(chalk.red('one of api test upload failed, try again.'));
          reject();
        },
      );
    });
  });
}

export { generateTestDescriptionToVitestFile, uploadVitestFileDataToDB };
