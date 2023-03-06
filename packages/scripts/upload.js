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
  return axios.request({
    method: 'put',
    url: `http://${url}/cmp/api`,
    data: {
      ...oneApi,
    },
  });
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
