import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

Vue.use(ElementUI)

export function createApp() {
  // 同步路由状态(route state)到 store
  const router = createRouter()
  // console.log(router)
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // 暴露 app, router 和 store。
  return { app, router, store }
}
