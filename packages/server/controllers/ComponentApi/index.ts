import { BaseObject, MapItem, MapOptions, QueryPaginationProps } from '../../../types';
import TAPI from '../../services';
import execScript from '../../services/execute';
import { generateComponentUnitTests, generateOneUnitTest } from '../../services/unit-test';
import {
  PLATFORM_MAP,
  FRAMEWORK_MAP,
  FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK,
  COMPONENTS_PC,
  COMPONENTS_MOBILE,
  API_CATEGORY,
} from './const';

function success(data: any) {
  return {
    code: 0,
    msg: 'success',
    data,
  };
}

function removeRepeat(array: Array<MapItem>) {
  const map: BaseObject = {};
  const r: Array<MapItem> = [];
  array.forEach((item: MapItem) => {
    if (!map[item.value]) {
      r.push(item);
      map[item.value] = true;
    }
  });
  return r;
}

function filterParams(params: BaseObject) {
  const r: BaseObject = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value !== null && value !== undefined && value !== '' && !Number.isNaN(value)) {
      r[key] = value;
    }
  });
  return r;
}

async function apiCreate(params: BaseObject) {
  return success(await TAPI.create(params));
}

export async function apiDelete(params: BaseObject) {
  return success(await TAPI.delete(Number(params.id)));
}

export function getMap() {
  const cmp = COMPONENTS_PC.concat(COMPONENTS_MOBILE);
  return {
    field_category: formatMap(API_CATEGORY),
    platform: formatMap(PLATFORM_MAP),
    framework: formatMap(FRAMEWORK_MAP),
    platform_framework: formatMap(PLATFORM_FRAMEWORK),
    field_type: formatMap(FIELD_TYPE_MAP),
    components: removeRepeat(cmp),
  };
}

export async function apiUpdate(params: BaseObject) {
  const { id, ...changes } = params;
  return success(await TAPI.update(changes, Number(id)));
}

function formatMap(obj: { [key: string]: string }) {
  const r: Array<MapItem> = [];
  Object.keys(obj).forEach((key: string) => {
    r.push({
      label: obj[key],
      value: obj[key],
    });
  });
  return r;
}

async function queryRecords(params: BaseObject) {
  const p = filterParams(params);
  const pageSize = Number(p.page_size);
  // 封装分页参数
  const paginationParams: QueryPaginationProps = {
    size: pageSize,
    offset: (Number(p.page) - 1) * pageSize,
  };
  delete p.page;
  delete p.page_size;

  const [res, total]: any = await TAPI.query(p, paginationParams);

  return {
    code: 0,
    msg: 'success',
    data: res,
    total,
  };
}

async function generateAPI(params: { commandLines: string[] }) {
  const { commandLines } = params;
  console.info('commandLines:', commandLines);
  if (commandLines) {
    commandLines.map((commandLine: string) => execScript({ commandLine }));
  }
  return {
    code: 0,
    msg: 'success',
  };
}

async function exportData()
{
  const [res]: any = await TAPI.query();
  
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

export interface GenerateUnitTestParams {
  type: 'one' | 'all';
  framework: string;
  component: string;
  apiData: Record<string, unknown> | Array<Record<string, unknown>>;
  test?: Record<string, unknown>;
  map?: Record<string, unknown>;
}

async function generateUnitTest(params: GenerateUnitTestParams) {
  const { type, framework, component, apiData, test, map } = params;
  if (type === 'one') {
    const data = await generateOneUnitTest({
      framework,
      component,
      apiData: apiData as Record<string, unknown>,
      test: test || {},
    });
    return {
      code: 0,
      msg: 'success',
      data,
    };
  }
  const data = await generateComponentUnitTests({
    framework,
    component,
    apiData: apiData as Array<Record<string, unknown>>,
    map: map || {},
  });
  return {
    code: 0,
    msg: 'success',
    data,
  };
}

export default {
  apiCreate,
  getMap,
  queryRecords,
  apiDelete,
  apiUpdate,
  generateAPI,
  exportData,
  generateUnitTest,
};
