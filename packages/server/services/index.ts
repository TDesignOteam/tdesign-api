import { BaseObject, QueryPaginationProps } from '../../types';
import { isEmpty } from 'lodash';
import squel from 'squel';
import executeSQL from './sqlite';
import moment from 'moment';

const tableName = 't_api';

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
      columns.map(column => querySQL.field(column));
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
      // 一个 API 可能属于多个平台，需要使用 sql 的位运算，如： 2 & platform_framework = 2
      if (framework) {
        delete params.platform_framework;
        framework = String(framework);
        expr.and(`platform_framework & ${framework} = ${framework}`);
      }
      if (component) {
        delete params.component;
        const list = (component as string).split(',');
        const componentsExpr = squel.expr()
        list.forEach((oneComponent) => {
          componentsExpr.or(`component = '${oneComponent}'`);
        });
        expr.and(componentsExpr);
      }
      // 处理其他参数
      Object.keys(params).map(paramName => {
        expr.and(`${paramName} = "${params[paramName]}"`);
      });
    }

    querySQL.where(expr)
      .order('component')
      .order('field_category')
      .order('field_name');

    // 分页参数设置
    if (limitObj) {
      const { size, offset = 0 } = limitObj;
      querySQL.limit(size).offset(offset);
    }

    countSQL.where(expr);

    // 查询符合条件的记录、统计条数
    const apis = await executeSQL(querySQL.toString());
    const total = await executeSQL(countSQL.toString());
    return [apis, total[0]['count(*)']];
  }

  public static async create(params: {}) {
    const newID = moment().unix();
    const insertSQL = squel.insert({ replaceSingleQuotes: true }).into(tableName).set('id', newID);

    Object.keys(params).map(param => insertSQL.set(param, params[param]));
    const res = await executeSQL(insertSQL.toString(), true);
    return res;
  }

  public static async update(params: {}, id: number) {
    const updateSQL = squel.update({ replaceSingleQuotes: true }).table(tableName).where(`id = ${id}`);

    Object.keys(params).map(param => updateSQL.set(param, params[param]));
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
