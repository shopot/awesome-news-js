import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';

export const _resolve = (p: string) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@': _resolve('./src'),
    },
  },
});
