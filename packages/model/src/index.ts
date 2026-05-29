import { isEmpty } from 'lodash-es';
import moment from 'moment';
import squel from 'squel';
import {
  API_CATEGORY as _API_CATEGORY,
  PLATFORM_MAP as _PLATFORM_MAP,
  FRAMEWORK_MAP as _FRAMEWORK_MAP,
  FIELD_TYPE_MAP as _FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK as _PLATFORM_FRAMEWORK,
  COMPONENTS_PC as _COMPONENTS_PC,
  COMPONENTS_MOBILE as _COMPONENTS_MOBILE,
} from './const.ts';
import executeSQL, { waitForWriteDrain } from './sqlite.ts';
import { BaseObject, MapItem, MapOptions, QueryPaginationProps } from './types.ts';

// Re-export types for external consumers
export { BaseObject, MapItem, MapOptions, QueryPaginationProps, QueryColumns, Order, Orders, FieldsObject } from './types.ts';
export { waitForWriteDrain } from './sqlite.ts';
export {
  API_CATEGORY,
  PLATFORM_MAP,
  FRAMEWORK_MAP,
  FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK,
  COMPONENTS_PC,
  COMPONENTS_MOBILE,
} from './const.ts';

const tableName = 't_api';

// t_api 表合法列名白名单，防止 SQL 注入
const VALID_COLUMNS = new Set([
  'id', 'platform_framework', 'component', 'field_category', 'field_name',
  'field_type', 'field_default_value', 'field_enum', 'field_desc_zh', 'field_desc_en',
  'field_required', 'event_input', 'create_time', 'update_time', 'event_output',
  'custom_field_type', 'syntactic_sugar', 'readonly', 'html_attribute',
  'trigger_elements', 'deprecated', 'version', 'test_description', 'support_default_value',
]);

// ============ Utility Functions ============

/**
 * 将位掩码拆分为匹配的枚举键数组
 * @param {MapOptions} map - 枚举映射表，键为数值字符串，值为标签
 * @param {number} p - 位掩码值
 * @returns {string[]} 匹配的枚举键数组
 */
function formatIntToArray(map: MapOptions, p: number) {
  const platforms = Object.keys(map);
  return platforms.filter((num: string) => (Number(num) & p) === Number(num));
}

/**
 * 过滤掉值为空字符串、'NaN'、'null' 的参数
 * @param {BaseObject} params - 待过滤的参数对象
 * @returns {BaseObject} 过滤后的参数对象
 */
function filterParams(params: BaseObject) {
  const r: BaseObject = {};
  Object.keys(params).forEach((key) => {
    if (!['', 'NaN', 'null'].includes(String(params[key]))) {
      r[key] = params[key];
    }
  });
  return r;
}

/**
 * 格式化查询参数，将数组字段转换为位运算值，处理字段类型转换
 * @param {BaseObject} params - 原始查询参数
 * @param {boolean} [clearEmpty] - 是否清除空值参数
 * @returns {BaseObject} 格式化后的参数对象
 */
export function formatParams(params: BaseObject, clearEmpty?: boolean) {
  const _params = clearEmpty ? filterParams(params) : { ...params };
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

/**
 * 格式化数据库记录，将时间戳转为可读格式，将位掩码字段转为文本数组
 * @param {Record<string, unknown>[]} records - 原始数据库记录数组
 * @returns {Record<string, unknown>[]} 格式化后的记录数组
 */
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
   * @param {BaseObject} [params] - 查询条件
   * @param {QueryPaginationProps} [limitObj] - 分页参数，{size, offset}
   * @param {string[]} [columns] - 自定义查询列，默认为全部
   * @returns {Promise<[Record<string, unknown>[], number]>} [记录数组, 总条数]
   */
  public static async query(
    params?: BaseObject,
    limitObj?: QueryPaginationProps,
    columns?: string[],
  ): Promise<[Record<string, unknown>[], number]> {
    const querySQL = squel.select().from(tableName);
    const countSQL = squel.select().from(tableName).field('count(*)');
    if (columns) {
      columns.forEach((column) => querySQL.field(column));
    }
    const expr = squel.expr();
    if (params && !isEmpty(params)) {
      // 操作副本，避免修改调用方传入的对象
      const _params = { ...params };
      const { field_name: fieldName, component } = _params;
      let { platform_framework: framework } = _params;
      // 处理 API名称以支持模糊查询，LIKE %xxx%
      if (fieldName) {
        expr.and(`field_name like ?`, `%${fieldName}%`);
        delete _params.field_name;
      }
      // 一个 API 可能属于多个平台，需要使用 sql 的位运算
      if (framework) {
        delete _params.platform_framework;
        const fw = Number(framework);
        if (!Number.isNaN(fw) && fw > 0) {
          // 使用参数化方式防止 SQL 注入，但位运算需要直接构建条件表达式
          expr.and(`platform_framework & ${fw} = ${fw}`);
        }
      }
      if (component) {
        delete _params.component;
        const list = (component as string).split(',');
        const componentsExpr = squel.expr();
        list.forEach((oneComponent) => {
          componentsExpr.or(`component = ?`, oneComponent);
        });
        expr.and(componentsExpr);
      }
      Object.keys(_params).forEach((paramName) => {
        if (VALID_COLUMNS.has(paramName)) {
          expr.and(`${paramName} = ?`, _params[paramName]);
        }
      });
    }

    querySQL.where(expr).order('component').order('field_category').order('field_name');

    if (limitObj) {
      const { size, offset = 0 } = limitObj;
      querySQL.limit(size).offset(offset);
    }

    countSQL.where(expr);

    const apis = (await executeSQL(querySQL.toString())) as Record<string, unknown>[];
    const total = (await executeSQL(countSQL.toString())) as Record<string, unknown>[];
    return [apis, total[0]['count(*)'] as number];
  }

  /**
   * 创建API记录
   * @param {BaseObject} params - 新记录字段键值对
   * @returns {Promise<unknown>} 执行结果
   */
  public static async create(params: BaseObject) {
    // 使用毫秒时间戳 + 随机数避免同一秒内 ID 碰撞
    const newID = moment().valueOf() * 1000 + Math.floor(Math.random() * 1000);
    const insertSQL = squel.insert().into(tableName).set('id', newID);
    Object.keys(params).forEach((param) => {
      if (VALID_COLUMNS.has(param)) {
        insertSQL.set(param, params[param]);
      }
    });
    const res = await executeSQL(insertSQL.toString(), true);
    return res;
  }

  /**
   * 更新API记录
   * @param {BaseObject} params - 需更新的字段键值对
   * @param {number} id - 记录ID
   * @returns {Promise<unknown>} 执行结果
   */
  public static async update(params: BaseObject, id: number) {
    const updateSQL = squel.update().table(tableName).where('id = ?', id);
    Object.keys(params).forEach((param) => {
      if (VALID_COLUMNS.has(param)) {
        updateSQL.set(param, params[param]);
      }
    });
    const res = await executeSQL(updateSQL.toString(), true);
    return res;
  }

  /**
   * 删除API记录
   * @param {number} id - 记录ID
   * @returns {Promise<unknown>} 执行结果
   */
  public static async delete(id: number) {
    const deleteSQL = squel.delete().from(tableName).where('id = ?', id);
    const res = await executeSQL(deleteSQL.toString(), true);
    return res;
  }
}

export default TAPI;

// ============ High-level API ============

/**
 * 分页查询API记录，返回格式化后的数据及分页信息
 * @param {BaseObject} params - 查询参数，包含 page、page_size 及其他筛选条件
 * @returns {Promise<{code: number, msg: string, data: Record<string, unknown>[], total: number}>} 查询结果
 */
export async function queryRecords(params: BaseObject) {
  const p = { ...filterParams(params) };
  const pageSize = Number(p.page_size);
  const paginationParams: QueryPaginationProps = {
    size: pageSize,
    offset: (Number(p.page) - 1) * pageSize,
  };
  delete p.page;
  delete p.page_size;

  const [records, total] = await TAPI.query(p, paginationParams);
  const formattedData = formatRecords(records);

  return {
    code: 0,
    msg: 'success',
    data: formattedData,
    total,
  };
}

/**
 * 导出全部API记录（无分页）
 * @returns {Promise<{code: number, msg: string, data: Record<string, unknown>[]}>} 全部API记录
 */
export async function exportAPI() {
  const [res] = await TAPI.query();
  const formattedData = formatRecords(res);
  return {
    code: 0,
    msg: 'success',
    data: formattedData,
  };
}

/**
 * 创建API记录
 * @param {BaseObject} params - 新记录字段键值对
 * @returns {Promise<{code: number, msg: string, data: unknown}>} 创建结果
 */
export async function apiCreate(params: BaseObject) {
  const res = await TAPI.create(formatParams(params, true));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

/**
 * 更新API记录
 * @param {BaseObject} params - 需更新的字段键值对，必须包含 id 字段
 * @returns {Promise<{code: number, msg: string, data: unknown}>} 更新结果
 */
export async function apiUpdate(params: BaseObject) {
  const { id, ...rest } = params;
  const res = await TAPI.update(formatParams(rest), Number(id));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

/**
 * 删除API记录
 * @param {BaseObject} params - 包含 id 字段的参数对象
 * @returns {Promise<{code: number, msg: string, data: unknown}>} 删除结果
 */
export async function apiDelete(params: BaseObject) {
  const res = await TAPI.delete(Number(params.id));
  return {
    code: 0,
    msg: 'success',
    data: res,
  };
}

/**
 * 获取各类枚举映射表（字段分类、平台、框架、组件列表等）
 * @returns {{field_category: MapItem[], platform: MapItem[], framework: MapItem[], platform_framework: MapItem[], field_type: MapItem[], components: MapItem[]}} 枚举映射表集合
 */
export function getMap() {
  const cmp = _COMPONENTS_PC.concat(_COMPONENTS_MOBILE);

  function removeRepeat(array: Array<MapItem>) {
    const map: BaseObject = {};
    const r: Array<MapItem> = [];
    array.forEach((item: MapItem) => {
      // 使用 value + type 联合去重，避免不同 type 的同名条目被静默丢弃
      const key = `${item.value}_${item.type || ''}`;
      if (!map[key]) {
        r.push(item);
        map[key] = true;
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
