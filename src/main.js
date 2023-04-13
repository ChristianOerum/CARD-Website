import { createApp } from 'vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import './assets/tailwind.css'

library.add(fas)

createApp(App)
.component("fa", FontAwesomeIcon)
.use(router)
.use(autoAnimatePlugin)
.mount('#app')
