import path from 'path';
import { send } from '@koa/send';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import serve from 'koa-static';
import cors from 'koa2-cors';
import config from './config';
import errorParser from './middleware/errorParser';
import logger from './middleware/logger';
import componentRoutes from './routes/component';
const app = new Koa();

/** Middlewares */
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(errorParser());
app.use(cors({
  origin: '*', 
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Access-Control-Allow-Origin'],
}));

/** Routes */
app.use(componentRoutes);

const staticPath = path.resolve('packages/frontend/_site');

// 将 vite 打包好的项目目录作为 Koa 静态文件服务的目录
app.use(serve(staticPath));

// support for spa
app.use(async (ctx) => {
  await send(ctx, `/index.html`, {
      root: staticPath,
  });
});

app.listen(config.port, () => console.info(`Server running on http://localhost:${config.port}`));
