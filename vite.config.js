import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Quando o nosso React chamar '/api', o Vite intercepta e manda para o FreeToGame
      '/api': {
        target: 'https://www.freetogame.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})