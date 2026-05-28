import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exportAPI, getMap } from '@tdesign/api-model';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function outputToFile(outputPath: string, data: unknown) {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path.resolve(__dirname, outputPath), JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
        return console.error(err);
      }
      console.log(`${outputPath} has been created`);
      resolve();
    });
  });
}

async function download() {
  try {
    console.log('----- 开始下载数据 -----\n');
    const [mapData, apiData] = await Promise.all([
      getMap(),
      exportAPI(),
    ]);
    await Promise.all([
      outputToFile('./map.json', { code: 0, data: mapData }),
      outputToFile('./api.json', apiData),
    ]);
    console.log('\n数据写入成功\n');
  } catch (error) {
    console.error('数据下载失败:', error);
    process.exit(1);
  }
}

download();
