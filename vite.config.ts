import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import ImportMetaEnvPlugin from '@import-meta-env/unplugin'

export default defineConfig({
  plugins: [
    react(),
    ImportMetaEnvPlugin.vite({
      example: '.env.public',
    })
  ],
  build: {
    outDir: 'build'
  },
  server: {
    open: true
  },
  preview: {
    open: true
  }
})
