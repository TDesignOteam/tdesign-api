import fs from 'fs';
import path from 'path';
import initSqlJs from 'sql.js/dist/sql-wasm.js';

// DB 文件路径，默认基于 process.cwd() 解析
// 可通过 setDbFilePath() 覆盖，适用于非标准 CWD 的运行环境
let dbFilePath = path.resolve(process.cwd(), 'db/TDesign.db');

export function getDbFilePath() {
  return dbFilePath;
}

export function setDbFilePath(filePath: string) {
  dbFilePath = path.resolve(filePath);
}

// 简单的异步互斥锁，防止并发写入导致数据丢失
class Mutex {
  private queue: Array<() => void> = [];
  private locked = false;

  acquire(): Promise<() => void> {
    return new Promise((resolve) => {
      const tryAcquire = () => {
        if (!this.locked) {
          this.locked = true;
          resolve(() => this.release());
        } else {
          this.queue.push(tryAcquire);
        }
      };
      tryAcquire();
    });
  }

  isLocked() {
    return this.locked;
  }

  private release() {
    this.locked = false;
    const next = this.queue.shift();
    if (next) next();
  }
}

const writeMutex = new Mutex();

/** 检查写锁是否正在使用中 */
export function isWriteLocked() {
  return writeMutex.isLocked();
}

/** 等待写锁释放（轮询），用于优雅关闭时等待进行中的写操作完成 */
export async function waitForWriteDrain(timeoutMs = 5000): Promise<void> {
  const start = Date.now();
  while (writeMutex.isLocked()) {
    if (Date.now() - start > timeoutMs) {
      throw new Error('等待写操作完成超时');
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

export default async function executeSQL(sqlStr: string, write?: boolean) {
  console.info('Execute SQL: ', sqlStr);

  // 写操作需要获取锁，防止并发写入竞态
  const unlock = write ? await writeMutex.acquire() : undefined;

  try {
    const sqlJs = await initSqlJs();
    const fileBuffer = fs.readFileSync(dbFilePath);
    const db = new sqlJs.Database(fileBuffer);
    const stmt = db.prepare(sqlStr);

    const data: Record<string, unknown>[] = [];
    while (stmt.step()) {
      data.push(stmt.getAsObject() as Record<string, unknown>);
    }

    if (write) {
      const dbData = db.export();
      const buffer = Buffer.from(dbData);
      fs.writeFileSync(dbFilePath, buffer);
    }
    stmt.free();
    db.close();
    return data;
  } catch (error) {
    console.error('Execute Error: ', error);
    throw error;
  } finally {
    unlock?.();
  }
}
