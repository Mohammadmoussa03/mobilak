import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['extinct-symmetrical-jayce.ngrok-free.dev'],
  },
  preview: {
    allowedHosts: ['extinct-symmetrical-jayce.ngrok-free.dev'],
  },
})
