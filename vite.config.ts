import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'CronExpressionInput',
      fileName: 'cron-expression-input'
    },
    commonjsOptions: { 
      transformMixedEsModules: true,
      requireReturnsDefault: 'auto'
    },
    target: "es2020",
    emptyOutDir: true,
    rollupOptions: {
      //external: ['cron-validator', 'cronstrue'],
      output: {
        globals: {
          'cron-validator': 'cronValidator',
          'cronstrue': 'cronstrue'
        },
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      }
    },
    minify: 'esbuild'
  }
}) 