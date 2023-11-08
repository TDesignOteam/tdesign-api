import path from 'path';
import { BaseObject } from 'packages/types';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const scriptsPath = path.resolve('packages/scripts');

export default async function execScript(params: BaseObject) {
    const script = `node '${scriptsPath}/download.js' && node '${scriptsPath}/index.js' ${params.commandLine}`;
    const { stdout, stderr } = await exec(script);
    console.log('Execute:', script);
    console.log('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
