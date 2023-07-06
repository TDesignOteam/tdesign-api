const axios = require('axios');
const fs = require('fs');
const path = require('path');

function outputToFile(outputPath, res) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(__dirname, outputPath),
      JSON.stringify(res.data, null, 2),
      (err) => {
        if (err) {
          reject();
          return console.error(err);
        }
        console.log(`${outputPath} has been created`);
        resolve();
      },
    );
  });
}

function download() {
  return new Promise((resolve, reject) => {
    const url = '127.0.0.1:16001'
    Promise.all([
      // 请求 map
      axios.request({
        method: 'get',
        url: `http://${url}/cmp/map`,
      }),
      axios.request({
        method: 'get',
        url: `http://${url}/cmp/export-api`,
      }),
    ]).then(
      ([mapRes, apiRes]) => {
        console.log('请求数据成功');
        Promise.all([
          outputToFile('./map.json', mapRes),
          outputToFile('./api.json', apiRes),
        ]).then(
          () => {
            console.log('\n数据写入成功\n');
            resolve();
          },
          () => {
            console.log('数据写入失败');
            reject();
          },
        );
      },
      () => {
        console.log('数据下载失败');
        reject();
      },
    );
  });
}

console.log('----- 开始下载数据 -----\n');
download();

// module.exports = download;
