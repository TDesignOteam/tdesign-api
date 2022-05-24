export interface FieldsObject {
  [key: string]: object;
}

export interface BaseObject {
  [key: string]: string | number | object | boolean | Array<any>;
}

export interface MapItem {
  label: string;
  value: string | number;
  type?: string;
  framework?: Array<string>;
}

export interface MapOptions {
  [key: string]: string
}

export type QueryColumns = Array<string> | string;

export interface Order {
  key: string
  type: 'desc' | 'asc'
}

export type Orders = Array<Order>;

// 查询, 分页参数的类型
export interface QueryPaginationProps {
  size: number,
  offset?: number
}
