import { BaseObject } from '@tdesign/api-model';
import {
  queryRecords,
  exportAPI,
  apiCreate,
  apiUpdate,
  apiDelete,
  getMap,
} from '@tdesign/api-model';
import execScript from '../../services/execute';

export { getMap, apiDelete, apiUpdate };

export async function apiCreateHandler(params: BaseObject) {
  return apiCreate(params);
}

export default {
  apiCreate: apiCreateHandler,
  getMap,
  queryRecords,
  apiDelete,
  apiUpdate,
  async generateAPI(params: { commandLines: string[] }) {
    const { commandLines } = params;
    console.info('commandLines:', commandLines);
    if (commandLines) {
      await Promise.all(commandLines.map((commandLine: string) => execScript({ commandLine })));
    }
    return {
      code: 0,
      msg: 'success',
    };
  },
  exportAPI,
};
