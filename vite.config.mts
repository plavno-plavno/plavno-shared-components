import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'api': path.resolve(__dirname, 'src/api'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'core': path.resolve(__dirname, 'src/core'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'routing': path.resolve(__dirname, 'src/routing'),
      'store': path.resolve(__dirname, 'src/store'),
      'types': path.resolve(__dirname, 'src/types'),
      'utils': path.resolve(__dirname, 'src/utils')
    },
  },
  build: {
    sourcemap: false,
  }
});
