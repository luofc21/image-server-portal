import { createApp } from 'vue'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
// import VueParticles from 'vue-particles'

const app = createApp(App)
app.use(router)
app.use(createPinia())
// app.use(VueParticles)
app.mount('#app')
