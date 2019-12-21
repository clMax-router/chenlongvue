// 路由配置文件只放路由信息
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/main/main.vue')
      },
      {
        path: 'social',
        name: 'social',
        component: () => import('@/views/main/Social.vue')
      },
      {
        path: 'position',
        name: 'position',
        component: () => import('@/views/main/Position')
      }
    ]

  },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }

  // 配置嵌套路由
  {
    // 配置login页面
    path: '/login',
    // 给login取名 命名路由
    // 导入login 页面需要展示的内容
    // 懒加载导入
    component: () => import('@/views/user/index'),

    // 配置子路由
    children: [
      { //配置登录
        path: '',
        name: 'login',
        component: () => import('@/views/user/login')
      },
      {
        path: '/reg',
        name: 'reg',
        component: () => import('@/views/user/Reg')
      },
      {
        path: '/social',
        name: 'social',
        component: () => import('@/views/main/Social')
      }
    ]
  }
  //   {
  //     // 配置login页面
  //     path: '/login',
  //     // 给login取名 命名路由
  //     name: 'login',
  //     // 导入login 页面需要展示的内容
  //     // 懒加载导入
  //     component: () => import('@/views/user/login')
  //   },{
  //     path:'/reg',
  //     name: 'reg',
  //     component: () => import('@/views/user/Reg')
  //   }
]

export default routes
