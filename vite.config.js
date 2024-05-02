import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { imagetools } from 'vite-imagetools'

import { fileURLToPath, URL } from 'node:url'
export default defineConfig({  build: {
    chunkSizeWarningLimit: 5000 // Aumenta el límite a 600kB
  },
  base: `front-end/`,


  plugins: [
    vue(),
    svgLoader(),
    imagetools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))

    }
  },

})
