import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readmeEvidence } from './lib/readme-evidence.mjs';

test('a diagram closing fence does not turn README prose into a command', () => {
  const md = '```mermaid\ngraph LR\nA --> B\n```\n\nUse npm and python for development.\n\n```bash\nnpm ci\nnpm test\n```\n';
  assert.deepEqual(readmeEvidence(md).commands, ['npm ci\nnpm test']);
});
test('Windows and unlabelled fences, CRLF and javac commands are retained', () => {
  assert.deepEqual(readmeEvidence('```powershell\r\njavac Main.java\r\n```\r\n\n```\npython -m unittest\n```').commands, ['javac Main.java', 'python -m unittest']);
});
test('demo discovery deduplicates URLs and excludes credentials, queries and deceptive hosts', () => {
  const md = ['https://example.onrender.com/', 'https://example.onrender.com/', 'https://bad.onrender.com.evil.test/', 'https://user:secret@example.onrender.com/', 'https://example.onrender.com/?token=secret', 'https://nguyenhonggiang2407.github.io/FORME/'].join('\n');
  assert.deepEqual(readmeEvidence(md).demos, ['https://example.onrender.com/', 'https://nguyenhonggiang2407.github.io/FORME/']);
});
test('missing checkouts fail instead of generating fabricated complete inventory', () => {
  const result = spawnSync(process.execPath, ['scripts/audit-repositories.mjs', '--repos-root', 'does-not-exist'], { encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.doesNotMatch(result.stdout, /Wrote inventory/);
});
