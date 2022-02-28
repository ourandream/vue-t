import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import 'animate.css';
import App from './App.vue'
import { router } from './router';

const app = createApp(App).use(router)
app.mount('#app')