import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages project site: https://illusioncoder7.github.io/shubham.portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/shubham.portfolio/',
})
