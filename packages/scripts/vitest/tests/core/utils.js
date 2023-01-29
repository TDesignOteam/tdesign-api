const prettier = require('prettier');
const prettierConfig = require('../../../config/prettier');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const kebabCase = require('lodash/kebabCase');
const { parseJSON } = require('../../utils');

// 将 api.json 中的 testDescription 字段输出到 vitest/tests 中，方便本地开发
function generateTestDescriptionToVitestFile(baseData, { component }) {
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
  const outputPath = path.resolve(__dirname, `../${kebabCase(component)}.js`);
  const data = 'module.exports=' + JSON.stringify(tests);
  const codeData = prettier.format(data, {...prettierConfig, printWidth: 100});
  fs.writeFile(outputPath, codeData, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(chalk.green(`unit test cases file: ${outputPath} has been created.`));
  });
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

function readTestsFile(component) {
  return new Promise((resolve) => {
    const filePath = path.resolve(__dirname, `../${kebabCase(component)}.js`);
    fs.readFile(filePath, (error, data) => {
      if (error) {
        throw Error(error);
      }
      try {
        const tests = eval(data.toString());
        resolve(tests);
      } catch(e) {
        console.log(chalk.red(`${filePath} code error.`));
      }
    });
  }, (e) => {
    console.error(e);
  })
}

// 上传本地测试用例 vitest/tests 到 DB 文件
function uploadVitestFileDataToDB(component) {
  return new Promise((resolve, reject) => {
    readTestsFile(component).then((componentTests) => {
      // console.log(componentTests);
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

module.exports = {
  generateTestDescriptionToVitestFile,
  uploadVitestFileDataToDB,
};
