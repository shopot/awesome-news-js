import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export const _resolve = (p: string) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('./src'),
    },
  },
});
