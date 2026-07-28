import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'project1.html'),
        project2: resolve(__dirname, 'project2.html'),
        project3: resolve(__dirname, 'project3.html'),
        consultation: resolve(__dirname, 'consultation.html'),
      },
    },
  },
});
