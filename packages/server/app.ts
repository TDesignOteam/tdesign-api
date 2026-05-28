import path from 'path';
import bodyParser from '@koa/bodyparser';
import cors from '@koa/cors';
import { send } from '@koa/send';
import Koa from 'koa';
import json from 'koa-json';
import serve from 'koa-static';
import { waitForWriteDrain } from '@tdesign/api-model';
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
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
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

const server = app.listen(config.port, () => console.info(`Server running on http://localhost:${config.port}`));

// 优雅关闭
async function gracefulShutdown(signal: string) {
  console.info(`\n收到 ${signal} 信号，正在关闭服务器...`);
  try {
    // 等待进行中的 DB 写操作完成，避免损坏数据库
    await waitForWriteDrain(5000);
  } catch {
    console.error('等待写操作完成超时，可能存在数据丢失');
  }
  server.close(() => {
    console.info('服务器已关闭');
    process.exit(0);
  });
  // 5 秒超时强制退出
  setTimeout(() => {
    console.error('强制退出');
    process.exit(1);
  }, 5000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGHUP', () => gracefulShutdown('SIGHUP'));
