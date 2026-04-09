/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import TDesign from 'tdesign-vue-next'
import routes from './routes'
import App from './App.vue'

// import tdesign style;
import 'tdesign-vue-next/es/style/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(TDesign)

app.mount('#app')
