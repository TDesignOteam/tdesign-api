import { BaseObject, MapItem, MapOptions, QueryPaginationProps } from '../../../types';
import moment from 'moment';
import {
  PLATFORM_MAP,
  FRAMEWORK_MAP,
  FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK,
  COMPONENTS_PC,
  COMPONENTS_MOBILE,
  API_CATEGORY,
} from './const';
import TAPI from '../../services';
import execScript from '../../services/execute';

function handleSuccess(resolve: Function) {
  return (data: any) => {
    resolve({
      code: 0,
      msg: 'success',
      data,
    });
  };
}

function handleError(reject: Function) {
  return (e: any) => {
    reject({
      code: 10001,
      msg: 'failed',
      error: e,
    });
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
    if (!['', 'NaN', 'undefined', 'null'].includes(String(params[key]))) {
      r[key] = params[key];
    }
  });
  return r;
}

function formatParams(params: BaseObject, clearEmpty?: Boolean) {
  const _params = clearEmpty ? filterParams(params) : params;
  // 处理框架类型
  if (_params.platform_framework) {
    const p = _params.platform_framework as Array<string | number>;
    _params.platform_framework = p.length ? p.reduce((r, v) => Number(r) + Number(v)) : 0;
  }
  // 处理API类型
  if (_params.field_type) {
    const q = _params.field_type as Array<string | number>;
    if (q.length) {
      _params.field_type = q.reduce((r, v) => Number(r) + Number(v));
    } else {
      delete _params.field_type;
    }
  }
  // 处理 API 分类
  if (_params.field_category) {
    _params.field_category = Number(_params.field_category);
  }
  // 字段没传，表示不修改这个字段。不能赋值为 ''
  if (params.trigger_elements !== undefined) {
    _params.trigger_elements = _params.trigger_elements || '';
  }
  return _params;
}

async function apiCreate(params: BaseObject) {
  return new Promise((resolve, reject) => {
    console.log('~~~~~', formatParams(params, true));
    TAPI.create(formatParams(params, true)).then(
      handleSuccess(resolve),
      handleError(reject),
    );
  });
}

function formatIntToArray(map: MapOptions, p: number) {
  const platforms = Object.keys(map);
  return platforms.filter((num: string) => ((Number(num) & p) === Number(num)));
}

export function apiDelete(params: BaseObject) {
  return new Promise((resolve, reject) => {
    TAPI.delete(Number(params.id)).then(
      handleSuccess(resolve),
      handleError(reject),
    );
  });
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

export function apiUpdate(params?: BaseObject) {
  console.log(params);
  
  return new Promise((resolve, reject) => {
    const { id } = params;
    delete params.id;
    TAPI.update(formatParams(params), Number(id)).then(
      handleSuccess(resolve),
      handleError(reject),
    );
  });
}

function formatMap(obj: { [key: string]: string }) {
  const r: Array<MapItem> = [];
  Object.keys(obj).forEach((key: string) => {
    r.push({
      label: obj[key],
      value: key,
    });
  });
  return r;
}

function formatRecords(records:any){
  return records.map((item: any) => {
    item.create_time = moment(item.create_time).format('YYYY-MM-DD HH:mm:ss');
    item.update_time = moment(item.update_time).format('YYYY-MM-DD HH:mm:ss');
    item.field_category_text = API_CATEGORY[String(item.field_category)];
    item.platform_framework = formatIntToArray(PLATFORM_FRAMEWORK, item.platform_framework);
    item.platform_framework_text = item.platform_framework.map((index: string) => (PLATFORM_FRAMEWORK[index]));
    item.field_type = formatIntToArray(FIELD_TYPE_MAP, item.field_type);
    item.field_type_text = item.field_type.map((index: string) => (FIELD_TYPE_MAP[index]));
    return item;
  });
}

async function queryRecords(params?: BaseObject) {
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

  const formattedData = formatRecords(res);

  return {
    code: 0,
    msg: 'success',
    data: formattedData,
    total,
  };
}

async function generateAPI(params?: { commandLines: string[] }) {
  const commandLines = params.commandLines;
  console.log('commandLines:', commandLines);
  if (commandLines) {
    commandLines.map((commandLine: string) => execScript({ commandLine }));
  }
  return {
    code: 0,
    msg: 'success',
  };
}

async function exportAPI()
{
  const [res, total]: any = await TAPI.query();

  const formattedData = formatRecords(res);
  
  return {
    code: 0,
    msg: 'success',
    data: formattedData,
    total,
  };
}

export default {
  apiCreate,
  getMap,
  queryRecords,
  apiDelete,
  apiUpdate,
  generateAPI,
  exportAPI,
};
