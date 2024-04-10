import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/dist/index.css'
// 全局样式
import './assets/main.scss'

// pinia的状态调试工�?
import Colada, { PiniaColadaPlugin } from 'colada-plugin';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 插件
const pinia = createPinia()
app.use(pinia)
pinia.use(PiniaColadaPlugin);
app.use(Colada);
app.use(router)
app.use(ElementPlus)

app.mount('#app')
