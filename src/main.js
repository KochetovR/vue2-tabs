import { createApp } from 'vue'
import App from './App.vue'
// import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import './assets/scss/index.scss'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// createApp(App).use(createVuestic()).use(ElementUI).mount('#app')
createApp(App).use(ElementUI).mount('#app')
