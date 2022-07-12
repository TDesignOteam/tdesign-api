import path from 'path';
import { BaseObject } from 'packages/types';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const scriptsPath = path.resolve('packages/scripts');

export default async function execScript(params: BaseObject) {
    // TODO: 语种参数（zh/en），是否使用 useVModel 
    const script = `node ${scriptsPath}/download.js && node ${scriptsPath}/index.js ${params.component} '${params.platform}'`;
    const { stdout, stderr } = await exec(script);
    console.log('Execute:', script);
    console.log('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
