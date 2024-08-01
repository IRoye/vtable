/*
 * @Description: entrance
 * @Author: yuyi
 * @Date: 2024-07-30 23:09:56
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-01 23:48:22
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './styles/index.scss'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
