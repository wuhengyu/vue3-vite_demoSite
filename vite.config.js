import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Commponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
})
