declare module 'lodash-es' {
  export function isEmpty(value?: unknown): boolean;
  export function pick<T extends object, K extends keyof T>(object: T, ...paths: K[]): Pick<T, K>;
  export function find<T>(collection: T[], predicate?: (item: T) => boolean): T | undefined;
  export function camelCase(string: string): string;
  export function kebabCase(string: string): string;
  export function upperFirst(string: string): string;
  export function lowerFirst(string: string): string;
  export function uniq<T>(array: T[]): T[];
  export function groupBy<T>(collection: T[], iteratee: (item: T) => string): Record<string, T[]>;
  export function includes(collection: string[], value: string): boolean;
}

declare module 'sql.js/dist/sql-wasm-debug.js' {
  interface Database {
    prepare(sql: string): Statement;
    export(): Uint8Array;
  }
  interface Statement {
    step(): boolean;
    getAsObject(): Record<string, unknown>;
    free(): void;
  }
  interface SqlJsStatic {
    Database: new (data: Buffer) => Database;
  }
  export default function initSqlJs(): Promise<SqlJsStatic>;
}
