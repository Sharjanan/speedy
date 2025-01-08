import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Necessary for DOM testing
    setupFiles: './vitest.setup.ts', // Global setup file
  },
});