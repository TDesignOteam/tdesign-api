import path from 'path';
import { BaseObject } from '../../types';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCallback);

const scriptsPath = path.resolve('packages/scripts');

export default async function execScript(params: BaseObject) {
    const script = `node ${scriptsPath}/download.js && node ${scriptsPath}/index.js ${params.commandLine}`;
    const { stdout, stderr } = await exec(script);
    console.info('Execute:', script);
    console.info('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
