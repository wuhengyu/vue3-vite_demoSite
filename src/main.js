import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElIcons from '@element-plus/icons-vue'
import 'normalize.css/normalize.css'

const app = createApp(App);
for (const i in ElIcons) {
  app.component(i, ElIcons[i])
}

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

app.use(store);
app.use(router).mount('#app')
