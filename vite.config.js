import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@lessons': path.resolve(import.meta.dirname, './src/constants/lessons'),
      '@noticias': path.resolve(import.meta.dirname, './src/Noticias'),
    }
  }
});