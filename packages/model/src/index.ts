import { isEmpty } from 'lodash-es';
import moment from 'moment';
import squel from 'squel';
import { BaseObject, MapItem, MapOptions, QueryPaginationProps } from './types.ts';

// Re-export types for external consumers
export { BaseObject, MapItem, MapOptions, QueryPaginationProps, QueryColumns, Order, Orders, FieldsObject } from './types.ts';
import executeSQL from './sqlite.ts';
export {
  API_CATEGORY,
  PLATFORM_MAP,
  FRAMEWORK_MAP,
  FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK,
  COMPONENTS_PC,
  COMPONENTS_MOBILE,
} from './const.ts';
import {
  API_CATEGORY as _API_CATEGORY,
  PLATFORM_MAP as _PLATFORM_MAP,
  FRAMEWORK_MAP as _FRAMEWORK_MAP,
  FIELD_TYPE_MAP as _FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK as _PLATFORM_FRAMEWORK,
  COMPONENTS_PC as _COMPONENTS_PC,
  COMPONENTS_MOBILE as _COMPONENTS_MOBILE,
} from './const.ts';

const tableName = 't_api';

// ============ Utility Functions ============

function formatIntToArray(map: MapOptions, p: number) {
  const platforms = Object.keys(map);
  return platforms.filter((num: string) => (Number(num) & p) === Number(num));
}

function filterParams(params: BaseObject) {
  const r: BaseObject = {};
  Object.keys(params).forEach((key) => {
    if (!['', 'NaN', 'null'].includes(String(params[key]))) {
      r[key] = params[key];
    }
  });
  return r;
}

export function formatParams(params: BaseObject, clearEmpty?: boolean) {
  const _params = clearEmpty ? filterParams(params) : params;
  if (_params.platform_framework) {
    const p = _params.platform_framework as Array<string | number>;
    _params.platform_framework = p.length ? p.reduce((r, v) => Number(r) + Number(v)) : 0;
  }
  if (_params.field_type) {
    const q = _params.field_type as Array<string | number>;
    if (q.length) {
      _params.field_type = q.reduce((r, v) => Number(r) + Number(v));
    } else {
      delete _params.field_type;
    }
  }
  if (_params.field_category) {
    _params.field_category = Number(_params.field_category);
  }
  if (params.trigger_elements !== undefined) {
    _params.trigger_elements = _params.trigger_elements || '';
  }
  return _params;
}

export function formatRecords(records: Record<string, unknown>[]) {
  return records.map((item: Record<string, unknown>) => {
    item.create_time = moment(item.create_time as string).format('YYYY-MM-DD HH:mm:ss');
    item.update_time = moment(item.update_time as string).format('YYYY-MM-DD HH:mm:ss');
    item.field_category_text = _API_CATEGORY[String(item.field_category)];
    item.platform_framework = formatIntToArray(_PLATFORM_FRAMEWORK, item.platform_framework as number);
    item.platform_framework_text = (item.platform_framework as string[]).map((index: string) => _PLATFORM_FRAMEWORK[index]);
    item.field_type = formatIntToArray(_FIELD_TYPE_MAP, item.field_type as number);
    item.field_type_text = (item.field_type as string[]).map((index: string) => _FIELD_TYPE_MAP[index]);
    return item;
  });
}

// ============ TAPI Model ============

class TAPI {
  /**
   * 查询API记录
   * @param params 查询条件, [key: string]: value
   * @param limitObj 分页参数，{size, offset}，size为分页大小，offset为起点
   * @param columns 自定义列，默认为全部
   */
  public static async query(
    params?: BaseObject,
    limitObj?: QueryPaginationProps,
    columns?: string[],
  ) {
    const querySQL = squel.select().from(tableName);
    const countSQL = squel.select().from(tableName).field('count(*)');
    if (columns) {
      columns.map((column) => querySQL.field(column));
    }
    const expr = squel.expr();
    if (params && !isEmpty(params)) {
      const { field_name: fieldName, component } = params;
      let { platform_framework: framework } = params;
      // 处理 API名称以支持模糊查询，LIKE %xxx%
      if (fieldName) {
        expr.and(`field_name like "%${fieldName}%"`);
        delete params.field_name;
      }
      // 一个 API 可能属于多个平台，需要使用 sql 的位运算
      if (framework) {
        delete params.platform_framework;
        framework = String(framework);
        expr.and(`platform_framework & ${framework} = ${framework}`);
      }
      if (component) {
        delete params.component;
        const list = (component as string).split(',');
        const componentsExpr = squel.expr();
        list.forEach((oneComponent) => {
          componentsExpr.or(`component = '${oneComponent}'`);
        });
        expr.and(componentsExpr);
      }
      Object.keys(params).map((paramName) => {
        expr.and(`${paramName} = "${params[paramName]}"`);
      });
    }

    querySQL.where(expr).order('component').order('field_category').order('field_name');

    if (limitObj) {
      const { size, offset = 0 } = limitObj;
      querySQL.limit(size).offset(offset);
    }

    countSQL.where(expr);

    const apis = await executeSQL(querySQL.toString());
    const total = (await executeSQL(countSQL.toString())) as Record<string, unknown>[];
    return [apis, total[0]['count(*)'] as number];
  }

  public static async create(params: BaseObject) {
    const newID = moment().unix();
    const insertSQL = squel.insert({ replaceSingleQuotes: true }).into(tableName).set('id', newID);
    Object.keys(params).map((param) => insertSQL.set(param, params[param]));
    const res = await executeSQL(insertSQL.toString(), true);
    return res;
  }

  public static async update(params: BaseObject, id: number) {
    const updateSQL = squel.update({ replaceSingleQuotes: true }).table(tableName).where(`id = ${id}`);
    Object.keys(params).map((param) => updateSQL.set(param, params[param]));
    const res = await executeSQL(updateSQL.toString(), true);
    return res;
  }

  public static async delete(id: number) {
    const deleteSQL = squel.delete().from(tableName).where(`id = ${id}`);
    const res = await executeSQL(deleteSQL.toString(), true);
    return res;
  }
}

export default TAPI;

// ============ High-level API ============

export async function queryRecords(params: BaseObject) {
  const p = filterParams(params);
  const pageSize = Number(p.page_size);
  const paginationParams: QueryPaginationProps = {
    size: pageSize,
    offset: (Number(p.page) - 1) * pageSize,
  };
  delete p.page;
  delete p.page_size;

  const queryResult = await TAPI.query(p, paginationParams) as [Record<string, unknown>[], Record<string, unknown>[]];
  const formattedData = formatRecords(queryResult[0]);
  const total = (queryResult[1][0] as Record<string, number>)['count(*)'];

  return {
    code: 0,
    msg: 'success',
    data: formattedData,
    total,
  };
}

export async function exportAPI() {
  const [res] = await TAPI.query() as [Record<string, unknown>[]];
  const formattedData = formatRecords(res);
  return {
    code: 0,
    msg: 'success',
    data: formattedData,
  };
}

export async function apiCreate(params: BaseObject) {
  const res = await TAPI.create(formatParams(params, true));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

export async function apiUpdate(params: BaseObject) {
  const { id } = params;
  delete params.id;
  const res = await TAPI.update(formatParams(params), Number(id));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

export async function apiDelete(params: BaseObject) {
  const res = await TAPI.delete(Number(params.id));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

export function getMap() {
  const cmp = _COMPONENTS_PC.concat(_COMPONENTS_MOBILE);

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

  function formatMap(obj: MapOptions) {
    const r: Array<MapItem> = [];
    Object.keys(obj).forEach((key: string) => {
      r.push({
        label: obj[key],
        value: key,
      });
    });
    return r;
  }

  return {
    field_category: formatMap(_API_CATEGORY),
    platform: formatMap(_PLATFORM_MAP),
    framework: formatMap(_FRAMEWORK_MAP),
    platform_framework: formatMap(_PLATFORM_FRAMEWORK),
    field_type: formatMap(_FIELD_TYPE_MAP),
    components: removeRepeat(cmp),
  };
}
