import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'source-assets/yangtze-city-loop');
const manifest = JSON.parse(await readFile(resolve(source, 'manifest.json'), 'utf8'));
const gif = Buffer.concat(await Promise.all(manifest.parts.map(name => readFile(resolve(source, name)))));
if (gif.length !== manifest.bytes || createHash('sha256').update(gif).digest('hex') !== manifest.sha256) {
  throw new Error('The YANGTZE GIF source is incomplete or corrupted.');
}
await mkdir(resolve(root, 'public/assets'), {recursive:true});
await writeFile(resolve(root, 'public/assets/yangtze-city-loop.gif'), gif);
console.log('Restored original YANGTZE GIF (' + gif.length + ' bytes).');

const filmSource = resolve(root, 'source-assets/ejin-ncda-film');
const filmManifest = JSON.parse(await readFile(resolve(filmSource, 'manifest.json'), 'utf8'));
const film = Buffer.concat(await Promise.all(filmManifest.parts.map(name => readFile(resolve(filmSource, name)))));
if (film.length !== filmManifest.bytes || createHash('sha256').update(film).digest('hex') !== filmManifest.sha256) {
  throw new Error('The Ejin film source is incomplete or corrupted.');
}
await writeFile(resolve(root, 'public/assets/ejin-ncda-film.mp4'), film);
console.log('Restored Ejin film (' + film.length + ' bytes).');

const alleySource = resolve(root, 'source-assets/alleyway-illustration-loop');
const alleyManifest = JSON.parse(await readFile(resolve(alleySource, 'manifest.json'), 'utf8'));
const alley = Buffer.concat(await Promise.all(alleyManifest.parts.map(name => readFile(resolve(alleySource, name)))));
if (alley.length !== alleyManifest.bytes || createHash('sha256').update(alley).digest('hex') !== alleyManifest.sha256) {
  throw new Error('The Alleyway animation source is incomplete or corrupted.');
}
await writeFile(resolve(root, 'public/assets/alleyway-illustration-loop.webp'), alley);
console.log('Restored Alleyway animation (' + alley.length + ' bytes).');

const animalSource = resolve(root, 'source-assets/animal-farm-film');
const animalManifest = JSON.parse(await readFile(resolve(animalSource, 'manifest.json'), 'utf8'));
const animalFilm = Buffer.concat(await Promise.all(animalManifest.parts.map(name => readFile(resolve(animalSource, name)))));
if (animalFilm.length !== animalManifest.bytes || createHash('sha256').update(animalFilm).digest('hex') !== animalManifest.sha256) {
  throw new Error('The ANIMAL FARM film source is incomplete or corrupted.');
}
await mkdir(resolve(root, 'public/assets/animal-farm'), {recursive:true});
await writeFile(resolve(root, 'public/assets/animal-farm/film.mp4'), animalFilm);
console.log('Restored ANIMAL FARM film (' + animalFilm.length + ' bytes).');
