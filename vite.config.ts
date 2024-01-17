import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-deploy-2/',
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
