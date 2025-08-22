import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://vikingbrothersgym.github.io/vikingbrothersgym/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@clases': path.resolve(__dirname, './src/Clases'),
      '@noticias': path.resolve(__dirname, './src/Noticias'),
    }
  }
})
