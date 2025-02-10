import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'CronExpressionInput',
      fileName: 'cron-expression-input'
    },
    rollupOptions: {
      external: ['cron-validator', 'cronstrue'],
      output: {
        globals: {
          'cron-validator': 'cronValidator',
          'cronstrue': 'cronstrue'
        }
      }
    }
  }
}) 