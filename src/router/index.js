import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    alias: ['/detail/login']
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('@/views/main/index')
  },
  {
    path:'/menu',
    component:()=>import('@/views/category/index')
  },
  {
    path:'/detail/:id',
    component:()=>import('@/views/detail/index')
  },
  {
    path:'/person',
    component:()=>import('@/views/person/index')
  },
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
