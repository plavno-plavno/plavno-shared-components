import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), dts()],
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
    lib: {
      entry: 'src/index.ts',
      name: 'SharedComponents',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        '@cloudflare/stream-react',
        '@hookform/resolvers',
        '@reduxjs/toolkit',
        '@types/d3-scale-chromatic',
        'antd',
        'axios',
        'date-fns',
        'moment',
        'normalize.css',
        'query-string',
        'react',
        'react-dom',
        'react-content-loader',
        'react-custom-scrollbars-2',
        'react-hook-form',
        'react-redux',
        'react-router',
        'react-router-dom',
        'redux',
        'yup',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
});
