import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const generator = fileURLToPath(new URL('../../index.js', import.meta.url));
const frameworks = [
  ['VueNext(PC)', 'tdesign-vue-next/packages/components', 'undefined'],
  ['Vue(PC)', 'tdesign-vue/src', "'body'"],
  ['Vue(Mobile)', 'tdesign-mobile-vue/src', "'body'"],
];

for (const [framework, directory, expectedDefault] of frameworks) {
  for (const [component, folder] of [
    ['Popup', 'popup'],
    ['ImageViewer', 'image-viewer'],
  ]) {
    test(`${framework} ${component} attach default`, () => {
      const cwd = mkdtempSync(path.join(tmpdir(), 'tdesign-attach-default-'));
      try {
        execFileSync(process.execPath, [generator, component, framework], { cwd, stdio: 'pipe' });
        const props = readFileSync(path.join(cwd, 'packages/products', directory, folder, 'props.ts'), 'utf8');
        const attach = props.match(/attach:\s*\{[^}]+\}/)?.[0];
        if (framework === 'Vue(Mobile)' && component === 'ImageViewer') {
          assert.equal(attach, undefined, 'mobile ImageViewer must not gain a desktop-only prop');
          return;
        }
        assert.ok(attach, 'generated props must contain attach');
        assert.ok(attach.includes(`default: ${expectedDefault}`), attach);
      } finally {
        rmSync(cwd, { recursive: true, force: true });
      }
    });
  }
}
