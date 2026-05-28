import fs from 'fs';
import path from 'path';
import initSqlJs from 'sql.js/dist/sql-wasm-debug.js';

const dbFilePath = path.resolve('db/TDesign.db');

export function getDbFilePath() {
  return dbFilePath;
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

  private release() {
    this.locked = false;
    const next = this.queue.shift();
    if (next) next();
  }
}

const writeMutex = new Mutex();

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
