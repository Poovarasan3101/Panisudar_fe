import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://panisudar.onrender.com',
        changeOrigin: true,
      },
      '/media': {
        target: 'https://panisudar.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
