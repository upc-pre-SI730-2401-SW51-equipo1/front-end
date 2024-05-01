import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  base: 'https://upc-pre-si730-2401-sw51-equipo1.github.io/front-end/',
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
