import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { readmeEvidence } from './lib/readme-evidence.mjs';

// Read tracked source files only. Never execute application code or read .env files.
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const root = path.resolve(option('--repos-root', '..'));
const output = path.resolve(option('--output', 'docs/evidence/inventory.json'));
const expected = [
  'RunwayStudio', 'YangSlots', 'YangRent', 'CampusDesk', 'ApplyFlow', 'PocketLedger',
  'YangHooks', 'YangQueue', 'YangData', 'YangDocs', 'YangLab', 'DTDD', 'YangHomestay',
  'YangLingo', 'YangLocal', 'FORME', 'YangAtlas', 'St4', 'Yang', 'Doanwebbangiayphp',
  'nguyenhonggiang2407',
];
const git = (dir, ...args) => execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).trim();
const unique = (values) => [...new Set(values)];
const report = { checked_at: new Date().toISOString(), source: 'Fresh git checkouts; tracked manifests, README, tests, workflows and notices', repositories: [] };
for (const name of expected) {
  const dir = path.join(root, name);
  const files = git(dir, 'ls-files', '-z').split('\0').filter(Boolean);
  if (files.some((f) => f === 'AGENTS.md' || f.endsWith('/AGENTS.md'))) {
    console.error(`${name}: read the tracked AGENTS.md instructions before editing this repository.`);
  }
  const read = (file) => readFile(path.join(dir, file), 'utf8');
  const readme = files.find((f) => /^readme\.md$/i.test(f));
  const text = readme ? await read(readme) : '';
  const manifests = files.filter((f) => /(^|\/)(package\.json|pom\.xml|pyproject\.toml|requirements[^/]*\.txt|composer\.json|build\.xml)$/.test(f) && !/(^|\/)(vendor|node_modules|upstream|wp-admin|wp-includes)\//.test(f));
  const packages = [];
  const dependencies = [];
  for (const file of manifests) {
    const content = await read(file);
    if (file.endsWith('package.json')) {
      const data = JSON.parse(content);
      packages.push({ path: file, scripts: data.scripts || {}, engines: data.engines || {} });
      dependencies.push(...Object.keys(data.dependencies || {}), ...Object.keys(data.devDependencies || {}));
    } else if (file.endsWith('pom.xml')) {
      dependencies.push(...[...content.matchAll(/<artifactId>([^<]+)<\/artifactId>/g)].map((m) => m[1]));
    } else if (/requirements|pyproject/.test(file)) {
      dependencies.push(...content.split('\n').map((s) => s.trim()).filter((s) => s && !s.startsWith('#')));
    }
  }
  const { demos: urls, commands: commandBlocks } = readmeEvidence(text);
  report.repositories.push({
    name, source_url: `https://github.com/nguyenhonggiang2407/${name}`, commit: git(dir, 'rev-parse', 'HEAD'),
    branch: git(dir, 'branch', '--show-current'), tracked_files: files.length,
    instructions: files.filter((f) => /(^|\/)AGENTS\.md$/.test(f)),
    readme: readme || null, readme_demo_urls: urls, readme_commands: commandBlocks,
    manifests, packages, dependencies: unique(dependencies),
    workflows: files.filter((f) => /^\.github\/workflows\/[^/]+\.ya?ml$/.test(f)),
    tests: files.filter((f) => /(^|\/)(test|tests|e2e|__tests__)\/|Test\.(java|php)$|[._-](test|spec)\.(m?[jt]sx?|py)$/.test(f) && !/(^|\/)(wp-admin|wp-includes|vendor|upstream)\//.test(f)),
    screenshots: files.filter((f) => /screenshot|capture/i.test(f) && /\.(png|webp|jpe?g)$/.test(f)),
    notices: files.filter((f) => /(^|\/)(LICENSE[^/]*|NOTICE[^/]*|THIRD_PARTY[^/]*|[^/]*(?:attribution|source-notice|source-credit|image-source|photo-source|media)[^/]*\.md)$/i.test(f) && !/^(wp-admin|wp-includes)\//.test(f)),
    deployment: files.filter((f) => /(^|\/)(Dockerfile[^/]*|docker-compose[^/]*\.ya?ml|compose\.ya?ml|render[^/]*\.ya?ml|\.env\.example)$/.test(f)),
    database_files: files.filter((f) => /(^|\/)(migrations?|seed|schema)\/|schema[^/]*\.sql$|application[^/]*\.properties$/.test(f) && !/^(wp-admin|wp-includes|upstream)\//.test(f)),
    execution_status: 'UNVERIFIED',
  });
  console.log(`${name}: ${files.length} tracked files; ${urls.length} declared demo URL(s); ${report.repositories.at(-1).workflows.length} workflow(s)`);
}
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(`Wrote inventory for ${report.repositories.length} repositories. Build/test presence does not imply execution success.`);
