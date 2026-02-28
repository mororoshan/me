import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base must match shared/config basePath and GitHub Pages repo path
export default defineConfig({
  base: '/me/',
  plugins: [react(), tailwindcss()],
})
