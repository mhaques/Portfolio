import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Force Tailwind to use class-based dark mode by pointing explicitly to the config
    tailwindcss({ config: './tailwind.config.cjs' }),
  ],
})
