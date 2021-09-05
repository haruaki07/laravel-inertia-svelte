import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"
import { preprocess } from "./svelte.config"

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess
    }),
  ],
  root: "resources",
  base: `${ASSET_URL}/dist/`,
  build: {
    outDir: resolve(__dirname, 'public/dist'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: '/js/app.js'
    }
  },
  resolve: {
    alias: {
      "@": '/js'
    }
  },
  optimizeDeps: {
    include: [
      '@inertiajs/inertia',
      '@inertiajs/inertia-svelte',
    ]
  }
})
