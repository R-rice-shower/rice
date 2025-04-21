import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { register } from 'swiper/element/bundle';
register()

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
