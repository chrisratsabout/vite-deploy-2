/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-deploy-2/',
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
