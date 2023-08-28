import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
// import store from './store'
import * as ElIcons from '@element-plus/icons-vue'
import 'normalize.css/normalize.css'
import i18n from './i18n'

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

for (const i in ElIcons) {
  app.component(i, ElIcons[i])
}
app.use(store);
app.use(i18n);
app.use(router).mount('#app')
