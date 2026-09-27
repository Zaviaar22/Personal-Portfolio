import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// The root path works for the GitHub Pages user site zaviaar22.github.io.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
});
