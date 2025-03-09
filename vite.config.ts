import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base:"/alessandropignati.github.io ",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    open: true, // apre automaticamente il browser all'avvio
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // genera sourcemaps per il debugging
  }
});
