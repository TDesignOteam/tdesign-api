/**
 * 同步本地 JSON 文件到 DB，用于解决 DB 冲突问题（JSON 的冲突非常容易解决，DB 冲突难以解决）
 */
const [component] = process.argv.slice(2);
const axios = require('axios');
const apiJSON = require('./api.json');
const chalk = require('chalk');


// if (!component) {
//   console.log(chalk.red(`Params Missing: component is required\n`));
//   return;
// }

const url = '127.0.0.1:16001';
// function updateOneApi(oneApi) {
//   delete oneApi.platform_framework_text;
//   delete oneApi.field_type_text;
//   delete oneApi.field_category_text;
//   delete oneApi.create_time;
//   delete oneApi.update_time;
//   return new Promise((resolve, reject) => {
//     axios.request({
//       method: 'get',
//       url: `http://${url}/cmp/api?page=1&page_size=200`,
//       params: { id: oneApi.id },
//     }).then((res) => {
//       console.log(res.data.data?.length);
//       if (res.data?.data?.length) {
//         console.log('update', oneApi.id, oneApi.field_name);
//         // 更新
//         axios.request({
//           method: 'put',
//           url: `http://${url}/cmp/api`,
//           data: {
//             ...oneApi,
//           },
//         }).then(() => {
//           resolve();
//         }, reject);
//       } else {
//         console.log('addNew', oneApi.id, oneApi.field_name);
//         // 创建
//         const newApiInfo = { ...oneApi };
//         delete newApiInfo.id;
//         axios.request({
//           method: 'post',
//           url: `http://${url}/cmp/api`,
//           data: {
//             ...newApiInfo,
//           },
//         }).then(() => {
//           resolve();
//         }, reject);
//       }
//     });
//   })
// }

function uploadApiToDB() {
    axios.request({
      method: 'get',
      url: `http://${url}/cmp/export-api`,
    }).then((res) => {
      let jsonRecordIds=[];
      const jsonDataMap= new Map();
      let dbRecordIds=[];
      let updateIds=[];
      const updateDataMap= new Map();

      //api.json
      apiJSON.data.map(item=>{
        if (jsonRecordIds.includes(item.id)){
          throw new Error("Duplicate ID "+item.id);
        }
        jsonRecordIds.push(item.id);
        jsonDataMap.set(item.id,item);
      })

      //TDesign.db
      res.data.data.map(record=>{
        dbRecordIds.push(record.id)
        const jsonRecord=jsonDataMap.get(record.id)
        if (jsonRecord&&JSON.stringify(record)!==JSON.stringify(jsonRecord)){
          delete jsonRecord.platform_framework_text;
          delete jsonRecord.field_type_text;
          delete jsonRecord.field_category_text;
          updateDataMap.set(record.id,jsonRecord);
          updateIds.push(record.id);
        }
      })
      
      
      console.log('updateIds',updateIds);
      console.log('updateDataMap',updateDataMap);
      const deleteIds=dbRecordIds.filter(t=> !jsonRecordIds.includes(t));
      const insertIds= jsonRecordIds.filter(t=> !dbRecordIds.includes(t));
      console.log('deleteIds',deleteIds);
      console.log('insertIds',insertIds);


      if([].concat(insertIds,deleteIds,updateIds).length===0){
        console.log(chalk.green(`Upload API to DB no difference!\n`));
        return;
      }
      const insertPromises=insertIds.map(id=>{
        return new Promise((resolve, reject) => {
          const jsonRecord=jsonDataMap.get(id);
          delete jsonRecord.platform_framework_text;
          delete jsonRecord.field_type_text;
          delete jsonRecord.field_category_text;
          console.log('insert', jsonRecord.id,jsonRecord.component, jsonRecord.field_name);
  
          axios.request({
            method: 'post',
            url: `http://${url}/cmp/api`,
            data: jsonRecord,
          }).then(() => {
            resolve();
          }, reject);
        });
      })
      const deletePromises=deleteIds.map(id=>{
        return new Promise((resolve, reject) => {
          // const oneApi=jsonDataMap.get(id);
          // console.log('delete', oneApi.id, oneApi.field_name);
          console.log('delete', id);
          axios.request({
            method: 'delete',
            url: `http://${url}/cmp/api`,
            data:  {
              id: id
            },
          }).then(() => {
            resolve();
          }, reject);
        });
      })
      const updatePromises=updateIds.map(id=>{
        return new Promise((resolve, reject) => {
          const oneApi=updateDataMap.get(id);
          console.log('update', oneApi.id, oneApi.field_name);
          axios.request({
            method: 'put',
            url: `http://${url}/cmp/api`,
            data: oneApi,
          }).then(() => {
            resolve();
          }, reject);
        });
      });

      Promise.all([...insertPromises,...deletePromises,...updatePromises]).then(() => {
        console.log(chalk.green(`Upload API to DB successfully!\n`));
      }, () => {
        console.log(chalk.red(`Upload API to DB failed!\n`));
      });
      
    }).catch(function (error) {
      console.log(chalk.red(`Upload API to DB failed! Error: ${error.message}\n`));
    });
  // axios.request({
  //   method: 'post',
  //   url: `http://${url}/cmp/import-api`,
  //   data:apiJSON.data,
  // }).then((res) => {
  //   console.log(res);
  // });
  
  // const promiseList = apiJSON.data.filter(oneApi => oneApi.component === component)
  //   .map((oneApi) => updateOneApi(oneApi));
  // Promise.all(promiseList).then(() => {
  //   console.log(chalk.green(`Upload ${component} API to DB successfully!\n`));
  // }, () => {
  //   console.log(chalk.red(`Upload ${component} API to DB failed!\n`));
  // });
}

uploadApiToDB();
