import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  base: '/front-end/',
  plugins: [
    vue(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))

    }
  },
  assetsInclude: ['**/*.html'] // Agrega esta línea

})
