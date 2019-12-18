import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/config/router-config.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',// 使 url 的地址模式为历史模式显示 /user/login
  // hash /user/#/login
  base: process.env.BASE_URL,
  routes
})

export default router
