import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-deploy-2/',
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts'],
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      exclude: [
        '**/*.d.ts',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'src/router/**',
        'src/config/**',
        'src/types/**',
        'src/main.tsx',
        'src/routes/about.tsx',
        'src/context/user-context.tsx'
      ],
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html'],
      reportOnFailure: true,
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
    setupFiles: ['./vitest.setup.ts'],
  },
})
