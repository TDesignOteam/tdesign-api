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

export { getMap, apiDelete, apiUpdate, apiCreate };

export default {
  apiCreate,
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
