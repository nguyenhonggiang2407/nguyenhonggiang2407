import { readFile, writeFile } from 'node:fs/promises';

const owner = process.env.PROFILE_OWNER || 'nguyenhonggiang2407';
const snapshotUrl = new URL('./repos-snapshot.json', import.meta.url);
const outputUrl = new URL('../assets/github-activity.svg', import.meta.url);
const fromSnapshot = process.argv.includes('--snapshot');
const demoNames = new Set(['YangHomestay', 'YangLingo', 'YangLocal']);

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
  })[char]);
}

async function fetchRepositories() {
  const repositories = [];
  for (let page = 1; ; page += 1) {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'github-profile-stats' };
    if (process.env.GH_TOKEN) headers.Authorization = 'Bearer ' + process.env.GH_TOKEN;
    const response = await fetch(
      'https://api.github.com/users/' + encodeURIComponent(owner) + '/repos?type=owner&per_page=100&page=' + page,
      { headers, signal: AbortSignal.timeout(20000) }
    );
    if (!response.ok) throw new Error('GitHub repositories request failed: HTTP ' + response.status);
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error('Unexpected GitHub response');
    repositories.push(...batch.filter((repo) => !repo.private).map((repo) => ({
      name: repo.name, language: repo.language, homepage: repo.homepage || null,
      size: repo.size, fork: repo.fork, private: repo.private, html_url: repo.html_url
    })));
    if (batch.length < 100) return repositories;
    if (page >= 20) throw new Error('Pagination limit reached; snapshot was left unchanged');
  }
}

const snapshot = fromSnapshot
  ? JSON.parse(await readFile(snapshotUrl, 'utf8'))
  : { owner, updated: new Date().toISOString().slice(0, 10), repositories: await fetchRepositories() };

if (!Array.isArray(snapshot.repositories)) throw new Error('Repository snapshot is missing');
const projects = snapshot.repositories
  .filter((repo) => !repo.private && !repo.fork && repo.size > 0 && repo.name.toLowerCase() !== owner.toLowerCase())
  .sort((a, b) => a.name.localeCompare(b.name));
const counts = new Map();
for (const repo of projects) {
  if (repo.language) counts.set(repo.language, (counts.get(repo.language) || 0) + 1);
}
const languageRows = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const languages = languageRows.slice(0, 6);
const other = languageRows.slice(6).reduce((sum, row) => sum + row[1], 0);
if (other) languages.push(['Other', other]);
const totalLanguageProjects = languageRows.reduce((sum, row) => sum + row[1], 0);
const demoCount = projects.filter((repo) => demoNames.has(repo.name)).length;
const colors = {
  PHP: '#a69af4', TypeScript: '#60a5fa', JavaScript: '#f2d66e',
  Java: '#ed9876', HTML: '#fb8b80', Python: '#73d7be', Other: '#9aa8c4'
};
const width = 1104;
let x = 48;
const bars = languages.map(([language, count]) => {
  const segmentWidth = width * count / Math.max(totalLanguageProjects, 1);
  const fragment = '<rect x="' + x.toFixed(2) + '" y="195" width="' + segmentWidth.toFixed(2) + '" height="12" fill="' + (colors[language] || '#9aa8c4') + '"/>';
  x += segmentWidth;
  return fragment;
}).join('');
const legend = languages.map(([language, count], i) => {
  const column = i % 4;
  const row = Math.floor(i / 4);
  const lx = 49 + column * 277;
  const ly = 238 + row * 28;
  return '<circle cx="' + lx + '" cy="' + (ly - 4) + '" r="4" fill="' + (colors[language] || '#9aa8c4') + '"/><text x="' + (lx + 13) + '" y="' + ly + '" fill="#c4d1e8" font-size="13">' + escapeXml(language) + ' <tspan fill="#8d9fbf">· ' + count + ' repo' + (count === 1 ? '' : 's') + '</tspan></text>';
}).join('');
const metrics = [
  [projects.length, 'PUBLIC PROJECTS', 48],
  [demoCount, 'DEMO LINKS', 435],
  [languageRows.length, 'PRIMARY LANGUAGES', 822]
].map(([value, label, mx]) => '<text x="' + mx + '" y="126" fill="#f6f9ff" font-size="40" font-weight="700">' + value + '</text><text x="' + mx + '" y="154" fill="#94add0" font-size="11" letter-spacing="1.8">' + label + '</text>').join('');
const height = languages.length > 4 ? 299 : 271;
const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="' + height + '" viewBox="0 0 1200 ' + height + '" role="img" aria-labelledby="title description">' +
  '<title id="title">GitHub at a glance</title><desc id="description">' +
  escapeXml(projects.length + ' public projects, ' + demoCount + ' linked demos, and ' + languageRows.length + ' primary repository languages. Updated ' + snapshot.updated + '.') +
  '</desc><rect width="1200" height="' + height + '" rx="20" fill="#0b172b"/><rect x=".5" y=".5" width="1199" height="' + (height - 1) + '" rx="20" fill="none" stroke="#263c61"/>' +
  '<g font-family="Segoe UI,Arial,sans-serif"><text x="48" y="51" fill="#9bcaff" font-size="16" font-weight="600">GitHub at a glance</text><text x="1152" y="51" text-anchor="end" fill="#8b9fbd" font-size="12">Updated ' +
  escapeXml(snapshot.updated) + '</text>' + metrics + '<path d="M400 91V160M787 91V160" stroke="#284063"/>' +
  '<text x="48" y="183" fill="#94add0" font-size="11" letter-spacing="1.4">PRIMARY LANGUAGE PER PROJECT</text>' +
  bars + legend + '</g></svg>\n';

await writeFile(outputUrl, svg);
if (!fromSnapshot) {
  snapshot.repositories.sort((a, b) => a.name.localeCompare(b.name));
  await writeFile(snapshotUrl, JSON.stringify(snapshot, null, 2) + '\n');
}
console.log('Updated profile stats: ' + projects.length + ' public projects; ' + demoCount + ' demo links.');
