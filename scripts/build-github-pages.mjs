import {readFile, writeFile, readdir, mkdir, copyFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(resolve(root, 'github-pages.config.json'), 'utf8'));
const repository = process.env.GITHUB_REPOSITORY || config.repository;
if (!/^[\w.-]+\/[\w.-]+$/.test(repository)) throw new Error('Expected a GitHub owner/repository.');
const [owner, name] = repository.split('/');
const basePath = name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '' : `/${name}`;
const siteUrl = `https://${owner.toLowerCase()}.github.io${basePath}/`;
if (!process.env.npm_execpath) throw new Error('Run this script with npm run build:github.');

console.log(`Building GitHub Pages: ${siteUrl}`);
const result = spawnSync(process.execPath, [process.env.npm_execpath, 'run', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: {...process.env, PORTFOLIO_GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl},
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
const output = resolve(root, 'dist/client');
// GitHub Pages resolves /about/ and /work/project/ through directory indexes.
// Preserve the original files as well for existing .html links and RSC payloads.
async function addDirectoryIndexes(directory) {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await addDirectoryIndexes(path);
    else if (entry.name.endsWith('.html') && !['index.html', '404.html'].includes(entry.name)) {
      const route = path.slice(0, -5);
      await mkdir(route, {recursive: true});
      await copyFile(path, resolve(route, 'index.html'));
    }
  }
}
await addDirectoryIndexes(output);
await writeFile(resolve(output, '.nojekyll'), '');
console.log(`GitHub Pages files ready in dist/client for ${siteUrl}`);
