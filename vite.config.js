import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/kiran_raj_profile/",
  build: {
    outDir: "docs"
  }
})
