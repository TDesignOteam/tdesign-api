import Koa from 'koa';

export default () => async (ctx: Koa.Context, next: Function) => {
  try {
    await next();
  } catch (err: unknown) {
    console.error(err);
    const error = err as Error & { status?: number; message?: string };
    ctx.status = error.status || 500;
    ctx.body = error.message;
  }
};
