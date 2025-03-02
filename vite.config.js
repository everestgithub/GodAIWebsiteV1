import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173, // Ensure this matches your NGINX proxy_pass
    strictPort: true, 
    open: false,
    cors: true,
    allowedHosts: ['mygodai.app', 'www.mygodai.app'], // Allow your domain
  }
})
