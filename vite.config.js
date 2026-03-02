import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Custom domain (shubhamtiwari.com.np): site is served at root, so base must be '/'.
// With base '/', the *.github.io/shubham.portfolio/ URL will not load assets correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
