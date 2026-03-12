/**
 * 同步本地 JSON 文件到 DB，用于解决 DB 冲突问题（JSON 的冲突非常容易解决，DB 冲突难以解决）
 */
const [component] = process.argv.slice(2);
const axios = require('axios');
const apiJSON = require('./api.json');
const chalk = require('chalk');

const url = '127.0.0.1:16001';
function syncCreate(record) {
  return new Promise((resolve, reject) => {
    console.log(`syncCreate ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)},Field: ${chalk.blue(record.field_name)}`)
    axios.request({
      method: 'post',
      url: `http://${url}/cmp/api`,
      data: record,
    }).then(() => {
      resolve();
    }, reject);
  });
}
function syncUpdate(record) {
  return new Promise((resolve, reject) => {
    console.log(`syncUpdate ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)},Field: ${chalk.blue(record.field_name)}`)
    axios.request({
      method: 'put',
      url: `http://${url}/cmp/api`,
      data: record,
    }).then(() => {
      resolve();
    }, reject);
  });
}
function syncDelete(record) {
  return new Promise((resolve, reject) => {
    console.log(`syncDelete ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)},Field: ${chalk.blue(record.field_name)}`)
    axios.request({
      method: 'delete',
      url: `http://${url}/cmp/api`,
      data: {
        id: record.id
      },
    }).then(() => {
      resolve();
    }, reject);
  });
}

function uploadApiToDB() {
  axios.request({
    method: 'get',
    url: `http://${url}/cmp/export-api-data`,
  }).then((res) => {
    let jsonRecordIds = [];
    const jsonRecords = new Map();
    let dbRecordIds = [];
    let updateIds = [];
    const dbRecords = new Map();

    //api.json
    apiJSON.data.map(record => {
      if (jsonRecordIds.includes(record.id)) {
        throw new Error("Duplicate ID " + record.id);
      }
      jsonRecordIds.push(record.id);
      delete record.platform_framework_text;
      delete record.field_type_text;
      delete record.field_category_text;
      jsonRecords.set(record.id, record);
    })

    //TDesign.db
    res.data.data.map(record => {
      dbRecordIds.push(record.id)
      delete record.platform_framework_text;
      delete record.field_type_text;
      delete record.field_category_text;
      dbRecords.set(record.id, record);
      const jsonRecord = jsonRecords.get(record.id)
      if (jsonRecord && JSON.stringify(record) !== JSON.stringify(jsonRecord)) {
        updateIds.push(record.id);
      }
    })
    const deleteIds = dbRecordIds.filter(t => !jsonRecordIds.includes(t));
    const createIds = jsonRecordIds.filter(t => !dbRecordIds.includes(t));

    if ([].concat(createIds, deleteIds, updateIds).length === 0) {
      console.log(chalk.green(`No difference. api.json === TDesign.db\n`));
      return;
    }

    //sync
    const createPromises = createIds.map(id => syncCreate(jsonRecords.get(id)))
    const updatePromises = updateIds.map(id => syncUpdate(jsonRecords.get(id)));
    const deletePromises = deleteIds.map(id => syncDelete(dbRecords.get(id)))


    Promise.all([...createPromises, ...updatePromises, ...deletePromises]).then(() => {
      console.log(chalk.green(`Upload API to DB successfully!\n`));
    }, (error) => {
      console.log(chalk.red(`Upload API to DB failed!\n`, error));
    });

  }).catch(function (error) {
    console.log(chalk.red(`Upload API to DB failed! Error: ${error.message}\n`));
  });
}
console.log('----- Upload API to DB Start -----\n');
uploadApiToDB();