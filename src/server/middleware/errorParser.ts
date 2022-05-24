import Koa from 'koa';

export default () => async (ctx: Koa.Context, next: Function) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
};
