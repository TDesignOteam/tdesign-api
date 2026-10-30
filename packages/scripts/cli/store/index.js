import { loadRecords, writeFamily } from './persistence.js';
import { assertRecord, compareRecords, compactRecord, componentFamily, nextPluginOrder } from './record.js';

export async function openStore() {
  let records = await loadRecords();

  const dirtyFamilies = new Set();

  function create(payload) {
    const explicitId = payload.id;
    let newID = explicitId ? Number(explicitId) : Math.floor(Date.now() / 1000);
    const used = new Set(records.map((record) => Number(record.id)));
    if (explicitId && used.has(newID)) throw new Error(`API id ${newID} 已存在`);
    while (used.has(newID)) newID += 1;
    const record = compactRecord({ ...payload });
    if (String(record.component).startsWith('$') && !Number.isInteger(record.order)) {
      record.order = nextPluginOrder(records, String(record.component), String(record.field_category));
    }
    record.id = newID;
    assertRecord(record);
    records.push(record);
    records.sort(compareRecords);
    dirtyFamilies.add(componentFamily(String(record.component)));
    return record;
  }

  function update(changes, id) {
    const index = records.findIndex((record) => Number(record.id) === id);
    if (index === -1) throw new Error(`API id ${id} 不存在`);
    const previousFamily = componentFamily(String(records[index].component));
    const updated = {
      ...records[index],
      ...changes,
      id,
    };
    if (String(updated.component).startsWith('$') && !Number.isInteger(updated.order)) {
      updated.order = nextPluginOrder(records, String(updated.component), String(updated.field_category));
    } else if (!String(updated.component).startsWith('$')) {
      delete updated.order;
    }
    records[index] = compactRecord(updated);
    assertRecord(records[index]);
    const nextFamily = componentFamily(String(records[index].component));
    dirtyFamilies.add(previousFamily);
    if (nextFamily !== previousFamily) dirtyFamilies.add(nextFamily);
    records.sort(compareRecords);
    return records[index];
  }

  async function commit() {
    const families = [...dirtyFamilies];
    dirtyFamilies.clear();
    await Promise.all(families.map((family) => writeFamily(family, records)));
  }

  return { records, create, update, commit };
}
