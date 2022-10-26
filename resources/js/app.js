import './bootstrap';
import '../css/app.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()


createApp(App)
.use(pinia)
.mount("#app")