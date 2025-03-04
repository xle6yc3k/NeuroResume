import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import tailwindAnimate from 'tailwindcss-animate';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      plugins: [tailwindAnimate]
    })
  ],
})
