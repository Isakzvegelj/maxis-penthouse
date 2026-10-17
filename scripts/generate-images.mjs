import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const html=await fs.readFile(path.join(root,'index.html'),'utf8');
const images=[...new Set([...html.matchAll(/<img[^>]+src="(images\/[^"]+)"/g)].map(m=>m[1]))];
const maxis={};await fs.mkdir(path.join(root,'images/responsive'),{recursive:true});
for(const url of images){const source=path.join(root,url);const meta=await sharp(source).metadata();
 const widths=[...new Set([480,800,1200,1600,2000].map(w=>Math.min(w,meta.autoOrient.width)))].sort((a,b)=>a-b);
 // Hero variants derive from the existing large version for sharper high-DPR screens.
 const input=url==='images/hero.webp'?path.join(root,'images/hero-2000.webp'):source;
 const heroMeta=await sharp(input).metadata();const actual=url==='images/hero.webp'?[480,800,1200,1600,2000].filter(w=>w<=heroMeta.autoOrient.width):widths;
 maxis[url]=[];
 for(const width of actual){const dest='images/responsive/'+path.parse(url).name+'-'+width+'.webp';await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality:84,effort:5}).toFile(path.join(root,dest));maxis[url].push({width,url:dest});}
}
// Match the existing centered crop on tall phone screens without downloading
// the full landscape photograph just to discard both sides.
for (const width of [480, 800, 1200]) {
  await sharp(path.join(root, 'images/hero-2000.webp')).rotate()
    .resize(width, Math.round(width * 1.6), { fit: 'cover', position: 'centre' })
    .webp({ quality: 84, effort: 5 })
    .toFile(path.join(root, `images/responsive/hero-portrait-${width}.webp`));
}
console.log(`Generated variants for ${images.length} photographs.`);
