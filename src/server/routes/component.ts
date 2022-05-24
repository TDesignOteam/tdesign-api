import Router from 'koa-router';
import Koa from 'koa';
// import Log from '../utils/log';
import ComponentApiController from '../controllers/ComponentApi';

const router = new Router({
  prefix: '/cmp',
});

// https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxreq

router.post('/api', async (ctx: Koa.Context) => {
  const data = ctx.request.body;
  ctx.body = ComponentApiController.apiCreate(data);
});

router.get('/api', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.queryRecords(ctx.request.query);
});

router.delete('/api', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.apiDelete(ctx.request.body);
});

router.put('/api', async (ctx: Koa.Context) => {
  // 参数校验：todo
  ctx.body = await ComponentApiController.apiUpdate(ctx.request.body);
});

router.get('/map', (ctx: Koa.Context) => {
  ctx.body = {
    code: 0,
    data: ComponentApiController.getMap(),
  };
});

export default router.routes();
