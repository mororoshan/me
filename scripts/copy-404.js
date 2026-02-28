/**
 * Post-build: copy dist/index.html to dist/404.html for GitHub Pages SPA routing.
 * GitHub Pages serves 404.html for unknown paths; the SPA then handles the route.
 */
import { copyFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const indexHtml = join(distDir, 'index.html')
const notFoundHtml = join(distDir, '404.html')

if (!existsSync(indexHtml)) {
  console.error('scripts/copy-404.js: dist/index.html not found. Run the build first.')
  process.exit(1)
}

copyFileSync(indexHtml, notFoundHtml)
console.log('Copied dist/index.html → dist/404.html')
