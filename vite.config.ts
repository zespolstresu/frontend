import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://spotus-backend.herokuapp.com/api',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', '')
      }
    }
  },
  // root: './src',
  build: {
    outDir: './dist'
  }
});
