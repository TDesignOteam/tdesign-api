declare module 'squel' {
  const squel: {
    select: () => any;
    insert: (opts?: any) => any;
    update: (opts?: any) => any;
    delete: () => any;
    expr: () => any;
  };
  export default squel;
}

declare module 'lodash-es' {
  export function isEmpty(value?: any): boolean;
  export function pick(object: any, paths: string[]): any;
  export function find(collection: any, predicate?: any): any;
  export function camelCase(string: string): string;
  export function kebabCase(string: string): string;
  export function upperFirst(string: string): string;
  export function lowerFirst(string: string): string;
  export function uniq(array: any[]): any[];
  export function has(object: any, path: string): boolean;
  export function includes(collection: any, value: any, fromIndex?: number): boolean;
}

declare module 'js-yaml' {
  function load(str: string, opts?: any): any;
  function dump(obj: any, opts?: any): string;
  export { load, dump };
}
