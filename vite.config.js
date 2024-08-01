/*
 * @Description: 配置项
 * @Author: yuyi
 * @Date: 2024-07-30 23:09:56
 * @LastEditors: yuyi
 * @LastEditTime: 2024-07-30 23:43:23
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
})
