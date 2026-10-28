import { access, readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const output = join(root, 'media');
await mkdir(output, { recursive: true });
const manifest = {};
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'media') await walk(path); continue; }
    if (!/\.(png|jpe?g|webp)$/i.test(path)) continue;
    const data = await readFile(path);
    const meta = await sharp(data).metadata();
    if (!meta.width || !meta.height || data.length < 35000 || meta.pages > 1) continue;
    const id = basename(path).replace(/\.[^.]+$/, '') + '-' + createHash('sha256').update(data).digest('hex').slice(0, 10);
    const widths = [...new Set([480, 960, 1600, Math.min(2400, meta.width)].filter(w => w <= meta.width))].sort((a,b) => a-b);
    const variants = [];
    for (const width of widths) {
      const filename = `${id}-${width}.webp`;
      const exists = await access(join(output, filename)).then(() => true, () => false);
      if (!exists) await sharp(data).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(output, filename));
      variants.push({ src: `/media/${filename}`, width });
    }
    manifest['/' + relative(root, path)] = { width: meta.width, height: meta.height, variants };
  }
}
await walk(root);
await writeFile(new URL('../app/components/image-manifest.json', import.meta.url), JSON.stringify(manifest));
console.log(`Prepared responsive variants for ${Object.keys(manifest).length} images`);
