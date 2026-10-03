/* Écrit la page d'accueil et la 404 en HTML statique (après `vite build` et
   `vite build --ssr`), pour que le contenu et les balises meta existent sans
   JavaScript : robots, aperçus de liens, premier affichage. */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render, PAGES, brand } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const base = new URL(brand.site + '/').pathname

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

// Les polices du premier écran sont préchargées : le titre s'affiche
// directement dans sa police.
const preload = readdirSync(resolve(root, 'dist/assets'))
  .filter((f) => /-latin-(opsz|wght)-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="${base}assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const page of PAGES) {
  const full = `${page.title} | ${brand.name}`
  const canonical = `${brand.site}/`
  const home = page.url === '/'
  const head = [
    preload,
    `<title>${esc(full)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    home && `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${esc(full)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${brand.locale}" />`,
    `<meta property="og:site_name" content="${esc(brand.name)}" />`,
  ].filter(Boolean).join('\n    ')

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `  ${head}\n  </head>`)
    // data-route : le client ne reprend (hydrate) ce HTML que sur cette adresse.
    .replace('<div id="root"></div>', `<div id="root"${home ? ` data-route="${base}"` : ''}>${render(page.url)}</div>`)

  writeFileSync(resolve(root, 'dist', page.file), html)
  console.log(`  prerendered  ${page.file.padEnd(12)} ${(html.length / 1024).toFixed(1)} kB`)
}
