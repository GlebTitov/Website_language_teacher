import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'iife', // Ключевое изменение - вместо ESM используем IIFE
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js'
      },
      external: ['vue'] // Исключаем Vue из сборки, т.к. используем CDN
    }
  },
  base: './' // Используем относительные пути
})