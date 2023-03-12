/**
 * 同步本地 JSON 文件到 DB，用于解决 DB 冲突问题（JSON 的冲突非常容易解决，DB 冲突难以解决）
 */
const [component] = process.argv.slice(2);
const axios = require('axios');
const apiJSON = require('./api.json');
const chalk = require('chalk');

if (!component) {
  console.log(chalk.red(`Params Missing: component is required\n`));
  return;
}

const url = '127.0.0.1:16001';
function updateOneApi(oneApi) {
  delete oneApi.platform_framework_text;
  delete oneApi.field_type_text;
  delete oneApi.field_category_text;
  delete oneApi.create_time;
  delete oneApi.update_time;
  return new Promise((resolve, reject) => {
    axios.request({
      method: 'get',
      url: `http://${url}/cmp/api?page=1&page_size=200`,
      params: { id: oneApi.id },
    }).then((res) => {
      console.log(res.data.data?.length);
      if (res.data?.data?.length) {
        console.log('update', oneApi.id, oneApi.field_name);
        // 更新
        axios.request({
          method: 'put',
          url: `http://${url}/cmp/api`,
          data: {
            ...oneApi,
          },
        }).then(() => {
          resolve();
        }, reject);
      } else {
        console.log('addNew', oneApi.id, oneApi.field_name);
        // 创建
        const newApiInfo = { ...oneApi };
        delete newApiInfo.id;
        axios.request({
          method: 'post',
          url: `http://${url}/cmp/api`,
          data: {
            ...newApiInfo,
          },
        }).then(() => {
          resolve();
        }, reject);
      }
    });
  })
}

function uploadApiToDB() {
  const promiseList = apiJSON.data.filter(oneApi => oneApi.component === component)
    .map((oneApi) => updateOneApi(oneApi));
  Promise.all(promiseList).then(() => {
    console.log(chalk.green(`Upload ${component} API to DB successfully!\n`));
  }, () => {
    console.log(chalk.red(`Upload ${component} API to DB failed!\n`));
  });
}

uploadApiToDB();
