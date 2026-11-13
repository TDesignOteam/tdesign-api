import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import chalk from 'chalk';
import prettier from 'prettier';
import prettierConfig from '../../../config/prettier.js';
import { API_ORIGIN } from '../../../core/context.js';
import { kebabCaseComponent } from '../../../core/utils.js';
import { parseJSON } from '../../utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 将组件 API 数据中的 testDescription 字段输出到 vitest/tests 中，方便本地开发
async function generateTestDescriptionToVitestFile(baseData, { component }) {
  const tests = {};
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
      tests[childComponent][uniqueKey] = {
        ...tests[childComponent][uniqueKey],
        ...parseJSON(oneApiData.test_description, {
          PC: {},
          Mobile: {},
        }),
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
  return axios.request({
    method: 'put',
    url: `${API_ORIGIN}/cmp/api`,
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

// 将本地测试用例 vitest/tests 写回组件 API 数据
function saveVitestFileData(component) {
  return new Promise((resolve, reject) => {
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

export { generateTestDescriptionToVitestFile, saveVitestFileData };
