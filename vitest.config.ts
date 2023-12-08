import { defineConfig } from 'vitest/config';
import path from 'path';

import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
    silent: false,
    coverage: {
      thresholds: {
        lines: 100,
        statements: 100,
        functions: 80,
        branches: 80,
      },
      exclude: [
        '**/*.d.ts',
        '**/node_modules/**',
        './out/**',
        '**/.next/**',
        '**/*.config.js',
        '**/*.config.ts',
        '**/coverage/**',
        '**/pages', // Pages are going to be tested using cypress
      ],
      include: [
        '**/*.{js,jsx,ts,tsx}',
      ],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
