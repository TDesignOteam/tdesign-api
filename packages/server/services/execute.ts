import { execFile as execFileCallback } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import { BaseObject } from '@tdesign/api-model';

const execFile = promisify(execFileCallback);

const scriptsPath = path.resolve('packages/scripts');

export default async function execScript(params: BaseObject) {
    const commandLine = String(params.commandLine ?? '');
    await execFile('pnpm', ['exec', 'tsx', `${scriptsPath}/download.ts`]);
    const { stdout, stderr } = await execFile('pnpm', ['exec', 'tsx', `${scriptsPath}/index.ts`, commandLine]);
    console.info('Execute: pnpm exec tsx index.ts', commandLine);
    console.info('stdout:', stdout);
    if (stderr) {
        console.error('stderr:', stderr);
    }
}
