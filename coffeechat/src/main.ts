/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//naver Map
import {createNaverMap} from 'vue3-naver-maps'
import {createPinia} from "pinia";



const app = createApp(App)


registerPlugins(app)

app.use(createPinia)
app.use(createNaverMap, {
  clientId: "vgokz6lc4b", // Required
  category: "ncp", // Optional
  subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
}).mount('#app')
