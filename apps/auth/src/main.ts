import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import 'uno.css'

import router  from './router'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')