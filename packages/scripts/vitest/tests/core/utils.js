import prettier from 'prettier'
import prettierConfig from '../../../config/prettier.js'
import axios from 'axios'
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import { kebabCaseComponent } from '../../../utils.js'
import { fileURLToPath } from 'url'
import { parseJSON } from '../../utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 将 api.json 中的 testDescription 字段输出到 vitest/tests 中，方便本地开发
async function generateTestDescriptionToVitestFile(baseData, { component }) {
  const tests = {};
  // 一个组件可能由多个子组件拼凑而成
  Object.entries(baseData).forEach(([childComponent, oneComponentApi]) => {
    if (!oneComponentApi) return;
    tests[childComponent] = {};
    oneComponentApi.forEach((oneApiData) => {
      const uniqueKey = [oneApiData.field_name, oneApiData.id].join('_');
      tests[childComponent][uniqueKey] = { field_name: oneApiData.field_name, id: oneApiData.id };
      tests[childComponent][uniqueKey] = {
        ...tests[childComponent][uniqueKey],
        ...parseJSON(oneApiData.test_description, { PC: {}, Mobile: {} })
      };
    });
  });
  const outputPath = path.resolve(__dirname, `../${kebabCaseComponent(component)}.js`);
  const data = 'export default ' + JSON.stringify(tests) + ';';
  const codeData = await prettier.format(data, {...prettierConfig, printWidth: 100});
  fs.writeFileSync(outputPath, codeData);
  console.log(chalk.green(`unit test cases file: ${outputPath} has been created.`));
}

function uploadOneApi(id, testDescription) {
  const url = '127.0.0.1:16001'
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
  return new Promise((resolve, reject) => {
    readTestsFile(component).then((componentTests) => {
      const promiseList = [];
      Object.entries(componentTests).forEach(([key, childComponentItem]) => {
        Object.entries(childComponentItem).forEach(([apiName, apiData]) => {
          const current = { ...apiData };
          const id = current.id;
          delete current.id;
          delete current.field_name;
          promiseList.push(
            uploadOneApi(id, Object.keys(current).length ? JSON.stringify(current) : null)
          );
        })
      });
      Promise.all(promiseList).then(() => {
        resolve();
      }, () => {
        console.log(chalk.red('one of api test upload failed, try again.'));
        reject();
      });
    });
  })
}

export {
  generateTestDescriptionToVitestFile,
  uploadVitestFileDataToDB,
};
