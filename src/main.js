import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-ui
// 引入element-ui css库
// 这是es6 的引入方法 如果没有返回值 就直接引入 则代表引入整个文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入element-ui的组件库
import elementUi from 'element-ui'

// vue的代表方法 设置vue的全局组将 以便于每次使用对应组件每次都能使用
//将element-ui的组件 引入到vue中 使其变成全局组件
Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
  router, // 将router的路由注册到vue实例中
  store, // 将vuex的配置注册到 vue实例 中
  render: h => h(App) // 将视图渲染到页面中
}).$mount('#app') // 将绑定
