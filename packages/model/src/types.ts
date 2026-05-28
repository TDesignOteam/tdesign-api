export interface FieldsObject {
  [key: string]: object;
}

export interface BaseObject {
  [key: string]: string | number | object | boolean | Array<string | number>;
}

export interface MapItem {
  label: string;
  value: string | number;
  type?: string;
  framework?: Array<string>;
}

export interface MapOptions {
  [key: string]: string;
}

export type QueryColumns = Array<string> | string;

export interface Order {
  key: string;
  type: 'desc' | 'asc';
}

export type Orders = Array<Order>;

export interface QueryPaginationProps {
  size: number;
  offset?: number;
}
