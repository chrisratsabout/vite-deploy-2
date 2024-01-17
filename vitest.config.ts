// import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
    //   root: fileURLToPath(new URL('./', import.meta.url)),
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
  }),
);