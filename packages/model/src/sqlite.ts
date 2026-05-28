import fs from 'fs';
import path from 'path';
import initSqlJs from 'sql.js/dist/sql-wasm-debug.js';

const dbFilePath = path.resolve('db/TDesign.db');

export function getDbFilePath() {
  return dbFilePath;
}

export default async function executeSQL(sqlStr: string, write?: boolean) {
  console.info('Execute SQL: ', sqlStr);
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
    return data;
  } catch (error) {
    console.error('Execute Error: ', error);
    return error;
  }
}
