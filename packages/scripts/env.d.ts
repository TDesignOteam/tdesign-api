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

declare module 'js-yaml' {
  function load(str: string, opts?: any): any;
  function dump(obj: any, opts?: any): string;
  export { load, dump };
}
