function isSameField(left, right) {
  return (
    left.component === right.component &&
    left.field_category === right.field_category &&
    left.field_name === right.field_name
  );
}

function overlaps(left, right) {
  const platforms = new Set(left.platform_framework || []);
  return (right.platform_framework || []).some((platform) => platforms.has(platform));
}

export function findMatches(payload, existing) {
  return existing.filter((item) => isSameField(item, payload) && overlaps(item, payload));
}

export function findConflicts(payloads, existing) {
  const errors = [];
  const warnings = [];
  const accepted = [];

  payloads.forEach((payload, index) => {
    const sameName = [...existing, ...accepted].filter((item) => isSameField(item, payload));
    const conflict = sameName.find((item) => overlaps(item, payload));
    if (conflict) {
      const where = conflict.batchIndex ? `本批第 ${conflict.batchIndex} 条` : `已有记录 id ${conflict.id}`;
      errors.push(`第 ${index + 1} 条 ${payload.component}.${payload.field_name} 与${where} 的平台重叠`);
      return;
    }
    if (sameName.length > 0) {
      warnings.push(
        `第 ${index + 1} 条 ${payload.component}.${payload.field_name} 已有同名记录，但平台不重叠，将另外写入`,
      );
    }
    accepted.push({ ...payload, batchIndex: index + 1 });
  });

  return { errors, warnings };
}
