import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publié sur GitHub Pages sous /<dépôt>/ : toutes les URL partent de là.
export default defineConfig({
  base: '/majorelle/',
  plugins: [react()],
})
