import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['src/main.js', '**/node_modules/**'],
    coverage: {
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/main.jsx'],
    },
    onConsoleLog(log, type) {
      console.log('log in test: ', log)
      if (log === 'message from third party library' && type === 'stdout') {
        return false
      }
    },
  },
})
