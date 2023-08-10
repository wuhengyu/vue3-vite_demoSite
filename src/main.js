import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App);
for (const i in ElIcons) {
  app.component(i, ElIcons[i])
}

app.use(router).mount('#app')
