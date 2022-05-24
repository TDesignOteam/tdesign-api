import path from 'path';
import { BaseObject } from 'src/types';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const scriptsPath = path.resolve('src/scripts/index.js');

export default async function execScript(params: BaseObject) {
    const { stdout, stderr } = await exec(`node ${scriptsPath} ${params.component} '${params.platform}'`);
    console.log('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
