import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages: always use /repo-name/ when BASE_PATH is set (CI sets it to repo name).
// User site (repo = username.github.io): set BASE_PATH empty in workflow to get base '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ? `/${process.env.BASE_PATH}/` : '/',
})
