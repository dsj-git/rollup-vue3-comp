import { createApp } from 'vue'
import App from './App.vue'
import testPlugin from './index'

createApp(App).use(testPlugin).mount('#app')
