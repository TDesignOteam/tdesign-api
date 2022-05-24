// @ts-ignore
import initSqlJs from "sql.js/dist/sql-wasm-debug.js";
import fs from 'fs';
import path from 'path';

const dbFilePath = path.resolve('db/TDesign.db');

export default async function executeSQL(sqlStr: string, write?: boolean) {
    console.log("Execute SQL: ", sqlStr);
    try {
        const sqlJs = await initSqlJs();
        // Load the db
        const fileBuffer = await fs.readFileSync(dbFilePath);
        const db = new sqlJs.Database(fileBuffer);
        // Prepare an sql statement
        const stmt = db.prepare(sqlStr);

        const data = [];
        while (stmt.step()) {
            data.push(stmt.getAsObject());
        }

        if(write) {
          const dbData = db.export();
          const buffer = Buffer.from(dbData);
          fs.writeFileSync(dbFilePath, buffer);
        }
        stmt.free();
        return data;
    } catch (error) {
      return error;
      console.error('Execute Error: ', error);
      
    }
}
