// 路由配置文件只放路由信息
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  {
    // 配置login页面
    path: '/login',
    // 给login取名 命名路由
    name: 'login',
    // 导入login 页面需要展示的内容
    // 懒加载导入
    component: () => import('@/views/user/login')
  }
]

export default routes
