import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: project site = /repo-name/; user site (repo username.github.io) = /
export default defineConfig({
  plugins: [react()],
  base:
    process.env.BASE_PATH && !process.env.BASE_PATH.includes('.github.io')
      ? `/${process.env.BASE_PATH}/`
      : '/',
})
