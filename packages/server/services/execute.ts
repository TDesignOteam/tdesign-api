import { exec as execCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import { BaseObject } from '@tdesign/api-model';

const exec = promisify(execCallback);

const scriptsPath = path.resolve('packages/scripts');

export default async function execScript(params: BaseObject) {
    const script = `pnpm exec tsx ${scriptsPath}/download.ts && pnpm exec tsx ${scriptsPath}/index.ts ${params.commandLine}`;
    const { stdout, stderr } = await exec(script);
    console.info('Execute:', script);
    console.info('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
