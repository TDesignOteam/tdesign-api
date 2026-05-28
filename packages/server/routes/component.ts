import Router from '@koa/router';
import { BaseObject } from '@tdesign/api-model';
import Koa from 'koa';
import ComponentApiController from '../controllers/ComponentApi';

const router = new Router({
  prefix: '/cmp',
});

router.post('/api', async (ctx: Koa.Context) => {
  const data = ctx.request.body as BaseObject;
  ctx.body = await ComponentApiController.apiCreate(data);
});

router.get('/api', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.queryRecords(ctx.request.query as BaseObject);
});

router.delete('/api', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.apiDelete(ctx.request.body as BaseObject);
});

router.put('/api', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.apiUpdate(ctx.request.body as BaseObject);
});

router.get('/map', (ctx: Koa.Context) => {
  ctx.body = {
    code: 0,
    data: ComponentApiController.getMap(),
  };
});

router.post('/generate-api', (ctx: Koa.Context) => {
  ctx.body = {
    code: 0,
    data: ComponentApiController.generateAPI(ctx.request.body as { commandLines: string[] }),
  };
});

router.get('/export-api-data', async (ctx: Koa.Context) => {
  ctx.body = await ComponentApiController.exportAPI();
});

export default router.routes();
