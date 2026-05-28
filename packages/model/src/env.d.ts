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
