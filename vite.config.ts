import { defineConfig } from 'vite'

import path from 'path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      emitCssInSsr: true,
    }),
  ],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@atoms': path.resolve(__dirname, '/src/components/atoms'),
      '@molecules': path.resolve(__dirname, '/src/components/molecules'),
    },
  },
})
