import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // 开启sourcemap
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001'
      }
    }
  },
  // 解析vue文件
  plugins: [vue(),
  // element处理相关插件
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })],
  resolve: {
    // 把地址转成绝对路径，防止运行出错，兼容性比较强
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@http': fileURLToPath(new URL('./src/http', import.meta.url)),
    }
  },
  css: {

  },
})
