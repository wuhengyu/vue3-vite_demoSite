import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Commponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    imports: ['vue', 'vue-router', 'vuex', 'vue-i18n'],
    resolvers: [ElementPlusResolver()],
  }),
  Commponents({
    resolvers: [ElementPlusResolver()],
  })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

  // server: {
  //   port: 3000,
  //   history: {
  //     // 此处配置 history 模式需要
  //     type: 'html5'
  //   }
  // }
})
