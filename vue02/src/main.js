import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import axios from 'axios';
import VueAixos from 'vue-axios'
import 'element-plus/dist/index.css'
const app=createApp(App)
// .use(store).use(router).mount('#app')
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueAixos,axios)
app.mount('#app')
